import React, { useState, useEffect } from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import logo from "../assets/ymc-logo.png";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when the menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden'); // Cleanup in case component unmounts
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-950 py-3 px-4 sticky top-0 z-50">
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
          <img src={logo} alt="Logo" className="w-8" />
        </a>

        {/* Social Media Icons */}
        <div className="flex items-center space-x-3">
          <FaFacebook className="text-white w-5 h-5 hover:text-blue-800 transition" />
          <FaTwitter className="text-white w-5 h-5 hover:text-blue-800 transition" />
          <FaInstagram className="text-white w-5 h-5 hover:text-blue-800 transition" />
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex items-center justify-between max-w-7xl mx-auto">
        {/* Left Section: Logo + Links */}
        <div className="flex items-center space-x-6">
          <a href="#" className="flex items-center">
            <img src={logo} alt="Logo" className="w-8" />
          </a>
          <a href="#" className="text-white hover:text-blue-300 transition">
            Home
          </a>
          <a href="#about" className="text-white hover:text-blue-300 transition">
            About
          </a>
          <a href="#services" className="text-white hover:text-blue-300 transition">
            Services
          </a>
          <a href="#contact" className="text-white hover:text-blue-300 transition">
            Contact
          </a>
        </div>

        {/* Right Section: Social Media + Button */}
        <div className="flex items-center space-x-4">
          <FaFacebook className="text-white w-6 h-6 hover:text-blue-300 transition" />
          <FaTwitter className="text-white w-6 h-6 hover:text-blue-300 transition" />
          <FaInstagram className="text-white w-6 h-6 hover:text-blue-300 transition" />
          <button className="bg-white text-blue-900 px-4 py-2 rounded-md font-semibold hover:bg-blue-100 transition">
            Get Started
          </button>
        </div>
      </div>

      {/* Full-Screen Mobile Menu */}
      <div
        className={`fixed top-0 left-0 bg-blue-900 w-screen h-screen transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-6 text-white px-6">
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-white text-3xl"
          >
            ×
          </button>
          <a href="#" className="text-xl hover:text-blue-300 transition">
            Home
          </a>
          <a href="#about" className="text-xl hover:text-blue-300 transition">
            About
          </a>
          <a href="#services" className="text-xl hover:text-blue-300 transition">
            Services
          </a>
          <a href="#contact" className="text-xl hover:text-blue-300 transition">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
