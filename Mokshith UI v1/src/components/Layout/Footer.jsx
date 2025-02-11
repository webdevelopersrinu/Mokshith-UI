import {
  FaGithub,
  FaTwitter,
  FaCubes,
  FaBook,
  FaInfoCircle,
  FaShieldAlt,
  FaFileContract,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-700 py-8 px-6 border-t">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Brand Info */}
        <div>
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <h2 className="text-black text-lg font-semibold">
              Mokshith <span className="text-blue-500">UI</span>
            </h2>
          </div>
          <p className="mt-2 text-sm">
            A modern UI component library for web applications
          </p>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold mb-2">Resources</h3>
          <ul className="space-y-1 text-sm">
            <li className="flex items-center space-x-2">
              <FaCubes className="text-gray-700" />
              <a href="#" className="hover:text-blue-500">
                Components
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <FaBook className="text-gray-700" />
              <a href="#" className="hover:text-blue-500">
                Documentation
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <FaInfoCircle className="text-gray-700" />
              <a href="#" className="hover:text-blue-500">
                About
              </a>
            </li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="font-semibold mb-2">Connect</h3>
          <ul className="space-y-1 text-sm">
            <li className="flex items-center justify-center md:justify-start space-x-2">
              <FaGithub className="text-gray-700" />
              <a href="#" className="hover:text-blue-500">
                GitHub
              </a>
            </li>
            <li className="flex items-center justify-center md:justify-start space-x-2">
              <FaTwitter className="text-gray-700" />
              <a href="#" className="hover:text-blue-500">
                Twitter
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold mb-2">Legal</h3>
          <ul className="space-y-1 text-sm">
            <li className="flex items-center space-x-2">
              <FaShieldAlt className="text-gray-700" />
              <a href="#" className="hover:text-blue-500">
                Privacy Policy
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <FaFileContract className="text-gray-700" />
              <a href="#" className="hover:text-blue-500">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-xs text-gray-500">
        &copy; 2025 Mokshith UI. All rights reserved.
      </div>
    </footer>
  );
}
