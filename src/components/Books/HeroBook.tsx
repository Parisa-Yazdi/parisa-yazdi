import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';

interface HeroBookProps {
  image: any;
  title: string;
  price: string;
  description: string;
  bookLink: string;
  author: string;
}

export default function ({ image, title, description, bookLink, author }: HeroBookProps) {
  return (
    <div className="flex w-full flex-col overflow-hidden bg-white shadow-md hover:shadow-xl md:flex-row ">
      {/* className="mx-auto max-w-xs border-0 shadow-md  md:w-3/4"> */}
      <Image
        src={image}
        width={296}
        height={396}
        alt="Article Image"
        className="h-[396px] w-full items-center object-cover lg:w-2/5"
      />
      <div className=" flex  flex-col justify-between  border p-4">
        <div className="flex flex-col ">
          <div className=" mt-5 flex w-full flex-col justify-between md:flex-row md:items-center ">
            <h2 className="text-xl font-semibold tracking-tighter sm:text-xl">{title}</h2>
            <h3 className=" inline-block  pr-4 font-light  text-cyan-900 antialiased">{author}</h3>
          </div>

          <div className="mt-5 hidden w-full text-base font-normal text-neutral-400 md:block">
            {description.length > 570 ? (
              <>
                {description.slice(0, 570)}...{' '}
                <Link href={bookLink} className="text-blue-500 hover:underline">
                  read more
                </Link>
              </>
            ) : (
              description
            )}
          </div>
          <div className="mt-5 w-full font-['Inter'] text-base font-normal text-neutral-400 md:hidden">
            {description.length > 200 ? (
              <>
                {description.slice(0, 200)}...{' '}
                <Link href={bookLink} className="text-blue-500 hover:underline">
                  read more
                </Link>
              </>
            ) : (
              description
            )}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-end ">
          <Button
            // href={bookLink}
            className="border border-black bg-white text-base text-black antialiased"
          >
            {/* Buy Now - {price} */}
            Coming Soon
          </Button>
        </div>
      </div>
    </div>
  );
}
