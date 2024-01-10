<<<<<<< HEAD
import React from "react";
import Button from "../Button/Button";
import BookCard from "./BookCard";

const LatestArticles = () => {
  return (
    <section className="h-fit border-x-2 border-white bg-[#e0ebfe] pb-8">
      <div className=" flex flex-col items-center justify-center ">
        <h1 className="relative mt-7 w-[474px] p-5 pb-2 text-center font-['Cardo']  text-4xl font-normal leading-[54px] text-cyan-900 antialiased">
=======
import React from 'react';
import Button from '../Button/Button';
import BookCard from './BookCard';

const LatestArticles = () => {
  return (
    <section className="h-fit w-full  bg-[#dcece3] pb-8">
      <div className=" flex flex-col items-center justify-center ">
        <h1 className="relative mt-7 w-[474px] p-5 pb-2 text-center font-['Cardo']  text-4xl font-normal leading-[54px] text-[#014444] antialiased">
>>>>>>> master
          Latest Books
          <span className="absolute bottom-0 left-1/2 h-1 w-14 -translate-x-1/2  bg-yellow-500"></span>
        </h1>
        <div className="mt-12 flex w-fit flex-col items-center justify-between gap-8 md:w-3/5 lg:w-9/12 lg:flex-row">
<<<<<<< HEAD
         <BookCard
           image="https://picsum.photos/410/326"
           title="Focus better and get rid of all the distractions"
           description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quod rem libero corporis sunt dolore, similique quibusdam optio ab officiis impedit dolorem fugit modi delectus ipsam non. Ipsum, reprehenderit suscipit."
           bookLink="hello"
           price="$321"
         />
                  <BookCard
           image="https://picsum.photos/410/326"
           title="Focus better and get rid of all the distractions"
           description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quod rem libero corporis sunt dolore, similique quibusdam optio ab officiis impedit dolorem fugit modi delectus ipsam non. Ipsum, reprehenderit suscipit."
           bookLink="hello"
           price="$321"
         />
          <BookCard
           image="https://picsum.photos/410/326"
           title="Focus better and get rid of all the distractions"
           description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quod rem libero corporis sunt dolore, similique quibusdam optio ab officiis impedit dolorem fugit modi delectus ipsam non. Ipsum, reprehenderit suscipit."
           bookLink="hello"
           price="$321"
         />
         

=======
          <BookCard
            image="https://picsum.photos/410/326"
            title="Focus better and get rid of all the distractions"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quod rem libero corporis sunt dolore, similique quibusdam optio ab officiis impedit dolorem fugit modi delectus ipsam non. Ipsum, reprehenderit suscipit."
            bookLink="hello"
            price="$321"
          />
          <BookCard
            image="https://picsum.photos/410/326"
            title="Focus better and get rid of all the distractions"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quod rem libero corporis sunt dolore, similique quibusdam optio ab officiis impedit dolorem fugit modi delectus ipsam non. Ipsum, reprehenderit suscipit."
            bookLink="hello"
            price="$321"
          />
          <BookCard
            image="https://picsum.photos/410/326"
            title="Focus better and get rid of all the distractions"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quod rem libero corporis sunt dolore, similique quibusdam optio ab officiis impedit dolorem fugit modi delectus ipsam non. Ipsum, reprehenderit suscipit."
            bookLink="hello"
            price="$321"
          />
>>>>>>> master
        </div>
        <Button link="/books">View all books</Button>
      </div>
    </section>
  );
};

export default LatestArticles;
