import React from "react";
import Image from "next/image";
import Link from "next/link";

interface VideoCardProps {
  image: any;
  title: string;
  description: string;
  articleLink: string;
}

const VideoCard: React.FC<VideoCardProps> = ({
  image,
  title,
  description,
  articleLink,
}) => {
  //  overflow-hidden overflow-ellipsis -- title
  // overflow-hidden  -- above description div
  return (
    <div className="w-fit bg-slate-100 shadow-md hover:shadow-lg">
      <Image
        src={image}
        width={432}
        height={648}
        alt="Article Image"
        className="h-auto w-full "
      />
      <div className="mt-4 p-4 pl-5">
        <div className="flex flex-col gap-4">
          <div className="line-clamp-2 h-[60px] w-[307px] break-words font-['Cardo'] text-2xl  font-normal leading-[28.80px] text-cyan-900">
            {title}
          </div>
        </div>

        <div className="flex justify-between pt-3">
          <Link
            href={articleLink}
            className=" inline-block pb-3 font-light text-blue-500 underline underline-offset-8 antialiased"
          >
            Watch Video
          </Link>
          <Link
            href={articleLink}
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
