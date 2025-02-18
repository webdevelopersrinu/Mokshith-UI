
function FourColGrid({ title1, title2, gridData }) {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          {title1}
        </h2>
        <p className="mt-2 text-gray-600">{title2}</p>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {gridData.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-xl"
          >
            <div className="text-blue-600 text-3xl">{feature.icon}</div>
            <h3 className="mt-4 text-xl font-semibold text-gray-900">
              {feature.title}
            </h3>
            <p className="mt-2 text-gray-600 text-base">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FourColGrid;
