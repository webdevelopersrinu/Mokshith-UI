import {
  FaGithub,
  FaTwitter,
  FaCubes,
  FaBook,
  FaInfoCircle,
  FaShieldAlt,
  FaFileContract,
  FaRobot,
} from "react-icons/fa";
import { IoIosContacts } from "react-icons/io";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-700 py-8 px-6 border-t">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 md:text-left">
        {/* Brand Info */}
        <div>
          <div className="flex items-center  md:justify-start space-x-2">
            <Link to={"/"}>
              <h2 className="text-black text-lg font-semibold">
                Mokshith <span className="text-blue-500">UI</span>
              </h2>
            </Link>
          </div>
          <p className="mt-2 text-sm">
            AI-powered UI components for rapid development and seamless
            customization.
          </p>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold mb-2">Resources</h3>
          <ul className="space-y-1 text-sm">
            <li className="flex items-center space-x-2">
              <FaCubes className="text-gray-700" />
              <Link to="/" className="hover:text-blue-500">
                Components
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <FaBook className="text-gray-700" />
              <Link to="/docs" className="hover:text-blue-500">
                Documentation
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <FaInfoCircle className="text-gray-700" />
              <Link to="/about" className="hover:text-blue-500">
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="font-semibold mb-2">Connect</h3>
          <ul className="space-y-1 text-sm">
            <li className="flex items-center  md:justify-start space-x-2">
              <IoIosContacts className="text-gray-700" />
              <Link to="/contact" className="hover:text-blue-500">
                Contact
              </Link>
            </li>
            <li className="flex items-center  md:justify-start space-x-2">
              <FaGithub className="text-gray-700" />
              <Link to="/" className="hover:text-blue-500">
                GitHub
              </Link>
            </li>
            <li className="flex items-center  md:justify-start space-x-2">
              <FaTwitter className="text-gray-700" />
              <Link to="/" className="hover:text-blue-500">
                Twitter
              </Link>
            </li>
          </ul>
        </div>
        {/* AI-Powered Feature */}
        <div>
          <h3 className="font-semibold mb-2">AI-Powered</h3>
          <ul className="space-y-1 text-sm">
            <li className="flex items-center space-x-2">
              <FaRobot className="text-gray-700" />
              <Link to="/ai-generator" className="hover:text-blue-500">
                AI Component Generator
              </Link>
            </li>
          </ul>
        </div>
        {/* 
        <div>
          <h3 className="font-semibold mb-2">Legal</h3>
          <ul className="space-y-1 text-sm">
            <li className="flex items-center space-x-2">
              <FaShieldAlt className="text-gray-700" />
              <Link to="/" className="hover:text-blue-500">
                Privacy Policy
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <FaFileContract className="text-gray-700" />
              <Link to="/" className="hover:text-blue-500">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div> */}
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-xs text-gray-500">
        &copy; 2025 Mokshith UI. All rights reserved.
      </div>
    </footer>
  );
}
