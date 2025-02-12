import { Link, useLocation } from "react-router";
import CodeBlock from "../components/common/CodeBlock";
import { useEffect, useState } from "react";
import Index from "../components/Docs/Index";

const navItems = [
  {
    title: "Getting Started",
    items: [
      { name: "Introduction", path: "/introduction" },
      { name: "Installation", path: "/installation" },
      { name: "Usage Guide", path: "/usage-guide" },
    ],
  },
  {
    title: "Components",
    items: [
      { name: "Buttons", path: "/components/buttons" },
      { name: "Modals", path: "/components/modals" },
      { name: "Forms", path: "/components/forms" },
    ],
  },
  {
    title: "Advanced Topics",
    items: [
      { name: "Accessibility", path: "/advanced/accessibility" },
      { name: "Dark Mode", path: "/advanced/dark-mode" },
      { name: "Animations", path: "/advanced/animations" },
    ],
  },
];
export default function Documentation() {
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

  const location = useLocation();
  const codeSnippetTailwind = `module.exports = {
    content: [
      './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }`;
  const btnCode = `<button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
  Click me
</button>`;
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 text-gray-900">
      {/* Sidebar */}
      <aside className="hidden md:block md:w-64 h-full sticky top-0 left-0 p-4 md:h-full pt-12">
        <nav className="mt-4">
          <ul>
            {navItems.map((section) => (
              <li key={section.title}>
                <p className="py-2 text-gray-900 font-bold">{section.title}</p>
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
      <div className="w-full">
        <Index />
      </div>
      {/* Main Content */}
    </div>
  );
}
