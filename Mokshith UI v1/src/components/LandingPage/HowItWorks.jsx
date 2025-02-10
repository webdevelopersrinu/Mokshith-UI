import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      icon: "💻", // Replace with an actual icon if using an icon library
      title: "Choose a component",
      description: "Browse our collection of pre-built components",
    },
    {
      icon: "📋",
      title: "Copy the code",
      description: "Copy the component code with a single click",
    },
    {
      icon: "📂",
      title: "Paste & customize",
      description: "Paste into your project and customize with Tailwind",
    },
  ];

  return (
    <section className="py-12 px-6 md:px-12 lg:px-20">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          How It Works
        </h2>
        <p className="mt-2 text-gray-600 text-xl font-normal">
          Get started in three simple steps
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="bg-blue-100 text-blue-600 p-4 rounded-full text-3xl">
              {step.icon}
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-900">
              {step.title}
            </h3>
            <p className="mt-2 text-gray-600 text-base font-normal">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
