import Image from 'next/image';
import Link from 'next/link';

interface LatestClassCardProps {
  className?: string;
}

const LatestClassCard = ({ className }: LatestClassCardProps) => {
  return (
    <>
      <div
        className={`flex snap-start items-center rounded-md border-2 border-black hover:cursor-pointer hover:bg-white ${className}`}
      >
        {/* <div className=" border-2 border-red-400"> */}
        <Image
          src="https://cdn-icons-png.flaticon.com/512/68/68278.png"
          width={200}
          height={200}
          alt="small icon"
          className="w-2/12 border-r border-black p-4 pb-1 pt-1"
        />
        {/* </div> */}
        <div className="flex w-full flex-col justify-around  pb-5">
          <div className="mt-5 flex h-[100px] w-full flex-col justify-between  pl-5">
            <h2 className="text-lg font-semibold antialiased">Class Name</h2>
            <p className="mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut cupiditate voluptates
              harum veritatis at exercitationem, voluptatem hic dignissimos laudanti
            </p>
          </div>

          <div className="flex w-full justify-end pb-5 pr-5">
            {/* <Link href="/learn-more" className="text-blue-700 hover:underline">
              Learn More
            </Link> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestClassCard;
