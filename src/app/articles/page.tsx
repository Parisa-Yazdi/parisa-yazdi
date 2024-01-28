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
  console.log('articles', articles);

  return (
    <>
      <main className="h-fit  overflow-hidden pb-24">
        <div className="mt-5 flex w-full justify-center">
          <h2 className="text-4xl font-semibold tracking-tighter sm:text-5xl">ARTICLES</h2>
        </div>
        <div className="mx-auto mt-8 flex w-11/12 flex-wrap justify-center gap-6">
          {/* {articles.data && */}
          {articles &&
            articles.attributes &&
            articles.attributes.articles &&
            articles.attributes.articles.data &&
            articles.data &&
            articles.data.map((article: Article, i: number) => {
              const { id, thumbnail, title, summary, slug, author, date } = article.attributes;
              return (
                <ArticleCard
                  key={i}
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
