import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import video1 from "../assets/Screen Recording 2024-07-12 185358.mp4";
import video2 from "../assets/Screen Recording 2024-07-12 185845.mp4";
import video3 from "../assets/Screen Recording 2024-07-12 193406.mp4";
import Projectsmall from "./Projectsmall";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";

const Projectssmall: React.FC = () => {
  const projects = [
    {
      name: "Koffee",
      description:
        "Discover the rich, bold flavors of our freshly roasted coffee beans, ethically sourced from the finest farms around the world. Savor every cup and experience the perfect blend",
      bgcolor: "#323238",
      techs: ["HTML", "CSS", "JAVA SCRIPT"],
    },
    {
      name: "Best Eats",
      description:
        "Craving something delicious? Order from your favorite local restaurants and get your meals delivered fast and fresh right to your doorstep. Taste the convenience today! ",
      bgcolor: "#868691",
      techs: ["REACTJS", "TAILWIND CSS"],
    },
    {
      name: "Ecommerce",
      description:
        "Explore a world of endless shopping possibilities with our diverse range of products, from fashion to electronics. Shop smart, save big, and enjoy fast, reliable delivery.",
      bgcolor: "#4a576b",
      techs: ["REACTJS", "TAILWIND CSS", "NODE JS", "MONGOO DB"],
    },
  ];

  const [pos, setPos] = useState(0);
  const mover = (val) => {
    setPos(val * 19);
  };

  return (
    <div
      //  className="absolute top-[83rem] md:top-[93rem] left-[3.4rem] md:left-[12rem] mt-32"
      className=" ml-16 mt-10"
    >
      <h1 className=" text-4xl md:text-5xl text-center md:mr-32 text-black dark:text-white mb-10 opacity-75">
        Work
      </h1>
      <div className="text-white w-[19rem] h-[28rem] md:w-[43rem] md:h-[32rem]">
        {/* Increased height to accommodate pagination */}
        <Swiper
          slidesPerView={1}
          spaceBetween={24}
          freeMode={true}
          loop={true}
          pagination={{ clickable: true }}
          modules={[FreeMode, Pagination]}
          className="h-full md:h-[35rem] flex flex-col rounded-sm justify-between custom-swiper"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div
                className={` rounded-[0.2rem] flex flex-col justify-center items-center bg-[${project.bgcolor}] gap-2 w-[19rem] md:w-[28rem] md:h-[33rem] h-[25rem]`}
              >
                <motion.div
                  initial={{ y: pos }}
                  animate={{ y: pos + `rem` }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
                  className={`w-[19rem] md:w-[28rem] md:h-[17rem] h-[10rem] flex justify-center items-center bg-[${project.bgcolor}] overflow-hidden1`}
                >
                  <video
                    autoPlay
                    muted
                    loop
                    className="w-full h-full object-cover"
                    style={{
                      width: "auto",
                      height: "auto",
                      maxWidth: "100%",
                      maxHeight: "100%",
                    }}
                  >
                    <source
                      src={index === 0 ? video1 : index === 1 ? video2 : video3}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </motion.div>
                <Projectsmall
                  key={index}
                  title={project.name}
                  desc={project.description}
                  mover={mover}
                  count={index}
                  color={project.bgcolor}
                  className={project.bgcolor}
                  techs={project.techs}
                />
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination mt-4"></div>{" "}
          {/* Add margin for spacing */}
        </Swiper>
      </div>
    </div>
  );
};

export default Projectssmall;
