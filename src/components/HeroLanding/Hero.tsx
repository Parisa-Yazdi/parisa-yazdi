import Image from 'next/image';
import Link from 'next/link';
import HeroNewsLetter from './HeroNewsLetter';
const Hero = () => {
  return (
    <section className="relative mx-auto flex h-screen w-full  flex-col items-center justify-normal gap-1  bg-black  md:flex-row md:gap-5 ">
      <div className="my-10 ml-3 flex flex-col md:relative md:ml-12 md:h-1/2 md:w-6/12 md:items-start md:gap-10">
        <div className="flex flex-col  gap-5 ">
          <h1 className="px-2 text-center text-4xl font-bold text-white antialiased md:px-0 md:text-start lg:text-7xl">
            Existance in Symbols
          </h1>
          <div className="hidden w-full justify-start md:flex">
            <h3 className=" text-xl text-white antialiased md:w-4/5">
              Decoding life's essence through symbolic language reveals the profound artistry of
              existence. the profound artistry of existence.
            </h3>
          </div>
        </div>
        <div className="h-1/12 mx-auto mt-5 w-7/12 rounded-md md:hidden">
          <Image
            src={'https://i.imgur.com/rnGIDCO.jpg'}
            // src={
            //   'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/art-book-cover-design-template-34323b0f0734dccded21e0e3bebf004c_screen.jpg?ts=1637015198'
            // }
            alt="Picture of the author"
            width={400}
            height={400}
            className="  mr-10 w-full rounded-md"
          />
        </div>
        <HeroNewsLetter />
      </div>
      {/* image */}
      <div className="h-3/12 mr-28 hidden w-9/12 rounded-md md:my-auto  md:flex md:w-4/12">
        <Image
          src={'https://i.imgur.com/rnGIDCO.jpg'}
          // src={
          //   'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/art-book-cover-design-template-34323b0f0734dccded21e0e3bebf004c_screen.jpg?ts=1637015198'
          // }
          alt="Picture of the author"
          width={400}
          height={400}
          className=" mb-20 mr-10 w-full rounded-md"
        />
      </div>
      {/* <div className=" bottom-16 right-24 p-4  md:absolute"> */}
      {/* bg-gradient-to-t from-white via-gray-300 via-gray-600 to-black */}
      {/* </div> */}
      <div
        className="absolute bottom-0 h-[90px] w-full border-0"
        style={{
          background:
            'linear-gradient(to top, white, #eee 20%, #ccc 40%, #999 60%, #666 80%, black)'
        }}
      ></div>
    </section>
  );
};

export default Hero;
