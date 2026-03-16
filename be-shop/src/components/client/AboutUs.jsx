import React, { useState } from "react";
import { FaPlay, FaTimes } from "react-icons/fa";
import Shape1 from "../../assets/images/info-item-bg2.jpg";
import Shape2 from "../../assets/images/info-item-img2.jpg";

const AboutUs = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const videoUrl = "https://www.youtube.com/embed/9wdisivSWYU";

  const openVideo = () => setIsVideoOpen(true);
  const closeVideo = () => setIsVideoOpen(false);

  return (
    <section className="flex items-center justify-center relative overflow-hidden bg-white">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-stretch relative z-10">
        <div className="relative h-[500px] md:h-[600px] overflow-hidden flex items-center">
          <div className="absolute inset-0">
            <img
              src={Shape1}
              alt="Background Shape"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute inset-0 bg-[#fff7f6]/85" />

          <div className="relative z-10 w-full px-6 md:px-12">
            <div className="space-y-8 max-w-xl">
              <div className="text-rose-500 text-lg font-cursive italic tracking-wide">
                About Us
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Who We Are
              </h1>

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

              <div className="pt-6">
                <button
                  onClick={openVideo}
                  className="flex items-center gap-4 text-gray-900 font-semibold text-sm md:text-base hover:opacity-70 transition-opacity group"
                >
                  <div className="w-11 h-11 border border-gray-900 rounded-md flex items-center justify-center group-hover:bg-gray-900 group-hover:text-white transition-all">
                    <FaPlay size={14} className="ml-[2px]" />
                  </div>
                  <span className="tracking-widest">WATCH VIDEO ABOUT US</span>
                  <span className="text-2xl leading-none">→</span>
                </button>
              </div>
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

          <div className="absolute inset-0 bg-black/45" />

          <div className="absolute top-16 left-0 right-0 text-center z-10">
            <h3 className="text-white text-3xl md:text-4xl font-medium">
              Promotion Video
            </h3>
          </div>

          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="w-24 h-24 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
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
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutUs;