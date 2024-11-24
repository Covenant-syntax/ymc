import React, { useState, useEffect } from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import logo from "../assets/ymc-logo.png";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 py-3 px-5 sticky top-0 z-50">
      {/* Mobile Layout */}
      <div className="flex items-center justify-between md:hidden">
        {/* Hamburger Icon */}
        <button
          onClick={toggleMenu}
          className="relative w-8 h-8 flex items-center justify-center group"
          aria-label="Toggle menu"
        >
          <span
            className={`absolute w-6 h-0.5 bg-white transform transition-all duration-300 ease-in-out ${
              isOpen ? 'rotate-45' : '-translate-y-2'
            }`}
          ></span>
          <span
            className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          ></span>
          <span
            className={`absolute w-6 h-0.5 bg-white transform transition-all duration-300 ease-in-out ${
              isOpen ? '-rotate-45' : 'translate-y-2'
            }`}
          ></span>
        </button>

        {/* Logo */}
        <a href="#" className="flex items-center">
          <img src={logo} alt="Logo" className="w-20" />
        </a>

        {/* Social Media Icons */}
        <div className="flex items-center space-x-3">
          <FaFacebook className="text-white w-5 h-5 hover:scale-125 transition-transform" />
          <FaTwitter className="text-white w-5 h-5 hover:scale-125 transition-transform" />
          <FaInstagram className="text-white w-5 h-5 hover:scale-125 transition-transform" />
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-6">
          <a href="#" className="flex items-center">
            <img src={logo} alt="Logo" className="w-24 mr-4" />
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <FaFacebook className="text-white w-5 h-5 hover:scale-125 transition-transform" />
          <FaTwitter className="text-white w-5 h-5 hover:scale-125 transition-transform" />
          <FaInstagram className="text-white w-5 h-5 hover:scale-125 transition-transform" />
          <button className="bg-white text-blue-900 px-4 py-2 text-sm rounded-md font-bold hover:bg-blue-100 transition">
            Stream Movie
          </button>
        </div>
      </div>

      {/* Dropdown Menu Positioned Below Nav */}
      <div
        className={`absolute left-0 right-0 bg-gray-900 bg-opacity-80 border-t border-gray-700 transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ top: '100%', overflow: 'hidden' }}
      >
        <ul className="text-white text-sm divide-y divide-gray-600">
          <li className="py-3 pl-6 hover:bg-gray-700 hover:text-blue-300 transition">
            <a href="#" className="block">Movie</a>
          </li>
          <li className="py-3 pl-6 hover:bg-gray-700 hover:text-blue-300 transition">
            <a href="#about" className="block">Synopsis</a>
          </li>
          <li className="py-3 pl-6 hover:bg-gray-700 hover:text-blue-300 transition">
            <a href="#services" className="block">Images</a>
          </li>
          <li className="py-3 pl-6 hover:bg-gray-700 hover:text-blue-300 transition">
            <a href="#contact" className="block">Buy & Stream Movie</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
