import { useState } from "react";
import { FiMoon, FiMenu, FiX } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { Link, NavLink } from "react-router";
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <nav className="bg-white dark:bg-black  dark:border-gray-800 px-6 py-3 flex justify-between items-center ">
        <div className="flex items-center justify-between gap-12">
          <Link to="/">
            <div className=" text-2xl font-semibold bg-white">
              <span className=" text-black">Mokshith</span>
              <span className="text-blue-600 pl-2 ">UI</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-300">
            <NavLink
              to="/components"
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-bold" : ""
              }
            >
              Components
            </NavLink>
            <NavLink
              to={"/documentation"}
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-bold" : ""
              }
            >
              Documentation
            </NavLink>
            <a href="#" className="hover:text-blue-500">
              Examples
            </a>
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <FaGithub className="text-gray-700 dark:text-gray-300 text-2xl cursor-pointer" />
          {/* <button>
            <FiMoon className="text-gray-700 dark:text-gray-300 text-2xl" />
          </button> */}
          <button className="text-white bg-blue-500 text-base font-normal px-4 py-2 rounded-lg hidden md:block">
            Get Started
          </button>
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white dark:bg-black  p-4 flex flex-col space-y-4 text-gray-700 dark:text-gray-300">
            <a href="#" className="hover:text-blue-500">
              Components
            </a>
            <a href="#" className="hover:text-blue-500">
              Documentation
            </a>
            <a href="#" className="hover:text-blue-500">
              Examples
            </a>
            <a href="#" className="hover:text-blue-500">
              Pricing
            </a>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Header;
