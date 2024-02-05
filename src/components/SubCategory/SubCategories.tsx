import Image from 'next/image';

const SubCategories = ({ subCategoryName, slug, thumbnail }: any) => {
  return (
    <>
      <div className="w-full hover:drop-shadow-xl ">
        {/* <Link href={'/slug'}> */}
        <div className="w-full md:w-[240px]">
          <Image
            src={thumbnail}
            alt="Picture of the author"
            width={240}
            height={200}
            className="h-[150px] w-full rounded-t-md  object-cover md:h-[230px]"
          />
          <h2 className="box-border flex h-20 w-full items-center justify-center overflow-auto rounded-b-md bg-gray-600 p-3 text-center font-heebo font-semibold text-white antialiased md:text-lg">
            {subCategoryName}
          </h2>
          {/* </Link> */}
        </div>
      </div>
    </>
  );
};

export default SubCategories;
