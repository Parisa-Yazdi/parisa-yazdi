import ArticleCard from './Card';
// import Button from '@/components/Button/Button';
import { fetchArticles, fetchSubCategory } from '@/lib/utils';
import DropDown from '@/components/Articles/ArticlesDropDown/DropDown';
import { Button } from '@/components/ui/button';
import { ArticleCardLanding } from '@/components/article-card-landing';
import Link from 'next/link';

interface Article {
  attributes: {
    id: number;
    title: string;
    date: Date;
    author: string;
    summary: string;
    slug: string;
    content: string;
    thumbnail: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
}

const LatestArticles = async () => {
  const articles = await fetchArticles();
  const subCategories = await fetchSubCategory();

  const sortedArticles = articles.data.sort((a: Article, b: Article) => {
    return new Date(b.attributes.date).getTime() - new Date(a.attributes.date).getTime();
  });
  const latestArticles = sortedArticles.slice(0, 3);
  return (
    <section className="relative mx-auto h-fit bg-black pb-8 ">
      <div
        className="absolute top-0 h-[10px] w-full"
        style={{
          background:
            'linear-gradient(to top, black, #666 20%,#999  40%,  #ccc 60%, #eee 80%, white)'
        }}
      ></div>
      <div className=" mx-auto flex flex-col items-center justify-center  sm:w-11/12  lg:w-8/12">
        <div className="  w-full justify-start">
          <h2 className="font-['Avenir Next'] ml-4 mt-10 text-3xl font-semibold  tracking-tighter text-white sm:text-5xl md:ml-0">
            Latest Articles
          </h2>
        </div>
        <div className="border-red-5030 mx-4 mt-12 grid w-[40%] grid-cols-1 gap-6 border-2 md:mx-auto md:w-full md:grid-cols-1">
          {latestArticles.map((article: Article, i: number) => {
            const { id, thumbnail, title, summary, slug, author, date } = article.attributes;
            // console.log(article.attributes.thumbnail.data.attributes);
            return (
              <>
                <ArticleCardLanding
                  key={i}
                  title={title}
                  image={thumbnail.data.attributes.url}
                  summary={summary}
                  actualHeight={156}
                  actualWidth={336}
                  slug={`article/${slug + ''}`}
                  author={author}
                  date={date}
                />
              </>
            );
          })}
        </div>
        <div className="mt-10 flex w-10/12 flex-col items-center justify-center md:w-1/2">
          <DropDown subCategories={subCategories.data} />
          <Link href="/articles">
            <Button className=" mt-10  bg-white text-base text-black hover:border hover:border-white hover:bg-black hover:text-white">
              View all Articles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;

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
