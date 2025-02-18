import Link from 'next/link';
import { FiChevronDown } from 'react-icons/fi';
import { CollapsibleTrigger, CollapsibleContent, Collapsible } from '@/components/ui/collapsible';
import { ChevronRightIcon } from './mobile-menu';
import { menuItems } from '@/lib/NavBarMenuItems';
interface SubPage {
  href: string;
}

interface MenuItemProps {
  MenuItemName: string;
  subPages?: Record<string, SubPage>;
  href?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ MenuItemName, subPages, href }) => {
  return (
    <>
      <Link legacyBehavior href={href || '#'}>
        <div className="group relative cursor-pointer border-2 border-red-500 p-3 antialiased hover:bg-white hover:text-black group-hover:border-[#1B3764]">
          <Link href={href || '#'}>
            <div className="flex items-center ">
              <span className="flex items-center  text-white group-hover:bg-white group-hover:text-black">
                {MenuItemName}
                {subPages && Object.keys(subPages).length > 0 && (
                  <FiChevronDown className="ml-1 hidden md:block" />
                )}
              </span>
            </div>
          </Link>
          {subPages && Object.keys(subPages).length > 0 && (
            <div className="hidden md:block">
              <div
                className={`dropdown-container absolute -ml-3 mt-3 hidden justify-start whitespace-nowrap border border-t-0 border-black bg-white p-1 text-black group-hover:block`}
              >
                {Object.entries(subPages).map(([subPageName, subPage], i) => (
                  <Link
                    key={i}
                    href={subPage.href}
                    className="block px-4  py-2 pr-6 text-black antialiased hover:bg-black hover:text-white"
                  >
                    {subPageName}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </Link>
    </>
  );
};

export default MenuItem;

// {/* {subPages && Object.keys(subPages).length > 0 && ( */}
// <Collapsible className="grid gap-4">
//   {/* <ChevronRightIcon className="ml-auto h-5 w-5 bg-white transition-all" /> */}
//   <CollapsibleContent className="bg-white">
//     <div className="-mx-6 grid gap-6  bg-white p-6 ">
//       <Link className="group grid h-auto w-full justify-start gap-1" href="#">
//         <div className="text-sm font-medium leading-none text-white group-hover:underline">
//           Subpage 1
//         </div>
//       </Link>
//     </div>
//   </CollapsibleContent>
// </Collapsible>
// {/* )} */}
