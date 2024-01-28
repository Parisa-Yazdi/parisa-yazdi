import LatestClassesCard from '@/components/ClassesAndCourses/LatestClassesAndCourses/LatestClassesCard';

const Courses = async () => {
  return (
    <>
      {/* bg-[#e0ebfe] */}
      <main className="mx-auto h-fit w-9/12 overflow-hidden   pb-24">
        <div className="mt-5 flex w-full justify-center">
          <h2 className="mt-10 text-4xl font-semibold tracking-tighter sm:text-5xl">COURSES</h2>
        </div>
        <div className="mx-auto mt-10 flex w-full flex-col flex-wrap  items-center justify-center gap-8 ">
          <LatestClassesCard />
          <LatestClassesCard />
          <LatestClassesCard />
          <LatestClassesCard />
        </div>
      </main>
    </>
  );
};

export default Courses;
