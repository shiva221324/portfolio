import React from "react";
import Project from "./Project";
import { motion } from "framer-motion";
import { useState } from "react";
import video1 from "../assets/Screen Recording 2024-07-12 185358.mp4";
import video2 from "../assets/Screen Recording 2024-07-12 185845.mp4";
import video3 from "../assets/Screen Recording 2024-07-12 193406.mp4";

const Projects: React.FC = () => {
  const projects = [
    {
      name: "Koffee",
      description:
        "Discover the rich, bold flavors of our freshly roasted coffee beans, ethically sourced from the finest farms around the world. Savor every cup and experience the perfect blend of aroma and taste with every sip.",
      bgcolor: "#868691",
      techs: ["HTML", "CSS", "JAVA SCRIPT"],
    },
    {
      name: "best eats",
      description:
        "Craving something delicious? Order from your favorite local restaurants and get your meals delivered fast and fresh right to your doorstep. Taste the convenience today!",
      bgcolor: "#323238",
      techs: ["REACTJS", "TAILWIND CSS"],
    },
    {
      name: "Learn Flow",
      description:
        " Enable instructors to create, manage, and organize their courses with features such as video uploads, quizzes, and downloadable resources.",
      bgcolor: "#4a576b",
      techs: ["REACTJS", "TAILWIND CSS", "NODE JS", "EXPRESS JS", "MONGOO DB"],
    },
  ];

  const [pos, setPos] = useState(-1);
  const [first, setFirst] = useState(0);
  const mover = (val) => {
    setPos(val * 19);
  };

  return (
    <div className=" w-[85%] mx-auto  relative">
      <div className=" mx-auto dark:text-white text-center mt-24">
        <motion.h1
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ x: -50, opacity: 0 }}
          transition={{ duration: 1.4 }}
          className=" text-5xl"
        >
          Work
        </motion.h1>
      </div>
      <div className="  left-[5.5rem] ml-9 mx-auto mt-20">
        <div className=" mx-auto">
          {projects.map((project, index) => (
            <Project
              key={index}
              title={project.name}
              desc={project.description}
              mover={mover}
              count={index}
              color={project.bgcolor}
              className={project.bgcolor}
              techs={project.techs}
              setFirst={setFirst}
            />
          ))}
        </div>
        <div className="absolute  top-0 w-[93%] h-fit pointer-events-none">
          <motion.div
            initial={{ y: pos }}
            animate={{ y: pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="window absolute w-[28rem] top-[8rem] h-[19rem]  left-[28%] overflow-hidden"
          >
            <motion.div
              animate={{ y: -pos + `rem` }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
              className={
                pos === -1
                  ? `w-full h-full  flex items-center justify-center`
                  : `w-full h-full bg-[#868691]  flex items-center justify-center`
              }
            >
              {first === 0 && (
                <video
                  autoPlay
                  muted
                  loop
                  style={{
                    width: "auto",
                    height: "auto",
                    maxWidth: "100%",
                    maxHeight: "100%",
                  }}
                >
                  <source src={video1} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </motion.div>
            <motion.div
              animate={{ y: -pos + `rem` }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
              className="w-full bg-[#323238] h-full  flex items-center justify-center"
            >
              <video
                autoPlay
                muted
                loop
                style={{
                  width: "auto",
                  height: "auto",
                  maxWidth: "100%",
                  maxHeight: "100%",
                }}
              >
                <source src={video2} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
            <motion.div
              animate={{ y: -pos + `rem` }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
              className="w-full bg-[#4a576b] h-full  flex items-center justify-center"
            >
              <video
                autoPlay
                muted
                loop
                style={{
                  width: "auto",
                  height: "auto",
                  maxWidth: "100%",
                  maxHeight: "100%",
                }}
              >
                <source src={video3} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
