import React from "react";
import MarqueeEffect from "./MarqueeEffect";

const Marquee = () => {
  return (
    <div className="mt-10 lg:mt-24 mask-x-from-70%  w-full overflow-x-hidden  ">
      <MarqueeEffect>
        <div className="flex w-max marquee-effect-left">
          {Array.from({ length: 14 }).map((_, index) => (
            <span key={index} className="text-3xl lg:text-8xl  font-bold mr-4 ">
              {" "}
              We deliver excellence.
            </span>
          ))}
        </div>
      </MarqueeEffect>
    </div>
  );
};

export default Marquee;
