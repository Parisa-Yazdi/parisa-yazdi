import Image from 'next/image';
import Link from 'next/link';
import HeroNewsLetter from './HeroNewsLetter';
const Hero = () => {
  return (
    <section className="relative mx-auto flex h-screen  w-full flex-col items-center justify-between gap-1 bg-black  md:flex-row md:justify-normal ">
      <div className="flex flex-col gap-2 md:ml-20  md:h-3/4 md:w-8/12 md:items-start md:gap-16 lg:gap-24">
        <div className="mt-8 flex  flex-col gap-5">
          <h1 className="min-w-fit  px-2 text-center font-heebo text-4xl font-extrabold text-white antialiased sm:text-5xl md:px-0 md:text-start lg:text-7xl">
            Existance in Symbols
          </h1>
          <div className="hidden w-full justify-start md:flex">
            <h3 className="font-heebo text-xl font-bold text-white antialiased md:w-4/5">
              Decoding life's essence through symbolic language reveals the profound artistry of
              existence. the profound artistry of existence.
            </h3>
          </div>
        </div>

        <div className="mx-auto h-1/2  w-7/12 rounded-md md:hidden">
          <Image
            src={'https://i.imgur.com/J0JJK6r.jpeg'}
            // src={
            //   'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/art-book-cover-design-template-34323b0f0734dccded21e0e3bebf004c_screen.jpg?ts=1637015198'
            // }
            alt="Parisa Yazdi Logo art"
            width={400}
            height={400}
            priority
            className="mb-5 w-full rounded-md  md:mr-10"
          />
        </div>
        <HeroNewsLetter />
      </div>
      {/* image */}
      <div className="h-3/12 mr-28 hidden w-9/12 rounded-md md:my-auto  md:flex md:w-6/12">
        <Image
          src={'https://i.imgur.com/J0JJK6r.jpeg'}
          // src={
          //   'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/art-book-cover-design-template-34323b0f0734dccded21e0e3bebf004c_screen.jpg?ts=1637015198'
          // }
          priority
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
