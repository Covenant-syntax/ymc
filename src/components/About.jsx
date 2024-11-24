import React from "react";
import moviePoster from "../assets/moviePoster.jpg"; // Full movie poster image

const About = () => {
  return (
    <section className="w-full py-10 bg-gray-900 text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left Section: Movie Poster */}
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src={moviePoster}
            alt="Movie Poster"
            className="w-[50%] md:w-[70%] h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right Section: About the Movie */}
        <div className="w-full md:w-1/2 px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">About the Movie</h2>
          <p className="mb-4 leading-relaxed text-gray-300 text-sm md:text-base">
          Everyone has a Dream. Cedric has a dream of becoming successful music star, Against the will of his father chief Donald who tried spoiling Doan With Wealth To get at Cedric. She is now left In the pool of her own blood.. Who Rape Joan?

          </p>
          <ul className="mb-4 list-disc list-inside space-y-2 text-gray-300 text-sm md:text-base">
            <li>Genre: Drama, Action</li>
            <li>Directed by: King Noel D. Metrock</li>
            <li>Starring: Yah-El Enwalum, Nazareth Jesse, David Mckenzie (Ghana)</li>
            <li>Release Year: 2024</li>
          </ul>
          <button className="px-5 py-2 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium rounded-full transition-all duration-300">
            STREAM MOVIE
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;

