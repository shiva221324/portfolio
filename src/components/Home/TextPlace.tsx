import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TextDecrypt from "./TextDecrypt";

const TextPlace: React.FC = () => {
  const [isFullStack, setIsFullStack] = useState<boolean>(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsFullStack((prev) => !prev);
    }, 4100);

    return () => clearInterval(intervalId);
  }, []);

  // Function to split the text into individual letters
  const splitText = (text: string): JSX.Element[] => {
    return text.split("").map((char, index) => (
      <motion.span
        key={index}
        style={{ display: "inline-block" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 0.8, delay: index * 0.1 }} // Delay for each letter
      >
        {char}
      </motion.span>
    ));
  };

  // Function to split the text into individual letters with space as separate element
  const splitTextWithSpace = (text: string): JSX.Element[] => {
    return text.split(" ").map((word, index) => (
      <span key={index}>
        {index > 0 && " "} {/* Add space if it's not the first word */}
        {splitText(word)}
      </span>
    ));
  };

  return (
    <div className="dark:text-white mt-2 opacity-70 top-[47%] left-[19%] absolute md:top-[20%] md:left-[48%] lg:top-[23%] lg:left-[40%] overflow-hidden">
      <span className="text-xl  md:text-2xl dark:opacity-70">
        Hey there! I'm
      </span>
      <div className="text-xl flex ">
        <TextDecrypt text="SHIVA VENKAT KUMAR" />
      </div>
      <span className=" text-xl md:text-2xl inline-block opacity-80">
        And I'm
      </span>
      <div className="relative tracking-wide opacity-90 dark:opacity-80">
        <motion.div
          key={isFullStack ? "FULL STACK" : "JAVA STACK"}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 0.8, delay: 11 * 0.1 }} // Delay to match the appearance of the full word
          className="text-[2.6rem] md:text-6xl lg:text-8xl inline-block opacity-90 dark:opacity-85 "
        >
          {splitTextWithSpace(isFullStack ? "FULL STACK" : "BUG BOUNTY")}
        </motion.div>
        <motion.div
          key={isFullStack ? "FULL STACK-box" : "MOBILE APP-box"}
          initial={{ x: 0, scaleX: 0.5, opacity: 1 }}
          animate={{
            x: [0, 650],
            scaleX: [0.5, 2, 0.5],
            opacity: 1,
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="box overflow-hidden absolute top-0 bg-[#42fcfc] w-[220px] h-[65px] lg:w-[320px] lg:h-[100px] origin-left"
        ></motion.div>
      </div>
      <span className="text-[2.6rem] opacity-90 dark:opacity-85  md:text-6xl  lg:text-8xl inline-block lg:mt-4 tracking-wide">
        <TextDecrypt text="DEVELOPER" />
      </span>
    </div>
  );
};

export default TextPlace;
