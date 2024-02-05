import { CourseCard } from '@/components/course-card';
import { fetchCourses } from '@/lib/utils';

interface CourseProps {
  attributes: {
    name: string;
    description: string;
    link: string;
    slug: string;
    thumbnail: {
      data: {
        id: number;
        attributes: {
          url: string;
        };
      };
    };
  };
}

export default async function Courses() {
  const courses = await fetchCourses();
  // console.log(courses.data);
  return (
    <>
      {/* bg-[#e0ebfe] */}
      <main className="mx-auto h-fit w-9/12 overflow-hidden pb-24   md:w-7/12">
        <div className="mt-5 flex w-full justify-center">
          <h2 className="mt-10 text-4xl font-semibold tracking-tighter sm:text-5xl">COURSES</h2>
        </div>
        <div className="mx-auto mt-10 flex w-full flex-col flex-wrap  items-center justify-center gap-8 ">
          {courses.data.map((course: CourseProps, i: number) => {
            const { name, description, slug, link, thumbnail } = course.attributes;
            return (
              <CourseCard
                key={i}
                name={name}
                description={description}
                link={link}
                slug={`/classes-and-courses/course/${slug}`}
                thumbnail={thumbnail.data.attributes.url}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}
