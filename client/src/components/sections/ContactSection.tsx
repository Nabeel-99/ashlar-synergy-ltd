import { useGSAP } from "@gsap/react";
import { Button } from "../ui/button";
import { IoLayersOutline } from "react-icons/io5";
import gsap from "gsap";
import { Link } from "react-router-dom";
const ContactSection = () => {
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#contact",
          start: "top 40%",
        },
      })
      .from(".contact-content", {
        y: 50,
        opacity: 0,
        duration: 0.8,
      })
      .from(".layer-1", {
        opacity: 0.2,
        duration: 1,
        ease: "power1.inOut",
      })
      .from(
        ".layer-2",
        {
          opacity: 0.2,
          duration: 1,
          ease: "power1.inOut",
        },
        "<"
      );
  });
  return (
    <section
      id="contact"
      className="flex relative min-h-[600px] lg:min-h-[800px]  flex-col lg:gap-10 overflow-hidden  mx-auto items-center justify-center p-10 lg:px-20"
    >
      <div className=" absolute z-0  -top-10 -right-20 md:-top-30 md:-right-40">
        <IoLayersOutline className="text-[200px] layer-1 md:text-[400px] xl:text-[600px] text-[#0d1e21]/20" />
      </div>
      <div className="absolute z-0 -bottom-[2rem] -left-20 md:-bottom-[11rem] md:-left-40">
        <IoLayersOutline className="text-[200px] layer-2 md:text-[400px] xl:text-[600px] text-[#0d1e21]/20" />
      </div>
      <div className="lg:max-w-3xl contact-content lg:mx-auto flex flex-col gap-6 lg:gap-10 items-center justify-center">
        <h2 className="text-2xl  lg:text-6xl font-bold tracking-tight text-center">
          Ready to Work With Us?
        </h2>
        <p className="lg:text-2xl text-center ">
          Contact us today to discuss your requirements and see how our
          expertise can deliver outstanding results.
        </p>
        <div className="flex items-center gap-3 ">
          <Link to={"/contact"} className="cursor-pointer">
            {" "}
            <Button className="p-6 font-bold lg:text-lg">Contact Us</Button>
          </Link>{" "}
          <Link to={"/services"}>
            <Button className="p-6 font-bold lg:text-lg">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
