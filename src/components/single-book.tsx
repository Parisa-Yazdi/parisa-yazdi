/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/QNlNvSV5EFe
 */
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function SingleBook() {
  return (
    <div className="m-4 mx-auto h-full max-w-5xl  overflow-hidden rounded-xl  bg-white object-contain  md:max-w-5xl">
      <div className="gap-10 md:grid md:grid-cols-2">
        <div className="md:flex-shrink-0">
          <img
            alt="Book cover"
            className="h-full w-full object-cover md:h-full md:w-full md:object-cover"
            height={499}
            src="https://m.media-amazon.com/images/I/71VwdUci1BL._SY522_.jpg"
            style={{
              aspectRatio: '320/580',
              objectFit: 'contain'
            }}
            width={348}
          />
        </div>
        <div className="relative mt-20 h-3/5 border  p-8 shadow-md">
          <div className="text-xl font-semibold uppercase tracking-wide text-gray-500">
            The Great Gatsby
          </div>
          <Link
            className="mt-1 block text-base font-medium leading-tight text-black hover:underline"
            href="#"
          >
            F. Scott Fitzgerald
          </Link>
          <p className="mt-2 text-gray-500">
            The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz
            Age on Long Island, near New York City, the novel depicts first-person narrator Nick
            Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to
            reunite with his former lover, Daisy Buchanan.
          </p>

          <div className="absolute bottom-10 right-10 flex w-full justify-end">
            <Button className="mt-4 rounded bg-black px-4 py-2 font-bold text-white hover:bg-gray-700">
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
