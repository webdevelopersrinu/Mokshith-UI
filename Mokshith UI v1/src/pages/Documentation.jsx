export default function Documentation() {
    return (
      <div className="flex flex-col md:flex-row h-screen bg-white text-gray-900">
        {/* Sidebar */}
        <aside className="w-full md:w-64 bg-gray-100 p-4 md:h-screen">
          <h2 className="text-xl font-bold">Mokshith UI Documentation</h2>
          <nav className="mt-4">
            <ul>
              <li className="py-2 text-gray-700 hover:text-blue-500">Introduction</li>
              <li className="py-2 text-gray-700 hover:text-blue-500">Installation</li>
              <li className="py-2 text-gray-700 hover:text-blue-500">Usage Guide</li>
              <li className="py-2 text-gray-700 hover:text-blue-500">Buttons</li>
              <li className="py-2 text-gray-700 hover:text-blue-500">Modals</li>
              <li className="py-2 text-gray-700 hover:text-blue-500">Forms</li>
              <li className="py-2 text-gray-700 hover:text-blue-500">Accessibility</li>
              <li className="py-2 text-gray-700 hover:text-blue-500">Dark Mode</li>
              <li className="py-2 text-gray-700 hover:text-blue-500">Animations</li>
            </ul>
          </nav>
        </aside>
  
        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <h1 className="text-3xl font-bold">Mokshith UI Documentation</h1>
          <p className="text-gray-600 mt-2">Lightweight, Fast, and Copy-Paste UI Components for Tailwind CSS</p>
  
          {/* Introduction Section */}
          <section className="mt-6">
            <h2 className="text-2xl font-semibold">Introduction</h2>
            <p className="text-gray-700 mt-2">
              Mokshith UI is a collection of beautifully designed, accessible UI components.
              No Installation needed—just copy the code and start using it in your Tailwind CSS projects.
            </p>
            <div className="bg-blue-100 text-blue-800 p-4 mt-3 rounded-md">
              <strong>Zero Installation:</strong> Mokshith UI requires no package installation. Simply copy the component code and use it with Tailwind CSS.
            </div>
          </section>
  
          {/* Installation Section */}
          <section className="mt-6">
            <h2 className="text-2xl font-semibold">Installation</h2>
            <div className="bg-gray-200 p-4 rounded-md mt-3">
              <code className="text-sm text-gray-800">
                module.exports = {'{'}
                <br />
                &nbsp;&nbsp;content: [&quot;./src/**/*.{"{js,jsx,ts,tsx}"}&quot;],
                <br />
                &nbsp;&nbsp;theme: {'{'} extend: {}, {'}'},
                <br />
                &nbsp;&nbsp;plugins: [],
                <br />
                {'}'}
              </code>
            </div>
            <p className="text-gray-600 mt-2">
              No npm packages required! Just make sure Tailwind CSS is set up in your project.
            </p>
          </section>
  
          {/* Example Component */}
          <section className="mt-6">
            <h2 className="text-2xl font-semibold">Example Component</h2>
            <div className="mt-3 bg-white p-4 rounded-md shadow-md">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Click me
              </button>
            </div>
            <div className="bg-gray-200 p-4 rounded-md mt-3">
              <code className="text-sm text-gray-800">
                {`<button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">`}
                <br />
                &nbsp;&nbsp;Click me
                <br />
                {`</button>`}
              </code>
            </div>
          </section>
  
          {/* CTA */}
          <div className="mt-6 bg-blue-600 p-6 rounded-md text-center text-white">
            <h3 className="text-xl font-bold">Start Using Mokshith UI Today</h3>
            <p className="mt-2">Beautiful, accessible components for your next project.</p>
            <div className="mt-4 flex justify-center gap-4">
              <button className="bg-white text-blue-600 px-4 py-2 rounded-md font-semibold">Browse Components</button>
              <button className="bg-blue-800 text-white px-4 py-2 rounded-md font-semibold">View Playground</button>
            </div>
          </div>
        </main>
      </div>
    );
  }