import React from "react";
import FourColGrid from "../common/FourColGrid";

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
    <FourColGrid
      title1={"Everything you need to build modern UIs"}
      title2={"Carefully crafted components for your Tailwind CSS projects"}
      gridData={features}
    />
  );
};

export default FeatureSection;
