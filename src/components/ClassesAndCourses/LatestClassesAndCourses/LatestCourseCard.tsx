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
          className="w-2/12 border-r border-black p-4 pb-1 pt-1"
        />

        <div className="ml-3 flex w-fit flex-col justify-around border-2 border-green-500">
          <h2 className=" text-3xl font-semibold antialiased">Class Name</h2>
        </div>
      </div>
    </>
  );
};

export default LatestClassAndCourseCard;
