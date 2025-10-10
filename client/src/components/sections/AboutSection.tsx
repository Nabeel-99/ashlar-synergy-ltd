import { aboutDetails } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";
const AboutSection = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#about",
          start: isMobile ? "top center" : "top 80%",
        },
      })
      .from(".about-header", {
        y: 50,
        duration: 0.8,
        opacity: 0,
        ease: "power1.inOut",
      })
      .from(".about-img", {
        x: -80,
        duration: 0.8,
        opacity: 0,
      })
      .from(
        ".about-text",
        {
          x: 80,
          opacity: 0,
          duration: 0.8,
        },
        "<"
      );
    gsap.utils.toArray<HTMLElement>(".about-point").forEach((point) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: point,
            start: isMobile ? "top 50%" : "top 80%",
          },
        })
        .from(point, {
          x: 50,
          opacity: 0,
          duration: 0.8,
        });
    });
  });
  return (
    <section
      id="about"
      className="flex flex-col gap-10 lg:gap-20  py-10 lg:py-20 px-4 lg:px-20"
    >
      <div className="bg-black/20 about-header h-0.5 mb-10 lg:mb-20"></div>
      <h2 className="font-bold text-3xl lg:text-5xl about-header text-center tracking-tight">
        About our company
      </h2>
      <div className="flex flex-col  2xl:container 2xl:mx-auto lg:flex-row gap-10">
        <img
          src="about.jpg"
          alt="about"
          className="w-full about-img lg:h-[600px] object-cover rounded-xl lg:w-2/5"
        />
        <div className="flex flex-col gap-10 about-container">
          <p className="lg:text-xl about-text">
            Ashkar Synergy is a dynamic consulting and services firm providing
            innovative solutions across key industries with a focus on
            excellence, efficiency, and integrity.
          </p>
          {aboutDetails.map((item, index) => (
            <div className="border-t py-4 about-point" key={index}>
              <div className="flex gap-10">
                <span className="font-bold text-2xl text-black/40">
                  <span className="text-3xl">0</span>
                  {index + 1}.
                </span>
                <div className="flex flex-col gap-2">
                  <p className="lg:text-xl font-bold">{item.title}</p>
                  <p className="lg:text-lg">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
