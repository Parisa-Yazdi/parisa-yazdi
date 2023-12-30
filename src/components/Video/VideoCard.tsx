import React from "react";
import Image from "next/image";
import Link from "next/link";

interface VideoCardProps {
  image: any;
  title: string;
  description: string;
  videoLink: string;
}

const VideoCard: React.FC<VideoCardProps> = ({
  image,
  title,
  description,
  videoLink,
}) => {
  //  overflow-hidden overflow-ellipsis -- title
  // overflow-hidden  -- above description div
  return (
    <div className=" bg-slate-100 shadow-md hover:shadow-lg md:flex md:w-7/12">
      <Image
        src={image}
        width={432}
        height={648}
        alt="Video Thumbnail"
        className="h-auto w-full md:w-5/12"
      />
      <div className="mt-4 p-4 md:w-full lg:pl-5">
        <div className="flex flex-col gap-4 md:w-full">
          <div className="line-clamp-2 h-[60px] w-[307px] break-words font-['Cardo'] text-2xl font-normal  leading-[28.80px] text-cyan-900 md:w-10/12">
            {title}
          </div>

          <div className="h-[95px]  w-full font-['Inter']  text-base font-normal text-neutral-400">
            {description.length > 150 ? (
              <>
                {description.slice(0, 150)}...{" "}
                <Link
                  href={videoLink}
                  className="text-blue-500 hover:underline"
                >
                  read more
                </Link>
              </>
            ) : (
              description
            )}
          </div>
        </div>

        <div className="mt-3 flex justify-between pt-3">
          <Link
            href={videoLink}
            className=" inline-block pb-3 font-light text-blue-500 underline underline-offset-8 antialiased"
          >
            Watch video
          </Link>

          <Link
            href={videoLink}
            className=" inline-block pb-3 font-light text-cyan-800 antialiased hover:underline"
          >
            read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
