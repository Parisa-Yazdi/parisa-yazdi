import Image from 'next/image';
import Link from 'next/link';

const SubCategories = ({ subCategoryName, slug }: any) => {
  return (
    <>
      <div className="hover:drop-shadow-xl">
        {/* <Link href={'/slug'}> */}
        <Image
          src="https://picsum.photos/200/200"
          alt="Picture of the author"
          width={200}
          height={200}
          className="rounded-t-md"
        />
        <h2 className="flex h-20 w-[200px] items-center justify-center overflow-auto rounded-b-md bg-white p-3 text-center text-lg antialiased">
          {subCategoryName}
        </h2>
        {/* </Link> */}
      </div>
    </>
  );
};

export default SubCategories;
