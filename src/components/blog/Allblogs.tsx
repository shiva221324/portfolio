import React, { useState } from "react";
import Tags from "./Tags";
import "@theme-toggles/react/css/Classic.css";
import { Classic } from "@theme-toggles/react";
import Blogshow from "./Blogshow";

const Allblogs = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={isDarkMode ? "dark bg-[#131212]" : "bg-gray-100"}>
      <div className="w-full dark:text-white text-gray-900 transition-all duration-500">
        <div className="fixed top-7 right-2 lg:right-8 z-50">
          <Classic
            toggled={isDarkMode}
            toggle={setIsDarkMode}
            duration={750}
            className="text-4xl text-yellow-400"
          />
        </div>
        <div className="flex flex-col items-center w-[70%] mx-auto pt-6 gap-5">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-blue-600 dark:text-blue-400 mb-4">
              Debugging Diaries Blog
            </h1>
            <p className="text-xl ">
              <span className="font-bold">Hey, Shiva here!</span> Dive into my
              blogs and explore a world of insights.
            </p>
          </div>
          <div className="flex flex-col items-center w-full">
            <input
              className="w-full max-w-4xl p-2 border-2 border-gray-400 rounded-md focus:outline-none focus:border-blue-500 transition-all duration-300"
              type="text"
              placeholder="Search for blogs..."
            />
          </div>
          <Tags />
        </div>
      </div>
      <div className=" mt-16 mx-auto w-[70%]">
        <Blogshow />
      </div>
    </div>
  );
};

export default Allblogs;
