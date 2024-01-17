import React from 'react';

interface VideoPageProps {
  description: string;
  videoUrl: string;
}

const VideoPage: React.FC<VideoPageProps> = ({ description, videoUrl }) => {
  return (
    <main className="mx-auto flex w-8/12 flex-col items-center justify-center">
      <div>
        <h1 className="relative mb-10  p-5 pb-2 text-center font-['Cardo'] text-4xl font-light leading-[55px] text-[#014444]">
          VIDEO TITLE
          <span className="absolute bottom-0 left-1/2 h-1 w-[4%] -translate-x-1/2  bg-yellow-500"></span>
        </h1>
        <div className="w-full border border-red-500 font-['Cardo'] text-2xl font-normal leading-[28.80px] text-cyan-900">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, facere doloremque?
          Deserunt exercitationem vel optio alias earum. Nulla rem dignissimos natus quae deserunt,
          necessitatibus earum qui, recusandae aliquam vero sint.
        </div>
      </div>

      <iframe
        width="560"
        height="315"
        src={'https://www.youtube.com/watch?v=C8OhOU-4l74'}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        className="m-10 rounded-md border-4 border-gray-800"
      ></iframe>
    </main>
  );
};

export default VideoPage;
