/**
 * v0 by Vercel.
 * @see https://v0.dev/t/tTQTGBwBu5Q
 */
import { CardTitle, CardDescription, CardContent, Card } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import config from '@/config';

interface BookCardProps {
  title: string;
  description: string;
  img: string;
  bookLink: string;
}

export function BookCard({ title, img, description, bookLink }: BookCardProps) {
  return (
    <Card className="mx-auto max-w-xs border-0 shadow-md  md:w-3/4">
      <Link href={bookLink}>
        <Image
          alt="Book Cover"
          className="aspect-[8/12] h-full w-full rounded-t-lg object-cover hover:cursor-pointer"
          height={100}
          // src="https://janefriedman.com/wp-content/uploads/2015/08/Publishing-101-thumbnail2.png"
          src={`${img}`}
          width={100}
        />
      </Link>
      <CardContent className="space-y-1  p-3">
        {/* <Link href={bookLink}> */}{' '}
        <span className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>{' '}
        </span>
        <CardDescription className="py-2 text-xs">
          {' '}
          {description && description.length > 120 ? (
            <>
              {description.slice(0, 120)}...{' '}
              <Link href={''} className="text-xs text-blue-500 hover:underline">
                read more
              </Link>
            </>
          ) : (
            description
          )}
        </CardDescription>
      </CardContent>
      {/* </Link> */}
    </Card>
  );
}
