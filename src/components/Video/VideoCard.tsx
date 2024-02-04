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
  image: any;
  title: string;
  summary: string;
  slug: string;
  videoLink: string;
  date?: Date;
}

export default function VideoCard({
  image,
  title,
  summary,
  slug,
  date,
  videoLink
}: VideoCardProps) {
  return (
    <Card className="mx-auto  overflow-hidden overflow-ellipsis border-0 bg-[#F5F7FA] md:w-full">
      {' '}
      {/* Adjust width here */}
      <div className="flex h-1/2  flex-col md:flex-row">
        <Image
          alt="Video Cover"
          className=" aspect-square h-[200px] w-full rounded-l-lg object-cover md:h-[300px] md:w-5/12  lg:w-8/12"
          height={100} // Adjusted height to make the card smaller
          // src="https://janefriedman.com/wp-content/uploads/2015/08/Publishing-101-thumbnail2.png"
          src={`${image}`}
          width={100}
        />

        <CardContent className="w-full space-y-1  p-3">
          <CardTitle className="line-clamp-2 text-lg font-semibold">{title}</CardTitle>{' '}
          {/* <div className="mt-2 flex  justify-between md:flex-row md:items-center"> */}
          {/* <p className="min-w-fit text-sm text-gray-500 dark:text-gray-400">{date.toString()}</p> */}
          {/* </div> */}
          <div className="flex flex-col justify-between">
            <CardDescription className=" h-[118px] overflow-hidden truncate text-ellipsis py-4 text-sm md:h-[130px] xl:h-[199px]">
              {summary}
            </CardDescription>
            <div className=" flex justify-end space-x-1 md:justify-end">
              <Button
                size="sm"
                className="mt-5 w-1/3 border border-black  bg-white  p-0 text-sm text-black hover:border-white hover:text-white md:mr-3 md:w-1/4   xl:mt-0"
              >
                <Link href={`/video/${slug}`}>Read More</Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}