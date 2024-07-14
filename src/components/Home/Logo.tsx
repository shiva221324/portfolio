import React from "react";
import { easeIn, motion } from "framer-motion";
import img from "../assets/s.png";
import { useState } from "react";

const Logo: React.FC = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  // console.log(setisDarkMode);
  return (
    <div
      className="fixed left-3 top-10 cursor-pointer md:left-10 md:top-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute w-[2.9rem] h-[2.9rem] md:w-[3.4rem] md:h-[3.4rem] bg-[#c5c5c5] dark:bg-[#111]  rounded-full flex justify-center items-center">
        <div className="absolute p-2 dark:invert flex justify-center items-center">
          <img
            src={img}
            alt="logo"
            className={`logo-image ${isHovered ? "logo-image-hovered" : ""}`}
          />
        </div>
      </div>
      <motion.div
        className="absolute font-semibold rounded-lg top-3 px-4 py-[0.23rem] text-white bg-[#42bcbc]"
        initial={{ x: "90%", opacity: 0 }}
        animate={{
          x: isHovered ? "95%" : "90%",
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.5, ease: easeIn }}
      >
        shiva
      </motion.div>
    </div>
  );
};

export default Logo;
