import ArticleCard from './Card';
import Button from '../Button/Button';
import { fetchArticles } from '@/lib/utils';

const LatestArticles = async () => {
  const articles = await fetchArticles();
  const oneArticle = articles.data[0].attributes;
  const { Title, Author, Date, Summary, Thumbnail, slug } = oneArticle;

  return (
    <section className="h-fit border-x-2 border-white bg-white pb-8">
      <div className=" flex flex-col items-center justify-center ">
        <h1 className="relative mt-7 w-[474px] p-5 pb-2 text-center font-['Cardo']  text-4xl font-normal leading-[54px] text-cyan-900 antialiased">
          Latest Articles
          <span className="absolute bottom-0 left-1/2 h-1 w-14 -translate-x-1/2  bg-yellow-500"></span>
        </h1>
        <div className="mt-12 flex w-fit flex-col items-center justify-between gap-8 md:w-3/5 lg:w-auto lg:flex-row">
          <ArticleCard
            image={oneArticle.Thumbnail.data.attributes.url}
            title={Title}
            summary={Summary}
            articleLink={`article/${slug}`}
            author={Author}
            date={Date}
          />
        </div>
        <Button link="/articles">View all articles</Button>
      </div>
    </section>
  );
};

export default LatestArticles;
