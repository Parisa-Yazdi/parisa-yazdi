import LatestClasses from '@/components/ClassesAndCourses/LatestClassesAndCourses/LatestClasses';
import LatestCourses from '@/components/ClassesAndCourses/LatestClassesAndCourses/LatestCourses';

const LatestClassesAndCourses = async () => {
  return (
    <>
      <section className="hidden w-full md:flex">
        <LatestClasses />
        <LatestCourses />
      </section>
    </>
  );
};

export default LatestClassesAndCourses;
