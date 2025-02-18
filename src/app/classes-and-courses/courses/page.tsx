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

  // Add a fallback to avoid hydration mismatches
  if (!courses || !courses.data || courses.data.length === 0) {
    return (
      <main className="mx-auto h-fit w-9/12 overflow-hidden pb-24 md:w-7/12">
        <div className="mt-5 flex w-full justify-center">
          <h2 className="mt-10 text-4xl font-semibold tracking-tighter sm:text-5xl">COURSES</h2>
        </div>
        <p className="text-center text-lg">No courses available.</p>
      </main>
    );
  }

  return (
    <main className="mx-auto h-fit w-9/12 overflow-hidden pb-24 md:w-7/12">
      <div className="mt-5 flex w-full justify-center">
        <h2 className="mt-10 text-4xl font-semibold tracking-tighter sm:text-5xl">COURSES</h2>
      </div>
      <div className="mx-auto mt-10 flex min-w-full flex-col flex-wrap items-center justify-center gap-8">
        {courses.data.map((course: CourseProps, i: number) => (
          <CourseCard
            key={i}
            name={course.attributes.name}
            description={course.attributes.description}
            link={course.attributes.link}
            slug={`/classes-and-courses/course/${course.attributes.slug}`}
            thumbnail={course.attributes.thumbnail.data.attributes.url}
          />
        ))}
      </div>
    </main>
  );
}
