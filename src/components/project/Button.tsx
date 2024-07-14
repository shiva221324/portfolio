import React from "react";
import { IoMdReturnRight } from "react-icons/io";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ButtonProps {
  hovervalue: boolean;
  title: String;
}
const Toastmsg = () => {
  toast("Launching  Soon");
};
const Button: React.FC<ButtonProps> = ({ hovervalue, title }) => {
  return (
    <div
      onClick={Toastmsg}
      className={hovervalue === true ? " block" : "hidden"}
    >
      <div className="flex items-center group transition-all duration-200 max-w-[7.5rem]  lg:max-w-36 px-3 py-2 lg:px-4 lg:py-2 bg-black text-white  dark:bg-zinc-100 dark:text-black rounded-full cursor-pointer">
        <p className=" text-xs lg:text-sm font-medium mr-2">{title}</p>
        <IoMdReturnRight className="  translate-x-0 group-hover:translate-x-2 transition duration-300  ease-out " />
      </div>
    </div>
  );
};

export default Button;
