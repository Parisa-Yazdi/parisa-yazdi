import { ClassInformation } from '@/components/class-information';
import { fetchCourseBySlug } from '@/lib/utils';

export default async function Course({ params }: any) {
  const classData = await fetchCourseBySlug(params.slug);
  return (
    <>
      <main className="mx-auto  flex h-fit w-11/12 flex-col   flex-wrap items-center justify-center gap-3 overflow-hidden pb-24">
        <ClassInformation
          name="Introduction to AI"
          instructor={''}
          description={''}
          duration=""
          image="https://picsum.photos/292/596"
          link=""
        />
      </main>
    </>
  );
}
