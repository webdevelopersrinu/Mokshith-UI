import React from "react";
import toast from "react-hot-toast";
import { IoIosCopy } from "react-icons/io";

const PrebuiltComponents = () => {
  const components = [
    {
      title: "Buttons",
      code: `<button class="bg-blue-600 text-white px-4 py-2 rounded-lg">Primary</button> <button class="border px-4 py-2 rounded-lg">Secondary</button>`,
      content: (
        <div className="flex gap-3 items-center justify-center">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Primary
          </button>
          <button className="border px-4 py-2 rounded-lg">Secondary</button>
        </div>
      ),
    },
    {
      title: "Badges",
      code: `<span class="bg-green-100 text-green-700 px-3 py-1 rounded-full">Success</span> <span class="bg-red-100 text-red-700 px-3 py-1 rounded-full">Error</span>`,
      content: (
        <div className="flex gap-3 items-center justify-center">
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
            Success
          </span>
          <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full">
            Error
          </span>
        </div>
      ),
    },
    {
      title: "Cards",
      code: `<div class="border p-4 mx-4 rounded-lg shadow-md bg-white"><h4 class="font-semibold">Card Title</h4><p class="text-gray-500">Card content goes here</p></div>`,
      content: (
        <div className="border p-4 mx-4 rounded-lg shadow-md bg-white">
          <h4 className="font-semibold">Card Title</h4>
          <p className="text-gray-500">Card content goes here</p>
        </div>
      ),
    },
  ];

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    toast.success(" Code copied! 🎉");
  };

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          Prebuilt Components
        </h2>
        <p className="mt-2 text-gray-600">
          Explore a variety of UI components designed for Tailwind CSS
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {components.map((comp, index) => (
          <div
            key={index}
            className="bg-white border rounded-xl border-gray-200  py-2 "
          >
            <div className="flex justify-between items-center  pb-2 px-4">
              <h3 className="text-base font-semibold ">{comp.title}</h3>
              <button
                onClick={() => copyToClipboard(comp.code)}
                className="text-gray-600 hover:text-gray-700"
                title="Copy to clipboard"
              >
                <IoIosCopy />
              </button>
            </div>
            <div className="mt-4 bg-gray-50 py-2">{comp.content}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PrebuiltComponents;
