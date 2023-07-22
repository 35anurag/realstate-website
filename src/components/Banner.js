import React from "react";

import House from "../assets/house-banner.jpg";
import Search from "./Search";

const Banner = () => {
  return (
    <section className="h-full max-h-[640px] mb-8 xl:mb-24 bg-gradient-to-b from-[#2D499D] to-[#FFFFFF]">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="lg:ml-8 xl:ml-[80px] flex flex-col lg:flex-col items-center lg:items-start text-center lg:text-left justify-center px-4 lg:px-0 mt-8 ">
          <h1 className="font-bold text-4xl lg:text-[45px] leading-none mb-4 text-white">
            <span className="text-blue-900">Find</span> Your Dream Home Today!
          </h1>
          <p className="max-w-[500px] mb-4 text-gray-300">
            Powerful, self-serve product and growth analytics to help you convert,
            engage, and retain more.
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <img
            className="flex items-center object-fill h-[22rem] w-96 rounded-2xl"
            src={House}
            alt=""
          ></img>
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
