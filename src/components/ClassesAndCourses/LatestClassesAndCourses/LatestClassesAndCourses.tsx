import LatestClasses from '@/components/ClassesAndCourses/LatestClassesAndCourses/LatestClasses';
import LatestCourses from '@/components/ClassesAndCourses/LatestClassesAndCourses/LatestCourses';

const LatestClassesAndCourses = async () => {
  return (
    <>
      <section className="flex w-full flex-col gap-8 bg-[#014444] md:flex-row md:gap-0">
        <LatestCourses />
        <LatestClasses />
      </section>
    </>
  );
};

export default LatestClassesAndCourses;
