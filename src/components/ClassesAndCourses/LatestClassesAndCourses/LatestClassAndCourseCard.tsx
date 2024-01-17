import Image from 'next/image';
import Link from 'next/link';

interface LatestClassAndCourseCardProps {
  className?: string;
}

const LatestClassAndCourseCard = ({ className }: LatestClassAndCourseCardProps) => {
  return (
    <>
      <div className={`flex snap-start items-center rounded-md border-2 border-black ${className}`}>
        {/* <div className=" border-2 border-red-400"> */}
        <Image
          src="https://icons.veryicon.com/png/o/education-technology/online-education-background-management/my-class.png"
          width={200}
          height={200}
          alt="small icon"
          className="w-2/12 border-r border-black"
        />
        {/* </div> */}
        <div className="flex w-full flex-col justify-around ">
          <div className="mt-5 flex h-[100px] w-full flex-col justify-between  pl-5">
            <h2 className="text-lg font-semibold antialiased">Class Name</h2>
            <p className="mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut cupiditate voluptates
              harum veritatis at exercitationem, voluptatem hic dignissimos laudanti
            </p>
          </div>

          <div className="flex w-full justify-end pb-5 pr-5">
            <Link href="/learn-more" className="text-blue-700 hover:underline">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestClassAndCourseCard;
