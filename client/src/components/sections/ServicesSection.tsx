import React from "react";
import { MdOutlineEngineering } from "react-icons/md";
import { PiTractorLight } from "react-icons/pi";
import { PiBuildingOfficeLight } from "react-icons/pi";
import { AiOutlineGlobal } from "react-icons/ai";
import { BsBoxSeam } from "react-icons/bs";
import { Button } from "../ui/button";
import { IoIosArrowRoundForward } from "react-icons/io";
import ServiceCard from "../ServiceCard";

export const servicesData = [
  {
    icon: <MdOutlineEngineering className="text-3xl" />,
    title: "Construction & Engineering",
    description:
      "Delivering quality infrastructure with expert design and planning.",
    servicesProvided: [
      "Planning and Design",
      "Project Management",
      "Site Supervision",
      "Material & Resource Management",
    ],
    image: "/construction.jpg",
    link: "",
  },
  {
    icon: <PiTractorLight className="text-3xl" />,
    title: " Agro-Allied Services",
    description:
      "Supporting modern agriculture with machinery and innovative solutions.",
    servicesProvided: [
      "Agrochemicals",
      "Agricultural Machinery",
      "Food Processing",
      "Farm input Supply",
    ],
    image: "/agro.jpg",
    link: "",
  },
  {
    icon: <BsBoxSeam className="text-3xl" />,
    title: "General Supplies",
    description:
      "Providing diverse, high-quality materials and equipment for every industry.",
    servicesProvided: [
      "Project Planning and Feasibility",
      "Design and Permitting",
      "Construction Management",
      "Property Management",
    ],
    image: "/supplies.jpg",
    link: "",
  },

  {
    icon: <AiOutlineGlobal className="text-3xl" />,
    title: "Import & Export",
    description:
      "Connecting markets globally with reliable trade and logistics services.",
    servicesProvided: [
      "Trade Barriers",
      "Trade Balance",
      "Net Exports",
      "Providing Security",
    ],
    image: "/exports.jpg",
    link: "",
  },
  {
    icon: <PiBuildingOfficeLight className="text-3xl" />,
    title: "Property Development & Management",
    description:
      "From planning to maintenance — we build and manage properties efficiently.",
    servicesProvided: [
      "Broad Product Range",
      "Office & Business Supplies",
      "Procurement & Logistics",
      "Construction and Building Supplies",
    ],
    image: "/property.jpg",
    link: "",
  },
];
const ServicesSection = () => {
  return (
    <section className="flex flex-col gap-6 items-center justify-center h-full py-10 px-4 lg:px-20">
      <div className="border rounded-full p-2 px-4 shadow-md">
        <p className="text-sm">BUILT FOR BUSINESS SOLUTIONS</p>
      </div>
      <p className="text-2xl font-bold lg:text-3xl  text-center">
        We offer a wide range of <br className="hidden md:flex" /> services &
        solution
      </p>
      <div className="max-xl:hidden flex flex-col lg:flex-row gap-2  h-full 2xl:container 2xl:mx-auto">
        <div className="h-full  lg:w-2/3">
          <div className="border rounded-xl h-full  overflow-hidden flex w-full p-4 flex-col gap-6 group">
            <div className="h-70 md:h-96 lg:h-[538px] overflow-hidden rounded-lg ">
              <img
                src={"/property.jpg"}
                alt={"property"}
                className="w-full h-full object-cover rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
            </div>

            <div className="flex flex-col  gap-2">
              <div className="flex items-center justify-between gap-3">
                <MdOutlineEngineering className="text-4xl" />
                <IoIosArrowRoundForward className="-rotate-45 -translate-y-5 text-4xl" />
              </div>
              <h2 className="font-bold lg:text-xl">
                Property Development & Management"
              </h2>
              <p className="lg:text-lg">
                Turning visions into reality through innovative development and
                intelligent property solutions
              </p>
            </div>
          </div>
        </div>
        <div className="hidden xl:grid grid-cols-2  gap-4 w-full">
          {servicesData.slice(0, 4).map((service, index) => (
            <div className="h-full" key={index}>
              <ServiceCard
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
      <div className="xl:hidden flex flex-wrap items-center justify-center  gap-4 w-full">
        {servicesData.map((service, index) => (
          <div className="h-full" key={index}>
            <ServiceCard
              title={service.title}
              description={service.description}
              image={service.image}
              link={service.link}
              icon={service.icon}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
