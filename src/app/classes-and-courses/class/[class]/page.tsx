import { SingleClass } from '@/components/single-class';
import { ClassInformation } from '@/components/class-information';
import { fetchClassBySlug } from '@/lib/utils';

export default async function Class({ params }: any) {
  const classData = await fetchClassBySlug(params.class);
  console.log('HERERE', classData.data[0]);

  // get initial of instructor
  const instructor = classData.data[0].attributes.instructor;
  const initials = instructor
    .split(' ')
    .map((n: string) => n[0])
    .join('');

  return (
    <>
      <main className="mx-auto  flex h-fit w-11/12 flex-col   flex-wrap items-center justify-center gap-3 overflow-hidden pb-24">
        <ClassInformation
          initials={initials}
          name={classData.data[0].attributes.name}
          instructor={classData.data[0].attributes.instructor}
          description={classData.data[0].attributes.description}
          duration=""
          image={classData.data[0].attributes.featuredImage.data.attributes.url}
          link={classData.data[0].attributes.link || ''}
        />
      </main>
    </>
  );
}
