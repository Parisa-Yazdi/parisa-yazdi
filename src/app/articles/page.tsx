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
      <main className="h-fit bg-[#e0ebfe] pb-24 ">
        <h1 className="relative   p-5 pb-2 text-center font-['Cardo'] text-4xl font-light leading-[55px] text-[#014444]">
          ARTICLES
          <span className="absolute bottom-0 left-1/2 h-1 w-[4%] -translate-x-1/2  bg-yellow-500"></span>
        </h1>
        <div className="mx-auto flex  w-8/12 flex-wrap justify-center gap-6">
          {categories.data.map((category: any) => {
            const { id, name } = category.attributes;
            const subCategories = category.attributes.sub_categories.data;
            // console.log('category: ', category, 'subCategories', subCategories);
            return <ArticleCategory key={id} categoryName={name} subCategories={subCategories} />;
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
