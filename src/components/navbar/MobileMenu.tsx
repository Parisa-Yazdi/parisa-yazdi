"use client";

import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import MenuItem from "./MenuItem";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function MobileMenu() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const openMobileMenu = () => setIsOpen(true);
  const closeMobileMenu = () => setIsOpen(false);

  const menuItems = [
    {
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
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
<<<<<<< HEAD
        <Bars3Icon className="h-6 border-none" />
=======
        <Bars3Icon className="h-6 border-none text-white" />
>>>>>>> master
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
<<<<<<< HEAD
            <Dialog.Panel className="fixed bottom-0 left-0 right-0 top-0 flex h-full w-full flex-col bg-white pb-6 ">
              <div className="p-4">
                <button
                  className="mb-4 flex h-11 w-11 items-center justify-center rounded-md  text-black transition-colors "
=======
            <Dialog.Panel className="fixed bottom-0 left-0 right-0 top-0 flex h-full w-full flex-col bg-black pb-6 ">
              <div className="p-4">
                <button
                  className="mb-4 flex h-11 w-11 items-center justify-center rounded-md  text-white transition-colors "
>>>>>>> master
                  onClick={closeMobileMenu}
                  aria-label="Close mobile menu"
                >
                  <XMarkIcon className="h-6" />
                </button>

                <div className=" w-full">
<<<<<<< HEAD
                  {/* <Image
                    className="mx-auto"
                    src={"https://i.imgur.com/tEUIuYd.png"}
=======
                  <Image
                    className="mx-auto"
                    src={"https://i.imgur.com/gTkbIgW.png"}
>>>>>>> master
                    alt="capenci logo"
                    height={182}
                    width={182}
                    priority
<<<<<<< HEAD
                  /> */}
=======
                  />
>>>>>>> master
                </div>

                <ul className="flex w-full flex-col">
                  {menuItems.map((menuItem, i) => (
<<<<<<< HEAD
                    <li key={i} className="py-2 text-xl text-black transition-colors hover:text-neutral-500 ">
=======
                    <li key={i} className="py-2 text-xl text-white transition-colors hover:text-neutral-500 ">
>>>>>>> master
                      {/* <Link href={`/${menuItem}`} onClick={closeMobileMenu}>
                        {menuItem.name}
                      </Link> */}
                      {/* <MenuItem
                        MenuItemName={menuItem.name}
                        subPages={menuItem.subPages}
                        href={menuItem.href}
                      /> */}
                      {menuItem.name}
                    </li>
                  ))}

                  {/* <li className="py-2 text-xl text-black transition-colors hover:text-neutral-500 ">
                    <Link href="/" onClick={closeMobileMenu}>
                      HOME
                    </Link>
                  </li> */}
                </ul>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}
