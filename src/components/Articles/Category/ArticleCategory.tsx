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
      <div className="flex w-full flex-col">
        <h1 className="relative mb-3 flex justify-start p-5 pb-2 pl-1 text-center font-['Cardo'] text-4xl font-light leading-[55px] text-[#014444]">
          {categoryName}
        </h1>
        <div className="flex flex-wrap">
          {subCategories.map((subCategory: any, index: number) => {
            const { name } = subCategory.attributes;
            const { id } = subCategory;
            return (
              <div key={index} className="mb-5 w-1/4 p-1">
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
