import React from "react";

const FeatureSection = () => {
  const features = [
    {
      icon: "👨‍💻",
      title: "No Installation Required",
      description:
        "Just use Tailwind CSS classes, no extra dependencies needed",
    },
    {
      icon: "⚡",
      title: "Fast & Lightweight",
      description: "Optimized for performance with minimal overhead",
    },
    {
      icon: "🖌",
      title: "Fully Customizable",
      description: "Modify components using Tailwind utility classes",
    },
    {
      icon: "✨",
      title: "Copy-Paste Ready",
      description: "Pre-built components ready for your projects",
    },
  ];

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          Everything you need to build modern UIs
        </h2>
        <p className="mt-2 text-gray-600">
          Carefully crafted components for your Tailwind CSS projects
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-xl"
          >
            <div className="text-blue-600 text-3xl">{feature.icon}</div>
            <h3 className="mt-4 text-xl font-semibold text-gray-900">
              {feature.title}
            </h3>
            <p className="mt-2 text-gray-600 text-base">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
