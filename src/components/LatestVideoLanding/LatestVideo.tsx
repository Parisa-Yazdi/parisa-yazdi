import React from "react";
import VideoCard from "./Card";
import Link from "next/link";
import Button from "../Button/Button";

const LatestVideos = () => {
  return (
    <section className="h-fit  bg-[#1B3764] pb-12">
      <div className=" flex flex-col items-center justify-center">
        <h1 className="relative mt-7 w-[474px] p-5 pb-2 text-center font-['Cardo'] text-4xl  font-normal  leading-[54px] text-white antialiased">
          Latest Videos
          <span className="absolute bottom-0 left-1/2 h-1 w-14 -translate-x-1/2  bg-yellow-500"></span>
        </h1>
        <div className="mt-12 flex w-fit flex-col  justify-between gap-8 md:w-3/5 lg:w-auto lg:flex-row">
          <VideoCard
            image="https://picsum.photos/410/326"
            title="Focus better and get rid of all the distractions"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quod rem libero corporis sunt dolore, similique quibusdam optio ab officiis impedit dolorem fugit modi delectus ipsam non. Ipsum, reprehenderit suscipit."
            articleLink="hello"
          />

          <VideoCard
            image="https://picsum.photos/410/326"
            title="How to journal and get the best out of your time"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas"
            articleLink="hello"
          />
        </div>
        <Button link="/videos">View all videos</Button>
      </div>
    </section>
  );
};

export default LatestVideos;
