import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { SiLeetcode } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";

interface SocialData {
  name: string;
  url: string;
  tag: JSX.Element;
}
const Social: React.FC = () => {
  const socialdata: SocialData[] = [
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/shiva-venkat-kumar-929138255/",
      tag: <FaLinkedinIn size={25} />,
    },
    {
      name: "github",
      url: "https://github.com/shiva221324",
      tag: <IoLogoGithub size={25} />,
    },
    {
      name: "leetcode",
      url: "https://leetcode.com/u/sivavenkatkumar221324/",
      tag: <SiLeetcode size={25} />,
    },
    {
      name: "twitter/x",
      url: "https://x.com/sivavenkatkumar",
      tag: <FaXTwitter size={25} />,
    },
    {
      name: "instagram",
      url: "https://www.instagram.com/sivavenkatakumar/",
      tag: <FaInstagram size={25} />,
    },
    {
      name: "telegram",
      url: "https://t.me/Sivavenkatkumar",
      tag: <FaTelegramPlane size={25} />,
    },
    {
      name: "discord",
      url: "https://discord.com/users/844199467120197722",
      tag: <FaDiscord size={25} />,
    },
  ];
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);

  const [show, setShow] = useState<boolean>(isMobile ? false : true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (isMobile) {
        setShow(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile, show]);

  return (
    <div className="absolute overflow-hidden top-14 right-5 lg:top-14 lg:right-16 z-20">
      <motion.div
        className="h-[2.4rem] lg:hidden w-[2.4rem] flex justify-center items-center rounded-full dark:bg-[#141414] bg-[#c5c5c5] cursor-pointer fixed right-[1rem] top-20 text-white"
        onClick={() => setShow(!show)}
        animate={{ rotate: show ? 45 : 0 }}
      >
        <FaPlus className=" dark:text-white text-black" size={22} />
      </motion.div>
      {show && (
        <div className="fixed right-[1rem]  top-[8.5rem] lg:top-24 lg:right-8 dark:text-white flex flex-col gap-9">
          {socialdata.map((ele, index) => (
            <div
              style={{
                boxShadow:
                  "  rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
              }}
              className="h-[2.5rem] hover:bg-[#42fcfc] hover:bg-opacity-70 hover:text-opacity-80  w-[2.5rem] flex items-center justify-center dark:hover:social dark:bg-[#141414]  rounded-full relative"
              key={index}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <a href={ele.url} key={index}>
                {ele.tag}
              </a>
              {hoveredItem === index && (
                <motion.div
                  className="z-30 sm:text-sm   absolute font-semibold rounded-lg top-15 px-3 py-[0.13rem] lg:px-4 lg:py-[0.23rem] text-white bg-[#42bcbc]"
                  initial={{ x: -60, opacity: 0 }}
                  animate={{
                    x: -70,
                    opacity: 1,
                  }}
                  transition={{ duration: 0.4, ease: "easeIn" }}
                >
                  {ele.name}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Social;
