"use client";
import { useState } from "react";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";

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
      .replace(/&/g, "and")
      .replace(/ /g, "-")
      .replace(/'/g, "")
      .replace(/,/g, "");
  }

  return (
    <>
      <Link
        href={
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
        }`}
      >
        <div
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
          className={`relative p-3 antialiased hover:border-[#1B3764] hover:bg-white ${
            isDropdownOpen ? "text-[#1B3764]" : ""
          }`}
        >
          <div className="flex items-center">
            <span
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
            </span>
          </div>

          {isDropdownOpen && (subPages?.length ?? 0) > 0 && (
            <div className="absolute -ml-3 mt-3 w-fit  whitespace-nowrap rounded-sm border-2 border-yellow-500 bg-[#1B3764] p-1 text-white">
              {subPages?.map((subPage) => (
                <Link
                  href={
                    subPage.toLowerCase() === "view archive"
                      ? "/articles"
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
