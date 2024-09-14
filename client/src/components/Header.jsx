import React, { useState, useEffect } from "react";
import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Get the current path from location
  const currentPath = location.pathname;

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
    if (savedMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", newMode);
      if (newMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return newMode;
    });
  };

  const handleMenuItemClick = (path) => {
    navigate(path); // Navigate to the selected path
    setIsMenuOpen(false); // Close the menu
  };

  return (
    <Navbar className="border-b-2">
      <div className="container mx-auto flex justify-between items-center py-2 px-4 relative">
        {/* Logo */}
        <Link
          to="/"
          className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
        >
          <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
            Sharjil's
          </span>
          Blog
        </Link>

        {/* Search bar and icon */}
        <div className="flex items-center space-x-2">
          <form className="relative hidden lg:flex">
            <TextInput type="text" placeholder="Search..." className="pr-10" />
            <AiOutlineSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400" />
          </form>
          {/* Search icon on small screens */}
          <Button
            className="lg:hidden flex items-center justify-center w-8 h-8 p-1 rounded-full bg-gray-200 text-gray-600 shadow-md hover:bg-gray-300 focus:outline-none"
            onClick={() => {}}
          >
            <AiOutlineSearch size={20} />
          </Button>
        </div>

        {/* Menu Toggle Button (only visible on small screens) */}
        <button
          className="lg:hidden flex items-center justify-center w-10 h-10 p-2 rounded-full bg-gray-200 text-gray-600 shadow-md hover:bg-gray-300 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <AiOutlineMenu size={20} />
        </button>

        {/* Navigation Links (only visible on large screens) */}
        <div className="hidden lg:flex space-x-4">
          <Link
            to="/"
            className={`text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md px-3 py-1 ${
              currentPath === "/" ? "bg-gray-200 dark:bg-gray-700" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md px-3 py-1 ${
              currentPath === "/about" ? "bg-gray-200 dark:bg-gray-700" : ""
            }`}
          >
            About
          </Link>
          <Link
            to="/projects"
            className={`text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md px-3 py-1 ${
              currentPath === "/projects" ? "bg-gray-200 dark:bg-gray-700" : ""
            }`}
          >
            Projects
          </Link>
        </div>

        {/* Buttons: Dark Mode Toggle and Sign In */}
        <div className="flex items-center space-x-2 lg:space-x-4">
          {/* Toggle Dark Mode */}
          <Button
            className="flex items-center justify-center w-10 h-10 p-2 rounded-full bg-gray-200 text-gray-600 shadow-md hover:bg-gray-300 focus:outline-none"
            onClick={toggleDarkMode}
          >
            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </Button>

          {/* Sign In button */}
          <Link to="/Signin">
            <Button className="text-white bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 hover:bg-gradient-to-br focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-md px-3 py-1 text-sm outline outline-2 outline-white">
              Sign In
            </Button>
          </Link>
        </div>
      </div>

      {/* Menu Collapse (only visible on small screens) */}
      <div
        className={`lg:hidden absolute left-0 w-full bg-white dark:bg-gray-800 mt-6 py-2 ${
          isMenuOpen ? "flex flex-col" : "hidden"
        }`}
      >
        {" "}
        {/* Increased margin-top */}
        <Link
          to="/"
          className={`block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md ${
            currentPath === "/" ? "bg-gray-200 dark:bg-gray-700" : ""
          }`}
          onClick={() => handleMenuItemClick("/")}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md ${
            currentPath === "/about" ? "bg-gray-200 dark:bg-gray-700" : ""
          }`}
          onClick={() => handleMenuItemClick("/about")}
        >
          About
        </Link>
        <Link
          to="/projects"
          className={`block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md ${
            currentPath === "/projects" ? "bg-gray-200 dark:bg-gray-700" : ""
          }`}
          onClick={() => handleMenuItemClick("/projects")}
        >
          Projects
        </Link>
      </div>
    </Navbar>
  );
}
