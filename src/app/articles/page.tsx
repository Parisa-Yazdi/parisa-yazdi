import ArticleCard from '@/components/Articles/ArticleCard';
import { fetchArticles } from '@/lib/utils';
import Sort from '@/components/Sort/Sort';

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

const Articles = async () => {
  const articles = await fetchArticles();

  return (
    <>
      <main className="h-fit bg-[#e0ebfe] pb-24">
        <h1 className="relative mb-10  p-5 pb-2 text-center font-['Cardo'] text-6xl font-light leading-[55px] text-[#1B3764]">
          Articles
          <span className="absolute bottom-0 left-1/2 h-1 w-1/3 -translate-x-1/2  bg-yellow-500"></span>
        </h1>
        <div className=" mx-auto mt-20 flex  w-11/12 flex-wrap justify-center gap-6">
          {/* <div className=" mx-auto  w-full border-2 border-red-500"><Sort /></div> */}
          {articles.data.map((article: Article) => {
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
      </main>
    </>
  );
};

export default Articles;
