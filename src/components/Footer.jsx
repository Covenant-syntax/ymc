/** @format */

import React from "react";
import { HiOutlineMail } from "react-icons/hi"; // Email icon
import logo from "../assets/ymc-logo-footer.png";

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white py-10'>
      {/* Divider Line */}
      <div className='border-t border-gray-700 mb-10'></div>

      <div className="max-w-4xl mx-auto">
        <div className='container mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0'>
          {/* Left Section */}
          <div className='flex items-center space-x-4'>
            {/* Logo */}
            <div className='w-12 h-12 rounded-full bg-gray-800 flex justify-center items-center'>
              <img src={logo} alt='YMC Logo' className='w-8 h-8' />
            </div>
            {/* Title and Description */}
            <div>
              <h1 className='text-lg md:text-xl font-semibold'>
                YAH-EL MOVIE CONCEPT
              </h1>
              <p className='text-sm text-gray-400'>
                African movies at its finest
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className='flex flex-col items-center text-sm '>
            {/* Email Button with Icon (on small screens, stays centered; on medium screens, above the nav links) */}
            <div className=' md:w-auto'>
              <a
                href='mailto:Enwelumyahel2001@gmail.com'
                className='flex items-center bg-gray-700 px-5 py-2 rounded-lg text-white text-sm font-medium hover:bg-gray-600 transition w-full md:w-auto mb-4 md:mb-0'>
                <HiOutlineMail size={24} className='mr-2' />{" "}
                Enwelumyahel2001@gmail.com
              </a>
            </div>

            {/* Nav Links */}
            <div className='flex flex-wrap justify-center md:justify-end space-x-6 md:mt-3'>
              <a
                href='#about'
                className='hover:text-gray-300 hover:underline transition'>
                Movie
              </a>
              <a
                href='#features'
                className='hover:text-gray-300 hover:underline transition'>
                Synopsis
              </a>
              <a
                href='#pricing'
                className='hover:text-gray-300 hover:underline transition'>
                Images
              </a>
              <a
                href='#contact'
                className='hover:text-gray-300 hover:underline transition'>
                Buy & Stream Movie
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
