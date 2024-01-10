import React from 'react';
import VideoCard from './Card';
import Button from '../Button/Button';
import { fetchVideos } from '@/lib/utils';

export interface Video {
  attributes: {
    id: number;
    Title: string;
    Link: string;
    Description: string;
    Slug: string;
    createdAt: Date;
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
  const sortedVideos = videos.data.sort((a: Video, b: Video) => {
    return new Date(b.attributes.createdAt).getTime() - new Date(a.attributes.createdAt).getTime();
  });
  const latestVideos = sortedVideos.slice(0, 3);
  // 1B3764
  return (
    <section className="h-fit  bg-[#014444] pb-12">
      <div className=" flex flex-col items-center justify-center">
        <h1 className="relative mt-7 w-[474px] p-5 pb-2 text-center font-['Cardo'] text-4xl  font-normal  leading-[54px] text-white antialiased">
          Latest Videos
          <span className="absolute bottom-0 left-1/2 h-1 w-14 -translate-x-1/2  bg-yellow-500"></span>
        </h1>
        <div className="mt-12 flex w-fit flex-col  justify-between gap-8 md:w-3/5 lg:w-auto lg:flex-row">
          {latestVideos.map((video: Video) => {
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
        </div>
        <Button link="/videos">View all videos</Button>
      </div>
    </section>
  );
};

export default LatestVideos;
