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
  const sortedArticles = articles.data.sort((a: any, b: any) => {
    return new Date(b.attributes.createdAt).getTime() - new Date(a.attributes.createdAt).getTime();
  });
  return (
    <>
      <main className="mx-auto h-full w-full  overflow-hidden bg-[#000000e5] pb-24">
        <div className="mx-auto w-full items-center justify-center">
          <div className="mt-10 flex w-full justify-center">
            <h2 className="mb-3 flex justify-start p-5  pb-2 pl-1 pt-0 text-center text-4xl  font-semibold  leading-[55px]  tracking-tighter text-white sm:text-5xl md:text-4xl ">
              {slugToCategoryName(params.subCategory)}
            </h2>
          </div>
        </div>

        {articles.data.length === 0 ? (
          <div className="mx-auto flex h-[50vh] w-full items-center justify-center ">
            <h2 className="text-xl font-semibold text-gray-500">No articles found</h2>
          </div>
        ) : (
          sortedArticles.map((article: any, index: number) => {
            const { thumbnail, title, summary, slug, author, date } = article.attributes;

            return (
              <div className="mx-auto mt-8 grid  w-9/12 grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-3 ">
                <div key={index} className="mb-5 w-full">
                  <ArticleCard
                    image={thumbnail.data.attributes.url}
                    title={title}
                    summary={summary}
                    slug={`/article/${slug}`}
                    date={date}
                    author={author}
                  />
                </div>
              </div>
            );
          })
        )}
      </main>
    </>
  );
}
