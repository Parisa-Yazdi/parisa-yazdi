'use client';
import { useRef, useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function Newsletter() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isSent, setIsSent] = useState(false);

  const handleSuccess = () => {
    setIsSent(true);
    // set it to false after 3 seconds
    setTimeout(() => {
      setIsSent(false);
    }, 10000);
  };

  useEffect(() => {
    if (isSent) {
      // set it to false after 10 seconds
      const timer = setTimeout(() => {
        setIsSent(false);
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [isSent]);

  function UserFeedback() {
    // tell the user that they have subscribed
    return (
      <>
        <div>
          <p className="text-green-500 dark:text-green-400">Thanks for subscribing!</p>
        </div>
      </>
    );
  }

  const subscribeUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // this is where your mailchimp request is made
    const email = inputRef.current ? inputRef.current.value : '';
    await fetch('/api/subscribeUser', {
      body: JSON.stringify({
        email
      }),

      headers: {
        'Content-Type': 'application/json'
      },

      method: 'POST'
    });
    // empty the input field
    if (inputRef.current) {
      inputRef.current.value = '';
    }
    handleSuccess();
  };

  return (
    <section className="w-full bg-gray-100 py-12 dark:bg-gray-800 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Stay Updated</h2>
            <p className="min-w-fit  text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Subscribe for weekly exclusives & stay updated with the latest insights
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <form onSubmit={subscribeUser} className="flex space-x-2">
              <Input
                className="max-w-lg flex-1"
                placeholder="Enter your email"
                type="email"
                id="email-input"
                name="email"
                ref={inputRef}
                required
                autoCapitalize="off"
                autoCorrect="off"
              />
              <Button type="submit">Subscribe</Button>
            </form>
            {isSent && <UserFeedback />}
          </div>
        </div>
      </div>
    </section>
  );
}
