import Image from 'next/image';
import Link from 'next/link';

interface LatestClassAndCourseCardProps {
  className?: string;
}

const LatestClassesCard = ({ className }: LatestClassAndCourseCardProps) => {
  return (
    <>
      <div
        className={`flex snap-start items-center rounded-md border-2 border-black hover:cursor-pointer hover:bg-white ${className}`}
      >
        <Image
          src="https://icons.veryicon.com/png/o/education-technology/online-education-background-management/my-class.png"
          width={80}
          height={80}
          alt="small icon"
          className="border-r border-black p-3 pb-1 pt-1 md:w-2/12 md:p-6"
        />

        <div className="flex w-full justify-between overflow-hidden">
          <div className="ml-3 flex h-[70px] w-7/12 flex-col justify-around overflow-ellipsis md:w-8/12 ">
            <h2 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-xl font-light antialiased md:text-2xl">
              Name of the first class class class clkass
            </h2>
          </div>
          <div className="mr-5 flex items-center ">
            <Link
              href={`/classes-and-courses/class/${className}`}
              className={` min-w-fit border-2 border-white bg-yellow-500 p-2  font-['Inter'] text-base text-white antialiased  hover:border-[#1B3764]  hover:bg-white hover:text-[#1B3764] md:text-lg`}
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestClassesCard;
