import Link from 'next/link';
import { FiChevronDown } from 'react-icons/fi';

interface SubPage {
  href: string;
}

interface MenuItemProps {
  MenuItemName: string;
  subPages?: Record<string, SubPage>;
  href?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ MenuItemName, subPages, href }) => {
  const hasDropdown = subPages && Object.keys(subPages).length > 0;

  return (
    <div className="group relative m-0 block cursor-pointer p-0 p-3 antialiased hover:bg-white hover:text-black group-hover:border-[#1B3764]">
      {href ? (
        <Link
          href={href}
          className="flex h-full w-full items-center text-white group-hover:bg-white group-hover:text-black"
        >
          {MenuItemName}
        </Link>
      ) : (
        <div className="flex items-center text-white group-hover:bg-white group-hover:text-black">
          {MenuItemName}
        </div>
      )}

      {hasDropdown && (
        <div className="hidden md:block">
          <div className="dropdown-container absolute -ml-3 mt-3 hidden justify-start whitespace-nowrap border border-t-0 border-black bg-white p-1 text-black group-hover:block">
            {Object.entries(subPages).map(([subPageName, subPage], i) => (
              <Link
                key={i}
                href={subPage.href}
                className="block px-4 py-2 pr-6 text-black antialiased hover:bg-black hover:text-white"
              >
                {subPageName}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuItem;
