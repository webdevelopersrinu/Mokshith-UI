import { Link, useLocation } from "react-router";
import CodeBlock from "../common/CodeBlock";
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
function index() {
  return (
    <main className="flex-1 pt-16 md:pt-6 p-6 bg-white border border-t-0 border-b-0 border-r-gray-200">
      <h1 className="text-2xl md:text-3xl font-bold">
        Mokshith UI Documentation
      </h1>
      <p className="text-gray-600 mt-2">
        Lightweight, Fast, and Copy-Paste UI Components for Tailwind CSS
      </p>

      {/* Introduction Section */}
      <section id="introduction" className=" mx-auto   py-6 ">
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          Introduction – Mokshith UI
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
          Mokshith UI is a{" "}
          <strong className="text-gray-900">
            modern, developer-friendly UI component library
          </strong>{" "}
          built entirely with Tailwind CSS. It provides a collection of
          pre-designed, accessible, and customizable components to help you
          build fast, responsive, and visually appealing web applications.
        </p>

        <p className="mt-4 text-gray-600 text-lg">
          Unlike other UI libraries that require installing dependencies or
          additional setup,{" "}
          <strong className="text-gray-900">
            Mokshith UI requires no installation at all
          </strong>
          —just copy the component code and paste it into your Tailwind CSS
          project. This makes it lightweight, easy to use, and fully
          customizable with Tailwind classes.
        </p>

        {/* Why Mokshith UI Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            Why Mokshith UI?
          </h2>

          <ul className="list-none space-y-4 text-gray-700 text-lg">
            <li>
              <strong>No Installation Required</strong> – No need for NPM
              packages or extra configurations. Just copy and use!
            </li>
            <li>
              <strong>Pre-Styled, Yet Fully Customizable</strong> – Built with
              Tailwind’s utility-first approach for easy styling.
            </li>
            <li>
              <strong>Lightweight & Fast</strong> – No extra JavaScript or
              dependencies, keeping your project optimized.
            </li>
            <li>
              <strong>Accessible & Responsive</strong> – Designed with a11y best
              practices and fully mobile-friendly.
            </li>
          </ul>
        </div>

        {/* Who Can Use Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            Who Can Use Mokshith UI?
          </h2>

          <ul className="list-none space-y-3 text-gray-700 text-lg">
            <li>
              Developers & Designers – Speed up UI development with AI
              assistance.
            </li>
            <li>
              Tailwind CSS Users – Prebuilt components for Tailwind projects.
            </li>
            <li> Beginners – Learn UI development with Tailwind.</li>
            <li>Teams & Startups – Scalable UI design system.</li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="mt-10 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            📢 Get Started with Mokshith UI Today!
          </h2>
          <p className="text-gray-600 text-lg">
            💡 Whether you're building a personal project, a startup MVP(Minimum
            Viable Product), or a large-scale web app, Mokshith UI saves you
            time while keeping your code clean and maintainable.
          </p>

          <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center">
            <Link
              to="/components"
              className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600"
            >
              Browse Components
            </Link>
            <Link
              to="/docs"
              className="px-6 py-3 border border-gray-600 text-gray-800 font-semibold rounded-lg hover:bg-gray-200"
            >
              Generate with AI
            </Link>
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section id="installation" className="mt-6">
        <h2 className="text-2xl font-semibold">Installation</h2>
        <div className="bg-blue-100 text-blue-800 p-4 my-3 rounded-md">
          <strong>Zero Installation:</strong> Mokshith UI requires no package
          installation. Simply copy the component code and use it with Tailwind
          CSS.
        </div>
        <p className="text-gray-600 my-2">
          No npm packages required! Just make sure Tailwind CSS is set up in
          your project.
        </p>
        <CodeBlock
          codeTitle={"tailwind.config.js"}
          codeSnippet={codeSnippetTailwind}
        />
      </section>

      {/* Example Component */}
      <section id="usage-guide" className="mt-6">
        <h2 className="text-2xl font-semibold">Usage Guide</h2>
        {/* Copy-Paste Ready Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            Copy & Paste Ready
          </h2>
          <p className="text-gray-600 text-lg">
            Mokshith UI is built for speed and simplicity. Each component
            includes:
          </p>

          <ul className="list-disc pl-5 mt-3 text-gray-700 text-lg">
            <li>Live Preview – See the component in action before using it.</li>
            <li>
              Copy Code Button – Instantly copy component code with one click.
            </li>
            <li>Show/Hide Code Feature – View and edit JSX/HTML structure.</li>
          </ul>
        </div>
        {/* How to Use Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            How to Use Mokshith UI?
          </h2>

          <p className="text-gray-600 text-lg">
            Using Mokshith UI is incredibly simple:
          </p>

          <ol className="list-decimal pl-5 mt-3 text-gray-700 text-lg">
            <li>Find a Component – Browse through the Components Library.</li>
            <li> Copy the Code – Click the "Copy Code" button.</li>
            <li>
              Paste in Your Project – Insert the copied JSX/HTML into your
              Tailwind-powered project.
            </li>
            <li>Customize as Needed – Modify styles using Tailwind classes.</li>
          </ol>
        </div>
        <h2 className="text-2xl font-semibold">Example Component</h2>
        <div className="my-3 bg-white p-4 rounded-md border border-gray-200">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Click me
          </button>
        </div>
        <CodeBlock codeTitle={"Button.css"} codeSnippet={btnCode} />
      </section>

      {/* CTA */}
      <div className="mt-6 bg-blue-600 p-6 rounded-md text-center text-white">
        <h3 className="text-xl font-bold">Start Using Mokshith UI Today</h3>
        <p className="mt-2">
          Beautiful, accessible components for your next project.
        </p>
        <div className="mt-4 flex justify-center gap-4">
          <button className="bg-white text-blue-600 px-4 py-2 rounded-md font-semibold">
            Browse Components
          </button>
          <button className="bg-blue-800 text-white px-4 py-2 rounded-md font-semibold">
            View Playground
          </button>
        </div>
      </div>
    </main>
  );
}

export default index;
