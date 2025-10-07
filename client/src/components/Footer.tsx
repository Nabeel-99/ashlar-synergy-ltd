import React from "react";
import { HiOutlineMailOpen } from "react-icons/hi";
import { MdOutlineLocalPhone } from "react-icons/md";
import { LuMapPin } from "react-icons/lu";
const Footer = () => {
  return (
    <footer className="flex flex-col gap-10 p-4 lg:p-20  lg:px-20 ">
      <div className="flex flex-col lg:flex-row gap-6 ">
        <div className="flex flex-col items-start text-white gap-4 p-10 rounded-lg bg-[#0d1e21] lg:w-1/2">
          <div className="flex flex-col gap-4  justify-start">
            <img
              src="/logo4.jpeg"
              alt="logo"
              className="h-30 w-30 object-cover"
            />
            <p className="text-sm">
              A diversified multi-sector company delivering excellence across
              construction, agriculture, property development, international
              trade, and general supplies.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <MdOutlineLocalPhone />
              <span>+234 901 234 5678</span>
            </div>
            <div className="flex items-center gap-2">
              <HiOutlineMailOpen />
              <span>ashkarsynergy@yahoo.com</span>
            </div>

            <div className="flex items-center gap-2">
              <LuMapPin />
              <span>Abuja, Nigeria</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between p-10 rounded-lg bg-[#f4f4f4] text-black lg:w-full">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
            <div className="flex flex-col gap-2">
              <p className="font-bold">Our Services</p>
              <ul className="flex flex-col gap-3 mt-4">
                <li>Construction & Engineering</li>
                <li>Agro-Allied Services</li>

                <li>Import & Export</li>
                <li>General Supplies</li>
                <li>Property Development & Management</li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold">Quick Links</p>
              <ul className="flex flex-col gap-3 mt-4">
                <li>Home</li>
                <li>Services</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <p className="text-sm mt-10 lg:mt-0">
            &copy; 2025 Ashkar Synergy Limited. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
