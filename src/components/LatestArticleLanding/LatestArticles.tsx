import ArticleCard from './Card';
import Button from '../Button/Button';
import { fetchArticles } from '@/lib/utils';

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
  const sortedArticles = articles.data.sort((a: Article, b: Article) => {
    return new Date(b.attributes.date).getTime() - new Date(a.attributes.date).getTime();
  });
  const latestArticles = sortedArticles.slice(0, 3);

  return (
    <section className="h-fit border-x-2  bg-white pb-8 ">
      <div className=" mx-auto flex w-fit flex-col items-center justify-center">
        <h1 className="relative mt-7 w-[474px] p-5 pb-2 text-center font-['Cardo']  text-4xl font-normal leading-[54px] text-[#014444] antialiased">
          Latest Articles
          <span className="absolute bottom-0 left-1/2 h-1 w-14 -translate-x-1/2  bg-yellow-500"></span>
        </h1>
        <div className="mx-auto mt-12 flex w-fit flex-col items-center justify-center gap-8 md:w-3/5 lg:w-auto lg:flex-row">
          {latestArticles.map((article: Article) => {
            const { id, thumbnail, title, summary, slug, author, date } = article.attributes;
            return (
              <ArticleCard
                key={id}
                image={thumbnail.data.attributes.url}
                title={title}
                summary={summary}
                articleLink={`article/${slug}`}
                date={date}
                author={author}
              />
            );
          })}
        </div>
        <Button link="/articles">View all articles</Button>
        or <br />
        drop down of all articles here
      </div>
    </section>
  );
};

export default LatestArticles;
