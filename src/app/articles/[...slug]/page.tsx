import ArticleCard from '@/components/Articles/ArticleCard';
import React from 'react';
import { fetchArticles, fetchSubCategory, fetchArticlesBySubcategory } from '@/lib/utils';

export async function SubCategory({ params }: any) {
  const subCategories = await fetchSubCategory();
  console.log('SUBCATEGORIES: ', subCategories.data);

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
  const subCategory = subCategories.data.find((subCategory: any) => {
    const categoryName = subCategory.attributes.name;
    const slugName = slugToCategoryName(params.slug[1].toLowerCase());
    return categoryName.includes(slugName);
  });

  console.log('SUBCATEGORY: ', subCategory);

  return (
    <>
      <div className="justify-center' mx-auto w-8/12 items-center">
        <h1 className="relative mt-7 w-full p-5 pb-2 text-center font-['Cardo']  text-4xl font-normal leading-[54px] text-[#014444] antialiased">
          {slugToCategoryName(params.slug[1])}
          <span className="absolute bottom-0 left-1/2 h-1 w-14 -translate-x-1/2  bg-yellow-500"></span>
        </h1>
      </div>
      <div className="mx-auto mt-7 flex w-8/12 flex-wrap justify-evenly gap-2">
        {subCategory.attributes.articles.data.map((article: any, index: number) => {
          console.log('HERERERE: ', article);
          const { id, thumbnail, title, summary, slug, author, date } = article.attributes;
          return (
            <div key={index} className="mb-5">
              <ArticleCard
                image={thumbnail.data.attributes.url}
                title={title}
                summary={summary}
                articleLink={`article/${slug}`}
                date={date}
                author={author}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default SubCategory;
