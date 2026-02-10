import React, { useState } from "react";
import { FaPlay, FaTimes } from "react-icons/fa";
import Shape1 from "../../assets/images/info-item-bg2.jpg";
import Shape2 from "../../assets/images/info-item-img2.jpg";

const AboutUs = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const videoUrl = "https://www.youtube.com/embed/9wdisivSWYU";

  const openVideo = () => {
    setIsVideoOpen(true);
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
  };

  return (
    <section className="min-h-screen from-stone-50 to-white flex items-center justify-center px-6 py-20 relative overflow-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="relative h-[500px] md:h-[600px] flex items-center">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={Shape1}
              alt="Background Shape"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-8 relative z-10">
            <div className="text-rose-500 text-lg font-cursive italic tracking-wide">
              About Us
            </div>

            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Who We Are
              </h1>
            </div>

            <p className="text-base md:text-lg text-gray-600 font-medium">
              Nourish your skin with toxin-free cosmetic products. With the
              offers that you can't refuse.
            </p>

            <p className="text-gray-600 leading-relaxed text-base">
              Non aliqua reprehenderit reprehenderit culpa laboris nulla minim
              anim velit adipisicing ea aliqua alluptate sit do do.Non aliqua
              reprehenderit reprehenderit culpa laboris nulla minim anim velit
              adipisicing ea aliqua alluptate sit do do.Non aliqua reprehenderit
              reprehenderit culpa laboris nulla minim.
            </p>

            <div className="pt-4">
              <button
                className="flex items-center gap-3 text-gray-900 font-semibold text-lg hover:opacity-70 transition-opacity group"
              >
                <div className="w-12 h-12 border-2 border-gray-900 rounded-lg flex items-center justify-center group-hover:bg-gray-900 group-hover:text-white transition-all">
                  <FaPlay size={16} className="ml-1" />
                </div>
                <span>WATCH VIDEO ABOUT US</span>
                <span className="text-2xl">→</span>
              </button>
            </div>
          </div>
        </div>

        <div
          onClick={openVideo}
          className="relative h-[500px] md:h-[600px] overflow-hidden group shadow-2xl cursor-pointer"
        >
          <div className="absolute inset-0">
            <img
              src={Shape2}
              alt="Promotion Video Background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-2xl">
              <FaPlay size={32} className="text-gray-800 ml-2" />
            </div>
          </div>
        </div>
      </div>

      {isVideoOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeVideo}
        >
          <div
            className="relative w-full max-w-5xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeVideo}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <FaTimes size={32} />
            </button>

            <iframe
              className="w-full h-full rounded-lg"
              src={videoUrl}
              title="Promotion Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutUs;
