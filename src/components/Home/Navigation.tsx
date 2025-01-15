import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HashLink as Link } from "react-router-hash-link";
import Resume from "./Resume";
import Logo from "./Logo";
import resume from "../assets/shivaresume.pdf";

const Navigation = ({ isDark }) => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [activeNav, setActiveNav] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = (navItem) => {
    setActiveNav(navItem);
  };

  const navItems = [
    { id: 0, label: "Home", link: "#home", reload: true },
    { id: 1, label: "About", link: "#about" },
    { id: 4, label: "Experience", link: "#experience" },
    { id: 2, label: "Skills", link: "#skills" },
    { id: 3, label: "Work", link: "#projects" },
  ];

  const NavItem = ({ item }) => (
    <div
      className={`relative flex items-center  justify-center gap-1 transition-all duration-300
        ${
          activeNav === item.id
            ? "font-semibold text-black dark:text-white"
            : "text-black dark:text-white font-[450]"
        } sm:${item.id === 6 ? "hidden" : "block"}`}
      onMouseEnter={() => setHoverIndex(item.id)}
      onMouseLeave={() => setHoverIndex(null)}
      onClick={() => handleClick(item.id)}
    >
      {activeNav === item.id && (
        <div className="h-1 w-1 rounded-full bg-cyan-400 shadow-glow" />
      )}
      <Link
        onClick={() => {
          handleClick(item.id);
          if (item.reload) {
            // Move the cursor or focus to the starting position
            window.scrollTo(0, 0); // Scrolls the page to the top
          }
        }}
        to={item.link}
        smooth
        className="whitespace-nowrap"
      >
        {item.label}
      </Link>

      <motion.div
        initial={{ width: 0 }}
        animate={hoverIndex === item.id ? { width: "100%" } : { width: 0 }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-0 h-0.5 bg-cyan-400 lg:h-[0.20rem]"
      />
    </div>
  );

  return (
    <div className="w-full">
      <nav
        className={`
        fixed
        z-50
        transition-all
        duration-300
        md:transform-none
        ${isMobile ? "top-[81%] left-6 " : "top-[85%]  left-0 lg:left-16"}
      `}
      >
        <div
          className={`
          relative
          dark:bg-black/80
          font-medium
          text-lg
          transition-all
          duration-300
          ${
            isMobile
              ? " px-4 py-3 origin-left transform -rotate-90 "
              : "py-6 px-4 -rotate-90 transform origin-left"
          }
        `}
        >
          <div
            className={`
            flex
            items-center
            transition-all
            duration-300
            flex-row-reverse
            ${isMobile ? "gap-8 md:gap-6" : "gap-8 "}
          `}
          >
            <div
              className={`
              inline-block
             rotate-90
            `}
            >
              <Logo />
            </div>

            {/* <div className=" mt-5"> */}
            {navItems.map((item) => (
              <NavItem key={item.id} item={item} />
            ))}

            {/* </div> */}
            <div
              className={`
              md:inline-block
              sm:hidden 
              ${isMobile ? "rotate-90" : "rotate-90"}
            `}
            >
              <Resume />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
