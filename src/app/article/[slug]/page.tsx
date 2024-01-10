import SingleArticle from '@/components/SingleArticle/SingleArticle';
import { fetchArticleBySlug } from '@/lib/utils';

interface Params {
  slug: string;
}

const Article = async ({ params }: { params: Params }) => {
  const article = await fetchArticleBySlug(params.slug);
  if (article.data.length === 0) return null;
  const { title, author, date, content, featuredImage } = article.data[0].attributes;

  return (
    <>
      <SingleArticle
        title={title}
        author={author}
        date={date}
        content={content}
        featuredImage={featuredImage.data.attributes.url}
      />
    </>
  );
};

export default Article;
