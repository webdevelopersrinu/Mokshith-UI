import React from "react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Frontend Developer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    feedback:
      "Mokshith UI has dramatically improved my development workflow. The components are clean and easy to customize.",
  },
  {
    name: "Michael Roberts",
    role: "Tech Lead",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    feedback:
      "The best Tailwind component library I've used. It's lightweight and the documentation is excellent.",
  },
  {
    name: "Emily Parker",
    role: "UI Designer",
    image: "https://randomuser.me/api/portraits/women/46.jpg",
    feedback:
      "Perfect balance of flexibility and convenience. It's become an essential part of our design system.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 px-6 md:px-12 lg:px-20 bg-gray-50">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          Loved by Developers
        </h2>
        <p className="mt-2 text-gray-600 text-xl">
          Here's what people are saying about Mokshith UI
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white border rounded-xl p-6 flex flex-col"
          >
            <div className="flex items-center gap-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="text-base font-semibold text-gray-900">
                  {testimonial.name}
                </h3>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
            <p className="mt-4 text-base text-gray-600">
              {testimonial.feedback}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

