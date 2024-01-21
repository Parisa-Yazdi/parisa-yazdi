import Image from 'next/image';
import Link from 'next/link';

const SubCategories = ({ subCategoryName, slug }: any) => {
  return (
    <>
      <div className="w-full  hover:drop-shadow-xl">
        {/* <Link href={'/slug'}> */}
        <Image
          src="https://picsum.photos/200/200"
          alt="Picture of the author"
          width={200}
          height={200}
          className="w-full rounded-t-md "
        />
        <h2 className="flex h-20 w-full min-w-fit items-center justify-center overflow-auto rounded-b-md bg-white p-3 text-center antialiased   md:text-lg">
          {subCategoryName}
        </h2>
        {/* </Link> */}
      </div>
    </>
  );
};

export default SubCategories;
