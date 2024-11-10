import React, { useState } from "react";
import { color, motion } from "framer-motion";
import { HashLink as Link } from "react-router-hash-link";

const Navigation: React.FC = ({ isDark }) => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [activeNav, setActiveNav] = useState<number | null>(0);

  const handleClick = (navItem: number) => {
    setActiveNav(navItem);
  };

  return (
    <div className=" ">
      <div className="opacity-90 dark:text-[#fafafa] fixed top-[83%] left-[1rem] font-[550] lg:left-[3.3rem] lg:top-[78.5%] transform -rotate-90 -translate-x-[50%] text-lg text-black">
        <div className="flex flex-row-reverse items-center gap-x-12 text-[1.05rem] absolute ">
          <div
            className={`flex items-center justify-center gap-1 relative ${
              activeNav === 0 ? ` font-bold` : "text-black dark:text-white"
            }`}
            onMouseEnter={() => setHoverIndex(0)}
            onMouseLeave={() => setHoverIndex(null)}
            onClick={() => {
              handleClick(0);
            }}
          >
            {activeNav === 0 && (
              <span
                style={{ boxShadow: "0 0 0.25em #42fcfc" }}
                className="inline-block   w-[0.34rem] h-[0.34rem] rounded-full bg-[#42fcfc]"
              ></span>
            )}
            <Link
              onClick={() => {
                handleClick(0);
                window.location.reload();
              }}
              to={`#home`}
              smooth
            >
              Home
            </Link>

            <motion.div
              initial={{ width: 0 }}
              animate={hoverIndex === 0 ? { width: "100%" } : { width: 0 }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
              }}
              className="absolute bottom-0 h-[0.13rem] lg:h-[0.17rem] bg-[#42fcfc]"
              style={{ left: 0 }}
            ></motion.div>
          </div>

          <div
            className={`flex items-center justify-center gap-1 relative ${
              activeNav === 1 ? " font-bold" : "text-black dark:text-white"
            }`}
            onMouseEnter={() => setHoverIndex(1)}
            onMouseLeave={() => setHoverIndex(null)}
            onClick={() => {
              handleClick(1);
            }}
          >
            {activeNav === 1 && (
              <span
                style={{ boxShadow: "0 0 0.25em #42fcfc" }}
                className="inline-block w-[0.34rem] h-[0.34rem] rounded-full bg-[#42fcfc]"
              ></span>
            )}
            <Link onClick={() => handleClick(1)} to={`#about`} smooth>
              About
            </Link>

            <motion.div
              initial={{ width: 0 }}
              animate={hoverIndex === 1 ? { width: "100%" } : { width: 0 }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
              }}
              className="absolute bottom-0 h-[0.13rem] lg:h-[0.17rem] bg-[#42fcfc]"
              style={{ left: 0 }}
            ></motion.div>
          </div>

          <div
            className={`flex items-center justify-center gap-1 relative ${
              activeNav === 4 ? "font-bold" : "text-black dark:text-white"
            }`}
            onMouseEnter={() => setHoverIndex(4)}
            onMouseLeave={() => setHoverIndex(null)}
            onClick={() => {
              handleClick(4);
            }}
          >
            {activeNav === 4 && (
              <span
                style={{ boxShadow: "0 0 0.25em #42fcfc" }}
                className="inline-block w-[0.34rem] h-[0.34rem] rounded-full bg-[#42fcfc]"
              ></span>
            )}
            <Link onClick={() => handleClick(4)} to={`#experience`} smooth>
              Experience
            </Link>

            <motion.div
              initial={{ width: 0 }}
              animate={hoverIndex === 4 ? { width: "100%" } : { width: 0 }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
              }}
              className="absolute bottom-0 h-[0.13rem] lg:h-[0.17rem] bg-[#42fcfc]"
              style={{ left: 0 }}
            ></motion.div>
          </div>
          <div
            className={`flex items-center justify-center gap-1 relative ${
              activeNav === 2 ? "font-bold" : "text-black dark:text-white"
            }`}
            onMouseEnter={() => setHoverIndex(2)}
            onMouseLeave={() => setHoverIndex(null)}
            onClick={() => {
              handleClick(2);
            }}
          >
            {activeNav === 2 && (
              <span
                style={{ boxShadow: "0 0 0.25em #42fcfc" }}
                className="inline-block w-[0.34rem] h-[0.34rem] rounded-full bg-[#42fcfc]"
              ></span>
            )}
            <Link onClick={() => handleClick(2)} to={`#skills`} smooth>
              Skills
            </Link>

            <motion.div
              initial={{ width: 0 }}
              animate={hoverIndex === 2 ? { width: "100%" } : { width: 0 }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
              }}
              className="absolute bottom-0 h-[0.13rem] lg:h-[0.17rem] bg-[#42fcfc]"
              style={{ left: 0 }}
            ></motion.div>
          </div>

          <div
            className={`flex items-center justify-center gap-1 relative ${
              activeNav === 3 ? " font-bold" : "text-black dark:text-white"
            }`}
            onMouseEnter={() => setHoverIndex(3)}
            onMouseLeave={() => setHoverIndex(null)}
            onClick={() => {
              handleClick(3);
            }}
          >
            {activeNav === 3 && (
              <span
                style={{ boxShadow: "0 0 0.25em #42fcfc" }}
                className="inline-block w-[0.34rem] h-[0.34rem] rounded-full bg-[#42fcfc]"
              ></span>
            )}
            <Link onClick={() => handleClick(3)} to={`#projects`} smooth>
              Work
            </Link>

            <motion.div
              initial={{ width: 0 }}
              animate={hoverIndex === 3 ? { width: "100%" } : { width: 0 }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
              }}
              className="absolute bottom-0 h-[0.13rem] lg:h-[0.17rem] bg-[#42fcfc]"
              style={{ left: 0 }}
            ></motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
