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
    <div className="mx-auto aspect-video w-10/12 bg-slate-100 shadow-md hover:shadow-lg lg:w-[310px]">
      <Image
        src={`${config.api}${image}`}
        width={432}
        height={648}
        alt="Article Image"
        className="h-[226px] w-[310px] object-cover object-center"
        // h-full w-full - see screenshot
      />
      <div className="mt-4 p-4 lg:pl-5">
        <div className="flex flex-col gap-4">
          <p
            className={`line-clamp-2 h-[60px] w-[300px] overflow-ellipsis break-words font-['Cardo'] text-2xl font-normal leading-[28.80px] text-cyan-900 ${
              title.length < 30 ? 'pt-1' : ''
            }`}
          >
            {title}
          </p>

          <div className="mx-auto h-[95px] w-full font-['Inter'] text-lg font-normal text-neutral-400 ">
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

        <div className="mt-12 flex justify-between pt-3">
          <h3 className="inline-block pb-3 font-light text-cyan-800 antialiased">
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
