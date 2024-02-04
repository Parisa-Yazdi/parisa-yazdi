import Link from 'next/link';
import SubCategories from '../SubCategory/SubCategories';
import { parseUrl } from '@/lib/utils';

interface ArticleCategoryProps {
  categoryName: string;
  subCategories: any;
}

async function ArticleCategory({ categoryName, subCategories }: ArticleCategoryProps) {
  return (
    <>
      <div className="flex w-full flex-col md:w-8/12">
        <div className="mt-10">
          <h2 className="mb-3 flex justify-start p-5  pb-2 pl-1 pt-0 text-center   text-3xl  font-semibold  leading-[55px] tracking-tighter sm:text-5xl md:text-4xl ">
            {categoryName}
          </h2>
        </div>
        <div className="flex flex-wrap">
          {subCategories.map((subCategory: any, index: number) => {
            const { name } = subCategory.attributes;
            return (
              <div key={index} className="mb-5 w-4/12 p-1 md:w-1/4">
                <Link href={`/articles/${parseUrl(categoryName)}/${parseUrl(name)}`}>
                  <SubCategories subCategoryName={name} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ArticleCategory;