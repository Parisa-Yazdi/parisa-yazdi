'use client';

import { Dialog, Transition } from '@headlessui/react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { Fragment, Suspense, useEffect, useState } from 'react';
import Image from 'next/image';
import MenuItem from './MenuItem';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { CollapsibleTrigger, CollapsibleContent, Collapsible } from '@/components/ui/collapsible';
import { menuItems } from '@/lib/NavBarMenuItems';
import { ChevronRightIcon } from './mobile-menu';
import { parseUrl } from '@/lib/utils';

export default function MobileMenu() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const openMobileMenu = () => setIsOpen(true);
  const closeMobileMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname, searchParams]);

  return (
    <>
      <button
        onClick={openMobileMenu}
        aria-label="Open mobile menu"
        className="flex h-12 w-12 items-center justify-center rounded-md  text-black transition-colors  lg:hidden"
      >
        <Bars3Icon className="h-6 border-none text-white" />
      </button>
      <Transition show={isOpen}>
        <Dialog onClose={closeMobileMenu} className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="opacity-0 backdrop-blur-none"
            enterTo="opacity-100 backdrop-blur-[.5px]"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="opacity-100 backdrop-blur-[.5px]"
            leaveTo="opacity-0 backdrop-blur-none"
          >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="translate-x-[-100%]"
            enterTo="translate-x-0"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-[-100%]"
          >
            <Dialog.Panel className="fixed bottom-0 left-0 right-0 top-0 flex h-full w-full flex-col overflow-y-auto bg-black pb-6">
              <div className="p-4">
                <button
                  className="mb-4 flex h-11 w-11 items-center justify-center rounded-md  text-white transition-colors "
                  onClick={closeMobileMenu}
                  aria-label="Close mobile menu"
                >
                  <XMarkIcon className="h-6" />
                </button>

                <div className=" w-full">
                  <Link href="/">
                    <Image
                      className="mx-auto"
                      src={'https://i.imgur.com/gTkbIgW.png'}
                      alt="parisa logo"
                      height={142}
                      width={142}
                      priority
                    />
                  </Link>
                </div>

                {menuItems.map((menuItem, i) => {
                  return (
                    <Collapsible className="grid" key={i}>
                      <CollapsibleTrigger className="flex w-full items-center  text-lg font-semibold text-white [&[data-state=open]>svg]:rotate-90">
                        {menuItem.name}
                        {menuItem.subPages && Object.keys(menuItem.subPages).length > 0 && (
                          <ChevronRightIcon className="ml-auto h-5 w-5 transition-all" />
                        )}
                      </CollapsibleTrigger>

                      {menuItem.subPages && Object.keys(menuItem.subPages).length > 0 && (
                        <CollapsibleContent>
                          <div className="-mx-6  ml-3 grid gap-6 bg-black p-6 py-2">
                            <Link
                              className="group flex h-auto w-full flex-col justify-start gap-1"
                              href="#"
                            >
                              {menuItem.subPages && Object.keys(menuItem.subPages).length > 0 && (
                                <CollapsibleContent>
                                  <div className="-mx-6 grid gap-4 bg-black p-6 py-0 text-white">
                                    {menuItem.subPages &&
                                      Object.keys(menuItem.subPages).map((subPageKey, i) => (
                                        <Link
                                          key={subPageKey}
                                          className="group grid h-auto w-full justify-start gap-1"
                                          href={
                                            menuItem.subPages
                                              ? menuItem.subPages[subPageKey].href
                                              : '#'
                                          }
                                        >
                                          <div className="text-sm font-medium leading-none ">
                                            {subPageKey}
                                          </div>
                                        </Link>
                                      ))}
                                  </div>
                                </CollapsibleContent>
                              )}
                            </Link>
                          </div>
                        </CollapsibleContent>
                      )}
                    </Collapsible>
                  );
                })}
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}

{
  /* <ul className="flex w-full flex-col">
                  {menuItems.map(
                    (menuItem, i) => (
                      <li
                        key={i}
                        className="py-2 text-xl text-white transition-colors hover:text-neutral-500 "
                      >
                        {menuItem.name}
                      </li>
                    )
                    // if menu item has subpages
                    // !menuItem.subPages ? (
                    //   <MenuItem key={i} MenuItemName={menuItem.name} />
                    // ) : (
                    //   <Collapsible key={i} className="grid gap-4">
                    //     <CollapsibleTrigger className="flex w-full items-center text-lg font-semibold text-white [&[data-state=open]>svg]:rotate-90">
                    //       {menuItem.name}
                    //       <XMarkIcon className="ml-auto h-5 w-5 transition-all" />
                    //     </CollapsibleTrigger>
                    //     <CollapsibleContent>
                    //       <div className="-mx-6 grid gap-6 bg-gray-100 p-6 ">
                    //         {menuItem.subPages.map((subPage, i) => (
                    //           <Link key={i} href="#">
                    //             <div className="text-sm font-medium leading-none text-white group-hover:underline">
                    //               {subPage}
                    //             </div>
                    //           </Link>
                    //         ))}
                    //       </div>
                    //     </CollapsibleContent>
                    //   </Collapsible>
                    // )
                  )}
                </ul> */
}
