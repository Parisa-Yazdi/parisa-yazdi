/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/4KkvkZIykT2
 */
import { CardTitle, CardDescription, Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface ClassCardProps {
  name: string;
  description: string;
  link: string;
  slug: string;
  thumbnail?: string;
}

export function ClassCard({ name, description, link, slug, thumbnail }: ClassCardProps) {
  return (
    <Card className="flex w-full flex-col gap-4 p-4 md:flex-row">
      <div className="w-full md:w-1/3">
        <img
          alt="Class Thumbnail"
          className="h-60 w-full rounded-lg object-cover"
          height="200"
          src={thumbnail}
          //   src="https://janefriedman.com/wp-content/uploads/2015/08/Publishing-101-thumbnail2.png"
          style={{
            aspectRatio: '200/200',
            objectFit: 'cover'
          }}
          width="200"
        />
      </div>
      <div className="flex w-full flex-col justify-between md:w-2/3">
        <div>
          <CardTitle className="text-xl font-bold">{name}</CardTitle>

          {description && (
            <CardDescription className="text-sm text-gray-500 dark:text-gray-400 ">
              {description.length > 620 ? `${description.slice(0, 620)}...` : description}
            </CardDescription>
          )}

          {/* <p className="mt-2 text-sm">Instructor: {instructor}</p> */}
        </div>
        <Link href={`/classes-and-courses/class/${slug}`} className="mt-4 self-end md:self-end">
          <Button variant="link">Learn more</Button>
        </Link>
      </div>
    </Card>
  );
}
