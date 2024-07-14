import React from "react";
import Button from "./Button.tsx";
interface ProjectsmallProps {
  title: string;
  desc: string;
  mover: (count: number) => void;
  className: string;
  count: number;
  color: string;
  techs: string[];
}

const Projectsmall: React.FC<ProjectsmallProps> = ({
  title,
  desc,
  mover,
  className,
  count,
  color,
  techs,
}) => {
  return (
    <div className=" flex flex-col justify-center items-center gap-3">
      <h1 className=" text-3xl md:text-4xl ">{title}</h1>
      <div className=" flex justify-center items-center gap-3">
        <Button hovervalue={true} title={"Live Website"} />
        <Button hovervalue={true} title={"GitHub Code"} />
      </div>

      <p className=" text-[0.8rem] md:text-sm text-center">{desc}</p>
      <div className=" flex gap-2 flex-wrap">
        {techs.map((ele, index) => (
          <span
            key={index}
            className="inline-block text-[0.8rem] md:text-sm px-[0.40rem] py-[0.20rem] md:px-[0.50rem] md:py-[0.30rem] rounded-lg font-medium   text-black bg-zinc-100"
          >
            {ele.charAt(0).toUpperCase() + ele.slice(1).toLowerCase()}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Projectsmall;
