import ArticleCard from '@/components/Articles/ArticleCard';
import React from 'react';
import { fetchSubCategory, fetchArticlesBySubcategory } from '@/lib/utils';

export default async function SubCategory({ params }: any) {
  const subCategories = await fetchSubCategory();

  // Function to convert 'sub-category-name' to 'Sub Category Name'
  const slugToCategoryName = (slug: string): string => {
    const words = slug.split('-');
    const formattedWords = words.map((word, index) => {
      // Capitalize all words except the middle ones if they are "of" or "and"
      if (
        index !== 0 &&
        index !== words.length - 1 &&
        (word.toLowerCase() === 'of' || word.toLowerCase() === 'and' || word.toLowerCase() === 'to')
      ) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    });

    // Join the words and replace "&" with "and"
    const result = formattedWords.join(' ').replace(/and/g, '&');
    return result;
  };

  // Get the subcategory that matches the slug
  const subCategory = subCategories.data?.find((subCategory: any) => {
    const categoryName = subCategory.attributes.name;

    const slugName = slugToCategoryName(params.subCategory.toLowerCase());
    return categoryName.includes(slugName);
  });

  const articles = await fetchArticlesBySubcategory(subCategory.attributes.name);

  return (
    <>
      <main className="mx-auto h-fit  w-9/12 overflow-hidden pb-24">
        <div className="mx-auto w-full items-center justify-center">
          <div className="mt-10 flex w-full justify-center">
            <h2 className="mb-3 flex justify-start p-5  pb-2 pl-1 pt-0 text-center   text-4xl  font-semibold  leading-[55px] tracking-tighter sm:text-5xl md:text-4xl ">
              {slugToCategoryName(params.subCategory)}
            </h2>
          </div>
        </div>
        <div className="mx-auto mt-8 grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ">
          {articles.data.map((article: any, index: number) => {
            const { id, thumbnail, title, summary, slug, author, date } = article.attributes;

            return (
              <div key={index} className="mb-5 w-full">
                <ArticleCard
                  image={thumbnail.data.attributes.url}
                  title={title}
                  summary={summary}
                  articleLink={`/article/${slug}`}
                  date={date}
                  author={author}
                />
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}
