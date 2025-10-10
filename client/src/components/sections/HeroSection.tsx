// FFC72C gold
// 006400 green

import { IoLayersOutline } from "react-icons/io5";
import { Button } from "../ui/button";
const HeroSection = () => {
  return (
    <section className="bg-[#0d1e21]">
      <div className="flex relative  2xl:container 2xl:mx-auto flex-col lg:px-20  text-white lg:pt-20 py-8 px-4 gap-10 lg:gap-10 z-20 overflow-hidden">
        <div className="max-sm:hidden absolute top-10 right-0  xl:right-28  z-0 -translate-y-44">
          <IoLayersOutline className="text-[400px] lg:text-[600px] text-[#f4f4f4]/10" />
        </div>
        <div className="flex flex-col 2xl:container 2xl:mx-auto gap-4 lg:flex-row lg:justify-between lg:items-end">
          <div className="w-full md:w-2/3 z-20 lg:w-2/5">
            <img
              src="/hero.jpg"
              alt="hero"
              className="rounded-lg w-full  h-full lg:h-[500px] aspect-square  object-cover"
            />
          </div>
          <div className="flex flex-col gap-6 lg:items-center  h-full  lg:w-1/2">
            <p className="text-lg md:max-w-xl lg:text-center lg:text-xl ">
              Ashkar Synergy delivers comprehensive business solutions with
              unwavering commitment to excellence, innovation, and sustainable
              growth.
            </p>
            <div className="flex lg:justify-center">
              <Button className="bg-[#FFC72C] text-black p-6 px-10 lg:text-lg font-bold hover:bg-[#ffc72c]/90 cursor-pointer">
                Explore our services
              </Button>
            </div>
          </div>
        </div>
        <p className="bg-clip-text lg:text-center bg-gradient-to-r from-white from-50% to-white/30  text-transparent text-3xl lg:text-6xl  font-bold tracking-tight">
          Sustainable Solutions for Businesses
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
