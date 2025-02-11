import React from "react";
import { assetsImg } from "../../assets/assets";

const HeroSection = () => {
  return (
    <div className="flex flex-col py-6 gap-5 md:gap-0   md:flex-row items-center justify-between bg-gradient-to-r from-blue-50 to-gray-50 px-5">
      {/* Left Side Content */}
      <div className="md:w-1/2 text-center md:text-left px-8 xl:px-16 py-14 md:py-0">
        <h1 className="text-3xl xl:text-4xl font-bold text-gray-900">
          About Mokshith UI – The Future of Tailwind UI Components
        </h1>
        <p className="text-gray-600 mt-4 font-medium text-lg xl:text-xl">
          Mokshith UI is a lightweight, easy-to-use component library built with
          Tailwind CSS, designed to help developers build faster without
          installations.
        </p>
        <div className="mt-6 flex justify-center md:justify-start gap-3 flex-col lg:flex-row  ">
          <button className="bg-blue-600 text-base  text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 inline-block">
            View Components
          </button>
          <button className=" border text-base border-gray-400 px-6 py-3 ml-0 rounded-lg shadow hover:bg-gray-200 inline-block">
            Read Docs
          </button>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="md:w-1/2 flex justify-center  m-3">
        <img
          src={assetsImg.aboutContainerImg}
          alt="Hero Section"
          className="rounded-lg shadow-lg max-w-full"
        />
      </div>
    </div>
  );
};

export default HeroSection;
