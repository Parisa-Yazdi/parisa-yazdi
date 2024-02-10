import Image from 'next/image';
import Link from 'next/link';

interface bookProps {
  image: string;
  title: string;
  author: string;
  summary: string;
  link: string;
}

export default async function SingleBook({ image, title, author, summary, link }: bookProps) {
  return (
    <div className="m-4 mx-auto h-full w-full  overflow-hidden rounded-xl  bg-white object-contain  md:max-w-5xl">
      <div className="gap-10 md:grid md:grid-cols-2">
        <div className="md:flex-shrink-0">
          <Image
            alt="Book cover"
            className="mx-auto h-full w-9/12 object-cover md:h-full md:w-full md:object-cover"
            height={499}
            src={image}
            style={{
              aspectRatio: '320/580',
              objectFit: 'contain'
            }}
            width={348}
          />
        </div>
        <div className="relative h-fit  w-full border p-8 shadow-md md:mt-20 md:w-auto">
          <div className="text-xl font-semibold uppercase tracking-wide text-gray-500">{title}</div>
          <p className="mt-1 block text-base font-medium leading-tight text-black hover:underline">
            {author}
          </p>
          <p className="mt-2 text-gray-500">{summary}</p>

          <div className=" flex w-full justify-end">
            <Link
              href={link}
              className="mt-4 rounded bg-black px-4 py-2 font-bold text-white hover:bg-gray-700"
            >
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
