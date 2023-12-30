import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ArticleCardProps {
  image: any;
  title: string;
  description: string;
  articleLink: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  image,
  title,
  description,
  articleLink,
}) => {
  //  overflow-hidden overflow-ellipsis -- title
  // overflow-hidden  -- above description div
  return (
    <div className="bg-slate-100 shadow-md hover:shadow-lg ">
      <Image
        src={image}
        width={432}
        height={648}
        alt="Article Image"
        className="h-auto w-full"
      />
      <div className="mt-4 p-4 lg:pl-5">
        <div className="flex flex-col gap-4">
          <div className="line-clamp-2 h-[60px] w-[307px] break-words font-['Cardo'] text-2xl  font-normal leading-[28.80px] text-cyan-900">
            {title}
          </div>

          <div className="h-[95px] w-full font-['Inter']  text-base font-normal text-neutral-400 lg:w-[347px]">
            {description.length > 100 ? (
              <>
                {description.slice(0, 100)}...{" "}
                <Link
                  href={articleLink}
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

        <div className="flex justify-between pt-3">
          <Link
            href={articleLink}
            className=" inline-block pb-3 font-light text-blue-500 underline underline-offset-8 antialiased"
          >
            Read more
          </Link>
          <h3 className=" inline-block pb-3 font-light text-cyan-800 antialiased">
            Author - Date
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
