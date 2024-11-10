import React from "react";
import { IoMdDocument } from "react-icons/io";
import resume from "../assets/shivaresume.pdf";
type Props = {};

const Resume = (props: Props) => {
  return (
    <div
      style={{
        // boxShadow:
        //   "  rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
        boxShadow:
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
      }}
      className=" hidden md:block cursor-pointer group dark:text-white text-black absolute left-[13rem] top-[64.4rem] md:fixed md:left-2 md:top-[44rem] lg:top-[41rem] w-[7.5rem] h-[2.74rem] md:w-[7rem] md:h-[2.2rem] rounded-lg"
    >
      <a
        href={`${resume}`}
        className=" font-medium justify-center pt-[0.36rem] md:pt-[0.18rem] text-lg flex items-center gap-1"
      >
        <span className=" group-hover:font-semibold ">Resume</span>
        <span className=" transition-all duration-200">
          <IoMdDocument size={21} />
        </span>
      </a>
    </div>
  );
};

export default Resume;
