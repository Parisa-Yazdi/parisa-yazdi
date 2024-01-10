import Link from "next/link";

const Button = ({
  link,
  children,
}: {
  link: string;
  children: React.ReactNode;
}) => {
  return (
    <>
      <Link
        href={link}
        className=" border-2 border-white bg-yellow-500 p-2 text-xl  antialiased mt-10 font-['Inter']  text-white  hover:border-[#1B3764] hover:bg-white hover:text-[#1B3764]"
      >
        {children}
      </Link>
    </>
  );
};

export default Button;
