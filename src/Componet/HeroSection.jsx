import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useTheme } from "../context/ThemeContext";

export default function HeroSection() {
  const { darkMode, primaryColor, themeColors, bgClasses } = useTheme();

  return (
    <section
      className={`relative flex flex-col lg:flex-row items-center justify-between overflow-hidden min-h-screen ${darkMode ? bgClasses.dark.black : bgClasses.light.slate
        }`}
    >
      {/* Blurred Background Slider for Mobile */}
      <div className="block lg:hidden absolute inset-0 w-full h-full z-0">
        <Swiper
          loop={true}
          speed={6000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          spaceBetween={0}
          modules={[Autoplay]}
          className="h-full w-full blur-md"
        >
          {[...Array(3)].map((_, i) => (
            <SwiperSlide key={i}>
              <img
                src={i % 2 === 0 ? "/images/black1.png" : "/images/black2.jpg"}
                alt={`Mobile Dashboard ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Left Content */}
      <div
        className="relative z-10 flex flex-col justify-center items-start w-full max-w-2xl px-6 lg:px-20 space-y-8 min-h-screen"
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-indigo-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l9-9 9 9-9 9-9-9z"
            />
          </svg>
          <span
            className={`text-xl font-semibold ${darkMode ? "text-white" : "text-gray-900"
              }`}
          >
            TooLex
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          A Complete Admin UI Kit built on{" "}
          <span className="text-pink-400">React</span> &{" "}
          <span
            className={`bg-gradient-to-r ${themeColors[primaryColor]} bg-clip-text text-transparent`}
          >
            Tailwind CSS.
          </span>
        </h1>

        {/* Sub Text */}
        <p
          className={`text-lg leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"
            }`}
        >
          <a
            href="#"
            className="font-medium underline underline-offset-2 hover:text-indigo-500"
          >
            Tailux
          </a>{" "}
          is a versatile React 19 and TailwindCSS v4 UI Kit featuring components,
          dashboards, forms, datatables, and app templates to help you build
          applications{" "}
          <span className="font-medium underline underline-offset-2">
            faster than ever.
          </span>
        </p>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="px-6 py-3 rounded-lg font-medium bg-gray-800 text-white hover:bg-gray-700 transition">
            Check Demos
          </button>
          <button
            className={`px-6 py-3 rounded-lg font-medium text-white transition bg-gradient-to-r ${themeColors[primaryColor]}`}
          >
            Get Now →
          </button>
        </div>
      </div>

      {/* Right Continuous Infinite Scrolling Image */}
      <div className="hidden lg:flex w-[55%] h-screen absolute right-0 top-0 overflow-hidden">
        <div
          className="hero-img-preview relative w-full h-full"
          style={{
            "--hero-img-src": "url('/images/hero-img.webp')",
          }}
        ></div>
      </div>
    </section>
  );
}
