import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import config from '@/config';

interface ArticleCardProps {
  image: any;
  title: string;
  summary: string;
  articleLink: string;
  author: string;
  date: Date;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  image,
  title,
  summary,
  articleLink,
  author,
  date
}) => {
  return (
    <div className="aspect-video w-11/12  bg-slate-100 shadow-md hover:shadow-lg">
      <Image
        src={`${config.api}${image}`}
        width={432}
        height={648}
        alt="Article Image"
        className="h-[326px] w-[410px] object-cover object-center"
        // h-full w-full - see screenshot
      />
      <div className="mt-4 p-4 lg:pl-5">
        <div className="flex flex-col gap-4">
          <div
            className={`line-clamp-2 h-[60px] w-[370px] break-words font-['Cardo'] text-2xl font-normal leading-[28.80px] text-cyan-900 ${
              title.length < 30 ? 'pt-1' : ''
            }`}
          >
            {title}
          </div>

          <div className="h-[95px] w-full font-['Inter']  text-lg font-normal text-neutral-400 lg:w-[360px]">
            {summary && summary.length > 150 ? (
              <>
                {summary.slice(0, 150)}...{' '}
                <Link href={articleLink} className="text-blue-500 hover:underline">
                  read more
                </Link>
              </>
            ) : (
              summary
            )}
          </div>
        </div>

        <div className="mt-8 flex justify-between pt-3">
          <h3 className=" inline-block pb-3 font-light text-cyan-800 antialiased">
            {author} - {date.toString()}
          </h3>
          <Link
            href={articleLink}
            className=" inline-block pb-3 font-light text-blue-500 underline underline-offset-8 antialiased"
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
