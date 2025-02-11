import React from "react";
import { assetsImg } from "../../assets/assets";

const MissionSection = () => {
  return (
    <section className="flex  flex-col-reverse  md:flex-row items-center max-w-6xl mx-auto p-6 gap-6">
      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <img
          src={assetsImg.ourMissionImg}
          alt="Dashboard analytics"
          className=" w-full h-auto"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Our Mission
        </h2>
        <p className="text-gray-700 font-medium text-xl mt-4">
          We believe that building beautiful user interfaces shouldn't be
          complicated. Our mission is to provide developers with a comprehensive
          set of pre-built components that are easy to use, highly customizable,
          and require zero installation.
        </p>
        <p className="text-gray-700 font-medium text-xl mt-1 md:mt-4">
          By leveraging the power of Tailwind CSS, we're making UI development
          faster and more efficient for everyone.
        </p>
      </div>
    </section>
  );
};

export default MissionSection;
