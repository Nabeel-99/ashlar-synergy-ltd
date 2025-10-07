import React from "react";
import { Button } from "../ui/button";
import { IoLayersOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <section className="flex relative min-h-[800px]  flex-col gap-10 overflow-hidden  mx-auto items-center justify-center p-10 lg:px-20">
      <div className="hidden md:flex absolute z-0 -top-30 -right-40">
        <IoLayersOutline className="text-[600px] text-[#0d1e21]/20" />
      </div>
      <div className="hidden md:flex absolute z-0 -bottom-[11rem] -left-40">
        <IoLayersOutline className="text-[600px] text-[#0d1e21]/20" />
      </div>
      <div className="max-w-3xl mx-auto flex flex-col gap-10 items-center justify-center">
        <h2 className="text-6xl font-bold tracking-tight text-center">
          Ready to Work With Us?
        </h2>
        <p className="text-2xl text-center">
          Contact us today to discuss your requirements and see how our
          expertise can deliver outstanding results.
        </p>
        <div className="flex items-center gap-3">
          <Button className="p-6 font-bold text-lg">Contact Us</Button>
          <Button className="p-6 font-bold text-lg">View All Services</Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
