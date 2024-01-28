import { SingleBook } from '@/components/single-book';

const page = ({
  params
}: {
  params: {
    bookName: string;
  };
}) => {
  const bookName = params.bookName
    .replace(/and/g, '&')
    .replace(/-/g, ' ')
    .replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });

  return (
    <>
      <main className="mx-auto mb-20  w-7/12 ">
        <SingleBook />
      </main>
    </>
  );
};

export default page;
