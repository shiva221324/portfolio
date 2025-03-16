import React from "react";
import image1 from "../assets/about1.jpg";
import image2 from "../assets/about2.jpg";
import Button2 from "./Button2.tsx";
import { motion } from "framer-motion";
import resume from "../assets/shivaresume.pdf";

type Props = {
  isDark: boolean;
};

const About = ({ isDark }: Props) => {
  return (
    <section id="about" className="mt-[40rem]">
      <div className="mt-24 lg:mt-44 mb-5 ml-[3.9rem] md:ml-20 dark:text-white text-black">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ x: -50, opacity: 0 }}
          transition={{ duration: 1.4 }}
          className="opacity-100 ml-20 md:ml-44 lg:ml-0 lg:text-center text-3xl md:text-5xl md:mb-10"
        >
          About Me
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ x: 50, opacity: 0 }}
          transition={{ duration: 1.4 }}
          className="flex flex-col md:flex-row justify-center gap-28 w-[95%]"
        >
          <div className="hidden lg:block mt-3 md:w-[20%]">
            <img
              className="text-white dark:grayscale rounded-xl h-[20rem] w-[24rem] md:h-[23rem] md:w-[37.5rem] md:object-cover"
              src={image1}
              alt="about"
            />
          </div>
          <div className="mt-6 flex flex-col gap-2">
            <h1 className="text-lg">
              Hi, I am
              <span className="text-lg md:text-xl font-[450]">
                {` Shiva Venkat Kumar`}
              </span>
            </h1>
            <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl opacity-85">
              A Full Stack Web developer
            </h1>
            <pre className="md:hidden text-[0.9rem]">
              {`I am a passionate third-year B.Tech  
student specializing in both front
-end and back-end development. With
a strong foundation in data struc-
tures and algorithms, I enjoy creat-
ing efficient and dynamic web appli-
cations. My journey in tech is driven
by a love for problem-solving and co-
ntinuous learning.`}
            </pre>
            <div className="hidden mt-5 md:flex md:flex-col text-sm lg:text-lg md:leading-6 lg:leading-8">
              <p>
                I am a passionate third-year B.Tech student focused in both
                front-end
              </p>
              <p>
                and back-end development. Presently, I am learning bug bounty.
                With a strong
              </p>
              <p>
                foundation in data structures and algorithms, I enjoy creating
                efficient and
              </p>
              <p>
                dynamic web applications. My journey in tech is driven by a love
                for problem-solving
              </p>
              <p>and continuous learning.</p>
            </div>
            <div className="flex gap-4 mt-6">
              <a href="#contact">
                <Button2
                  shadow={false}
                  className=""
                  isDark={isDark}
                  hovervalue={true}
                  title="Say Hello"
                />
              </a>

              <div className="md:hidden">
                <a href={`${resume}`}>
                  <Button2
                    shadow={true}
                    className=""
                    isDark={isDark}
                    hovervalue={true}
                    title="Resume"
                  />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
