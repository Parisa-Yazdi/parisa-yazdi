import React from 'react';
import VideoCard from './Card';
import Button from '../Button/Button';
import { fetchVideos } from '@/lib/utils';

interface Video {
  attributes: {
    id: number;
    Title: string;
    Link: string;
    Description: string;
    Slug: string;
    Thumbnail: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
}

const LatestVideos = async () => {
  const videos = await fetchVideos();
  console.log(videos.data);
  return (
    <section className="h-fit  bg-[#1B3764] pb-12">
      <div className=" flex flex-col items-center justify-center">
        <h1 className="relative mt-7 w-[474px] p-5 pb-2 text-center font-['Cardo'] text-4xl  font-normal  leading-[54px] text-white antialiased">
          Latest Videos
          <span className="absolute bottom-0 left-1/2 h-1 w-14 -translate-x-1/2  bg-yellow-500"></span>
        </h1>
        <div className="mt-12 flex w-fit flex-col  justify-between gap-8 md:w-3/5 lg:w-auto lg:flex-row">
          {videos.data.map((video: Video) => (
            <VideoCard
              key={video.attributes.id}
              image={video.attributes.Thumbnail.data.attributes.url}
              title={video.attributes.Title}
              videoLink={video.attributes.Link}
              description={video.attributes.Description}
              slug={video.attributes.Slug}
            />
          ))}
        </div>
        <Button link="/videos">View all videos</Button>
      </div>
    </section>
  );
};

export default LatestVideos;
