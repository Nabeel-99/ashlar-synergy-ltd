import { useGSAP } from "@gsap/react";
import Marquee from "../Marquee";
import { IoLayersOutline } from "react-icons/io5";
import gsap from "gsap";
const About = () => {
  const chooseDetails = [
    {
      title: "Sustainable Impact",
      description:
        "Delivering solutions that create long-term value for businesses and communities.",
      image: "/impact.jpg",
    },
    {
      title: "Tailored Solutions",
      description:
        "Specialized approaches designed to fit each client’s unique needs and goals.",
      image: "/solution.jpg",
    },
    {
      title: "Commitment to Quality",
      description:
        "We uphold the highest standards in service delivery and project execution.",
      image: "/inspection.jpg",
    },
  ];

  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".about-page",
          start: "top 80%",
        },
      })
      .from(".about-page-header", {
        y: 50,
        opacity: 0,
        duration: 0.8,
      })
      .from(
        ".about-page-text",
        {
          opacity: 0,
          y: 50,
          duration: 0.8,
        },
        "-=0.5"
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".about-page-container",
          start: "top 80%",
        },
      })
      .from(
        ".about-page-img",
        {
          y: 60,
          opacity: 0,
        },
        "+=0.5"
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".about-page-content",
          start: "top 50%",
        },
      })
      .from(".about-page-images", {
        y: 100,
        opacity: 0,
        duration: 0.8,
      })
      .from(
        ".about-page-point-header",
        {
          y: 50,
          opacity: 0,
          duration: 0.8,
        },
        "<"
      )
      .from(
        ".about-page-point p",
        {
          stagger: 0.2,
          y: 100,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.8"
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".choose-us-section",
          start: "top 60%",
        },
      })
      .from(".choose-us-section", {
        y: 100,
        opacity: 0,
        duration: 0.8,
      })
      .from(
        ".choose-us-header",
        {
          y: 50,
          opacity: 0,
          duration: 0.8,
        },
        "<"
      )
      .from(
        ".choose-us-title",
        {
          y: 50,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.5"
      );

    gsap.utils.toArray<HTMLElement>(".choose-us-content").forEach((card) => {
      const img = card.querySelector(".choose-us-img");
      const point = card.querySelector(".choose-us-point");
      gsap
        .timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 60%",
          },
        })
        .from(img, {
          x: 50,
          opacity: 0,
          duration: 0.8,
        })
        .from(
          point,
          {
            x: -50,
            opacity: 0,
            duration: 0.8,
          },
          "<"
        );
    });
  });

  return (
    <div className="flex flex-col relative  h-full about-page overflow-hidden">
      <section className="min-h-[300px]  text-white bg-[#0d1e21] w-full flex flex-col items-center justify-center gap-4  z-20 overflow-hidden">
        <div className="relative w-full 2xl:container 2xl:mx-auto flex flex-col gap-4 items-center justify-center lg:px-20 ">
          <div className="max-sm:hidden absolute top-10 right-0  xl:right-28   z-0 -translate-y-44">
            <IoLayersOutline className="text-[400px] lg:text-[600px] text-[#f4f4f4]/10" />
          </div>
          <h2 className="bg-clip-text about-page-header lg:text-center bg-gradient-to-r from-white from-50% to-white/30  text-transparent text-3xl lg:text-6xl  font-bold tracking-tight">
            About Us
          </h2>
          <p className="text-center about-page-text px-2 lg:text-lg md:max-w-xl">
            {/* Delivering reliable and high-quality solutions across multiple
        sectors. */}
            Ashkar Synergy is committed to excellence through expert solutions
            in construction, agriculture, property development, trade, and
            general supplies.
          </p>
        </div>
      </section>
      <section className="flex flex-col about-page-container items-center 2xl:container 2xl:mx-auto px-4 lg:px-20 gap-10 pb-20">
        <div className="-translate-y-10 z-30 max-w-5xl">
          <img
            src="/skyline.jpg"
            alt="skyline"
            className=" object-cover about-page-img rounded-xl"
          />
        </div>
        <div className="flex about-page-content flex-col lg:flex-row gap-10">
          <div className="flex gap-4 about-page-images h-full lg:w-1/2">
            <div>
              <img
                src="/building.jpg"
                alt="building"
                className="h-full w-full  rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col gap-5">
              <img
                src="/globe.jpg"
                alt="globe"
                className="rounded-lg  aspect-video w-full h-40 object-cover"
              />
              <img
                src="/farm.jpg"
                alt="farm"
                className="rounded-lg  aspect-square w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col items-start about-page-point   gap-6 lg:w-1/2">
            <div className="border rounded-full about-page-point-header bg-white/40 p-2 px-4 shadow-md">
              <span className="text-sm">Our Story</span>
            </div>
            <p className="font-bold  text-2xl lg:text-4xl">
              Driving Excellence Across Industries
            </p>
            <p className="leading-relaxed">
              Ashkar Synergy Limited was founded to drive impact across multiple
              industries through collaboration and excellence. Over the years,
              we’ve grown into a trusted multi-sector company known for quality,
              reliability, and innovative solutions that empower businesses and
              communities.
            </p>
            <p className="leading-relaxed">
              Our success is built on a commitment to understanding client
              needs, delivering practical solutions, and maintaining the highest
              standards of integrity. By combining expertise across
              construction, agriculture, property development, trade, and
              general supplies, we create lasting value and sustainable growth
              for our partners nationwide.
            </p>
          </div>
        </div>
      </section>
      <section className=" bg-[#f4f4f4] choose-us-section ">
        <div className="lg:px-20 gap-6 py-20 flex flex-col w-full 2xl:container 2xl:mx-auto px-4">
          <div className="flex items-center  justify-center">
            <div className="border rounded-full choose-us-header bg-white/40 p-2 px-4 shadow-md">
              <p className="text-sm">WHY CHOOSE US</p>
            </div>
          </div>

          <p className="text-3xl text-center choose-us-title lg:text-4xl tracking-tighter font-bold">
            Solutions That Deliver Results.
          </p>
          <div className="lg:mt-20">
            {chooseDetails.map((item, index) => (
              <div className=" py-4 w-full choose-us-content" key={index}>
                <div className="flex flex-col gap-2 md:flex-row md:justify-between w-full">
                  <div className="flex gap-10 w-full choose-us-point">
                    <div className="flex flex-col gap-2">
                      <p className="text-lg lg:text-xl font-bold">
                        {item.title}
                      </p>
                      <p className="lg:text-lg md:max-w-xl">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover w-full choose-us-img aspect-video md:w-96 lg:h-36 rounded-xl"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Marquee />
    </div>
  );
};

export default About;
