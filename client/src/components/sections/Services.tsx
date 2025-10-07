import React from "react";
import { MdOutlineEngineering } from "react-icons/md";
import { PiTractorLight } from "react-icons/pi";
import { PiBuildingOfficeLight } from "react-icons/pi";
import { AiOutlineGlobal } from "react-icons/ai";
import { BsBoxSeam } from "react-icons/bs";
import { Button } from "../ui/button";
import { IoIosArrowRoundForward } from "react-icons/io";
import ServiceCard from "../ServiceCard";

const Services = () => {
  const services = [
    // {
    //   icon: <MdOutlineEngineering />,
    //   title: "Construction & Engineering",
    //   description:
    //     "Delivering top-quality infrastructure through expert design, planning, and supervision.",
    //   image: "/construction.jpg",
    //   link: "",
    // },
    {
      icon: <PiTractorLight className="text-3xl" />,
      title: " Agro-Allied Services",
      description:
        "Supporting modern agriculture with machinery and innovative solutions.",
      image: "/agro.jpg",
      link: "",
    },
    {
      icon: <PiBuildingOfficeLight className="text-3xl" />,
      title: "Property Development & Management",
      description:
        "From planning to maintenance — we build and manage properties efficiently.",
      image: "/property.jpg",
      link: "",
    },
    {
      icon: <AiOutlineGlobal className="text-3xl" />,
      title: "Import & Export",
      description:
        "Connecting markets globally with reliable trade and logistics services.",
      image: "/exports.jpg",
      link: "",
    },
    {
      icon: <BsBoxSeam className="text-3xl" />,
      title: "General Supplies",
      description:
        "Providing diverse, high-quality materials and equipment for every industry.",
      image: "/supplies.jpg",
      link: "",
    },
  ];

  return (
    <section className="flex flex-col gap-6 items-center justify-center h-full py-10 px-4 lg:px-20">
      <div className="border rounded-full p-2 px-4 shadow-md">
        <p className="text-sm">BUILT FOR BUSINESS SOLUTIONS</p>
      </div>
      <p className="text-2xl font-bold lg:text-3xl  text-center">
        We offer a wide range of <br className="hidden md:flex" /> services &
        solution
      </p>
      <div className="flex flex-col lg:flex-row gap-2  h-full 2xl:container 2xl:mx-auto">
        <div className="h-full lg:w-2/3">
          <div className="border rounded-xl h-full  overflow-hidden flex w-full p-4 flex-col gap-6 group">
            <div className="lg:h-[538px] overflow-hidden rounded-lg ">
              <img
                src={"/construction.jpg"}
                alt={"construction"}
                className="w-full h-full object-cover rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
            </div>

            <div className="flex flex-col  gap-2">
              <div className="flex items-center justify-between gap-3">
                <MdOutlineEngineering className="text-4xl" />
                <IoIosArrowRoundForward className="-rotate-45 -translate-y-5 text-4xl" />
              </div>
              <h2 className="font-bold lg:text-xl">
                Construction & Engineering
              </h2>
              <p className="lg:text-lg">
                Delivering top-quality infrastructure through expert design,
                planning, and supervision.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1   md:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <div className="h-full">
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                image={service.image}
                link={service.link}
                icon={service.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
