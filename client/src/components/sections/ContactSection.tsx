import React from "react";
import { Button } from "../ui/button";
import { IoLayersOutline } from "react-icons/io5";

const ContactSection = () => {
  return (
    <section className="flex relative min-h-[600px] lg:min-h-[800px]  flex-col lg:gap-10 overflow-hidden  mx-auto items-center justify-center p-10 lg:px-20">
      <div className=" absolute z-0  -top-10 -right-20 md:-top-30 md:-right-40">
        <IoLayersOutline className="text-[200px] md:text-[400px] xl:text-[600px] text-[#0d1e21]/20" />
      </div>
      <div className="absolute z-0 -bottom-[2rem] -left-20 md:-bottom-[11rem] md:-left-40">
        <IoLayersOutline className="text-[200px] md:text-[400px] xl:text-[600px] text-[#0d1e21]/20" />
      </div>
      <div className="lg:max-w-3xl lg:mx-auto flex flex-col gap-6 lg:gap-10 items-center justify-center">
        <h2 className="text-2xl lg:text-6xl font-bold tracking-tight text-center">
          Ready to Work With Us?
        </h2>
        <p className="lg:text-2xl text-center">
          Contact us today to discuss your requirements and see how our
          expertise can deliver outstanding results.
        </p>
        <div className="flex items-center gap-3">
          <Button className="p-6 font-bold lg:text-lg">Contact Us</Button>
          <Button className="p-6 font-bold lg:text-lg">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
