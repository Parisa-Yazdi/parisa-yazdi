import HeroBook from '@/components/Books/HeroBook';
import { fetchBooks } from '@/lib/utils';

export default async function Books() {
  const books = await fetchBooks();

  const sortedBooks = books.data.sort((a: any, b: any) => {
    return new Date(a.attributes.date).getTime() - new Date(b.attributes.date).getTime();
  });
  const latestBook = sortedBooks.slice(0, 1);
  const moreBooks = sortedBooks.slice(1);

  return (
    <>
      <main className="h-fit  pb-24">
        <section className="flex flex-col justify-between gap-10">
          <div className="mx-auto flex w-8/12 flex-col flex-wrap items-center justify-start  gap-6 md:w-3/5 md:flex-row">
            <div className="mt-10">
              <h2 className=" text-4xl font-semibold tracking-tighter sm:text-5xl">Latest Book</h2>
            </div>
            {latestBook.map((book: any, i: number) => {
              const { id, bookCover, title, description, slug, author, date } = book.attributes;
              return (
                <HeroBook
                  key={id || i}
                  image={bookCover.data.attributes.url}
                  title={title}
                  author={author}
                  description={description}
                  bookLink={`/book/${slug}`}
                  price={'$99'}
                />
              );
            })}
          </div>
          <hr className="border-t-2" />
          <div className="mx-auto flex w-9/12 flex-col flex-wrap items-center  justify-start gap-6 md:w-7/12 md:flex-row">
            <div>
              <h2 className="mb-5 text-4xl font-semibold tracking-tighter sm:text-5xl">
                More Books
              </h2>
            </div>

            {moreBooks.map((book: any, i: number) => {
              const { id, bookCover, title, description, slug, author, date } = book.attributes;
              return (
                <HeroBook
                  key={i}
                  image={bookCover.data.attributes.url}
                  title={title}
                  author={author}
                  description={description}
                  bookLink={`/book/${slug}`}
                  price={'$99'}
                />
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}
