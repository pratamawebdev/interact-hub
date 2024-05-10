import ButtonWithCondition from "@/components/elements/global/Navbar/ButtonWithCondition";
import { menuItems } from "@/data";
import { filterMenuItems } from "@/utils/filterMenuItems";
import Link from "next/link";
import React from "react";

type ParamsProps = {
  menuOpen: boolean;
  pathname: string;
  isLoaded: boolean;
  isSignedIn: boolean;
  user: any;
};

const Sidebar: React.FC<ParamsProps> = ({
  menuOpen,
  pathname,
  isLoaded,
  isSignedIn,
  user,
}) => {
  const filteredMenuItems = filterMenuItems(isSignedIn, menuItems);

  return (
    <div
      className={`fixed top-0 z-10 flex h-full w-[50%] flex-col justify-between bg-white px-8 pt-24 pb-10 shadow-[0_-4px_12px_rgba(0,0,0,0.12)] transition-all duration-400 dark:bg-darkColor lg:static lg:z-auto lg:h-auto lg:w-auto lg:flex-row lg:items-center lg:gap-8 lg:bg-transparent lg:p-0 lg:shadow-none lg:dark:bg-transparent ${
        menuOpen ? "right-0" : "-right-full"
      }`}
    >
      <ul className="flex flex-col items-center gap-8 mb-8 lg:mb-0 lg:flex-row">
        {filteredMenuItems.map((item, index) => {
          const isActive = pathname === item.href;
          return (
            <li key={index}>
              <Link
                href={item?.href}
                className={`relative w-fit h-10 px-4 text-base font-semibold xl:px-4 xl:text-base lg:px-1 lg:text-xs gap-x-4 group flex items-center justify-center hover:text-[#1D9BF0] text-black ${
                  isActive ? "border-b-2 border-[#1D9BF0]  border-solid" : null
                }`}
              >
                {item?.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="mx-auto flex items-center justify-center">
        <ButtonWithCondition
          isLoaded={isLoaded}
          user={user}
          isSignedIn={isSignedIn}
        />
      </div>
    </div>
  );
};

export default Sidebar;
