import MobileMenu from './MobileMenu';
import MenuItem from './MenuItem';
import { menuItems } from '@/lib/NavBarMenuItems';
import Link from 'next/link';

export default function NavBar() {
  console.log('menuItems: ', menuItems);
  return (
    <>
      <div className="sticky left-0 right-0 top-0 z-50 mx-auto flex h-24 w-full min-w-full items-center justify-around overflow-hidden bg-gradient-to-r from-[#014444] via-black to-[#014444] md:relative">
        <div className="mx-auto flex w-full items-center justify-between">
          <div className="block flex-none pl-6">
            <MobileMenu />
          </div>
          {/* <div className="flex w-full flex-col justify-between gap-5 md:absolute md:bottom-0 "> */}
          <div className="mx-auto mr-14 flex w-full justify-center md:justify-end">
            <Link href="/">
              <h1 className="min-w-fit font-heebo text-2xl font-extrabold text-white">
                PARISA YAZDI
              </h1>
            </Link>
          </div>
        </div>
      </div>

      <nav className="sticky top-0 z-50 hidden w-full  border-b-2 border-white bg-black md:justify-evenly lg:inline-flex lg:justify-center lg:gap-6 xl:gap-16">
        {menuItems.map((item, i) => (
          <MenuItem key={i} MenuItemName={item.name} subPages={item.subPages} href={item.href} />
        ))}
      </nav>
    </>
  );
}
