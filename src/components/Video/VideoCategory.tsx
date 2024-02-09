import Link from 'next/link';
import SubCategories from '../SubCategory/SubCategories';
import { parseUrl } from '@/lib/utils';

interface VideoCategoryProps {
  categoryName: string;
  subCategories: any;
}

export default async function VideoCategory({ categoryName, subCategories }: VideoCategoryProps) {
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
            const { name, thumbnail } = subCategory.attributes;

            return (
              <div key={index} className="mb-5 w-4/12 gap-5 p-1 md:mx-2 md:w-auto">
                <Link href={`/videos/${parseUrl(categoryName)}/${parseUrl(name)}`}>
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
