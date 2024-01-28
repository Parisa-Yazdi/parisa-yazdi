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
    <Card className="mx-auto border-0 bg-[#e3e5e8] md:w-3/12 ">
      {' '}
      {/* Adjust width here */}
      {/* <div className="flex h-1/2"> */}
      <Image
        alt="Article Cover"
        className=" aspect-[6/12] h-[300px] w-full rounded-t-lg  object-cover"
        height={100} // Adjusted height to make the card smaller
        src={`${config.api}${image}`}
        width={100} // Adjusted width to make the card smaller
      />
      <CardContent className=" w-full  space-y-1 p-3">
        {' '}
        {/* Adjust padding and space between elements here */}
        <CardTitle className="line-clamp-2 text-lg font-semibold">{title}</CardTitle>{' '}
        {/* Adjust font size here */}
        <div className="mt-2 flex flex-col justify-start md:flex-row md:items-center md:justify-between">
          <p className="min-w-fit text-sm text-gray-500 dark:text-gray-400">{author}</p>{' '}
          <p className="min-w-fit text-sm text-gray-500 dark:text-gray-400">{date.toString()}</p>{' '}
        </div>
        {/* Adjust font size here */}
        <CardDescription className="h-[120px] py-4 text-xs">
          {' '}
          {/* Adjust padding and font size here */}
          {summary}
        </CardDescription>
        <br className="hidden md:block" />
        <div className="flex justify-between space-x-1 ">
          {' '}
          {/* Adjust space between buttons here */}
          <Button
            size="sm"
            className="w-full border border-black bg-white p-0 text-sm text-black hover:border-white  hover:text-white"
          >
            <Link href={articleLink}>Read More</Link>
          </Button>{' '}
          {/* Adjust font size here */}
        </div>
      </CardContent>
      {/* </div> */}
    </Card>
  );
};

export default ArticleCard;
