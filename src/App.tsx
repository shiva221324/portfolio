import React, { useEffect, useState, Suspense } from "react";
import StarField from "./components/Home/StarField";
import "./index.css";
import About from "components/about/About";
import Logo from "./components/Home/Logo";
import Navigation from "components/Home/Navigation";
import Social from "./components/Home/Social";
import TextPlace from "./components/Home/TextPlace";
import Photo from "./components/Home/Photo";
import Tech from "./components/skills/Tech";
import Contact from "./components/contact/Contact";
import Darkmode from "./components/Home/Darkmode";
import Resume from "components/Home/Resume";
import { HashLink as Link } from "react-router-hash-link";
import Allblogs from "components/blog/Allblogs";
import Addblog from "components/blog/Addblog";
import Blog from "components/blog/Blog";
import Experience from "components/experience/Experience";
import Skills from "components/skills/Tech2";
import AchievementsGallery from "components/achivements/Acchivements";

const Projects = React.lazy(() => import("./components/project/Projects"));
const Projectssmall = React.lazy(
  () => import("./components/project/Projectssmall")
);

function App({ setisDark, isDark }) {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section id="home">
      <div className={isDark === true ? "dark w-full" : "w-full"}>
        {isDark ? <StarField /> : <p></p>}
        {/* <Resume /> */}
        <Darkmode setisDarkMode={setisDark} />
        <Navigation isDark={isDark} />
        <Social />

        <Photo isDark={isDark} />
        <TextPlace />
        <About isDark={isDark} />
        <section id="#experience">
          <Experience />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <AchievementsGallery />
        <Suspense fallback={<div>Loading...</div>}>
          {!isMobile && (
            <section id="projects">
              <Projects />
            </section>
          )}
          {isMobile && (
            <section id="projects">
              <Projectssmall />
            </section>
          )}
        </Suspense>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </section>
    // <Allblogs />
    // <Addblog />
    // <Blog />
  );
}

export default React.memo(App);
