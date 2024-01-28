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

const ArticleCategories = async () => {
  let categories;
  try {
    // Fetch categories
    categories = await fetchCategories();

    // Check if categories and its data exist
    if (categories && categories.data) {
      // Iterate through each category
      categories.data.forEach((category: any) => {
        // Check if attributes exist within each category
        if (category.attributes) {
          // Check if sub_categories exist within each category
          if (category.attributes.sub_categories) {
            // console.log('Sub_categories found for category:', category.attributes.name);
            // console.log(category.attributes.sub_categories.data);
          } else {
            console.log('No sub_categories found for category:', category.attributes.name);
          }
        } else {
          console.log('Attributes not found for category:', category);
        }
      });
    } else {
      console.log('Categories data is undefined or null.');
    }

    // Rest of your code...
  } catch (error) {
    console.error('Error fetching categories:', error);
  }

  return (
    <>
      <main className="h-fit  overflow-hidden bg-[#c7cdd584] pb-24">
        <div className="mt-10 flex w-full justify-center">
          <h2 className="text-4xl font-semibold tracking-tighter sm:text-5xl">CATEGORIES</h2>
        </div>
        <div className="mx-auto mt-8 flex w-11/12 flex-wrap justify-center gap-6">
          {categories.data.map((category: any, i: number) => {
            const { id, name } = category.attributes;
            const subCategories = category.attributes.sub_categories.data;
            return <ArticleCategory key={i} categoryName={name} subCategories={subCategories} />;
          })}
        </div>
      </main>
    </>
  );
};

export default ArticleCategories;

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
