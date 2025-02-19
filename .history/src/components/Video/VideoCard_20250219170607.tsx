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
          <div className="flex h-5/6 flex-col justify-around ">
            <CardDescription className=" h-[111px] overflow-hidden truncate text-ellipsis py-2 text-sm md:h-[130px] xl:h-[159px]">
              {summary && summary.length > 500 ? (
                <>
                  {summary.slice(0, 500)}...{' '}
                  <Link href={`/video/${slug}`} className=" text-blue-500 hover:underline">
                    read more
                  </Link>
                </>
              ) : (
                summary
              )}
            </CardDescription>
            <div className=" mt-1 flex justify-end  md:justify-end">
              <div className="flex flex-col items-center justify-center space-y-2">
                <Link
                  className="rounded-sm rounded-r-none bg-[#bb0000] text-white"
                  href={videoLink}
                >
                  <YoutubeIcon className="youtube h-10 w-10 p-2" />
                  {/* <span className="text-sm font-medium">Youtube</span> */}
                </Link>
              </div>
              <Link href={videoLink}>
                <Button className=" rounded-l-none bg-black text-base text-white hover:border hover:border-black hover:bg-white hover:text-black">
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

function YoutubeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}
