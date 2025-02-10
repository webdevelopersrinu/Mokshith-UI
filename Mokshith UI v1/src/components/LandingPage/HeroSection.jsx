import React from "react";
import { assetsImg } from "../../assets/assets";

const HeroSection = () => {
  return (
    <div className="flex flex-col py-4 gap-5 md:gap-0  md:py-0 md:flex-row items-center justify-between bg-gradient-to-r from-blue-50 to-purple-50 px-5">
      {/* Left Side Content */}
      <div className="md:w-1/2 text-center md:text-left px-8 xl:px-16 py-14 md:py-0">
        <h1 className="text-4xl xl:text-6xl font-semibold text-gray-900">
          Build Faster with Mokshith UI{" "}
          <span role="img" aria-label="rocket">
            🚀
          </span>
        </h1>
        <p className="text-gray-600 mt-4 font-normal">
          A lightweight, copy-paste UI component library built with Tailwind
          CSS. No installations, just Tailwind.
        </p>
        <div className="mt-6 flex justify-center md:justify-start gap-3 flex-col lg:flex-row  ">
          <button className="bg-blue-600  text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 inline-block">
            Get Started
          </button>
          <button className=" border  border-gray-400 px-6 py-3 ml-0 rounded-lg shadow hover:bg-gray-200 inline-block">
            View Components
          </button>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="md:w-1/2 flex justify-center  m-3">
        <img
          src={assetsImg.containerImg}
          alt="Hero Section"
          className="rounded-lg shadow-lg max-w-full"
        />
      </div>
    </div>
  );
};

export default HeroSection;
