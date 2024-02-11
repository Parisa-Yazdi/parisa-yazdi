// import ArticleCard from './Card';
// import Button from '@/components/Button/Button';
import { fetchArticles, fetchCategories, fetchVideos } from '@/lib/utils';
import DropDown from '@/components/Articles/ArticlesDropDown/DropDown';
import { Button } from '@/components/ui/button';
import VideoCard from '../VideoCard';
import Link from 'next/link';

interface Video {
  id: number;
  attributes: {
    title: string;
    summary: string;
    date: Date;
    slug: string;
    link: string;
    thumbnail: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
}

export default async function LatestVideos() {
  const videos = await fetchVideos();

  const sortedVideos = videos.data.sort((a: Video, b: Video) => {
    return new Date(b.attributes.date).getTime() - new Date(a.attributes.date).getTime();
  });
  const latestVideos = sortedVideos.slice(0, 2);
  return (
    <section className="mx-auto h-fit   pb-8">
      <div className=" mx-auto flex flex-col items-center justify-center  sm:w-11/12  lg:w-8/12">
        <div className=" w-full justify-start">
          <h2 className="font-['Avenir Next'] ml-4 mt-10 text-3xl font-semibold tracking-tighter sm:text-5xl md:ml-0">
            Latest Videos
          </h2>
        </div>
        <div className="mx-4 mt-6 grid w-9/12 grid-cols-1 gap-8 md:mx-auto md:w-full">
          {latestVideos.map((video: Video, i: number) => {
            const { thumbnail, title, summary, slug, link, date } = video.attributes;
            return (
              <>
                <VideoCard
                  className="bg-[#e8eaed]"
                  key={i}
                  title={title}
                  image={thumbnail.data.attributes.url}
                  summary={summary}
                  slug={slug}
                  date={date}
                  videoLink={link}
                />
              </>
            );
          })}
        </div>
        <div className=" flex w-full justify-center">
          <Button className=" mt-10  bg-black text-base  text-white hover:border hover:border-black hover:bg-white hover:text-black md:w-2/12">
            <Link href="/videos">View all Videos</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

{
  /* {latestArticles.map((article: Article, i: number) => {
            const { id, thumbnail, title, summary, slug, author, date } = article.attributes;
            return (
              <> */
}
{
  /* </>
            );
          })} */
}
