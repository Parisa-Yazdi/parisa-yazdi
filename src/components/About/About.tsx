import React from "react";
import Image from "next/image";
import Link from "next/link";

interface AboutProps {
  image: any;
  title: string;
  price: string;
  description: string;
  bookLink: string;
}

const AboutAuthor: React.FC<AboutProps> = ({
  image,
  title,
  description,
  bookLink,
  price,
}) => {
  return (
    <div className=" flex">
      <Image
        src={image}
        width={296}
        height={396}
        alt="Article Image"
        className="h-[396px] items-center lg:w-2/5"
      />

      <div className="flex w-full flex-col items-center  overflow-hidden bg-white md:flex-row">
        <div className="flex flex-col justify-between lg:pl-5">
          <div className="flex flex-col px-8">
            <div className="relative mb-5 w-fit self-center font-['Cardo'] text-3xl font-normal text-cyan-900 md:self-start">
              {title}
              <span className="absolute bottom-0 left-1/2 h-[.15rem] w-full -translate-x-1/2 bg-yellow-500"></span>
            </div>

            <div className=" w-full self-center font-['Inter'] text-base font-normal text-neutral-400 md:block">
              {description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAuthor;
