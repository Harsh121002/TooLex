import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { useTheme } from "../context/ThemeContext";
import "swiper/css";
import "swiper/css/pagination";
import "react-circular-progressbar/dist/styles.css";
import { Info, Truck, CreditCard, Undo2, User, Scale, Mail, Lock, Heart, ChevronDown } from "lucide-react";
import { Listbox, Transition } from "@headlessui/react";
import { Check } from "lucide-react"
import { Fragment } from "react";

export default function Dashboard() {
  const {
    darkMode,
    setDarkMode,
    primaryColor,
    setPrimaryColor,
    skin,
    setSkin,
    lightColor,
    setLightColor,
    darkColor,
    setDarkColor,
    themeColors,
    bgClasses,
    skinClasses,
  } = useTheme();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [activeMenu, setActiveMenu] = useState("Getting start");
  const [liked, setLiked] = useState(true);
  const [timeLeft, setTimeLeft] = useState(9 * 3600 + 11 * 60 + 37);

  const callSettings = [
    { label: "Voice Chat", color: "peer-checked:bg-green-500" },
    { label: "Video Chat", color: "peer-checked:bg-purple-500" },
    { label: "Realtime Chat", color: "peer-checked:bg-pink-500" },
    { label: "Incoming Call", color: "peer-checked:bg-yellow-500" },
    { label: "Black List", color: "peer-checked:bg-blue-500" },
    { label: "Spam Block", color: "peer-checked:bg-orange-500" },
  ];

  const themeColors1 = {
    indigo: "from-indigo-500 to-purple-500",
    blue: "from-blue-500 to-cyan-500",
    green: "from-green-500 to-lime-500",
    purple: "from-purple-500 to-pink-500",
    amber: "from-amber-500 to-yellow-500",
    pink: "from-pink-500 to-rose-500",
  };

  const menuItems = [
    { label: "Getting start", icon: Info },
    { label: "Shipping", icon: Truck },
    { label: "Payments", icon: CreditCard },
    { label: "Returns", icon: Undo2 },
    { label: "My Account", icon: User },
    { label: "Copyright & Legal", icon: Scale },
  ];

  const cards = [
    { type: "VISA", amount: "$1,686.66", number: "**** **** **** 7946" },
    { type: "RuPay", amount: "$3,574.99", number: "**** **** **** 5201" },
    { type: "MasterCard", amount: "$2,574.99", number: "**** **** **** 4601" },
  ];

  useEffect(() => {
    if (timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h}h ${m}m ${s}s`;
  };

  const colorKeys = Object.keys(themeColors);

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <div
        className={`min-h-screen p-4  sm:p-6 ${darkMode ? bgClasses.dark[darkColor] : bgClasses.light[lightColor]
          }`}
      >
        <div className="px-4 pb-10 transition-all duration-300">
          <h3
            className={`text-center text-3xl font-semibold max-md:flex flex-col transition-all duration-300
      ${darkMode ? "text-gray-100" : "text-gray-900"}`}
          >
            Unlimited Themes
          </h3>

          <p
            className={`text-center mt-2 text-base  px-4 max-w-lg mx-auto transition-all duration-300
      ${darkMode ? "text-gray-400" : "text-gray-600"}`}
          >
            Toolex lets you easily customize your theme, including color schemes, primary colors, and card skins.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Theme Controls */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-10 transition-all duration-300">

            {/* Skin Selector */}
            <div className="flex flex-col">
              <label
                className={`text-sm mb-1 ${darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
              >
                Skin:
              </label>

              <Listbox value={skin} onChange={setSkin}>
                <div className="relative">
                  <Listbox.Button
                    className={`w-full flex items-center justify-between p-2 rounded border text-sm transition-all duration-200
          ${darkMode
                        ? "bg-black text-gray-100 border-gray-700 hover:border-gray-500"
                        : "bg-white text-gray-800 border-gray-300 hover:border-gray-400"
                      }`}
                  >
                    {skin}
                    <ChevronDown className="w-4 h-4 opacity-60" />
                  </Listbox.Button>

                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options
                      className={`absolute z-10 mt-1 w-full rounded-md shadow-lg overflow-hidden 
            ${darkMode
                          ? "bg-black border border-gray-700 text-gray-100"
                          : "bg-white border border-gray-200 text-gray-800"
                        }`}
                    >
                      {["bordered", "shadow"].map((opt) => (
                        <Listbox.Option
                          key={opt}
                          value={opt}
                          className={({ active }) =>
                            `cursor-pointer select-none relative  py-1 pl-8  pr-4 ${active
                              ? darkMode
                                ? `bg-gradient-to-r ${themeColors[primaryColor]}`
                                : `bg-gradient-to-r ${themeColors[primaryColor]}`
                              : ""
                            }`
                          }
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${selected ? "font-normal" : "font-normal"
                                  }`}
                              >
                                {opt.charAt(0).toUpperCase() + opt.slice(1)}
                              </span>
                              {selected && (
                                <span className="absolute inset-y-0 right-2 flex items-center">
                                  <Check className="w-4 h-4" />
                                </span>
                              )}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>

            {/* Primary Color (Headless UI version) */}
            <div className="flex flex-col">
              <label
                className={`text-sm mb-1 ${darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
              >
                Primary Color:
              </label>
              <Listbox value={primaryColor} onChange={setPrimaryColor}>
                <div className="relative">
                  <Listbox.Button
                    className={`w-full flex items-center justify-between p-2 rounded border text-sm transition-all duration-200
          ${darkMode
                        ? "bg-black text-gray-100 border-gray-700 hover:border-gray-500"
                        : "bg-white text-gray-800 border-gray-300 hover:border-gray-400"
                      }`}
                  >
                    {primaryColor}
                    <ChevronDown size={16} className="opacity-60" />
                  </Listbox.Button>

                  <Transition
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options
                      className={`absolute z-10 mt-1 w-full rounded-md shadow-lg 
            ${darkMode
                          ? "bg-black border border-gray-700 text-gray-100"
                          : "bg-white border border-gray-200 text-gray-800"
                        }`}
                    >
                      {Object.keys(themeColors).map((color) => (
                        <Listbox.Option
                          key={color}
                          value={color}
                          className={({ active }) =>
                            `cursor-pointer select-none relative  py-1 pl-8  pr-4 ${active
                              ? darkMode
                                ? `border-none bg-gradient-to-r ${themeColors[primaryColor]}`
                                : `bg-gradient-to-r ${themeColors[primaryColor]}`
                              : ""
                            }`
                          }
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${selected ? "font-semibold" : "font-normal"
                                  }`}
                              >
                                {color}
                              </span>
                              {selected ? (
                                <span className="absolute inset-y-0 right-2 flex items-center">
                                  <Check size={14} />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>

            {/* Light Color Selector */}
            <div className="flex flex-col">
              <label
                className={`text-sm mb-1 ${darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
              >
                Light Color:
              </label>

              <Listbox value={lightColor} onChange={setLightColor}>
                <div className="relative">
                  {/* Dropdown Button */}
                  <Listbox.Button
                    className={`w-full flex items-center justify-between p-2 rounded-md text-sm transition-all duration-200 border border-[0.8px]
          ${darkMode
                        ? "bg-black text-gray-100 border-gray-600 hover:border-gray-400"
                        : "bg-white text-gray-800 border-gray-300 hover:border-gray-400"
                      }`}
                  >
                    {lightColor.charAt(0).toUpperCase() + lightColor.slice(1)}
                    <ChevronDown className="w-4 h-4 opacity-60" />
                  </Listbox.Button>

                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options
                      className={`absolute z-10 mt-1 w-full rounded-md shadow-md border border-[0.8px] overflow-hidden 
            ${darkMode
                          ? "bg-black border-gray-700 text-gray-100"
                          : "bg-white border-gray-200 text-gray-800"
                        }`}
                    >
                      {["slate", "zinc", "gray"].map((opt) => (
                        <Listbox.Option
                          key={opt}
                          value={opt}
                          className={({ active }) =>
                            `cursor-pointer select-none relative  py-1 pl-8  pr-4 ${active
                              ? darkMode
                                ? `border-none bg-gradient-to-r ${themeColors[primaryColor]}`
                                : `bg-gradient-to-r ${themeColors[primaryColor]}`
                              : ""
                            }`
                          }
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${selected ? "font-semibold" : "font-normal"
                                  }`}
                              >
                                {opt.charAt(0).toUpperCase() + opt.slice(1)}
                              </span>
                              {selected && (
                                <span className="absolute inset-y-0 right-2 flex items-center">
                                  <Check className="w-4 h-4" />
                                </span>
                              )}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>


            {/* Dark Color Selector */}
            <div className="flex flex-col">
              <label
                className={`text-sm mb-1 ${darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
              >
                Dark Color:
              </label>

              <Listbox value={darkColor} onChange={setDarkColor}>
                <div className="relative">
                  {/* Button */}
                  <Listbox.Button
                    className={`w-full flex items-center justify-between p-2 rounded-md text-sm transition-all duration-200 border border-[0.8px]
          ${darkMode
                        ? "bg-black text-gray-100 border-gray-600 hover:border-gray-400"
                        : "bg-white text-gray-800 border-gray-300 hover:border-gray-400"
                      }`}
                  >
                    {darkColor.charAt(0).toUpperCase() + darkColor.slice(1)}
                    <ChevronDown className="w-4 h-4 opacity-60" />
                  </Listbox.Button>

                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options
                      className={`absolute z-10 mt-1 w-full rounded-md shadow-md border border-[0.8px] overflow-hidden 
            ${darkMode
                          ? "bg-black border-gray-700 text-gray-100"
                          : "bg-white border-gray-200 text-gray-800"
                        }`}
                    >
                      {["black", "slate", "zinc"].map((opt) => (
                        <Listbox.Option
                          key={opt}
                          value={opt}
                          className={({ active }) =>
                            `cursor-pointer select-none relative  py-1 pl-8  pr-4 ${active
                              ? darkMode
                                ? `border-none bg-gradient-to-r ${themeColors[primaryColor]}`
                                : `bg-gradient-to-r ${themeColors[primaryColor]}`
                              : ""
                            }`
                          }
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${selected ? "font-semibold" : "font-normal"
                                  }`}
                              >
                                {opt.charAt(0).toUpperCase() + opt.slice(1)}
                              </span>
                              {selected && (
                                <span className="absolute inset-y-0 right-2 flex items-center">
                                  <Check className="w-4 h-4" />
                                </span>
                              )}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>

            {/* Theme Mode Selector */}
            <div className="flex flex-col">
              <label
                className={`text-sm mb-1 ${darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
              >
                Theme Mode:
              </label>

              <Listbox
                value={darkMode ? "dark" : "light"}
                onChange={(value) => setDarkMode(value === "dark")}
              >
                <div className="relative">
                  {/* Button */}
                  <Listbox.Button
                    className={`w-full flex items-center justify-between p-2 rounded-md text-sm transition-all duration-200 border border-[0.8px]
          ${darkMode
                        ? "bg-black text-gray-100 border-gray-600 hover:border-gray-400"
                        : "bg-white text-gray-800 border-gray-300 hover:border-gray-400"
                      }`}
                  >
                    {darkMode ? "Dark" : "Light"}
                    <ChevronDown className="w-4 h-4 opacity-60" />
                  </Listbox.Button>

                  {/* Dropdown Options */}
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options
                      className={`absolute z-10 mt-1 w-full rounded-md shadow-md border border-[0.8px] overflow-hidden 
            ${darkMode
                          ? "bg-black text-gray-100"
                          : "bg-white text-gray-800"
                        }`}
                    >
                      {["light", "dark"].map((opt) => (
                        <Listbox.Option
                          key={opt}
                          value={opt}
                          className={({ active }) =>
                            `cursor-pointer select-none relative  py-1 pl-8  pr-4 ${active
                              ? darkMode
                                ? `border-none bg-gradient-to-r ${themeColors[primaryColor]}`
                                : `bg-gradient-to-r ${themeColors[primaryColor]}`
                              : ""
                            }`
                          }
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${selected ? "font-semibold" : "font-normal"
                                  }`}
                              >
                                {opt.charAt(0).toUpperCase() + opt.slice(1)}
                              </span>
                              {selected && (
                                <span className="absolute inset-y-0 right-2 flex items-center">
                                  <Check className="w-4 h-4" />
                                </span>
                              )}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>

          </div>




          {/* 📦 Main Layout */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4 items-stretch border border-white/20  rounded-md p-4">
            {/* Sidebar */}
            <div className="col-span-1 flex flex-col gap-4 h-full">
              {/* Admin Menu */}
              <div className={`relative p-4 ${skinClasses(darkMode)[skin]}`}>
                <h3 className="font-medium text-sm+  mb-4">Admin Menu</h3>
                <ul className="space-y-2">
                  {menuItems.map(({ label, icon: Icon }) => (
                    <li
                      key={label}
                      onClick={() => setActiveMenu(label)}
                      className={`flex items-center gap-2 p-2 rounded cursor-pointer transition-all duration-200 ${activeMenu === label
                        ? `bg-gradient-to-r ${themeColors[primaryColor]} text-white`
                        : "hover:bg-gray-600/20"
                        }`}
                    >
                      <Icon size={16} className={`${activeMenu === label ? "text-white" : "text-gray-400"}`} />
                      <span>{label}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Call Settings */}
              <div className={`relative p-4 flex flex-col flex-1 ${skinClasses(darkMode)[skin]}`}>
                <h3 className="font-medium text-sm+ mb-4">Call Settings</h3>
                {callSettings.map((setting, i) => (
                  <div key={i} className="flex justify-between items-center text-gray-300 mb-3 text-sm font-normal">
                    <span>{setting.label}</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked className="sr-only peer" />
                      <div
                        className={`w-10 h-5 bg-gray-600 rounded-full ${setting.color}`}
                      ></div>
                      <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full transition-all peer-checked:translate-x-5"></div>
                    </label>
                  </div>
                ))}
                <div className="flex-1" />
              </div>
            </div>

            {/* Right Side Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:col-span-2">
              <div className="grid lg:col-span-2 grid-cols-1 gap-4 lg:grid-cols-2">
                {/* 🎨 UI/UX Design Conference Card */}
                <div className={`relative p-4 ${skinClasses(darkMode)[skin]}`}>
                  <div className="flex items-center text-gray-400 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    June 23, 2021
                  </div>

                  <h3 className="font-medium text-base   mt-2">UI/UX Design Conference</h3>

                  <div className="mt-3 flex gap-2">
                    <span className="px-2 py-1 rounded bg-yellow-600/20 text-yellow-400 text-xs font-normal">
                      UI/UX Design
                    </span>
                    <span className="px-2 py-1 rounded bg-emerald-600/20 text-emerald-400 text-xs font-normal">
                      Mobile
                    </span>
                  </div>

                  <div className="mt-8 mb-0 flex -space-x-3">
                    <img
                      className="w-7 h-7 rounded-full border-2 border-black"
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      alt="user"
                    />
                    <div className="w-7 h-7 rounded-full bg-blue-500 text-white flex items-center justify-center border-2 border-black text-xs font-normal">
                      JL
                    </div>
                    <img
                      className="w-7 h-7 rounded-full border-2 border-black"
                      src="https://randomuser.me/api/portraits/men/45.jpg"
                      alt="user"
                    />
                  </div>
                </div>
                <div className={`relative break-words print border-[0.5px] rounded-lg break-inside-avoid bg-gradient-to-r from-pink-400 ${themeColors[primaryColor]} p-1 ${skinClasses(darkMode)[skin]}`}>

                  <div className="bg-black h-full p-4">
                    <h3 className="font-medium text-sm+">Load Application</h3>
                    <p
                      className="text-normal mt-3 text-gray-400"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 3,   // limit to 4 rows
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam maiores eligendi,
                      amet ipsam ipsa officiis asperiores expedita, nostrum alias ad tempore in eveniet
                      fugiat ut beatae quaerat accusantium! Repudiandae aliquam placeat eius. Voluptas,
                      ad sunt nulla ducimus delectus facilis accusamus.
                    </p>


                    {/* progress bar container */}
                    <div className="mt-6 h-1 w-full bg-gray-300 dark:bg-gray-700 rounded overflow-hidden relative">
                      {/* animated line - only this changes color */}
                      <div
                        className={`absolute top-0 left-0 h-1 w-1/3 bg-gradient-to-r ${themeColors[primaryColor]} animate-[slide_2s_linear_infinite]`}
                      />
                    </div>
                  </div>
                </div>

              </div>

              {/* 🔑 Sign In Card */}
              <div className={`relative p-4  ${skinClasses(darkMode)[skin]}`}>
                <h3 className="font-medium text-sm+ mb-3">Sign In</h3>

                {/* Username */}
                <div className="relative mt-2">
                  <input
                    type="text"
                    placeholder="Enter Username"
                    className="w-full pl-10 p-1 rounded border border-white/20 bg-transparent focus:outline-none focus:border-blue-400 transition-all duration-200"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <Mail
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                </div>

                {/* Password */}
                <div className="relative mt-3">
                  <input
                    type="password"
                    placeholder="Enter Password"
                    className="w-full pl-10 p-1 rounded border border-white/20 bg-transparent focus:outline-none focus:border-blue-400 transition-all duration-200"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Lock
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                </div>

                {/* Submit */}
                <button
                  className={`mt-6 w-full bg-gradient-to-r ${themeColors[primaryColor]} text-white p-1.5  rounded-lg`}
                >
                  Sign In
                </button>

                {/* OR */}
                <div className="flex items-center my-6">
                  <div className="flex-1 h-px bg-gray-700" />
                  <span className="px-2 text-xs text-gray-500">OR</span>
                  <div className="flex-1 h-px bg-gray-700" />
                </div>

                {/* Social Login */}
                <div className="flex gap-3 mt-6">
                  <button className="flex-1 flex items-center justify-center gap-2 border border-white/20 rounded-lg p-2">
                    <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" />
                    Google
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 border border-white/20 rounded-lg p-2">
                    <img src="https://www.svgrepo.com/show/475654/github-color.svg" className="w-5 h-5" />
                    Github
                  </button>
                </div>
              </div>
              {/* 🖼 NFT Card */}
              <div
                className={`relative p-4 rounded-xl shadow-lg flex flex-col ${skinClasses(darkMode)[skin]}`}
              >
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://randomuser.me/api/portraits/men/85.jpg"
                      alt="avatar"
                      className="w-10 h-10 rounded-full border border-white/20 border-gray-500"
                    />
                    <div>
                      <p className="font-medium mt-0.5 text-sm">Travis Fuller</p>
                      <p className="text-xs text-gray-400">1259 items</p>
                    </div>
                  </div>

                  {/*  Like/Dislike button */}
                  <button
                    onClick={() => setLiked(!liked)}
                    className={`p-2 rounded-md transition-all duration-300 
        ${liked ? "bg-gray-800" : "bg-gray-700/10"} 
        `}
                  >
                    <Heart
                      size={22}
                      className={`transition-colors duration-300 ${liked ? "text-red-500 fill-red-500" : "text-gray-300"
                        }`}
                      fill={liked ? "currentColor" : "none"}
                    />
                  </button>
                </div>

                {/* NFT Image */}
                <div className="mt-4 relative">
                  <img
                    src="images/samsung.jpg"
                    alt="NFT"
                    className="rounded-lg w-full object-cover shadow-md"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                {/* Footer */}
                <div className="mt-4">
                  <h3 className="font-normal text-gray-200 hover:text-indigo-500">The Runner #265</h3>

                  <hr className="border border-gray-800/50 mt-3" />

                  <div className="flex items-center justify-between mt-2">
                    {/* ⏰ Countdown */}
                    <div>
                      <div className="flex  items-center gap-1 text-xs text-gray-400">

                        Ending in
                      </div>
                      <span>
                        {formatTime(timeLeft)}
                      </span>
                    </div>

                    {/* 💰 ETH Price */}
                    <div className=" flex flex-col items-center gap-1 font-normal ">
                      <span className="text-gray-400 text-sm">Highest Bid</span>
                      <span className="text-indigo-400 text-lg">1.49 ETH</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Bottom Dots */}
              <div
                className={`lg:col-span-2 relative p-4 flex flex-col sm:flex-row flex-wrap gap-4 items-center justify-center 
                  } ${skinClasses(darkMode)[skin]}`}
              >
                {/* Spinners */}
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full border-2 border-t-transparent border-indigo-500 animate-spin"></div>
                  <div className="w-8 h-8 rounded-full border-2 border-t-transparent border-pink-500 animate-spin"></div>
                  <div className="w-8 h-8 rounded-full border-2 border-t-transparent border-green-500 animate-spin"></div>
                  <div className="w-8 h-8 rounded-full border-2 border-t-transparent border-orange-500 animate-spin"></div>
                </div>

                {/* Color pickers */}
                <div className="flex flex-wrap items-center justify-center gap-4">
                  {Object.keys(themeColors1).slice(0, 4).map((color, i) => (
                    <button
                      key={`check-${i}`}
                      onClick={() => setPrimaryColor(color)}
                      className={`w-7 h-7 rounded-md flex items-center justify-center bg-gradient-to-r ${themeColors[color]} ${primaryColor === color ? "ring-1 ring-white" : ""
                        }`}
                    >
                      {primaryColor === color && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="white"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </button>
                  ))}

                  {Object.keys(themeColors1).slice(0, 3).map((color, i) => (
                    <button
                      key={`solid-${i}`}
                      onClick={() => setPrimaryColor(color)}
                      className={`w-7 h-7 rounded-full flex items-center justify-center bg-gradient-to-r ${themeColors[color]} ${primaryColor === color ? "ring-2 ring-white" : ""
                        } transition-all duration-200`}
                    >
                      {primaryColor === color && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              </div>

            </div>
            <div className="grid-cols-1">
              {/* Card One*/}
              <div
                className={`relative p-5 bg-gradient-to-tr ${themeColors[primaryColor]} text-white flex flex-col items-start justify-center ${skinClasses(darkMode)[skin]
                  }`}
              >
                <div className="w-20 h-20">
                  <CircularProgressbar
                    value={59}
                    text="59%"
                    styles={buildStyles({
                      pathColor: "#fff",
                      textColor: "#fff",
                      trailColor: "rgba(255,255,255,0.3)",
                      textSize: "20px",
                    })}
                  />
                </div>
                <p className="mt-7 text-2xl font-semibold">$31.313</p>
                <p className="font-medium tracking-wide text-sm text-white/80">Current Balance</p>

                <button className="mt-4 border border-white/20 px-3 py-1.5 w-full rounded-full flex items-center justify-center gap-2">

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="w-4 h-4 shrink-0"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <span>Get Statement</span>
                </button>

              </div>
              {/* Wages + Banking */}
              <div className="flex flex-col gap-4 h-full mt-5">
                <div
                  className={`relative p-4 flex flex-col justify-between min-h-[140px] 
    ${darkMode ? "bg-[#11111f] text-white" : `${bgClasses.light[lightColor]}`} 
    ${skinClasses(darkMode)[skin]}`}
                >
                  <div>
                    <h3 className="font-medium text-sm+">Pay App Wages</h3>
                    <div className="flex gap-2 mt-2">
                      <span className="flex items-center gap-1 text-xs px-2 py-1 rounded bg-indigo-900 text-indigo-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-3 h-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        Aug 11
                      </span>
                      <span className="text-xs px-2 py-1 rounded bg-orange-900 text-orange-400">
                        Performance
                      </span>
                    </div>
                  </div>

                  <div className="flex mt-3 -space-x-2">
                    <img
                      className="w-7 h-7 rounded-full border-2 border-current"
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      alt="user1"
                    />
                    <img
                      className="w-7 h-7 rounded-full border-2 border-current"
                      src="https://randomuser.me/api/portraits/men/45.jpg"
                      alt="user2"
                    />
                    <div className="w-7 h-7 rounded-full bg-orange-600 flex items-center justify-center text-white text-xs font-normal border-2 border-current">
                      JD
                    </div>
                  </div>
                </div>

                <div
                  className={`relative px-4 py-7 bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white ${skinClasses(darkMode)[skin]
                    }`}
                >
                  <h3 className="font-medium text-base mb-3">Banking Cards</h3>
                  <Swiper
                    spaceBetween={12}
                    slidesPerView={1.2}
                    className="w-full"
                  >
                    {cards.map((card, idx) => (
                      <SwiperSlide key={idx}>
                        <div className="rounded-lg p-6 bg-gradient-to-br from-[#ffffff55] to-[#ffffff20] h-32 w-56 shadow-lg text-white flex flex-col gap-2">
                          <div className="flex justify-between items-center">
                            <span className="text-xl font-extrabold">{card.type}</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-6 h-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6.75 7.75a6.25 6.25 0 000 8.5m3.5-11a10.25 10.25 0 010 14m3.5-17.5a14.25 14.25 0 010 21"
                              />
                            </svg>
                          </div>
                          <div>
                            <p className="text-lg font-semibold tracking-wide">{card.amount}</p>
                            <p className="mt-1 text-xs font-medium">{card.number}</p>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>

                </div>

              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Tailwind animation keyframes */}
      <style>{`
        @keyframes slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
      `}</style>
    </GoogleOAuthProvider>
  );
}
