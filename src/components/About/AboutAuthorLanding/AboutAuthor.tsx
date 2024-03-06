import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { fetchAuthor } from '@/lib/utils';

interface AboutAuthorProps {
  image: string;
  about: string;
}

export default async function AboutAuthor() {
  const author = await fetchAuthor();

  return (
    <section className="h-fit bg-black pb-8">
      {/* author section */}
      <div className="flex  flex-col items-center justify-center ">
        <div className="flex w-11/12 flex-col items-center justify-evenly  md:flex-row md:gap-36">
          <div className="flex h-full w-fit flex-col items-center justify-center ">
            <Image
              src={author.data[0].attributes.photo.data.attributes.url}
              alt="Picture of the author"
              width={664}
              height={718}
              priority
              className="h-2/5 rounded-full pt-9"
            />
          </div>

          <div className="mt-3 h-fit w-full max-w-[567px] items-end justify-start text-lg font-normal leading-[34.20px] text-neutral-400 antialiased">
            {/* <h1 className="relative mb-5 mt-7 w-[474px] p-5 pb-2 pl-0 text-start font-['Cardo'] text-4xl font-normal leading-[54px] text-[#014444] antialiased md:text-5xl"> */}
            <div className="mb-5  w-full justify-start">
              <h2 className="font-['Avenir Next'] ml-3 mt-10 text-3xl  font-semibold tracking-tighter text-white sm:text-5xl">
                About Parisa
              </h2>
            </div>
            <div>
              <p className="m-3 text-justify text-lg font-normal leading-[34.20px] text-neutral-400 antialiased">
                {author.data[0].attributes.about.length > 620
                  ? `${author.data[0].attributes.about.slice(0, 620)}...`
                  : author.data[0].attributes.about}
              </p>
            </div>
            <div className="m-3 flex justify-center md:justify-end">
              <Link href="/about">
                <Button className=" mt-10  bg-white text-base text-black hover:border hover:border-white hover:bg-black hover:text-white">
                  Read More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
