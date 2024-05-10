"use client";

import Link from "next/link";
import { useState } from "react";
import Sidebar from "../Sidebar";
import ToggleSidebar from "@/components/elements/global/Navbar/ToggleSidebar";
import { usePathname } from "next/navigation";
import { useUser } from "@clerk/nextjs";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { user, isSignedIn, isLoaded } = useUser();

  const pathname = usePathname();

  if (pathname === "/sign-in") {
    return null;
  }

  return (
    <nav className="bg-white shadow-md px-4 py-4 sm:px-8 max-w-[1440px] w-full mx-auto ">
      <div className="mx-auto w-full flex items-center justify-between h-14">
        <Link href="/" className="text-3xl font-bold text-black">
          Interact<span className="text-[#1D9BF0]">Hub</span>
        </Link>
        <Sidebar
          menuOpen={menuOpen}
          pathname={pathname}
          isLoaded={isLoaded}
          isSignedIn={isSignedIn || false}
          user={user}
        />

        <ToggleSidebar
          menuOpen={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
