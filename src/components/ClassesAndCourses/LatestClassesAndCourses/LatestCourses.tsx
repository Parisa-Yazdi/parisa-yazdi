import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button/Button';
import LatestCourseCard from './LatestCourseCard';

interface LatestClassAndCourseCardProps {
  className?: string;
}

const SignUpForCourse = ({ className }: LatestClassAndCourseCardProps) => {
  return (
    <>
      <div className="w-1/2 justify-center bg-slate-200">
        <div className="relative flex w-full items-center justify-between  p-5 pb-0 font-['Cardo']  text-4xl font-normal leading-[54px] text-[#014444] antialiased">
          <h1> Courses </h1>
        </div>
        <div className="p-5 pt-0">
          {/* <p className="text-sm font-normal leading-[24px] text-[#014444] antialiased">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc malesuada eget est, a
            hendrerit mauris. Ut quis odio sed.{' '}
          </p> */}
          <div className="scroll-snap-type-y-mandatory scrollbar-thick scrollbar-thumb-red-500 scrollbar-track-red-200 mt-2 flex h-[200px] snap-x snap-mandatory flex-col gap-3 overflow-hidden border-2 border-red-500 p-5">
            <LatestCourseCard />
            <LatestCourseCard />
          </div>
          <div className="mt-5 flex w-full justify-center">
            <Link
              className={` border-2 border-white bg-yellow-500 p-2  font-['Inter'] text-xl text-white  antialiased  hover:border-[#1B3764] hover:bg-white hover:text-[#1B3764]`}
              href={''}
            >
              View All Classes
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpForCourse;
