import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";

const navItems = [
  {
    title: "Getting Started",
    items: [
      { name: "Introduction", path: "#introduction" },
      { name: "Installation", path: "#installation" },
      { name: "Usage Guide", path: "#usage-guide" },
    ],
  },
  // {
  //   title: "Components",
  //   items: [
  //     { name: "Buttons", path: "/components/buttons" },
  //     { name: "Modals", path: "/components/modals" },
  //     { name: "Forms", path: "/components/forms" },
  //   ],
  // },
  // {
  //   title: "Advanced Topics",
  //   items: [
  //     { name: "Accessibility", path: "/advanced/accessibility" },
  //     { name: "Dark Mode", path: "/advanced/dark-mode" },
  //     { name: "Animations", path: "/advanced/animations" },
  //   ],
  // },
];

function SideBar() {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        root: null,
        threshold: 0.4, // Adjust the threshold for when a section is considered "in view"
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
  return (
    <div className=" fixed w-full  md:sticky left-0 top-0">
      <aside className="w-full md:w-40 h-full bg-gray-50 md:bg-transparent p-4 md:h-full md:pt-12 ">
        <nav className="mt-4">
          <ul>
            {navItems.map((section) => (
              <li key={section.title} className="flex items-center justify-center pt-8 gap-8   md:block">
                <p className=" hidden md:block py-2 text-gray-900 font-bold">{section.title}</p>
                {section.items.map((item) => (
                  <li key={item.path}>
                    <a
                      href={item.path}
                      className={`py-2 block ${
                        activeSection === item.path.substring(1) // Remove '#' for comparison
                          ? "text-blue-500 font-bold"
                          : "text-gray-700 hover:text-blue-500"
                      }`}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
}

export default SideBar;
