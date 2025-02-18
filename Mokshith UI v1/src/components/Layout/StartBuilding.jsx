export default function StartBuilding() {
  return (
    <section className="bg-gradient-to-r from-[#2563EB] to-[#4F46E5] text-white py-16 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          Start Building with Mokshith UI!
        </h1>
        <p className="text-lg sm:text-xl mb-6">
          Instantly generate, customize, and deploy stunning UI components with
          AI-driven efficiency.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-blue-600 font-normal py-2 px-6 rounded-lg shadow-md hover:bg-gray-100">
            Generate with AI
          </button>
          <button className="border border-white text-white font-normal py-2 px-6 rounded-lg hover:bg-white hover:text-blue-600">
            View Documentation
          </button>
        </div>
      </div>
    </section>
  );
}
