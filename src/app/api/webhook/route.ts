import type { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import getRawBody from 'raw-body';
import { NextResponse } from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2023-10-16'
});

const endpointSecret = process.env.WEBHOOK_SECRET as string;

// Make sure to add this, otherwise you will get a stream.not.readable error
export const config = {
  api: {
    bodyParser: false
  }
};

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    console.log('req.headers', req.headers);
    if (req.method !== 'POST') return res.status(405).send('Only POST requests allowed');

    const sig: any = req.headers['stripe-signature'];
    const rawBody = await getRawBody(req);

    let event;

    try {
      event = stripe.webhooks.constructEvent(rawBody, sig, endpointSecret);
    } catch (err: any) {
      //   return NextResponse.json({ Webhook Error: ${err.message}});
      return NextResponse.json({ message: err.message }, { status: 200 });
    }

    console.log('event.type', JSON.stringify(event.type));

    if (event.type === 'checkout.session.completed') {
      const sessionWithLineItems = await stripe.checkout.sessions.retrieve(
        (event.data.object as any).id,
        {
          expand: ['line_items']
        }
      );
      const lineItems = sessionWithLineItems.line_items;

      if (!lineItems) return NextResponse.json('Internal Server Error', { status: 500 });

      try {
        // Save the data, change customer account info, etc
        console.log('Fullfill the order with custom logic');
        console.log('data', lineItems.data);
        console.log('customer email', (event.data.object as any).customer_details.email);
        console.log('created', (event.data.object as any).created);
      } catch (error) {
        console.log("Handling when you're unable to save an order");
      }
    }

    return NextResponse.json('OK', { status: 200 });
  } catch (error) {
    console.log('ERROR!!!!!!!!!!!!', error);
    return NextResponse.json('Internal Server Error', { status: 500 });
  }
}
