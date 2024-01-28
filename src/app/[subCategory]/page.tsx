import { fetchCategories, fetchSubCategory } from '@/lib/utils';
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

const SubCategory = async ({ params }: any) => {
  const subCategories = await fetchCategories();

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
      {/* <main className="h-fit  overflow-hidden bg-[#e0ebfe] pb-24">
        <h1 className="relative   p-5 pb-2 text-center font-['Cardo'] text-4xl font-light leading-[55px] text-[#014444]">
          ARTICLES
          <span className="absolute bottom-0 left-1/2 h-1 w-[4%] -translate-x-1/2  bg-yellow-500"></span>
        </h1>
        <div className="mx-auto mt-8 flex w-11/12 flex-wrap justify-center gap-6">
          {categories.data.map((category: any, i: number) => {
            const { id, name } = category.attributes;
            const subCategories = category.attributes.sub_categories.data;
            // console.log('category: ', category, 'subCategories', subCategories);
            return <ArticleCategory key={i} categoryName={name} subCategories={subCategories} />;
          })}
        </div>
      </main> */}
    </>
  );
};

export default SubCategory;
