import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

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
    <Link
      to={link}
      className="border group md:w-96 rounded-xl hover:bg-[#0d1e21] hover:text-white transition-all duration-300 ease-in overflow-hidden flex  p-4 flex-col gap-6 group"
    >
      <div className="h-70 lg:h-44 overflow-hidden rounded-lg ">
        <img
          src={image}
          alt={title}
          className="w-full h-full service-img object-cover rounded-lg"
        />
      </div>

      <div className="flex flex-col  gap-2">
        <div className="flex items-center justify-between gap-3">
          {icon}
          <IoIosArrowRoundForward className="-rotate-45 group-hover:rotate-0 transition-transform duration-300 ease-in-out -translate-y-5 text-4xl" />
        </div>
        <h2 className="font-bold">{title}</h2>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default ServiceCard;
