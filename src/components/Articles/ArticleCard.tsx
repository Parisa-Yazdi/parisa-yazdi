import React from 'react';
import Image from 'next/image';
import { CardTitle, CardDescription, CardContent, Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import config from '@/config';

interface ArticleCardProps {
  image: any;
  title: string;
  summary: string;
  articleLink: string;
  date: Date;
  author: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  image,
  title,
  summary,
  articleLink,
  date,
  author
}) => {
  //  overflow-hidden overflow-ellipsis -- title

  // overflow-hidden  -- above summary div
  return (
    <Card className=" mx-auto w-full border-0  bg-white ">
      <Image
        alt="Article Cover"
        className=" aspect-[6/12] h-[300px] w-full rounded-t-lg  object-cover"
        height={156}
        src={`${image}`}
        width={336}
      />
      <CardContent className=" w-full  space-y-1 p-3">
        {' '}
        <CardTitle className="line-clamp-1 text-lg font-semibold">{title}</CardTitle>{' '}
        <div className="mt-2 flex flex-col justify-start md:flex-row md:items-center md:justify-between">
          <p className="min-w-fit text-sm text-gray-500 dark:text-gray-400">{author}</p>{' '}
          <p className="min-w-fit text-sm text-gray-500 dark:text-gray-400">{date.toString()}</p>{' '}
        </div>
        <CardDescription className="overflow-hidden py-2  text-xs md:h-[137px]">
          {' '}
          {summary}
        </CardDescription>
        <div className=" flex justify-end space-x-1 ">
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow hover:border hover:border-black hover:bg-white hover:text-black"
            href={articleLink}
          >
            Read More
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;
