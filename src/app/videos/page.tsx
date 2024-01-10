<<<<<<< HEAD
import VideoCard from "@/components/Video/VideoCard";

const Videos = () => {
=======
import VideoCard from '@/components/Video/VideoCard';
import { fetchVideos } from '@/lib/utils';
import { Video } from '@/components/LatestVideoLanding/LatestVideo'; // Import the Video interface

const Videos = async () => {
  const videos = await fetchVideos();

>>>>>>> master
  return (
    <>
      {/* bg-[#e0ebfe] */}
      <main className="h-fit  overflow-hidden  pb-24">
<<<<<<< HEAD
        <h1 className="relative mb-10  p-5 pb-2 text-center font-['Cardo'] text-6xl font-light leading-[55px] text-[#1B3764]">
          Videos
          <span className="absolute bottom-0 left-1/2 h-1 w-1/3 -translate-x-1/2  bg-yellow-500"></span>
        </h1>
        <hr className="m-3" />
        <div className="mx-auto flex  w-10/12   flex-col flex-wrap items-center justify-center gap-6">
          <VideoCard
            image="https://picsum.photos/410/326"
            title={"How to make a good first impression"}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, vitae, quisque mauris, sit. "
            videoLink={"#"}
          />
          <VideoCard
            image="https://picsum.photos/410/326"
            title={"How to make a good first impression "}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
            videoLink={"#"}
          />
          <VideoCard
            image="https://picsum.photos/410/326"
            title={"How to make a good first impression "}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
            videoLink={"#"}
          />
=======
        <h1 className="relative mb-10  p-5 pb-2 text-center font-['Cardo'] text-4xl font-light leading-[55px] text-[#014444]">
          VIDEOS
          <span className="absolute bottom-0 left-1/2 h-1 w-[4%] -translate-x-1/2  bg-yellow-500"></span>
          {/* <hr className="" /> */}
        </h1>
        <div className="mx-auto mt-10 flex w-10/12   flex-col flex-wrap items-center justify-center gap-6">
          {videos.data.map((video: Video) => {
            const { id, Thumbnail, Title, Description, Slug, Link } = video.attributes;
            return (
              <VideoCard
                key={id}
                image={Thumbnail.data.attributes.url}
                title={Title}
                description={Description}
                videoLink={Link}
                slug={Slug}
              />
            );
          })}
>>>>>>> master
        </div>
      </main>
    </>
  );
};

export default Videos;
