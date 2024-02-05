import { fetchVideoBySlug } from '@/lib/utils';

export default async function VideoPage({ params }: any) {
  const video = await fetchVideoBySlug(params.slug);
  if (video.data.length === 0) return null;
  const { title, summary, link, date, featuredImage } = video.data[0].attributes;

  return (
    <main className="mx-auto flex w-8/12 flex-col items-center justify-center">
      <div>
        <div className="mt-10 flex w-full justify-center">
          <h2 className="text-4xl font-semibold tracking-tighter sm:text-5xl">{title}</h2>
        </div>
        <div className="mt-5 w-full font-['Cardo'] text-xl font-normal leading-[28.80px]">
          {summary}
        </div>
      </div>

      <iframe
        width="560"
        height="315"
        src={link + ''}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        className="m-10 rounded-md border-4 border-gray-800"
      ></iframe>
    </main>
  );
}
