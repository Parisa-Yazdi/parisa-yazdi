import { SingleClass } from '@/components/single-class';
import { ClassInformation } from '@/components/class-information';
import { fetchClassBySlug } from '@/lib/utils';

export default async function Class({ params }: any) {
  const classData = await fetchClassBySlug(params.slug);
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
