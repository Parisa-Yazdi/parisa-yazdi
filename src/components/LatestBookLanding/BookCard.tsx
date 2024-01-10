<<<<<<< HEAD
import React from "react";
import Image from "next/image";
import Link from "next/link";
=======
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
>>>>>>> master

interface BookProps {
  image: any;
  title: string;
  price: string;
  description: string;
  bookLink: string;
}

<<<<<<< HEAD
const Book: React.FC<BookProps> = ({
  image,
  title,
  description,
  bookLink,
  price,
}) => {
=======
const Book: React.FC<BookProps> = ({ image, title, description, bookLink, price }) => {
>>>>>>> master
  return (
    <div className="overflow-hidden bg-white  shadow-md hover:shadow-lg lg:w-4/12 ">
      <Image
        src={image}
        width={296}
        height={396}
        alt="Article Image"
        className="h-[396px] w-full items-center"
      />
      <div className="mt-4 p-4 lg:pl-5">
        <div className="flex flex-col ">
          <div className="flex items-center justify-between">
            <div className="mb-2 line-clamp-2 h-[60px] w-3/4 break-words font-['Cardo'] text-2xl  font-normal leading-[28.80px] text-cyan-900">
              {title}
            </div>
            <div className="line-clamp-2 h-[60px]  break-words font-['Inter'] text-2xl font-semibold leading-[28.80px] text-amber-300">
              {price}
            </div>
          </div>

          <div className="h-[95px] w-full font-['Inter']  text-base font-normal text-neutral-400 ">
            {description.length > 50 ? (
              <>
<<<<<<< HEAD
                {description.slice(0, 50)}...{" "}
                <Link
                  href={`/book/${title}`}
                  className="text-blue-500 hover:underline"
                >
=======
                {description.slice(0, 50)}...{' '}
                <Link href={`/book/${title}`} className="text-blue-500 hover:underline">
>>>>>>> master
                  read more
                </Link>
              </>
            ) : (
              description
            )}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Link
            href={`/book/${title
              .toLowerCase()
<<<<<<< HEAD
              .replace(/&/g, "and")
              .replace(/ /g, "-")
              .replace(/'/g, "")
              .replace(/,/g, "")}`}
=======
              .replace(/&/g, 'and')
              .replace(/ /g, '-')
              .replace(/'/g, '')
              .replace(/,/g, '')}`}
>>>>>>> master
            className=" inline-block  font-light text-blue-500 underline underline-offset-8 antialiased"
          >
            Read more
          </Link>
          <Link
<<<<<<< HEAD
            href={bookLink}
=======
            href="https://buy.stripe.com/test_3csaGk4aM14t3K03cc"
>>>>>>> master
            className="rounded-sm border border-yellow-500 bg-yellow-700 p-2  font-['Inter'] text-base text-white antialiased hover:border-[#1B3764] hover:bg-white hover:text-[#1B3764]"
          >
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Book;
