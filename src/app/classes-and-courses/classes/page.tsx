import { ClassCard } from '@/components/class-card';
import { fetchClasses } from '@/lib/utils';

interface ClassProps {
  attributes: {
    name: string;
    description: string;
    link: string;
    slug: string;
    featuredImage: {
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
  const classes = await fetchClasses();
  // console.log(classes.data);
  return (
    <>
      {/* bg-[#e0ebfe] */}
      <main className="mx-auto h-fit w-9/12 overflow-hidden pb-24   md:w-7/12">
        <div className="mt-5 flex w-full justify-center">
          <h2 className="mt-10 text-4xl font-semibold tracking-tighter sm:text-5xl">CLASSES</h2>
        </div>
        <div className="mx-auto mt-10 flex w-full flex-col flex-wrap  items-center justify-center gap-8 ">
          {classes.data.map((singleClass: ClassProps, i: number) => {
            const { name, description, slug, link, featuredImage } = singleClass.attributes;
            // console.log(singleClass.attributes);
            return (
              <ClassCard
                key={i}
                name={name}
                description={description}
                link={link}
                slug={slug}
                thumbnail={featuredImage.data.attributes.url}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}
