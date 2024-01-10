<<<<<<< HEAD
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import MenuItem from "./MenuItem";
import FacebookLogo from "../../../public/facebook.png";
import TwitterLogo from "../../../public/twitter.png";
import LinkedInLogo from "../../../public/linkedIn.png";
=======
import Link from 'next/link';
import Image from 'next/image';
import MobileMenu from './MobileMenu';
import MenuItem from './MenuItem';
import FacebookLogo from '../../../public/facebook.png';
import TwitterLogo from '../../../public/twitter.png';
import LinkedInLogo from '../../../public/linkedIn.png';
>>>>>>> master

const Navbar = () => {
  const menuItems = [
    {
<<<<<<< HEAD
      name: "HOME",
      subPages: [],
      href: "/",
    },
    {
      name: "ARTICLES",
      subPages: [
        "View Archive",
        "Existential & Metaphysics",
        "Astrology & Archetypes",
        "Self-Knowledge",
        "Personal Journals",
      ],
    },
    {
      name: "CLASSES & COURSES",
      subPages: ["Classes", "Courses"],
    },
    {
      name: "VIDEOS",
    },
    {
      name: "BOOKS",
    },
    {
      name: "GALLERY",
    },
    {
      name: "ABOUT",
    },
    {
      name: "CONTACT",
    },
=======
      name: 'HOME',
      subPages: [],
      href: '/'
    },
    {
      name: 'ARTICLES',
      subPages: [
        'View Archive',
        'Existential & Metaphysics',
        'Astrology & Archetypes',
        'Self-Knowledge',
        'Personal Journals'
      ]
    },
    {
      name: 'CLASSES & COURSES',
      subPages: ['Classes', 'Courses']
    },
    {
      name: 'VIDEOS'
    },
    {
      name: 'BOOKS'
    },
    {
      name: 'GALLERY'
    },
    {
      name: 'ABOUT'
    },
    {
      name: 'CONTACT'
    }
>>>>>>> master
  ];

  return (
    <>
<<<<<<< HEAD
      <div className="relative left-0 right-0 top-0 z-50 mx-auto flex h-28 w-full min-w-full items-center justify-around bg-white">
=======
      <div className="relative left-0 right-0 top-0 z-50 mx-auto flex h-52 w-full min-w-full items-center justify-around bg-gradient-to-r from-[#014444] via-black to-[#014444]">
>>>>>>> master
        <div className="mx-auto flex w-full items-center justify-between">
          <div className="block flex-none pl-6">
            <MobileMenu />
          </div>
          {/* <div className="flex w-full flex-col justify-between gap-5 md:absolute md:bottom-0 "> */}
          <div className="mx-auto">
            <Link href="/">
<<<<<<< HEAD
              {/* <Image
                src={"https://i.imgur.com/tEUIuYd.png"}
=======
              <Image
                src="https://i.imgur.com/gTkbIgW.png"
>>>>>>> master
                alt="Parisa Yazdi Logo"
                priority
                width={150}
                height={150}
<<<<<<< HEAD
              /> */}
=======
              />
>>>>>>> master
            </Link>
          </div>
          <div className="block flex-none pr-6 lg:hidden">
            <svg
<<<<<<< HEAD
              className="h-6 w-6 text-gray-800 "
=======
              className="h-6 w-6 text-white "
>>>>>>> master
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
        </div>
      </div>

<<<<<<< HEAD
      <nav className="sticky top-0 z-50 hidden w-full border-b-2 border-yellow-500 bg-[#1B3764] md:justify-evenly md:gap-10 lg:inline-flex lg:justify-center lg:gap-16">
=======
      <nav className="sticky top-0 z-50 hidden w-full border-b-2 border-[#d3a83c] bg-[#014444] md:justify-evenly md:gap-10 lg:inline-flex lg:justify-center lg:gap-16">
>>>>>>> master
        {menuItems.map((item, i) => (
          <MenuItem key={i} MenuItemName={item.name} subPages={item.subPages} />
        ))}
      </nav>
    </>
  );
};

export default Navbar;
