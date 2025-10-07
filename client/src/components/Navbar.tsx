import React from "react";
import { CiMenuFries } from "react-icons/ci";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-2 lg:p-4">
      <div>
        <img
          src="/logo.png"
          alt="logo"
          className="w-12 h-12 lg:w-20 lg:h-20 object-cover"
        />
      </div>
      <div className="hidden md:flex items-center gap-2">
        <div className="border p-2 rounded">
          <ul className="flex items-center gap-2">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
          </ul>
        </div>
        <div className=""></div>
      </div>
      <div className="md:hidden">
        <button type="button" className="border p-1.5 rounded border-black/10">
          <CiMenuFries className="text-xl" />{" "}
          <span className="sr-only">Menu</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
