import ArticleCard from '@/components/Articles/ArticleCard';
import { fetchArticles, fetchCategories } from '@/lib/utils';
import ArticleCategory from '@/components/Articles/Category/ArticleCategory';

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

const Articles = async () => {
  const articles = await fetchArticles();

  return (
    <>
      <main className="mx-auto h-fit  w-9/12 overflow-hidden  pb-24">
        <div className="mt-5 flex w-full justify-start">
          <h2 className="text-4xl font-semibold tracking-tighter text-black sm:text-5xl">
            ARTICLES
          </h2>
        </div>
        <div className="mx-auto mt-8 grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ">
          {/* {articles.data && */}
          {articles.data.map((article: Article, i: number) => {
            const { id, thumbnail, title, summary, slug, author, date } = article.attributes;
            return (
              <ArticleCard
                key={id || i}
                image={thumbnail.data.attributes.url}
                title={title}
                summary={summary}
                articleLink={`/article/${slug}`}
                date={date}
                author={author}
              />
            );
          })}
        </div>
      </main>
    </>
  );
};

export default Articles;

{
  /* {articles.data.map((article: Article) => {
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
          })} */
}
