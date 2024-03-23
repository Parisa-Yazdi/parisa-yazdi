import Link from 'next/link';
import SubCategories from '../../SubCategory/SubCategories';
import { parseUrl } from '@/lib/utils';

interface ArticleCategoryProps {
  categoryName: string;
  subCategories: any;
}

async function ArticleCategory({ categoryName, subCategories }: ArticleCategoryProps) {
  const sortedSubCategories = subCategories.sort((a: any, b: any) => a.id - b.id);
  return (
    <>
      <div className="ml-16 flex w-full flex-col  md:w-10/12">
        <div className="mt-10">
          <h2 className="mb-3 flex justify-start p-5  pb-2 pl-1 pt-0 text-center   text-3xl  font-semibold  leading-[55px] tracking-tighter sm:text-5xl md:text-4xl ">
            {categoryName}
          </h2>
        </div>
        <div className="flex flex-wrap">
          {sortedSubCategories.map((subCategory: any, index: number) => {
            const { name, thumbnail } = subCategory.attributes;

            return (
              <div key={index} className="mb-5 w-6/12 gap-5 p-1 md:mx-2 md:w-auto">
                <Link href={`/articles/${parseUrl(categoryName)}/${parseUrl(name)}`}>
                  <SubCategories
                    subCategoryName={name}
                    thumbnail={thumbnail.data && thumbnail.data.attributes.url}
                  />
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
