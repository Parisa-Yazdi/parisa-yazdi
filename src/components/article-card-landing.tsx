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
}

export async function ArticleCardLanding({
  title,
  image,
  summary,
  slug,
  author,
  date
}: ArticleCardProps) {
  return (
    <Card className="mx-auto  w-full overflow-hidden overflow-ellipsis border-0 bg-[#F5F7FA]">
      <div className="flex h-full flex-col md:flex-row">
        <Image
          alt="Video Cover"
          className=" aspect-square h-[200px] w-full object-cover md:h-[300px] md:w-5/12 md:rounded-l-lg  lg:w-8/12"
          height={100}
          src={`${image}`}
          width={100}
        />

        <CardContent className=" w-full space-y-1 p-3">
          <CardTitle className="line-clamp-2 text-lg font-semibold">{title}</CardTitle>{' '}
          {/* <div className="mt-2 flex  justify-between md:flex-row md:items-center"> */}
          {/* <p className="min-w-fit text-sm text-gray-500 dark:text-gray-400">{date.toString()}</p> */}
          {/* </div> */}
          <div className="flex h-5/6 flex-col justify-between ">
            <CardDescription className=" h-[118px] overflow-hidden truncate text-ellipsis py-2 text-sm md:h-[130px] xl:h-[199px]">
              {/* {summary} */}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo dolorum nostrum amet
              dolores voluptatibus beatae quis, possimus architecto odit tempora officia quo quam
              ducimus sunt itaque iure consectetur qui aperiam.
            </CardDescription>
            <div className=" flex justify-end   md:justify-end">
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
