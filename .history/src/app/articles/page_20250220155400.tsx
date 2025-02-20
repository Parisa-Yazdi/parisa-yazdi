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
      <main className="relative mx-auto h-full  w-full overflow-hidden  bg-[#000000e5] pb-24">
        <div className="mx-auto mt-5 flex w-9/12 justify-start ">
          <h2 className="text-4xl font-semibold tracking-tighter text-white sm:text-5xl">
            ARTICLES
          </h2>
        </div>
        <div className="mx-auto mt-12 grid w-9/12 grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-3 ">
          {/* {articles.data && */}
          {articles.data.map((article: Article, i: number) => {
            const { id, thumbnail, title, summary, slug, author, date } = article.attributes;
            return (
              <ArticleCard
                key={id || i}
                image={thumbnail.data.attributes.url}
                title={title}
                summary={summary}
                slug={`/article/${slug}`}
                date={date}
                author={author}
              />
            );
          })}
        </div>
        <div
          className="absolute bottom-0 h-[60px] w-full border-0"
          style={{
            background: 'linear-gradient(to top, #f3f4f6, #ffffff, #333333, #1a1a1a)'
          }}
        ></div>
      </main>
    </>
  );
};

export default Articles;
