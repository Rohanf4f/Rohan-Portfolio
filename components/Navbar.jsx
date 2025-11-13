"use client";
import { FaBriefcase, FaSun, FaMoon } from "react-icons/fa";
import Link from "next/link";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
const Navbar = () => {
   const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <nav className="sticky top-0 z-50 p-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
    <div className="container mx-auto flex justify-between items-center">
      {/* Name - Always visible */}
      <div className="text-xl font-semibold text-gray-900 dark:text-white">
        Rohan Patil
      </div>

      {/* Desktop Navigation - Hidden on mobile */}
      <div className="hidden md:flex items-center space-x-8">
        <ul className="flex space-x-8 text-gray-700 dark:text-gray-300">
          <li className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
            <a href="#" className="font-medium">Home</a>
          </li>
          <li className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
            <a href="#about" className="font-medium">About</a>
          </li>
          <li className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
            <a href="#projects" className="font-medium">Projects</a>
          </li>
          <li className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
            <a href="#contact" className="font-medium">Contact</a>
          </li>
        </ul>
        
        {/* Theme Toggle - Desktop */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? (
            <FaSun className="w-5 h-5 text-yellow-400" />
          ) : (
            <FaMoon className="w-5 h-5 text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile - Theme Toggle only */}
      <div className="md:hidden">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? (
            <FaSun className="w-5 h-5 text-yellow-400" />
          ) : (
            <FaMoon className="w-5 h-5 text-gray-700" />
          )}
        </button>
      </div>
    </div>
  </nav>
  );
};
export default Navbar;
