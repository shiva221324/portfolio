import {
  Backend_skill,
  Full_stack,
  Other_skill,
  Skill_data,
  CodingEnvironment,
  Language_skill,
  leetcode1,
  leetcode2,
  leetcode3,
} from "./SkillData";
import { motion } from "framer-motion";

import React from "react";
import SkillDataProvider from "./SkillProvider";
const Skills = () => {
  return (
    <>
      <section
        id="skills"
        className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-40 py-10"
        style={{ transform: "scale(0.9" }}
      >
        {/* <SkillText /> */}
        <motion.h1
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ x: -50, opacity: 0 }}
          transition={{ duration: 1.4 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center  mb-8 dark:text-white"
        >
          <span className=" ">Technologies</span>
        </motion.h1>
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          {Skill_data.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
              title={image.skill_name}
            />
          ))}
        </div>

        <div className="flex flex-row justify-around flex-wrap mt-4 gap-7 items-center">
          {Backend_skill.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>

        {/* ide's */}
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-10 items-center">
          {CodingEnvironment.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
              title={image.skill_name}
            />
          ))}
        </div>

        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          {Full_stack.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          {Language_skill.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          {Other_skill.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* <section className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden ">
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          {leetcode1.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>

        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          {leetcode2.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>

        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          {leetcode3.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
              title={image.skill_name}
            />
          ))}
        </div>
      </section> */}
    </>
  );
};

export default Skills;
