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
      <main className="h-fit  overflow-hidden bg-[#e0ebfe] pb-24">
        <h1 className="relative   p-5 pb-2 text-center font-['Cardo'] text-4xl font-light leading-[55px] text-[#014444]">
          ARTICLES
          <span className="absolute bottom-0 left-1/2 h-1 w-[4%] -translate-x-1/2  bg-yellow-500"></span>
        </h1>
        <div className="mx-auto mt-8 flex w-11/12 flex-wrap justify-center gap-6">
          {articles.data.map((article: Article, i: number) => {
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
