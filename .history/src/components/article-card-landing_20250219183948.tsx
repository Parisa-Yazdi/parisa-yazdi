/**
 * v0 by Vercel.
 * @see https://v0.dev/t/tTQTGBwBu5Q
 */
import { CardTitle, CardDescription, CardContent, Card } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface ArticleCardProps {
  image: any;
  title: string;
  summary: string;
  slug: string;
  author: string;
  date: Date;
  actualHeight?: number;
  actualWidth?: number;
}

export async function ArticleCardLanding({
  title,
  image,
  summary,
  slug,
  author,
  date,
  actualHeight,
  actualWidth
}: ArticleCardProps) {
  return (
    <Card className="mx-auto  w-full overflow-hidden overflow-ellipsis border-0 bg-[#F5F7FA]">
      <div className="flex h-full flex-col  md:flex-row">
        <Image
          alt="Article Cover"
          className="aspect-[16/9] w-full object-cover md:aspect-[3/3] md:w-[400px] md:rounded-l-lg"
          height={500}
          src={`${image}`}
          width={500}
        />

        <CardContent className="w-full space-y-1   border-black p-3">
          <CardTitle className="line-clamp-1 text-lg font-semibold md:line-clamp-2">
            {title}
          </CardTitle>{' '}
          <div className="flex h-5/6 flex-col justify-between ">
            <CardDescription className=" h-[111px] overflow-hidden truncate text-ellipsis py-2 text-sm md:h-[130px] xl:h-[199px]">
              {summary}
            </CardDescription>
            <div className=" mt-1 flex justify-end   md:justify-end">
              <Link href={slug}>
                <Button className=" bg-black text-base text-white hover:border hover:border-black hover:bg-white hover:text-black">
                  Read More
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
