import Link from 'next/link';
import Image from 'next/image';
import MobileMenu from './MobileMenu';
import MenuItem from './MenuItem';
import FacebookLogo from '../../../public/facebook.png';
import TwitterLogo from '../../../public/twitter.png';
import LinkedInLogo from '../../../public/linkedIn.png';

const Navbar = () => {
  const menuItems = [
    {
      name: 'HOME',
      subPages: [],
      href: '/'
    },
    {
      name: 'ARTICLES',
      subPages: [
        'View Archive',
        'View All Categories',
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
      name: 'VIDEOS',
      subPages: [
        'View Archive',
        'View All Categories',
        'Existential & Metaphysics',
        'Astrology & Archetypes',
        'Self-Knowledge',
        'Personal Journals'
      ]
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
  ];

  return (
    <>
      <div className="relative left-0 right-0 top-0 z-50 mx-auto flex h-24 w-full min-w-full items-center justify-around overflow-hidden bg-gradient-to-r from-[#014444] via-black to-[#014444]">
        <div className="mx-auto flex w-full items-center justify-between">
          <div className="block flex-none pl-6">
            <MobileMenu />
          </div>
          {/* <div className="flex w-full flex-col justify-between gap-5 md:absolute md:bottom-0 "> */}
          <div className="mx-auto mr-14 flex w-full justify-end">
            <h1 className="text-3xl text-white">PARISA YAZDI</h1>
          </div>
          <div className="block flex-none pr-6 lg:hidden">
            <svg
              className="h-6 w-6 text-white "
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

      <nav className="sticky top-0 z-50 hidden w-full  border-b-2 border-white bg-black md:justify-evenly lg:inline-flex lg:justify-center lg:gap-6 xl:gap-16">
        {menuItems.map((item, i) => (
          <MenuItem key={i} MenuItemName={item.name} subPages={item.subPages} />
        ))}
      </nav>
    </>
  );
};

export default Navbar;
