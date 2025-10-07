// FFC72C gold
// 006400 green
import { VscLayers } from "react-icons/vsc";
import { IoLayersOutline } from "react-icons/io5";
const Hero = () => {
  return (
    <section className="flex  flex-col lg:px-20 bg-[#0d1e21] text-white pt-20 py-8 px-4 gap-4 lg:gap-10 z-20">
      <div className="flex flex-col 2xl:container 2xl:mx-auto gap-4 lg:flex-row lg:justify-between items-end">
        <div className=" lg:w-2/5">
          <img
            src="/hero.jpg"
            alt="hero"
            className="rounded-lg w-full h-full lg:h-[500px]  object-cover"
          />
        </div>
        <div className="flex flex-col gap-3 lg:w-1/2">
          <div className="hidden md:flex absolute z-0 -top-10">
            <IoLayersOutline className="text-[600px] text-[#f4f4f4]/10" />
          </div>
          <p className="text-lg lg:text-center lg:text-xl">
            Ashkar Synergy delivers comprehensive business solutions with
            unwavering commitment to excellence, innovation, and sustainable
            growth.
          </p>
        </div>
      </div>
      <p className="bg-clip-text lg:text-center bg-gradient-to-r from-white to-white/30 to-70% text-transparent text-3xl lg:text-6xl lg:leading-[100px]  font-bold tracking-tight">
        Sustainable Solutions for Businesses
      </p>
    </section>
  );
};

export default Hero;
