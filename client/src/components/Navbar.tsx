import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { Button } from "./ui/button";
import { IoIosArrowRoundForward } from "react-icons/io";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between backdrop-blur-3xl bg-white p-2 px-4 lg:p-4 max-sm:fixed w-full top-0 right-0 left-0 z-50 2xl:container 2xl:mx-auto lg:px-16 ">
      <div>
        <img src="/logo.png" alt="logo" className="w-12 h-12 0 object-cover" />
      </div>
      <div className="hidden md:flex items-center gap-10">
        <div className="border p-1.5 rounded-lg px-6">
          <ul className="flex items-center gap-10">
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
          </ul>
        </div>
        <div className="">
          <button
            type="button"
            className="flex items-center border p-1.5 bg-black text-white px-4 rounded-lg gap-1"
          >
            <IoIosArrowRoundForward />
            <span>Get in Touch</span>
          </button>
        </div>
      </div>
      <div className="md:hidden">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="border p-1.5 rounded-md border-black/10"
        >
          {isOpen ? (
            <IoCloseOutline className="text-2xl" />
          ) : (
            <CiMenuFries className="text-2xl" />
          )}

          <span className="sr-only">Menu</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
