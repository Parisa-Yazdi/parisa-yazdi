'use client';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useEmailForm } from '@/lib/useEmailForm';
import { fetchSocialMedias } from '@/lib/utils';

export default function ContactPage() {
  const [isSent, setIsSent] = useState(false);
  const handleSuccess = () => {
    setIsSent(true);
    // set it to false after 3 seconds
    setTimeout(() => {
      setIsSent(false);
    }, 3000);
  };
  // const socialMedias = await fetchSocialMedias();

  const { form, sendEmail } = useEmailForm(handleSuccess);
  return (
    <div className="relative flex min-h-full flex-col items-center justify-center   dark:bg-gray-900">
      <div className="w-full max-w-md rounded-lg border bg-white px-8 py-6 shadow-md dark:bg-gray-800">
        <h2 className="text-center text-3xl font-bold text-gray-800 dark:text-white">Contact</h2>
        <p className="mt-1 text-center text-gray-600 dark:text-gray-400">
          Fill out the form below and Parisa will get back to you
        </p>
        <form ref={form} method="POST" onSubmit={sendEmail}>
          <div className="mt-4 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="user_name" placeholder="Enter your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Enter your email" name="user_email" type="email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                className="min-h-[100px]"
                id="message"
                name="message"
                placeholder="Enter your message"
              />
            </div>
            {isSent && (
              <p className="mx-auto items-center justify-center text-base text-green-500">
                Your message has been sent
              </p>
            )}
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </div>
        </form>
      </div>

      <div className="mt-5 flex gap-3">
        <div className="flex flex-col items-center justify-center space-y-2">
          <Link
            className="rounded-sm bg-[#bb0000] text-white"
            href={'https://www.youtube.com/@ParisaYazdi'}
          >
            <YoutubeIcon className="youtube h-10 w-10 p-2" />
            {/* <span className="text-sm font-medium">Youtube</span> */}
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center space-y-2">
          <Link
            className="rounded-sm bg-[#dd4b39] text-white"
            href={'https://www.instagram.com/parisayazdi_/'}
          >
            <InstagramIcon className="instagram h-10 w-10 p-2" />
            {/* <span className="text-sm font-medium">Instagram</span> */}
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center space-y-2">
          <Link
            className="rounded-sm bg-[#3b5998] text-white"
            href={'https://m.facebook.com/parisayazdi/'}
          >
            <FacebookIcon className="facebook h-10 w-10 p-2" />
            {/* <span className="text-sm font-medium">Facebook</span> */}
          </Link>
        </div>
      </div>
      <div>
        <p className="mt-4 text-center text-gray-500 dark:text-gray-400">
          Or email me directly at{' '}
          <a href="mailto:parisa@parisayazdi.com" className="text-blue-500 hover:text-blue-700">
            parisa@parisayazdi.com
          </a>
        </p>
      </div>
    </div>
  );
}

function TwitterIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function InstagramIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function FacebookIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function CloudIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  );
}

function YoutubeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}
