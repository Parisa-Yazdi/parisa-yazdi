import Image from 'next/image';

const SubCategories = ({ subCategoryName, slug, thumbnail }: any) => {
  return (
    <>
      <div className="w-full hover:drop-shadow-xl ">
        {/* <Link href={'/slug'}> */}
        <div className="md:w-[240px]">
          <Image
            src={thumbnail}
            alt="Picture of the author"
            width={240}
            height={200}
            className="h-[150px] w-[240px] rounded-t-md  object-cover md:h-[230px]"
          />
          <h2 className="box-border flex h-20 items-center  justify-center overflow-auto rounded-b-md bg-gray-600 p-3 text-center antialiased md:w-[240px] md:text-lg">
            {subCategoryName}
          </h2>
          {/* </Link> */}
        </div>
      </div>
    </>
  );
};

export default SubCategories;
