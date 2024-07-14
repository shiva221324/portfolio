import React from "react";
import { IoMdReturnRight } from "react-icons/io";
import { LuSend } from "react-icons/lu";
import Sendsvg from "components/svgs/Sendsvg.tsx";
import { IoMdDocument } from "react-icons/io";

const Button = ({ hovervalue, className, title, isDark, shadow }) => {
  return (
    <div
      style={{
        boxShadow:
          shadow === false
            ? ""
            : "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
      }}
      className={
        hovervalue === true ? " block opacity-100 rounded-xl" : "hidden"
      }
    >
      <div
        className={
          !shadow
            ? "flex items-center justify-center group transition-all duration-200 max-w-fit   px-4 py-3 lg:px-8 lg:py-3 bg-black text-white  dark:bg-white dark:text-black rounded-xl cursor-pointer"
            : !isDark
            ? "flex items-center justify-center group transition-all duration-200 max-w-fit   px-4 py-3 lg:px-8 lg:py-3 rounded-xl cursor-pointer"
            : "flex items-center bg-white text-black justify-center group transition-all duration-200 max-w-fit   px-4 py-3 lg:px-8 lg:py-3 rounded-xl cursor-pointer"
        }
      >
        <p className=" font-medium text-[0.95rem]  md:text-[1.05rem] mr-2">
          {title}
        </p>
        {shadow === true ? (
          <span className=" transition-all duration-200">
            <IoMdDocument size={21} />
          </span>
        ) : (
          <div className=" dark:text-white text-black w-6 h-5  translate-x-0 group-hover:translate-x-2 group-hover:-translate-y-1 transition duration-300  ease-out ">
            <Sendsvg isDark={isDark} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Button;
