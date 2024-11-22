import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai"; // Importing close icon
import { FaPlay } from "react-icons/fa"; // Importing play icon
import backgroundImageSmall from "../assets/backgroundImageSmall.jpg"; // Small screen background
import backgroundImageLarge from "../assets/backgroundImageLarge.jpg"; // Medium screen and larger background

const Hero = () => {
  const [showTrailer, setShowTrailer] = useState(false);

  const handleWatchTrailer = () => setShowTrailer(true);
  const handleCloseTrailer = () => setShowTrailer(false);

  return (
    <div className="relative w-full h-[50vh]">
      {/* Background Section */}
      {!showTrailer ? (
        <div
          className="relative w-full h-full bg-cover bg-center flex flex-col justify-end text-white"
          style={{
            backgroundImage: `url(${backgroundImageSmall})`, // Default for small screens
          }}
        >
          {/* Background image change on medium screens */}
          <div
            className="hidden md:block absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${backgroundImageLarge})`, // Medium screen and larger background
            }}
          ></div>

          {/* Gradient Blur Effect: Solid at the bottom, fades above the button */}
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent h-full"></div>

          {/* Centered Button at the Bottom */}
          <div className="w-full text-center pb-6 relative z-10">
            <button
              onClick={handleWatchTrailer}
              className="px-5 py-2 border-2 border-yellow-500 text-sm text-yellow-500 hover:bg-yellow-500 hover:text-gray-900 font-medium flex items-center justify-center rounded-full gap-2 mx-auto transition-all duration-300 ease-in-out"
            >
              <FaPlay size={12} /> Watch Trailer
            </button>
          </div>
        </div>
      ) : (
        /* Trailer Section */
        <div className="absolute inset-0 w-full h-full bg-black flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={handleCloseTrailer}
            className="absolute top-4 right-4 z-50 p-2 bg-gray-700 hover:bg-gray-800 text-white rounded-full"
            aria-label="Close Trailer"
          >
            <AiOutlineClose size={24} />
          </button>
          <iframe
            className="w-full h-full border-none"
            src="https://www.youtube.com/embed/4W_jYKdA-Bo?autoplay=1&muted=1&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&controls=0"
            title="Movie Trailer"
            style={{
              border: "none", // Removes any border around the iframe
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Hero;
