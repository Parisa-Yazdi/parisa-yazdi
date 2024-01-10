import CourseCard from '@/components/CourseCard/CourseCard';
import { fetchVideos } from '@/lib/utils';
import { Video } from '@/components/LatestVideoLanding/LatestVideo'; // Import the Video interface

const Videos = async () => {
  const videos = await fetchVideos();

  return (
    <>
      {/* bg-[#e0ebfe] */}
      <main className="h-fit  overflow-hidden  pb-24">
        <h1 className="relative mb-10  p-5 pb-2 text-center font-['Cardo'] text-4xl font-light leading-[55px] text-[#014444]">
          COURSES
          <span className="absolute bottom-0 left-1/2 h-1 w-[4%] -translate-x-1/2  bg-yellow-500"></span>
        </h1>
        <div className="mx-auto mt-10 flex w-10/12   flex-col flex-wrap items-center justify-center gap-6">
          {videos.data.map((video: Video) => {
            const { id, Thumbnail, Title, Description, Slug, Link } = video.attributes;
            return (
              <CourseCard
                key={id}
                image={Thumbnail.data.attributes.url}
                title={Title}
                description={Description}
                courseLink={Link}
                slug={Slug}
              />
            );
          })}
        </div>
      </main>
    </>
  );
};

export default Videos;
