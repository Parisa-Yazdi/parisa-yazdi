import { fetchVideoBySlug } from '@/lib/utils';
import Link from 'next/link';

export default async function VideoPage({ params }: any) {
  const video = await fetchVideoBySlug(params.slug);
  if (video.data.length === 0) return null;
  const { title, summary, link, date, featuredImage } = video.data[0].attributes;

  return (
    <main className="mx-auto flex w-8/12 flex-col items-center justify-center">
      <div>
        <div className="mt-10 flex w-full justify-center">
          <h2 className="font-heebo text-4xl font-semibold tracking-tighter sm:text-5xl">
            {title}
          </h2>
        </div>
      </div>

      <iframe
        width="560"
        height="315"
        src={link + ''}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        className="m-10 mb-0 rounded-md border-4 border-gray-800"
      ></iframe>

      <div className=" mb-5 mt-5 flex w-full flex-col justify-center gap-4 rounded  border bg-stone-100 p-5 md:w-7/12">
        <div className="flex  justify-between">
          <p className="text-lg font-medium tracking-tighter sm:text-xl">05-02-2024</p>
          <Link
            href={''}
            className="text-lg font-medium tracking-tighter text-blue-500 hover:underline  sm:text-xl"
          >
            Parisa Yazdi
          </Link>
        </div>
        <div className="mx-auto">
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Click here to watch on YouTube
          </Link>
        </div>
      </div>

      <div className="mb-10 mt-5 w-full rounded-md border bg-stone-100 p-5 font-['Cardo'] text-xl font-normal leading-[28.80px]">
        <h2 className="font-heebo font-extrabold">Description:</h2>
        <p className="font-heebo">{summary}</p>
      </div>
    </main>
  );
}
