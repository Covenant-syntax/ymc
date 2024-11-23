import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex justify-center items-center">
            <span className="text-black font-bold">D</span>
          </div>
          {/* Title and Description */}
          <div>
            <h1 className="text-xl font-semibold">DuskUI</h1>
            <p className="text-sm text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center bg-gray-800 px-4 py-2 rounded-lg space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75l-9 7.5-9-7.5M21.75 17.25v-10.5l-9 7.5-9-7.5v10.5m18 0h-15"
              />
            </svg>
            <span className="text-gray-400 text-sm">hello@landingfolio.com</span>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex space-x-8 text-sm">
          <a href="#about" className="hover:text-gray-300">
            About
          </a>
          <a href="#features" className="hover:text-gray-300">
            Features
          </a>
          <a href="#pricing" className="hover:text-gray-300">
            Pricing & Plans
          </a>
          <a href="#contact" className="hover:text-gray-300">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
