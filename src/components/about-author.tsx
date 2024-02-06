import { fetchAuthorSubCategories, parseUrl } from '@/lib/utils';
import SubCategories from '@/components/SubCategory/SubCategories';
import Link from 'next/link';

export async function AboutAuthor() {
  const subCategories = await fetchAuthorSubCategories();
  return (
    <main className="mx-auto sm:px-6 md:max-w-7xl md:px-4 md:py-6 lg:px-8">
      <section className="flex flex-col items-start gap-6 md:flex-row md:gap-12">
        <img
          alt="Author's Image"
          className="aspect-[4/5] w-full overflow-hidden rounded-lg border border-gray-200 object-cover dark:border-gray-800"
          height={500}
          src="https://www.womenshistory.org/sites/default/files/styles/main_image/public/images/2021-04/Toni-Morrison-Square.png"
          width={400}
        />
        <div className="flex flex-col gap-4">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold">Parisa Yazdi</h1>
            <p className="text-lg text-gray-500 dark:text-gray-400">Author and Writer</p>
          </div>
          <p className="text-lg leading-relaxed">
            John Doe is a renowned author and writer known for his captivating storytelling and
            unique writing style. His works have been published in numerous journals and magazines
            and have been translated into multiple languages. John's passion for writing is evident
            in his engaging narratives and compelling characters.
          </p>
          <p className="text-lg leading-relaxed">
            John Doe is a renowned author and writer known for his captivating storytelling and
            unique writing style. His works have been published in numerous journals and magazines
            and have been translated into multiple languages. John's passion for writing is evident
            in his engaging narratives and compelling characters.
          </p>
          <p className="text-lg leading-relaxed">
            John Doe is a renowned author and writer known for his captivating storytelling and
            unique writing style. His works have been published in numerous journals and magazines
            and have been translated into multiple languages. John's passion for writing is evident
            in his engaging narratives and compelling characters.
          </p>
        </div>
      </section>

      <section>
        <h2 className=" relative mb-5 mt-7 p-5 pb-2 text-center text-4xl font-semibold tracking-tighter text-black  antialiased sm:text-5xl">
          Personal Journals
        </h2>
        <div className="mx-auto grid w-fit  grid-cols-2 md:grid-cols-3">
          {subCategories.data.map((subCategory: any, index: number) => {
            const { name, thumbnail } = subCategory.attributes;

            return (
              <div key={index} className=" mb-5 w-full gap-5   p-1 md:mx-2 md:w-auto">
                <Link href={`/articles/personal-journals/${parseUrl(name)}`}>
                  <SubCategories
                    subCategoryName={name}
                    thumbnail={
                      (thumbnail.data && thumbnail.data.attributes.formats.large.url) || ''
                    }
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
