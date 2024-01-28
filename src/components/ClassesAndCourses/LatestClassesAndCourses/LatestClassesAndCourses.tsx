import { RecentCourses } from '@/components/recent-courses';
import { RecentClasses } from '@/components/recent-classes';

const LatestClassesAndCourses = async () => {
  return (
    <>
      <section className="flex w-full flex-col gap-8  md:gap-0">
        <RecentClasses />
        <hr className="border border-stone-700" />
        <RecentCourses />
      </section>
    </>
  );
};

export default LatestClassesAndCourses;
