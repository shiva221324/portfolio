import React from "react";
import img1 from "../assets/shiva1.jpg";
import img2 from "../assets/shiva.jpg";
import { motion } from "framer-motion";
type Props = {
  isDark: boolean;
};

const Photo = ({ isDark }: Props) => {
  return (
    <div className="absolute z-10 top-[13.6%] left-[23%] md:top-[20%] md:left-[16%] lg:top-[25.5%] lg:left-[17%]">
      <motion.div
        whileInView={{ opacity: 1 }}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.4, delay: 0.1 }}
      >
        <img
          className="w-[13rem] opacity-95 h-[13rem] lg:w-[16.6rem] lg:h-[16.6rem] rounded-full object-cover"
          src={isDark ? img1 : img2}
          alt="Shiva"
        />
      </motion.div>
    </div>
  );
};

export default Photo;
