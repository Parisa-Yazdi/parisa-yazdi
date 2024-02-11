import { fetchAuthorSubCategories, parseUrl } from '@/lib/utils';
import SubCategories from '@/components/SubCategory/SubCategories';
import Link from 'next/link';
import { fetchAuthor } from '@/lib/utils';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Image from 'next/image';

export async function AboutAuthor() {
  const subCategories = await fetchAuthorSubCategories();
  const author = await fetchAuthor();

  return (
    <main className="mx-auto sm:px-6 md:max-w-7xl md:px-4 md:py-6 lg:px-8">
      <section className="flex flex-col items-start gap-6 md:flex-row md:gap-12">
        <Image
          alt="Author's Image"
          className="aspect-[4/5] w-full overflow-hidden rounded-lg border border-gray-200 object-cover dark:border-gray-800"
          height={500}
          src={author.data[0].attributes.photo.data.attributes.url}
          width={400}
        />
        <div className="flex flex-col gap-4">
          <div className="space-y-1">
            <h1 className="text-4xl font-bold">Parisa Yazdi</h1>
            <p className="text-lg text-gray-500 dark:text-gray-400">Author and Writer</p>
          </div>
          <ReactMarkdown remarkPlugins={[remarkGfm]} className={'markdown'}>
            {author.data[0].attributes.about}
          </ReactMarkdown>
        </div>
      </section>

      <section>
        <h2 className=" relative mb-5 mt-7 p-5 pb-2 text-center text-4xl font-semibold tracking-tighter text-black  antialiased sm:text-5xl">
          Personal Journals
        </h2>
        <div className="mx-auto grid w-fit  grid-cols-2 md:grid-cols-4">
          {subCategories.data.map((subCategory: any, index: number) => {
            const { name, thumbnail } = subCategory.attributes;

            return (
              <div key={index} className=" mb-5 w-full gap-5   p-1 md:mx-2 md:w-auto">
                <Link href={`/articles/personal-journals/${parseUrl(name)}`}>
                  <SubCategories
                    subCategoryName={name}
                    thumbnail={thumbnail.data && thumbnail.data.attributes.url}
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
