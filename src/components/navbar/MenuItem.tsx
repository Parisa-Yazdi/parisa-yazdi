'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FiChevronDown } from 'react-icons/fi';
import { parseUrl } from '@/lib/utils';

interface MenuItemProps {
  MenuItemName: string;
  subPages?: string[];
  href?: string;
}

const MenuItem = ({ MenuItemName, subPages }: MenuItemProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      <Link
        href={
          MenuItemName.toLowerCase() === 'home'
            ? '/'
            : `/${MenuItemName.toLowerCase()
                .replace(/&/g, 'and')
                .replace(/ /g, '-')
                .replace(/'/g, '')
                .replace(/,/g, '')}`
        }
        //     href={`/${MenuItemName.toLowerCase()}`}
        className={` hidden min-w-fit text-white antialiased md:block ${
          subPages && subPages.length > 0 ? 'flex items-center' : ''
        }`}
      >
        <div
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
          className={`relative p-3 antialiased hover:border-[#1B3764] hover:bg-white ${
            isDropdownOpen ? 'text-[#1B3764]' : ''
          }`}
        >
          <div className="flex items-center">
            <span
              className={isDropdownOpen ? 'flex items-center text-[#1B3764]' : 'flex items-center'}
            >
              {MenuItemName}

              {subPages && subPages.length > 0 && <FiChevronDown className="ml-1" />}
            </span>
          </div>

          {isDropdownOpen && (subPages?.length ?? 0) > 0 && (
            <div className="absolute -ml-3 mt-3 w-fit  whitespace-nowrap  border-2  bg-white p-1 text-white">
              {subPages?.map((subPage, i) => (
                <Link
                  key={i}
                  href={
                    subPage.toLowerCase() === 'view archive'
                      ? '/articles'
                      : subPage.toLowerCase() === 'view all categories'
                      ? '/article-categories'
                      : `/${parseUrl(MenuItemName)}/${parseUrl(subPage)}`
                  }
                  // href={
                  //   MenuItemName.toLowerCase() === 'home' &&
                  //   subPage.toLowerCase() === 'view archive'
                  //     ? '/articles'

                  //     : MenuItemName.toLowerCase() === 'home' &&
                  //       subPage.toLowerCase() === 'view all categories'
                  //     ? '/article-categories'

                  //     : MenuItemName.toLowerCase() === 'videos' &&
                  //       subPage.toLowerCase() === 'view archive'
                  //     ? '/videos'

                  //     : MenuItemName.toLowerCase() === 'videos' &&
                  //       subPage.toLowerCase() === 'view all categories'
                  //     ? '/categories'

                  //     : `/${parseUrl(MenuItemName)}/${parseUrl(subPage)}`
                  // }
                  className="block flex-nowrap  px-4 py-2 text-black antialiased hover:bg-black hover:text-white"
                >
                  {subPage}
                </Link>
              ))}
            </div>
          )}
        </div>
      </Link>
    </>
  );
};

export default MenuItem;
