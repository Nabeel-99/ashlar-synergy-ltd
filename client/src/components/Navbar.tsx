import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { Button } from "./ui/button";
import { IoIosArrowRoundForward } from "react-icons/io";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className=" backdrop-blur-3xl md:bg-[#0d1e21] p-2 px-4 lg:p-4 max-sm:fixed w-full top-0 right-0 left-0 z-50  lg:px-16 ">
      <div className="2xl:container 2xl:mx-auto flex items-center justify-between">
        <div>
          <img
            src="/logo4.jpeg"
            alt="logo"
            className="w-12 h-12 lg:w-16 lg:h-16 object-cover"
          />
        </div>
        <div className="hidden md:flex items-center gap-10">
          <div className="border bg-white p-1.5 rounded-lg px-6">
            <ul className="flex items-center gap-10">
              <li>Home</li>
              <li>Services</li>
              <li>About</li>
            </ul>
          </div>
          <div className="">
            <button
              type="button"
              className="flex items-center  p-1.5 bg-[#FFC72C] text-black  hover:bg-[#ffc72c]/90 cursor-pointer px-4 rounded-lg gap-1"
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
            className="border p-1.5 rounded-md bg-[#FFC72C] border-black/10"
          >
            {isOpen ? (
              <IoCloseOutline className="text-2xl" />
            ) : (
              <CiMenuFries className="text-2xl" />
            )}

            <span className="sr-only">Menu</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
