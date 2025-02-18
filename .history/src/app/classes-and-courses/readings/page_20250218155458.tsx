import { ReadingCard } from '@/components/reading-card';
import { fetchReadings } from '@/lib/utils';

interface ClassProps {
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

export default async function Readings() {
  const readings = await fetchReadings();

  return (
    <>
      {/* bg-[#e0ebfe] */}
      <main className="mx-auto h-fit w-9/12 overflow-hidden pb-24   md:w-7/12">
        <div className="mt-5 flex w-full justify-center">
          <h2 className="mt-10 text-4xl font-semibold tracking-tighter sm:text-5xl">READINGS</h2>
        </div>
        <div className="mx-auto mt-10 flex w-full flex-col flex-wrap  items-center justify-center gap-8 ">
          {readings.data.map((reading: ClassProps, i: number) => {
            const { name, description, slug, link, thumbnail } = reading.attributes;

            return (
              <ReadingCard
                key={i}
                name={name}
                description={description}
                link={link}
                slug={slug}
                thumbnail={thumbnail.data.attributes.url}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}
