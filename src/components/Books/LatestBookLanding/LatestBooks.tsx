import { BookCard } from '@/components/book-card';
import Link from 'next/link';
import { fetchBooks } from '@/lib/utils';

export default async function LatestArticles() {
  const books = await fetchBooks();

  return (
    <section className="relative w-full  bg-black  pb-8">
      <div className=" flex flex-col items-center justify-center ">
        <h2 className=" relative mt-7 p-5 pb-2 text-center text-4xl font-semibold tracking-tighter text-white  antialiased sm:text-5xl">
          Recent Books
        </h2>

        <div className="mt-5 flex w-fit flex-col items-center justify-between gap-8 md:w-3/5 lg:w-8/12 lg:flex-row">
          {books.data.map((book: any, i: number) => {
            const { id, bookCover, title, description, link, slug } = book.attributes;
            return (
              <BookCard
                key={id || i}
                // {bookCover}
                img={bookCover.data.attributes.url}
                title={title}
                description={description}
                // key={book.id}
                bookLink={link}
                // price={book.price}
                slug={slug}
              />
            );
          })}
        </div>
        <div className="mt-10 flex justify-center">
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-white px-8 text-base font-medium text-black shadow hover:border hover:border-white hover:bg-black hover:text-white"
            href="/books"
          >
            View all Books
          </Link>
        </div>
      </div>
    </section>
  );
}
