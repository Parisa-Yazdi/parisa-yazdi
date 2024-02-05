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
    <Card className=" mx-auto border-0 bg-[#e3e5e8] md:w-full ">
      <Image
        alt="Article Cover"
        className=" aspect-[6/12] h-[300px] w-full rounded-t-lg  object-cover"
        height={100}
        src={`${image}`}
        width={100}
      />
      <CardContent className=" w-full  space-y-1 p-3">
        {' '}
        <CardTitle className="line-clamp-2 text-lg font-semibold">{title}</CardTitle>{' '}
        <div className="mt-2 flex flex-col justify-start md:flex-row md:items-center md:justify-between">
          <p className="min-w-fit text-sm text-gray-500 dark:text-gray-400">{author}</p>{' '}
          <p className="min-w-fit text-sm text-gray-500 dark:text-gray-400">{date.toString()}</p>{' '}
        </div>
        <CardDescription className="overflow-hidden py-2  text-xs md:h-[137px]">
          {' '}
          {summary}
        </CardDescription>
        <div className=" flex justify-end space-x-1 ">
          <Button
            size="sm"
            className="w-1/3 border border-black bg-white p-0 text-sm text-black hover:border-white  hover:text-white"
          >
            <Link href={articleLink}>Read More</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;
