import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdOutlineEngineering } from "react-icons/md";

type ServiceCardProps = {
  title: string;
  description: string;
  image: string;
  link: string;
  icon: any;
};
const ServiceCard = ({
  title,
  description,
  image,
  link,
  icon,
}: ServiceCardProps) => {
  return (
    <div className="border md:w-96 rounded-xl  overflow-hidden flex  p-4 flex-col gap-6 group">
      <div className="h-70 lg:h-44 overflow-hidden rounded-lg ">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
      </div>

      <div className="flex flex-col  gap-2">
        <div className="flex items-center justify-between gap-3">
          {icon}
          <IoIosArrowRoundForward className="-rotate-45 -translate-y-5 text-4xl" />
        </div>
        <h2 className="font-bold">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
