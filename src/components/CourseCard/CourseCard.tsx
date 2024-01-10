import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import config from '@/config';
import { FiExternalLink } from 'react-icons/fi';

interface CourseCardProps {
  image: any;
  title: string;
  description: string;
  courseLink: string;
  slug: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ image, title, description, courseLink, slug }) => {
  return (
    <div className="border shadow-md hover:shadow-lg md:flex md:w-7/12">
      <Image
        src={`${config.api}${image}`}
        width={432}
        height={648}
        alt="Video Thumbnail"
        className="h-[370px] w-[426px] md:w-5/12"
      />
      <div className=" mt-4 flex flex-col justify-between  p-4 md:w-full lg:pl-5">
        <div>
          <div className="border-red flex flex-col gap-4 pb-0 md:w-full">
            <div className="line-clamp-2 h-fit w-[307px] break-words font-['Cardo'] text-2xl font-normal  leading-[28.80px] text-cyan-900 md:w-10/12">
              {title}
              {/* March 23: From Anxious to Savvy: How Every Author Can Build a Lifetime Book Marketing
            Foundation with Jane Friedman */}
            </div>

            <div className="h-fit w-full font-['Inter'] text-base font-normal text-neutral-400">
              {description.length > 400 ? (
                <>
                  {description.slice(0, 400)}...{' '}
                  <Link href={`/video/${slug}`} className="text-blue-500 hover:underline">
                    read more
                  </Link>
                </>
              ) : (
                description
              )}
            </div>
          </div>
        </div>

        <div className="mt-5 flex items-end justify-center md:mt-0 md:justify-end">
          <Link
            href={courseLink}
            className=" inline-block rounded-md border bg-green-600  p-2 font-light text-white antialiased hover:bg-green-700"
          >
            Find out more and regiester <FiExternalLink className="mb-1 ml-1 inline-block" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
