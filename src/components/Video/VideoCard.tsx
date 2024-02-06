import { CardTitle, CardDescription, CardContent, Card } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import config from '@/config';
import Link from 'next/link';
import { FiExternalLink } from 'react-icons/fi';

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
      <div className="flex h-1/2  flex-col md:flex-row">
        <Image
          alt="Video Cover"
          className=" aspect-square h-[200px] w-full rounded-l-lg object-cover md:h-[300px] md:w-5/12  lg:w-8/12"
          height={100}
          src={`${image}`}
          width={100}
        />

        <CardContent className="w-full space-y-1  p-3">
          <CardTitle className="line-clamp-2 text-lg font-semibold">{title}</CardTitle>
          <div className="flex flex-col justify-between">
            <CardDescription className=" h-[118px] overflow-hidden truncate text-ellipsis py-4 text-sm md:h-[130px] xl:h-[199px]">
              {summary}
            </CardDescription>
            <div className=" flex justify-end space-x-1 md:justify-end">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow hover:border hover:border-black hover:bg-white hover:text-black"
                href={videoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch Video
                <FiExternalLink className="mb-1 ml-2 inline-block" />
              </Link>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
