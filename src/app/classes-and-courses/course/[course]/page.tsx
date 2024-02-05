import { SingleClass } from '@/components/single-class';
import { ClassInformation } from '@/components/class-information';
import { fetchCourseBySlug } from '@/lib/utils';

export default async function Class({ params }: any) {
  const courseData = await fetchCourseBySlug(params.course);

  return (
    <>
      <main className="mx-auto  flex h-fit w-11/12 flex-col   flex-wrap items-center justify-center gap-3 overflow-hidden pb-24">
        <ClassInformation
          // initials={initials}
          name={courseData.data[0].attributes.name}
          // instructor={courseData.data[0].attributes.instructor}
          description={courseData.data[0].attributes.description}
          duration=""
          image={courseData.data[0].attributes.featuredImage.data.attributes.url}
          link={courseData.data[0].attributes.link || ''}
        />
      </main>
    </>
  );
}
