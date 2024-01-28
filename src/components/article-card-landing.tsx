/**
 * v0 by Vercel.
 * @see https://v0.dev/t/tTQTGBwBu5Q
 */
import { CardTitle, CardDescription, CardContent, Card } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function ArticleCardLanding({ img }: { img: string }) {
  return (
    <Card className="mx-auto  overflow-hidden overflow-ellipsis border-0 bg-[#F5F7FA] md:w-full">
      {' '}
      {/* Adjust width here */}
      <div className="flex h-1/2  flex-col md:flex-row">
        <Image
          alt="Video Cover"
          className=" aspect-square h-[200px] w-full object-cover md:h-[300px] md:w-5/12 md:rounded-l-lg  lg:w-8/12"
          height={100} // Adjusted height to make the card smaller
          // src="https://janefriedman.com/wp-content/uploads/2015/08/Publishing-101-thumbnail2.png"
          src={`${img}`}
          width={100}
        />

        <CardContent className="w-full space-y-1  p-3">
          {' '}
          {/* Adjust padding and space between elements here */}
          <CardTitle className="line-clamp-2 text-lg font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing consectetur elit.
          </CardTitle>{' '}
          {/* Adjust font size here */}
          <div className="mt-2 flex  justify-between md:flex-row md:items-center">
            <p className="min-w-fit text-sm text-gray-500 dark:text-gray-400">Parisa Yazdi</p>{' '}
            <p className="min-w-fit text-sm text-gray-500 dark:text-gray-400">2023 - 02 - 31</p>{' '}
          </div>
          {/* Adjust font size here */}
          <div className="flex flex-col justify-between">
            <CardDescription className=" h-[118px] overflow-hidden truncate text-ellipsis py-4 text-sm md:h-[130px] xl:h-full">
              {' '}
              {/* Adjust padding and font size here */}
              This is a brief description about the author. The author is an expert in the field and
              has written multiple best-selling books. This is a brief description about the author.
              This is a brief description about the author. The author is an expert in the field and
              has written multiple best-selling books. This is a brief description about the author.
              The author is an expert in the field and has written multiple best-selling books. This
              is a brief description about the author. This is a brief description about the author.
              This is a brief description about the author. This is a brief description about the
              author.d
            </CardDescription>
            <div className=" flex justify-end space-x-1 md:justify-end">
              {' '}
              {/* Adjust space between buttons here */}
              <Button
                size="sm"
                className="mt-5 w-1/3 border border-black  bg-white  p-0 text-sm text-black hover:border-white hover:text-white md:mr-3 md:w-1/4   xl:mt-0"
              >
                Read More
              </Button>{' '}
              {/* Adjust font size here */}
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
