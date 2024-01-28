import { BookCard } from '@/components/book-card';
import Link from 'next/link';
import { fetchBooks } from '@/lib/utils';

export default async function LatestArticles() {
  const books = await fetchBooks();
  // console.log(books.data);

  return (
    <section className="relative w-full  bg-black  pb-8">
      <div className=" flex flex-col items-center justify-center ">
        <h2 className=" relative mt-7 p-5 pb-2 text-center text-4xl font-semibold tracking-tighter text-white  antialiased sm:text-5xl">
          Recent Books
        </h2>

        <div className="mt-5 flex w-fit flex-col items-center justify-between gap-8 md:w-3/5 lg:w-8/12 lg:flex-row">
          {books.data.map((book: any) => {
            const { id, bookCover, title, description, link } = book.attributes;
            return (
              <BookCard
                key={id}
                // {bookCover}
                img={bookCover.data.attributes.url}
                title={title}
                description={description}
                // key={book.id}
                bookLink={link}
                // price={book.price}
              />
            );
          })}
        </div>
        <div className="mt-10 flex justify-center">
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-white px-8 text-base font-medium text-black shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            href="#"
          >
            View all Books
          </Link>
        </div>
      </div>
    </section>
  );
}
