import React from 'react';
import Image from 'next/image';

const PersonalWriting = () => {
  return (
    <div className=" mb-4 h-1/6 w-full  overflow-hidden rounded-md border">
      <div className="p-4 text-lg">
        <div className="mb-4 flex flex-col gap-4">
          <Image
            alt="Video Thumbnail"
            className=" h-1/2 w-full  overflow-hidden rounded-lg border border-gray-200 object-cover dark:border-gray-800"
            height={50}
            src="https://janefriedman.com/wp-content/uploads/2023/12/glogovac_podcasts_media_kit-blogpost.png"
            width={75}
          />
          <h4 className="mb-4 text-2xl font-medium leading-none">Videos</h4>
          <p className="mb-4 leading-7">
            John Doe's passion for storytelling extends beyond the written word. He has produced a
            series of videos where he shares his writing process, discusses his favorite books, and
            offers advice to aspiring writers. Scroll down to explore these videos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonalWriting;
