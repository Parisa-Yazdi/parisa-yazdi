import SingleArticle from '@/components/SingleArticle/SingleArticle';
import { fetchArticleBySlug } from '@/lib/utils';

interface Params {
  slug: string;
}

const Article = async ({ params }: { params: Params }) => {
  const article = await fetchArticleBySlug(params.slug);
  const { Title, Author, Date, Content, FeaturedImage } = article.data[0].attributes;

  return (
    <>
      <SingleArticle
        title={Title}
        author={Author}
        date={Date}
        content={Content}
        featuredImage={FeaturedImage.data.attributes.url}
      />
    </>
  );
};

export default Article;
