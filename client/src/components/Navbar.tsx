import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useGSAP(() => {
    if (isOpen) {
      gsap.from(".burger-menu", {
        opacity: 0,
        y: -50,
      });
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);
  return (
    <nav className="  bg-[#0d1e21] p-2 px-4 lg:p-4  w-full  z-50  lg:px-16 relative">
      <div className="2xl:container 2xl:mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="flex flex-col items-center text-white z-20 justify-center"
        >
          <img
            src="/logo.png"
            alt="logo"
            className="w-12 h-12 lg:w-16 lg:h-16 object-cover"
          />
          {/* <span className="text-[7.6px]">ASHKAR</span>
          <span className="text-[6.1px]">SYNERGY LIMITED</span> */}
        </Link>
        <div className="hidden md:flex items-center gap-10">
          <div className=" bg-[#1c3135] text-white p-1.5 rounded-lg px-6">
            <ul className="flex items-center gap-10">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
          <div className="">
            <Link to={"/contact"}>
              <button
                type="button"
                className="flex items-center  p-1.5 bg-[#FFC72C] text-black  hover:bg-[#ffc72c]/90 cursor-pointer px-4 rounded-lg gap-1"
              >
                <IoIosArrowRoundForward />
                <span>Get in Touch</span>
              </button>
            </Link>
          </div>
        </div>
        <div className="md:hidden z-20">
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="border p-1.5  rounded-md bg-[#FFC72C] border-black/10"
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
      {isOpen && (
        <div className="absolute burger-menu inset-0  backdrop-blur-2xl text-white h-screen w-full">
          <div className="px-4 mt-20 h-full w-full">
            <ul className="flex flex-col text-lg  gap-6">
              <li>
                <Link onClick={() => setIsOpen(false)} to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link onClick={() => setIsOpen(false)} to="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link onClick={() => setIsOpen(false)} to="/about">
                  About
                </Link>
              </li>
            </ul>

            <div className="mt-6 w-full">
              <Link to="/contact">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center w-full text-center justify-center  p-2.5 bg-[#FFC72C] text-black  hover:bg-[#ffc72c]/90 cursor-pointer px-4 rounded-lg gap-1"
                >
                  <IoIosArrowRoundForward />
                  <span>Get in Touch</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
