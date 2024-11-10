import React from "react";
import Reactsvg from "../svgs/Reactsvg";
import Nextjs from "../svgs/Nextjssvg";
import Jssvg from "../svgs/Jssvg";
import Reduxsvg from "../svgs/Reduxsvg";
import Nodejssvg from "../svgs/Nodejssvg";
import Express from "../svgs/Expresssvg";
import Mongoodbsvg from "../svgs/Mongoodbsvg";
import Mysql from "../svgs/Mysql";
import Javasvg from "../svgs/Javasvg";
import Tssvg from "../svgs/Tssvg";
import { motion } from "framer-motion";
import Graphql from "components/svgs/Graphql";
import Spring from "components/svgs/Spring";
import { SiSpringboot } from "react-icons/si";
import Tailwind from "components/svgs/Tailwind";

const Tech: React.FC = () => {
  return (
    <div
      // className="  dark:text-white  absolute top-[87rem] md:top-[74rem] left-10 md:left-[5.5rem] md:mt-20 w-[85%] m-auto flex flex-col"
      className=" dark:text-white mt-10 md:mt-12 lg:mt-16 "
    >
      <motion.h1
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ x: 50, opacity: 0 }}
        transition={{ duration: 1.4 }}
        className="text-center  text-4xl md:text-5xl "
      >
        <span className=" ">Technologies</span>
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ x: -50, opacity: 0 }}
        transition={{ duration: 1.4 }}
        className="opacity-65 mt-12  md:mt-16"
      >
        <div className="flex flex-wrap gap-3 ml-6 md:ml-0">
          <div className="w-[80%] mx-auto md:w-full flex flex-wrap justify-center gap-3.5 md:gap-5">
            {/* java */}
            <motion.div
              initial={{ y: -4 }}
              animate={{
                y: [4, -4],
                transition: {
                  duration: 3.4,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }}
              className=" w-[3.5rem] h-[3.5rem] md:w-20 md:h-20 rounded-2xl border-2 border-neutral-800 p-2 flex justify-center items-center"
            >
              <Javasvg />
            </motion.div>
            {/* html */}
            <motion.div
              initial={{ y: -4 }}
              animate={{
                y: [-4, 4],
                transition: {
                  duration: 3.52,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }}
              className=" w-[3.5rem] h-[3.5rem] md:w-20 md:h-20 rounded-2xl border-2 border-neutral-800 p-2 flex justify-center items-center"
            >
              <Tailwind />
            </motion.div>

            {/* js */}
            <motion.div
              initial={{ y: -4 }}
              animate={{
                y: [-4, 4],
                transition: {
                  duration: 3.56,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }}
              className=" w-[3.5rem] h-[3.5rem] md:w-20 md:h-20 rounded-2xl border-2 border-neutral-800 p-2 flex justify-center items-center"
            >
              <Jssvg />
            </motion.div>
            {/* ts */}
            <motion.div
              initial={{ y: -4 }}
              animate={{
                y: [-4, 4],
                transition: {
                  duration: 3.4,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }}
              className=" w-[3.5rem] h-[3.5rem] md:w-20 md:h-20 rounded-2xl border-2 border-neutral-800 p-2 flex justify-center items-center"
            >
              <Tssvg />
            </motion.div>
            {/* react */}
            <motion.div
              initial={{ y: -4 }}
              animate={{
                y: [4, -4],
                transition: {
                  duration: 3.52,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }}
              className=" w-[3.5rem] h-[3.5rem] md:w-20 md:h-20 rounded-2xl border-2 border-neutral-800 p-2 flex justify-center items-center"
            >
              <Reactsvg />
            </motion.div>
            <motion.div
              initial={{ y: -4 }}
              animate={{
                y: [4, -4],
                transition: {
                  duration: 3.54,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }}
              className=" w-[3.5rem] h-[3.5rem] md:w-20 md:h-20 rounded-2xl border-2 border-neutral-800 p-2 flex justify-center items-center"
            >
              <Nextjs />
            </motion.div>
            {/* redux */}
            <motion.div
              initial={{ y: -4 }}
              animate={{
                y: [-4, 4],
                transition: {
                  duration: 3.54,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }}
              className=" md:hidden w-[3.5rem] h-[3.5rem] md:w-20 md:h-20 rounded-2xl border-2 border-neutral-800 p-2 flex justify-center items-center"
            >
              <Reduxsvg />
            </motion.div>
            {/* node */}
            <motion.div
              initial={{ y: -4 }}
              animate={{
                y: [4, -4],
                transition: {
                  duration: 3.56,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }}
              className="md:hidden w-[3.5rem] h-[3.5rem] md:w-20 md:h-20 rounded-2xl border-2 border-neutral-800 p-2 flex justify-center items-center"
            >
              <Nodejssvg />
            </motion.div>
          </div>

          <div className="w-full flex flex-wrap justify-center gap-4">
            {/* redux */}
            <motion.div
              initial={{ y: -4 }}
              animate={{
                y: [-4, 4],
                transition: {
                  duration: 3.54,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }}
              className="hidden  w-[3.5rem] h-[3.5rem] md:w-20 md:h-20 rounded-2xl border-2 border-neutral-800 p-2 md:flex justify-center items-center"
            >
              <Reduxsvg />
            </motion.div>
            {/* nodejs */}
            <motion.div
              initial={{ y: -4 }}
              animate={{
                y: [4, -4],
                transition: {
                  duration: 3.56,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }}
              className=" hidden w-[3.5rem] h-[3.5rem] md:w-20 md:h-20 rounded-2xl border-2 border-neutral-800 p-2 md:flex justify-center items-center"
            >
              <Nodejssvg />
            </motion.div>
            {/* express */}
            {/* <motion.div
              initial={{ y: -4 }}
              animate={{
                y: [-4, 4],
                transition: {
                  duration: 3.4,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }}
              className=" w-[3.5rem] h-[3.5rem] md:w-20 md:h-20 rounded-2xl border-2 border-neutral-800 p-2"
            >
              <Express />
            </motion.div> */}
            {/* graphql */}
            <motion.div
              initial={{ y: -4 }}
              animate={{
                y: [-4, 4],
                transition: {
                  duration: 3.4,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }}
              className=" w-[3.5rem] h-[3.5rem] md:w-20 md:h-20 rounded-2xl border-2 border-neutral-800 p-2 flex justify-center items-center"
            >
              <Graphql />
            </motion.div>
            {/* mongoodb */}
            <motion.div
              initial={{ y: -4 }}
              animate={{
                y: [4, -4],
                transition: {
                  duration: 3.53,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }}
              className=" w-[3.5rem] h-[3.5rem] md:w-20 md:h-20 rounded-2xl border-2 border-neutral-800 p-2 flex justify-center items-center"
            >
              <Mongoodbsvg />
            </motion.div>
            {/* mysql */}
            <motion.div
              initial={{ y: -4 }}
              animate={{
                y: [-4, 4],
                transition: {
                  duration: 3.4,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }}
              className=" w-[3.5rem] h-[3.5rem] md:w-20 md:h-20 rounded-2xl border-2 border-neutral-800 p-2 flex justify-center items-center"
            >
              <Mysql />
            </motion.div>
            <motion.div
              initial={{ y: -4 }}
              animate={{
                y: [-4, 4],
                transition: {
                  duration: 3.4,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }}
              className=" w-[3.5rem] h-[3.5rem] md:w-20 md:h-20 rounded-2xl border-2 border-neutral-800 p-2 flex justify-center items-center"
            >
              <SiSpringboot size={45} className=" text-green-600" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Tech;
