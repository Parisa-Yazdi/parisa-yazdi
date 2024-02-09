import { SingleBook } from '@/components/single-book';
import { fetchBookBySlug } from '@/lib/utils';

export default async function Book({ params }: any) {
  const book = await fetchBookBySlug(params.bookName);
  console.log('book', book.data[0]);

  const bookName = params.bookName
    .replace(/and/g, '&')
    .replace(/-/g, ' ')
    .replace(/\w\S*/g, function (txt: any) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });

  return (
    <>
      <main className="mx-auto mb-20  w-7/12 ">
        <SingleBook
          image={book.data[0].attributes.bookCover.data.attributes.url}
          title={bookName}
          author={book.data[0].attributes.author}
          summary={book.data[0].attributes.description}
          link={book.data[0].attributes.link}
        />
      </main>
    </>
  );
}
