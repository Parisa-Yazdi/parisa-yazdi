// import ArticleCard from './Card';
// import Button from '@/components/Button/Button';
import { fetchArticles, fetchCategories } from '@/lib/utils';
import DropDown from '@/components/Articles/ArticlesDropDown/DropDown';
import { Button } from '@/components/ui/button';
import VideoCard from '../VideoCard';

interface Article {
  attributes: {
    id: number;
    title: string;
    author: string;
    summary: string;
    date: Date;
    slug: string;
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
  const videos = await fetchArticles();

  const articleTitles = videos.data.map((article: Article) => article.attributes.title);

  const sortedVideos = videos.data.sort((a: Article, b: Article) => {
    return new Date(b.attributes.date).getTime() - new Date(a.attributes.date).getTime();
  });
  const latestVideos = sortedVideos.slice(0, 4);
  return (
    <section className="mx-auto h-fit   pb-8">
      <div className=" mx-auto flex flex-col items-center justify-center  sm:w-11/12  lg:w-8/12">
        <div className=" w-full justify-start">
          <h2 className="font-['Avenir Next'] ml-4 mt-10 text-3xl font-semibold tracking-tighter sm:text-5xl md:ml-0">
            Latest Videos
          </h2>
        </div>
        <div className="mx-4 mt-6 grid grid-cols-1 gap-8 md:mx-auto md:w-full">
          <VideoCard img="https://janefriedman.com/wp-content/uploads/2014/12/What-Editors-Do-Ginna.jpg" />
          <VideoCard img="https://janefriedman.com/wp-content/uploads/2015/08/Publishing-101-thumbnail2.png" />
        </div>
        <div className=" flex w-full justify-center">
          <Button className=" mt-10  bg-black text-base  text-white md:w-2/12">
            View all Videos
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
