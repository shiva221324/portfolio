import React from "react";
import "@theme-toggles/react/css/Classic.css";
import { Classic } from "@theme-toggles/react";
import { useState } from "react";
interface DarkmodeProps {
  setisDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}
const Darkmode: React.FC<DarkmodeProps> = ({ setisDarkMode }) => {
  const [isToggled, setToggle] = useState<boolean>(false);

  return (
    <div
      onClick={(prev) => {
        setisDarkMode(!prev);
      }}
      className=" z-50 dark:text-[#fff] cursor-none text-[#FFCC33] right-[1rem] lg:right-8 text-4xl top-7 fixed "
    >
      <Classic
        toggled={isToggled}
        toggle={setToggle}
        duration={750}
        {...({} as any)}
      />
    </div>
  );
};

export default Darkmode;
