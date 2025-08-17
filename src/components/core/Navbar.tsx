"use client";

import { Ticket, Search } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import SignInModal from "./SignIn";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import SearchBar from "./SearchBar";

const Topbar = () => {
  const menu = [
    { name: "Features", link: "/feature" },
    { name: "Explore", link: "/explore" },
    { name: "Categories", link: "/categories" },
    { name: "Help", link: "/help" },
  ];

  return (
    <div className="bg-emerald-800 text-white text-sm h-8 flex items-center">
      <div className="max-w-screen-3xl mx-auto px-6 w-full flex justify-end">
        <div className="flex items-center gap-6 font-medium">
          {menu.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="hover:text-gray-300 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className="bg-emerald-700 w-full h-20 flex items-center shadow-md sticky top-0 z-50">
      <div className="max-w-screen-3xl mx-auto px-6 w-full flex items-center justify-between">
        {/* Logo + Search Bar container */}
        <div className="flex items-center gap-3 flex-1">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Ticket className="w-7 h-7 text-white" />
            <span className="text-white font-extrabold text-2xl tracking-wide">
              EventTix
            </span>
          </div>

          {/* Divider */}
          <div className="bg-white/40 w-px h-6 mx-2" />
          <div className="flex-1 mr-8 max-w-3xl">
            <SearchBar />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 shrink-0">
          <SignInModal />
          <div className="bg-white/40 w-px h-6" />
          <Link href="/sign-up">
            <Button
              variant="ghost"
              className="px-6 border text-black bg-emerald-50 shadow-sm font-medium transition-all hover:bg-sky-50"
            >
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

const ShowNavbar = () => {
  const pathname = usePathname();

  if (pathname === "/sign-up") return null;

  return (
    <>
      <Topbar />
      <Navbar />
    </>
  );
};

export default ShowNavbar;
