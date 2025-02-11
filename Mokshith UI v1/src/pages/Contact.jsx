import { useState } from "react";
import { BsInfoCircle } from "react-icons/bs";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaBug, FaLinkedin } from "react-icons/fa";

function Contact() {
  const contacts = [
    {
      icon: <IoIosMail />,
      title: "Email Us",
      link: "mailto:support@mokshithui.com",
      linkText: "support@mokshithui.com",
    },
    {
      icon: <FaBug />,
      title: "Report a Bug",
      link: "https://github.com/issues",
      linkText: "Open an Issue on GitHub",
    },
    {
      icon: <FaLinkedin />,
      title: "Follow Updates",
      link: "https://twitter.com",
      linkText: "Follow us on Linkedin",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subscribe: false,
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(null);

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Full Name is required";
    if (!formData.email) tempErrors.email = "Email Address is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      tempErrors.email = "Invalid email address";
    if (!formData.message) tempErrors.message = "Message is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSuccess("Your message has been sent successfully!");
      setErrors({});
    } else {
      setSuccess(null);
    }
  };
  return (
    <div>
      {/* contact title data */}
      <section
        className="relative flex items-center justify-center py-16 px-6 sm:px-12 md:px-24 lg:px-32 bg-gradient-to-b from-blue-50
       to-white"
      >
        <div className="absolute inset-0 flex items-center justify-center -z-10">
          <div
            className="w-80 h-80  bg-gradient-to-b from-blue-50
       to-transparent rounded-full opacity-50 blur-3xl absolute left-10 top-10"
          ></div>
          <div
            className="w-80 h-80  bg-gradient-to-b from-blue-50
       to-transparent rounded-full opacity-50 blur-3xl absolute right-10 bottom-10"
          ></div>
        </div>
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Get in Touch with Us
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Have questions or feedback? Reach out, and we'll be happy to help!
          </p>
        </div>
      </section>
      {/* conatct form */}
      <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg my-7">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>
          <div>
            <label className="block font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          <div>
            <label className="block font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Type your message here..."
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="subscribe"
              checked={formData.subscribe}
              onChange={handleChange}
              className="mr-2"
            />
            <label className="text-gray-700">
              Keep me updated with Mokshith UI news and updates (optional)
            </label>
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
          >
            Send Message
          </button>
          {success && (
            <p className="text-green-600 text-center p-2 bg-green-100  border green-red-400 rounded-md flex items-center">
              <span className="mr-2 text-green-500">
                <FaRegCheckCircle />
              </span>
              {success}
            </p>
          )}
          {Object.keys(errors).length > 0 && (
            <p className="text-red-600 text-center p-2 bg-red-100 border border-red-400 rounded-md flex items-center">
              <span className="mr-2 text-red-500">
                <BsInfoCircle />
              </span>{" "}
              Please fill in all required fields.
            </p>
          )}
        </form>
      </div>
      {/* contact methods */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-16 py-10 bg-gray-50">
        {contacts.map((contact, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-4 text-center"
          >
            <div className="bg-blue-100 text-blue-600 p-3 rounded-full text-2xl">
              {contact.icon}
            </div>
            <h3 className="font-bold text-lg mt-1">{contact.title}</h3>
            <a
              href={contact.link}
              className="text-blue-500 hover:text-blue-700 mt-1 text-base font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              {contact.linkText}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;
