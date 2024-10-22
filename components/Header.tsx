import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Bars3Icon,
  UserIcon,
  ChartBarIcon,
  BuildingStorefrontIcon,
  EnvelopeIcon as EnvelopeIconOutline,
} from "@heroicons/react/24/outline";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { useOutsideClick } from "~~/hooks";
import { useRouter } from "next/router";
import { LinkedinLogo } from '~~/public/assets/svg/LinkedinLogo';

interface HeaderMenuLink {
  label: string;
  section: string;
  icon?: React.ReactNode;
  href?: string;
}

export const menuLinks: HeaderMenuLink[] = [
  {
    label: "Biography",
    section: "home",
    icon: <UserIcon className="h-4 w-4" />,
    href: "/",
  },
  {
    label: "Investments",
    section: "investments",
    icon: <ChartBarIcon className="h-4 w-4" />,
    href: "/investments",
  },
  {
    label: "AS INFOR",
    section: "asinfor",
    icon: <BuildingStorefrontIcon className="h-4 w-4" />,
    href: "/asinfor",
  },
  {
    label: "Contact",
    section: "contact",
    icon: <EnvelopeIconOutline className="h-4 w-4" />,
  },
];

export const HeaderMenuLinks = () => {
  const router = useRouter();
  const [isActive, setIsActive] = useState({
    home: false,
    asinfor: false,
    investissements: false,
    contact: false,
  });

  useEffect(() => {
    const path = router.pathname;
    setIsActive({
      home: path === "/",
      asinfor: path === "/asinfor",
      investissements: path === "/investissements",
      contact: false, // Assuming contact is always on the main page
    });
  }, [router.pathname]);

  return (
    <>
      {menuLinks.map(({ label, section, icon, href }) => {
        const content = (
          <span className={`${isActive[section as keyof typeof isActive] ? "text-accent-content underline decoration-sky-500 decoration-2" : ""
            } hover:underline hover:decoration-sky-500 cursor-pointer py-1.5 px-3 text-sm rounded-full gap-2 grid grid-flow-col`}>
            {icon}
            <span>{label}</span>
          </span>
        );

        return (
          <li key={section}>
            {href ? (
              <Link href={href} passHref>
                {content}
              </Link>
            ) : (
              <span
                onClick={() => {
                  document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {content}
              </span>
            )}
          </li>
        );
      })}
    </>
  );
};

export const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const burgerMenuRef = useRef<HTMLDivElement>(null);
  useOutsideClick(
    burgerMenuRef,
    useCallback(() => setIsDrawerOpen(false), []),
  );

  return (
    <div className="fixed top-0 navbar bg-base-100 min-h-0 flex-shrink-0 justify-between z-20 shadow-md shadow-secondary px-0 sm:px-2">
      <div className="navbar-start w-auto ">
        <div className="lg:hidden dropdown" ref={burgerMenuRef}>
          <label
            tabIndex={0}
            className={`ml-1 btn btn-ghost ${isDrawerOpen ? "hover:underline hover:decoration-sky-500" : "hover:bg-white"}`}
            onClick={() => {
              setIsDrawerOpen(prevIsOpenState => !prevIsOpenState);
            }}
          >
            <Bars3Icon className="h-1/2" />
          </label>
          {isDrawerOpen && (
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 rounded-box w-52 bg-base-100 focus:bg-white"
              onClick={() => {
                setIsDrawerOpen(false);
              }}
            >
              <HeaderMenuLinks />
            </ul>
          )}
        </div>
        <Link href="/" passHref className="hidden lg:flex items-center gap-2 ml-4 mr-6 shrink-0">
          <div className="flex flex-col">
            <span className="font-bold leading-tight">Laurent Balayre</span>
            <span className="text-xs">Entrepreneur</span>
          </div>
        </Link>
        <ul className="hidden lg:flex lg:flex-nowrap  menu-horizontal focus:bg-white px-1 gap-2">
          <HeaderMenuLinks />
        </ul>
      </div>
      <div className="flex text-center pr-10">
        <a
          href="mailto:laurent@balayre.com"
          target="_blank"
          rel="noopener noreferrer"
          className="transition flex text-primary-content hover:text-base-200 pr-10"
          aria-label="Email of Laurent Balayre"
        >
          <EnvelopeIcon className="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/laurentbalayre/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition flex text-primary-content hover:text-base-200"
          aria-label="Linkedin of Laurent Balayre"
        >
          <LinkedinLogo className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};