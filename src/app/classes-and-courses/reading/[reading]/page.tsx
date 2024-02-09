import { SingleClass } from '@/components/single-class';
import { ClassInformation } from '@/components/class-information';
import { fetchReadingBySlug } from '@/lib/utils';

export default async function Reading({ params }: any) {
  const readingData = await fetchReadingBySlug(params.reading);
  console.log('readingData', readingData.data[0]);
  const instructor = readingData.data[0].attributes.instructor;
  const initials = instructor
    .split(' ')
    .map((n: string) => n[0])
    .join('');

  return (
    <>
      <main className="mx-auto  flex h-fit w-11/12 flex-col   flex-wrap items-center justify-center gap-3 overflow-hidden pb-24">
        <ClassInformation
          initials={initials}
          name={readingData.data[0].attributes.name}
          instructor={readingData.data[0].attributes.instructor}
          description={readingData.data[0].attributes.description}
          duration={readingData.data[0].attributes.duration}
          image={readingData.data[0].attributes.thumbnail.data.attributes.url}
          link={readingData.data[0].attributes.link || ''}
        />
      </main>
    </>
  );
}
