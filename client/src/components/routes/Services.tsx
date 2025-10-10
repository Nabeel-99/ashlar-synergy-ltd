import { IoLayersOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { servicesData } from "../sections/ServicesSection";
import { Button } from "../ui/button";
import Marquee from "../Marquee";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Services = () => {
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "service-page",
          start: "top 80%",
        },
      })
      .from(".our-service", {
        y: 50,
        duration: 0.8,
        opacity: 0,
      })
      .from(
        ".service-page-text",
        {
          opacity: 0,
          y: 50,
          duration: 0.8,
        },
        "-=0.5"
      );

    gsap.utils.toArray<HTMLElement>(".service-page-card").forEach((card) => {
      const img = card.querySelector(".service-page-img");
      const content = card.querySelector(".service-page-content");
      const points = card.querySelectorAll(".service-page-point");
      const link = card.querySelector(".service-link");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
      });

      tl.from(card, {
        opacity: 0,
        x: 50,
        duration: 0.8,
      })
        .from(img, {
          opacity: 1,
          x: 0,
          duration: 0.8,
        })
        .from(
          content,
          {
            opacity: 0,
            x: 50,
            duration: 0.8,
          },
          "<"
        )
        .from(
          points,
          {
            opacity: 0,
            x: 10,
            stagger: 0.2,
            duration: 0.8,
          },
          "-=0.6"
        )
        .from(
          link,
          {
            opacity: 0,
            x: 10,
            duration: 0.8,
          },
          "<"
        );
    });
  });
  return (
    <div className="flex flex-col  gap-10 h-full service-page overflow-hidden">
      <section className="min-h-[300px] text-white bg-[#0d1e21] w-full flex flex-col items-center justify-center gap-4  z-20 overflow-hidden">
        <div className="relative w-full 2xl:container 2xl:mx-auto flex flex-col gap-4 items-center justify-center ">
          <div className="max-sm:hidden absolute top-10 right-0  xl:right-28   z-0 -translate-y-44">
            <IoLayersOutline className="text-[400px] lg:text-[600px] text-[#f4f4f4]/10" />
          </div>
          <h2 className="bg-clip-text our-service lg:text-center bg-gradient-to-r from-white from-50% to-white/30  text-transparent text-3xl lg:text-6xl  font-bold tracking-tight">
            Our Services
          </h2>
          <p className="text-center service-page-text lg:text-lg md:max-w-xl">
            {/* Delivering reliable and high-quality solutions across multiple
          sectors. */}
            Discover our comprehensive range of services across multiple
            sectors, designed to meet your diverse business needs with
            excellence and reliability.
          </p>
        </div>
      </section>
      <section className="flex flex-col services-container  px-4 lg:px-20 2xl:container 2xl:mx-auto">
        {servicesData.map((service, index) => (
          <div
            className="flex service-page-card flex-col gap-10 lg:flex-row lg:gap-20 border-t py-10"
            key={index}
          >
            <div className="lg:w-1/2 service-page-img group overflow-hidden rounded-lg">
              <img
                src={service.image}
                alt=""
                className="rounded-lg   aspect-square w-full h-80 lg:h-[400px] object-cover group-hover:scale-115 transition-transform duration-300 ease-in-out"
              />
            </div>
            <div className="flex service-page-content flex-col gap-6 lg:w-1/2">
              {service.icon}
              <h2 className="font-bold text-lg lg:text-xl">{service.title}</h2>
              <p>{service.description}</p>
              <ul className="flex flex-col gap-2 list-disc ml-4">
                {service.servicesProvided.map((item, index) => (
                  <li key={index} className="service-page-point">
                    {item}
                  </li>
                ))}
              </ul>
              <Link to={"/"} className="service-link">
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
