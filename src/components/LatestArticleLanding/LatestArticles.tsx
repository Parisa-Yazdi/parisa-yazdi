import ArticleCard from './Card';
import Button from '../Button/Button';
import { fetchArticles } from '@/lib/utils';

interface Article {
  attributes: {
    id: number;
    Title: string;
    Author: string;
    Summary: string;
    Date: Date;
    slug: string;
    Thumbnail: {
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
  const sortedArticles = articles.data.sort((a: Article, b: Article) => {
    return new Date(b.attributes.Date).getTime() - new Date(a.attributes.Date).getTime();
  });
  const latestArticles = sortedArticles.slice(0, 3);

  return (
    <section className="h-fit border-x-2 border-white bg-white pb-8">
      <div className=" flex flex-col items-center justify-center ">
        <h1 className="relative mt-7 w-[474px] p-5 pb-2 text-center font-['Cardo']  text-4xl font-normal leading-[54px] text-cyan-900 antialiased">
          Latest Articles
          <span className="absolute bottom-0 left-1/2 h-1 w-14 -translate-x-1/2  bg-yellow-500"></span>
        </h1>
        <div className="mt-12 flex w-fit flex-col items-center justify-between gap-8 md:w-3/5 lg:w-auto lg:flex-row">
          {latestArticles.map((article: Article) => {
            const { id, Thumbnail, Title, Summary, slug, Author, Date } = article.attributes;
            return (
              <ArticleCard
                key={id}
                image={Thumbnail.data.attributes.url}
                title={Title}
                summary={Summary}
                articleLink={`article/${slug}`}
                date={Date}
                author={Author}
              />
            );
          })}
        </div>
        <Button link="/articles">View all articles</Button>
      </div>
    </section>
  );
};

export default LatestArticles;
