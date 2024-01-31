import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import config from '@/config';
import { FiExternalLink } from 'react-icons/fi';

interface VideoCardProps {
  image: any;
  title: string;
  description: string;
  videoLink: string;
  slug: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ image, title, description, videoLink, slug }) => {
  //  overflow-hidden overflow-ellipsis -- title
  // overflow-hidden  -- above description div
  return (
    <div className="mx-auto aspect-video w-10/12 bg-slate-100 shadow-md hover:shadow-lg lg:w-[310px]">
      <Image
        src={`${image}`}
        width={432}
        height={648}
        alt="Article Image"
        className="h-[326px]  w-[410px] object-cover object-center"
      />
      <div className="mt-4 p-4 pl-5">
        <div className="flex flex-col gap-4">
          {/* <div className="flex flex-col gap-4">
          <div
            className={`line-clamp-2 h-[60px] w-[370px] break-words font-['Cardo'] text-2xl font-normal leading-[28.80px] text-cyan-900 ${
              title.length < 30 ? 'pt-1' : ''
            }`}
          >
            {title}
          </div>
        </div> */}
          <p
            className={`line-clamp-2 h-[60px] w-[300px] overflow-ellipsis break-words font-['Cardo'] text-2xl font-normal leading-[28.80px] text-cyan-900 ${
              title.length < 30 ? 'pt-1' : ''
            }`}
          >
            {title}
          </p>
          <div className="mx-auto h-[95px] w-full font-['Inter'] text-lg font-normal text-neutral-400 ">
            {description && description.length > 150 ? (
              <>
                {description.slice(0, 150)}...{' '}
                <Link href={videoLink} className="text-blue-500 hover:underline">
                  read more
                </Link>
              </>
            ) : (
              description
            )}
          </div>
        </div>

        <div className="mt-12 flex justify-between pt-3">
          <Link
            href={videoLink}
            className="inline-block pb-3 font-light text-[#014444] underline underline-offset-8 antialiased"
          >
            Watch Video <FiExternalLink className="ml-1 inline-block" />
          </Link>
          <Link
            href={`/video/${slug}`}
            className=" inline-block pb-3 font-light text-yellow-500 underline underline-offset-8 antialiased"
          >
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
