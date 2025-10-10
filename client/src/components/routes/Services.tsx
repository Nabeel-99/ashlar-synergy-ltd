import { IoLayersOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { servicesData } from "../sections/ServicesSection";
import { Button } from "../ui/button";
import Marquee from "../Marquee";

const Services = () => {
  return (
    <div className="flex flex-col  gap-10 h-full">
      <section className="min-h-[300px] text-white bg-[#0d1e21] w-full flex flex-col items-center justify-center gap-4  z-20 overflow-hidden">
        <div className="relative w-full 2xl:container 2xl:mx-auto flex flex-col gap-4 items-center justify-center ">
          <div className="max-sm:hidden absolute top-10 right-0  xl:right-28   z-0 -translate-y-44">
            <IoLayersOutline className="text-[400px] lg:text-[600px] text-[#f4f4f4]/10" />
          </div>
          <h2 className="bg-clip-text lg:text-center bg-gradient-to-r from-white from-50% to-white/30  text-transparent text-3xl lg:text-6xl  font-bold tracking-tight">
            Our Services
          </h2>
          <p className="text-center lg:text-lg md:max-w-xl">
            {/* Delivering reliable and high-quality solutions across multiple
          sectors. */}
            Discover our comprehensive range of services across multiple
            sectors, designed to meet your diverse business needs with
            excellence and reliability.
          </p>
        </div>
      </section>
      <section className="flex flex-col  px-4 lg:px-20 2xl:container 2xl:mx-auto">
        {servicesData.map((service, index) => (
          <div
            className="flex flex-col gap-10 lg:flex-row lg:gap-20 border-t py-10"
            key={index}
          >
            <div className="lg:w-1/2 group overflow-hidden rounded-lg">
              <img
                src={service.image}
                alt=""
                className="rounded-lg  aspect-square w-full h-80 lg:h-[400px] object-cover group-hover:scale-115 transition-transform duration-300 ease-in-out"
              />
            </div>
            <div className="flex flex-col gap-6 lg:w-1/2">
              {service.icon}
              <h2 className="font-bold text-lg lg:text-xl">{service.title}</h2>
              <p>{service.description}</p>
              <ul className="flex flex-col gap-2 list-disc ml-4">
                {service.servicesProvided.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <Link to={"/"}>
                <Button className="cursor-pointer">Read More</Button>
              </Link>
            </div>
          </div>
        ))}
      </section>
      <Marquee />
    </div>
  );
};

export default Services;
