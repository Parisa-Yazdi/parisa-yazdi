import { SingleClass } from '@/components/single-class';
import { ClassInformation } from '@/components/class-information';
import { fetchReadingBySlug } from '@/lib/utils';

export default async function Class({ params }: any) {
  const courseData = await fetchReadingBySlug(params.course);
  console.log('courseData', courseData.data[0]);
  const instructor = courseData.data[0].attributes.instructor;
  const initials = instructor
    .split(' ')
    .map((n: string) => n[0])
    .join('');

  return (
    <>
      <main className="mx-auto  flex h-fit w-11/12 flex-col   flex-wrap items-center justify-center gap-3 overflow-hidden pb-24">
        <ClassInformation
          initials={initials}
          name={courseData.data[0].attributes.name}
          instructor={courseData.data[0].attributes.instructor}
          description={courseData.data[0].attributes.description}
          duration={courseData.data[0].attributes.duration}
          image={courseData.data[0].attributes.featuredImage.data.attributes.url}
          link={courseData.data[0].attributes.link || ''}
        />
      </main>
    </>
  );
}
