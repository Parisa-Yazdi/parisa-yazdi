// import ArticleCard from './Card';
// import Button from '@/components/Button/Button';
import { fetchArticles, fetchCategories } from '@/lib/utils';
import DropDown from '@/components/Articles/ArticlesDropDown/DropDown';
import { Button } from '@/components/ui/button';
import { ArticleCardLanding } from '@/components/article-card-landing';

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

const LatestArticles = async () => {
  const articles = await fetchArticles();
  const categories = await fetchCategories();
  // console.log(categories.data);

  const articleTitles = articles.data.map((article: Article) => article.attributes.title);

  const sortedArticles = articles.data.sort((a: Article, b: Article) => {
    return new Date(b.attributes.date).getTime() - new Date(a.attributes.date).getTime();
  });
  const latestArticles = sortedArticles.slice(0, 4);
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
        <div className="mx-4 mt-10 grid grid-cols-1 gap-6 md:mx-auto md:w-full md:grid-cols-1">
          <ArticleCardLanding
            img={
              'https://janefriedman.com/wp-content/uploads/2024/01/chandler_avoid_random_content-blogpost.png'
            }
          />
          <ArticleCardLanding
            img={
              'https://janefriedman.com/wp-content/uploads/2024/01/goldmacher_writing_retreat-blogpost.png'
            }
          />
          <ArticleCardLanding
            img={
              'https://janefriedman.com/wp-content/uploads/2024/01/seideman_grim_reader-blogpost.png'
            }
          />
          {/* <ArticleCardLanding
            img={
              'https://janefriedman.com/wp-content/uploads/2023/12/glogovac_podcasts_media_kit-blogpost.png'
            }
          /> */}

          {/* <ArticleCardLanding />
          <ArticleCardLanding /> */}
        </div>
        <div className=" flex w-full  justify-center ">
          <Button className=" mt-10  bg-white text-base text-black">View all Articles</Button>
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
