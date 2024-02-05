import VideoCard from '@/components/Video/VideoCard';
import { fetchVideos } from '@/lib/utils';
// import { Video } from '@/components/Video/LatestVideoLanding/LatestVideo'; // Import the Video interface

const Videos = async () => {
  const videos = await fetchVideos();

  return (
    <>
      {/* bg-[#e0ebfe] */}
      <main className="h-fit  overflow-hidden  pb-24">
        <div className="mx-auto mt-10 flex w-8/12 justify-start ">
          <h2 className="text-4xl font-semibold tracking-tighter sm:text-5xl">LATEST VIDEOS</h2>
        </div>
        <div className="mx-auto mt-10 flex w-8/12   flex-col flex-wrap items-center justify-center gap-6">
          {videos.data.map((video: any, i: number) => {
            const { id, thumbnail, title, summary, slug, link } = video.attributes;
            return (
              <VideoCard
                key={id || i}
                image={thumbnail.data.attributes.url}
                title={title}
                summary={summary}
                videoLink={link}
                slug={slug}
              />
            );
          })}
        </div>
      </main>
    </>
  );
};

export default Videos;
