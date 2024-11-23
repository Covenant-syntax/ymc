import React from "react";
import moviePoster2 from "../assets/moviePoster2.jpg"; // Replace with your movie poster image

const BuyMovie = () => {
  const youtubeLink = "https://youtu.be/4W_jYKdA-Bo?si=MAnrc1EWPjg1_QIC"; // Replace with your premium YouTube link

  return (
    <div className="buy-movie max-w-5xl mx-auto my-8 p-6 bg-gray-100 rounded-md shadow-lg flex flex-col items-center md:flex-row md:items-start">
      {/* Movie Poster */}
      <div className="movie-poster flex-shrink-0 flex items-center flex-col mb-6 md:mb-0 md:mr-8">
        <img
          src={moviePoster2} // Replace with your movie poster image
          alt="Movie Poster"
          className="w-[300px] h-[450px] rounded-md shadow-md"
        />
        <h2 className="text-2xl mb-2 md:hidden">Digital</h2>
        <p className="text-sm text-blue-700 md:hidden">Original version</p>
        <button
          onClick={() => window.open(youtubeLink, "_blank")}
          className="bg-blue-950 text-white px-20 py-2 font-semibold mb-6 mt-8 hover:bg-blue-800 transition rounded-full w-full md:hidden"
        >
          Buy Now
        </button>
      </div>

      {/* Movie Details */}
      <div className="movie-details flex-grow flex flex-col items-start text-gray-800 w-full">
      <h2 className="text-2xl mb-2 hidden md:block">Digital</h2>
        <p className="text-sm text-blue-700 hidden md:block">Original version</p>
        <button
          onClick={() => window.open(youtubeLink, "_blank")}
          className="bg-blue-950 text-white px-20 py-2 font-semibold mb-6 mt-8 hover:bg-blue-800 transition rounded-full hidden md:block"
        >
          Buy Now
        </button>
        <ul className="text-lg leading-relaxed">
          <li className="mb-3">
            <span className="text-gray-500">Run Time:</span> 2hr 11min
          </li>
          <li className="mb-3">
            <span className="text-gray-500">Language & Audio:</span> English / 2.0 / 5.1
          </li>
          <li className="mb-3">
            <span className="text-gray-500">Subtitles:</span> English
          </li>
          <li className="mb-3">
            <span className="text-gray-500">Picture:</span> Widescreen / Color
          </li>
          <li className="mb-3">
            <span className="text-gray-500">Release Date:</span> November 25, 2024
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BuyMovie;
