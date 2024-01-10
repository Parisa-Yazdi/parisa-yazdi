<<<<<<< HEAD
"use client";
import { useState } from "react";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";
=======
'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FiChevronDown } from 'react-icons/fi';
>>>>>>> master

interface MenuItemProps {
  MenuItemName: string;
  subPages?: string[];
  href?: string;
}

const MenuItem = ({ MenuItemName, subPages }: MenuItemProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  function parseUrl(url: string) {
    return url
      .toLowerCase()
<<<<<<< HEAD
      .replace(/&/g, "and")
      .replace(/ /g, "-")
      .replace(/'/g, "")
      .replace(/,/g, "");
=======
      .replace(/&/g, 'and')
      .replace(/ /g, '-')
      .replace(/'/g, '')
      .replace(/,/g, '');
>>>>>>> master
  }

  return (
    <>
      <Link
        href={
<<<<<<< HEAD
          MenuItemName.toLowerCase() === "home"
            ? "/"
            : `/${MenuItemName.toLowerCase()
                .replace(/&/g, "and")
                .replace(/ /g, "-")
                .replace(/'/g, "")
                .replace(/,/g, "")}`
        }
        //     href={`/${MenuItemName.toLowerCase()}`}
        className={` hidden min-w-fit text-yellow-500 antialiased md:block ${
          subPages && subPages.length > 0 ? "flex items-center" : ""
=======
          MenuItemName.toLowerCase() === 'home'
            ? '/'
            : `/${MenuItemName.toLowerCase()
                .replace(/&/g, 'and')
                .replace(/ /g, '-')
                .replace(/'/g, '')
                .replace(/,/g, '')}`
        }
        //     href={`/${MenuItemName.toLowerCase()}`}
        className={` hidden min-w-fit text-yellow-500 antialiased md:block ${
          subPages && subPages.length > 0 ? 'flex items-center' : ''
>>>>>>> master
        }`}
      >
        <div
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
          className={`relative p-3 antialiased hover:border-[#1B3764] hover:bg-white ${
<<<<<<< HEAD
            isDropdownOpen ? "text-[#1B3764]" : ""
=======
            isDropdownOpen ? 'text-[#1B3764]' : ''
>>>>>>> master
          }`}
        >
          <div className="flex items-center">
            <span
<<<<<<< HEAD
              className={
                isDropdownOpen
                  ? "flex items-center text-[#1B3764]"
                  : "flex items-center"
              }
            >
              {MenuItemName}

              {subPages && subPages.length > 0 && (
                <FiChevronDown className="ml-1" />
              )}
=======
              className={isDropdownOpen ? 'flex items-center text-[#1B3764]' : 'flex items-center'}
            >
              {MenuItemName}

              {subPages && subPages.length > 0 && <FiChevronDown className="ml-1" />}
>>>>>>> master
            </span>
          </div>

          {isDropdownOpen && (subPages?.length ?? 0) > 0 && (
            <div className="absolute -ml-3 mt-3 w-fit  whitespace-nowrap rounded-sm border-2 border-yellow-500 bg-[#1B3764] p-1 text-white">
<<<<<<< HEAD
              {subPages?.map((subPage) => (
                <Link
                  href={
                    subPage.toLowerCase() === "view archive"
                      ? "/articles"
=======
              {subPages?.map((subPage, i) => (
                <Link
                  key={i}
                  href={
                    subPage.toLowerCase() === 'view archive'
                      ? '/articles'
>>>>>>> master
                      : `/${parseUrl(MenuItemName)}/${parseUrl(subPage)}`
                  }
                  className="block flex-nowrap  px-4 py-2 text-yellow-500 antialiased hover:bg-white hover:text-[#1B3764]"
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
