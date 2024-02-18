import Link from 'next/link';
import React from 'react';

interface FooterItemsProps {
  FooterItemName: string;
  FooterItems?: string[];
}

const FooterItems = ({ FooterItemName, FooterItems }: FooterItemsProps) => {
  return (
    <div>
      <div className="mx-auto h-[222px]  font-['Inter'] text-lg font-normal text-slate-300 lg:w-fit">
        <h2 className="font-['Cardo'] text-2xl font-medium leading-[28.80px] text-white">
          {FooterItemName}
        </h2>
        <ul className="mt-2">
          {FooterItems?.map((item, i) => {
            const lowerCaseItem = item.toLowerCase();
            let url;
            if (
              lowerCaseItem === 'classes' ||
              lowerCaseItem === 'courses' ||
              lowerCaseItem === 'readings'
            ) {
              url = `/classes-and-courses/${lowerCaseItem}`;
            } else if (lowerCaseItem === 'home') {
              url = '/';
            } else {
              url = `/${lowerCaseItem}`;
            }

            return (
              <li key={i}>
                <Link href={url} className="text-slate-300 hover:text-white">
                  {item}
                </Link>
                <br />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default FooterItems;
