import React from "react";
import Image from "next/image";
import Link from "next/link";

interface HeroBookProps {
  image: any;
  title: string;
  price: string;
  description: string;
  bookLink: string;
}

const HeroBook: React.FC<HeroBookProps> = ({
  image,
  title,
  description,
  bookLink,
  price,
}) => {
  return (
    <div className="flex w-full flex-col overflow-hidden bg-white shadow-md hover:shadow-xl md:flex-row">
      <Image
        src={image}
        width={296}
        height={396}
        alt="Article Image"
        className="h-[396px] items-center lg:w-2/5"
      />
      <div className="mt-4 flex flex-col justify-between p-4 lg:pl-5">
        <div className="flex flex-col ">
          <div className="flex justify-between">
            <div className="mb-2 line-clamp-2 h-[60px] w-3/4 break-words font-['Cardo'] text-2xl  font-normal leading-[28.80px] text-cyan-900">
              {title}
            </div>
            <div className="line-clamp-2 h-[60px]  break-words font-['Inter'] text-2xl font-semibold leading-[30.80px] text-amber-300">
              {price}
            </div>
          </div>

          <div className="hidden w-full  font-['Inter'] text-base font-normal text-neutral-400 md:block">
            {description.length > 650 ? (
              <>
                {description.slice(0, 650)}...{" "}
                <Link href={bookLink} className="text-blue-500 hover:underline">
                  read more
                </Link>
              </>
            ) : (
              description
            )}
          </div>
          <div className="w-full font-['Inter']  text-base font-normal text-neutral-400 md:hidden">
            {description.length > 200 ? (
              <>
                {description.slice(0, 200)}...{" "}
                <Link href={bookLink} className="text-blue-500 hover:underline">
                  read more
                </Link>
              </>
            ) : (
              description
            )}
          </div>
        </div>

        <div className="mt-8 flex justify-between">
          <Link
            href={bookLink}
            className=" inline-block  font-light text-cyan-900  antialiased"
          >
            Author - Date
          </Link>
          <Link
            href={bookLink}
            className="rounded-sm border border-yellow-500  bg-yellow-500 p-2  font-['Inter'] text-base text-white antialiased hover:border-[#1B3764] hover:bg-white  hover:text-[#1B3764]"
          >
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroBook;
