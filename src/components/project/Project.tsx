import React, { useState } from "react";
import Button from "./Button";
import { motion } from "framer-motion";

interface ProjectProps {
  title: string;
  desc: string;
  mover: (count: number) => void;
  className: string;
  count: number;
  color: string;
  techs: string[];
  setFirst: (count: number) => void;
}

const Project: React.FC<ProjectProps> = ({
  title,
  desc,
  mover,
  className,
  count,
  color,
  techs,
  setFirst,
}) => {
  const [bgcolor, setBgcolor] = useState<string | null>(null);
  const [hover, setHover] = useState<boolean>(false);

  return (
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ x: 50, opacity: 0 }}
      transition={{ duration: 1.4 }}
      onMouseEnter={() => {
        mover(count);
        setBgcolor(color);
        setHover(true);
        setFirst(0);
      }}
      onMouseLeave={() => {
        mover(-1);
        setBgcolor(null);
        setHover(false);
      }}
      className={className}
    >
      {/* <ToastContainer /> */}
      <div
        style={{ backgroundColor: bgcolor || undefined }}
        className="w-full h-[19rem] py-20 text-black dark:text-white hover:text-white"
      >
        <div className="max-w-screen-xl mx-auto flex items-center justify-between h-full">
          <div className="flex flex-col gap-4 mr-3">
            <h1 className="font-medium capitalize text-[3.65rem]">{title}</h1>
            <div className="ml-2 flex gap-x-3 items-center">
              {/* <button onClick={Toastmsg}> */}
              <Button hovervalue={hover} title={"Live Website"} />
              {/* </button> */}
              {/* <button onClick={Toastmsg}> */}
              <Button hovervalue={hover} title={"GitHub Code"} />
              {/* </button> */}
            </div>
          </div>

          <div className="w-1/3">
            <p className="mb-10 overflow-hidden">{desc}</p>
            {hover && (
              <div className="flex flex-wrap gap-x-3 gap-y-2">
                {techs.map((ele, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 rounded-lg text-white bg-black dark:text-black dark:bg-zinc-100 font-medium"
                  >
                    {ele.charAt(0).toUpperCase() + ele.slice(1).toLowerCase()}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
