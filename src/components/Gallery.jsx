import React from "react";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";  // Importing angle icons
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallery = () => {
  const videoData = [
    {
      thumbnail: "https://img.youtube.com/vi/4W_jYKdA-Bo/hqdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/4W_jYKdA-Bo",
      title: "Official Nope Trailer",
    },
    {
      thumbnail: "https://img.youtube.com/vi/XbD1T20p6WA/hqdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/XbD1T20p6WA",
      title: "Behind the Scenes",
    },
    {
      thumbnail: "https://img.youtube.com/vi/QVpB9JvJmAo/hqdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/QVpB9JvJmAo",
      title: "Interview with Jordan Peele",
    },
  ];

  // Slider Settings
  const settings = {
    dots: true,         // Show dots for navigation
    infinite: true,     // Loop the carousel
    speed: 500,         // Transition speed
    slidesToShow: 3,    // Show 3 items at once
    slidesToScroll: 1,  // Scroll 1 item at a time
    nextArrow: (
      <div className="slick-arrow next-arrow">
        <FaAngleRight size={24} />
      </div>
    ),
    prevArrow: (
      <div className="slick-arrow prev-arrow">
        <FaAngleLeft size={24} />
      </div>
    ),
  };

  return (
    <div className="gallery">
      <h2 className="text-center">Gallery</h2>
      <Slider {...settings}>
        {videoData.map((video, index) => (
          <div key={index} className="video-item text-center">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="cursor-pointer"
              onClick={() => window.open(video.videoUrl, "_blank")}
            />
            <p>{video.title}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Gallery;
