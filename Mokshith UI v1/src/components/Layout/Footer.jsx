import { FaGithub, FaTwitter, FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-white text-lg font-semibold">
            Mokshith <span className="text-blue-500">UI</span>
          </h2>
          <p className="mt-2">
            A lightweight UI component library built with Tailwind CSS
          </p>
        </div>
        <div>
          <h3 className="text-white text-sm font-semibold">Resources</h3>
          <ul className="mt-2 space-y-1">
            <li>
              <a href="#" className="hover:text-white">
                Documentation
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Components
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Examples
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Templates
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white text-sm font-semibold">Company</h3>
          <ul className="mt-2 space-y-1">
            <li>
              <a href="#" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white text-sm font-semibold">Legal</h3>
          <ul className="mt-2 space-y-1">
            <li>
              <a href="#" className="hover:text-white">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Terms
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                License
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8 flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6">
        <p className="text-sm">&copy; 2024 Mokshith UI. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-gray-400 hover:text-white">
            <FaGithub size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaDiscord size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
