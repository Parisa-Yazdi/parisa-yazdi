/**
 * v0 by Vercel.
 * @see https://v0.dev/t/tTQTGBwBu5Q
 */
import { CardTitle, CardDescription, CardContent, Card } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import config from '@/config';
import Link from 'next/link';

interface VideoCardProps {
  image?: any;
  title: string;
  summary: string;
  slug: string;
  videoLink: string;
  date?: Date;
  className?: string;
}

export default function VideoCard({
  image,
  title,
  summary,
  slug,
  date,
  videoLink,
  className
}: VideoCardProps) {
  const hasBgColor = className?.includes('bg-');
  return (
    <Card
      className={`mx-auto  overflow-hidden overflow-ellipsis border-0  ${
        hasBgColor ? '' : 'bg-white'
      } ${className} md:w-full`}
    >
      {' '}
      {/* Adjust width here */}
      <div className="flex h-full  flex-col md:flex-row">
        <Image
          alt="Video Cover"
          className=" aspect-square h-[200px] w-full rounded-l-lg  border-white object-cover md:h-[300px] md:w-5/12 md:border-r-8  lg:w-8/12"
          height={156} // Adjusted height to make the card smaller
          // src="https://janefriedman.com/wp-content/uploads/2015/08/Publishing-101-thumbnail2.png"
          src={`${image}`}
          width={356}
        />

        <CardContent className=" w-full space-y-1 p-3">
          <CardTitle className="line-clamp-2 text-lg font-semibold">{title}</CardTitle>{' '}
          {/* <div className="mt-2 flex  justify-between md:flex-row md:items-center"> */}
          {/* <p className="min-w-fit text-sm text-gray-500 dark:text-gray-400">{date.toString()}</p> */}
          {/* </div> */}
          <div className="flex h-5/6 flex-col justify-between ">
            <CardDescription className=" h-[111px] overflow-hidden truncate text-ellipsis py-2 text-sm md:h-[130px] xl:h-[199px]">
              {summary}
            </CardDescription>
            <div className=" flex justify-end   md:justify-end">
              <Link href={videoLink}>
                <Button className=" bg-black text-base text-white hover:border hover:border-black hover:bg-white hover:text-black">
                  Watch Video
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
