import Link from 'next/link';

const Button = ({
  link,
  children,
  className
}: {
  link: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <>
      <Link
        href={link}
        className={`mt-10 border-2 border-white bg-yellow-500 p-2  font-['Inter'] text-xl text-white  antialiased  hover:border-[#1B3764] hover:bg-white hover:text-[#1B3764]`}
      >
        {children}
      </Link>
    </>
  );
};

export default Button;
