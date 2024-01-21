import Image from 'next/image';
import Link from 'next/link';

interface LatestClassAndCourseCardProps {
  className?: string;
}

const LatestClassAndCourseCard = ({ className }: LatestClassAndCourseCardProps) => {
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
          className="w-2/12 border-r border-black p-6 pb-1 pt-1"
        />

        <div className="flex w-full justify-between overflow-hidden">
          <div className="ml-3 flex h-[70px] w-8/12 flex-col justify-around overflow-ellipsis ">
            <h2 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-3xl font-light antialiased">
              Name of the first class class class clkass
            </h2>
          </div>
          <div className="mr-5 flex items-center ">
            <Link
              href={''}
              className={`border-2 border-white bg-yellow-500 p-2   font-['Inter'] text-lg text-white  antialiased  hover:border-[#1B3764] hover:bg-white hover:text-[#1B3764]`}
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestClassAndCourseCard;
