import axios from "axios";
import React, { useEffect, useState } from "react";

type Props = {};

const Tags = (props: Props) => {
  const [tags, setTags] = useState([]);
  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8070/blogs/getalltags"
        );
        console.log(response);
        const Tagnames = response.data.data.map((ele, index) => ({
          name: ele.name,
          count: ele.count,
        }));
        console.log(Tagnames);
        setTags(Tagnames);
      } catch (error) {
        console.error("Error fetching tags:", error);
      }
    };

    fetchTags();
  }, []);

  return (
    <div className=" flex flex-wrap dark:text-white   items-center ml-[4.3rem] gap-x-[1.1rem] gap-y-[0.4rem]">
      {tags.map((ele, index) => (
        <div className="flex w-32  h-[2rem] border-[1.5px] cursor-pointer dark:border-white border-gray-950 rounded-[0.2rem]">
          <div className="flex w-full">
            <div className="flex-grow dark:bg-[#414141] transition-colors duration-200  hover:bg-[#00aaff]  hover:font-medium hover:text-white hover:bg-opacity-70  bg-white flex items-center justify-center">
              {ele.name}
            </div>
            <div className="w-1/4  bg-[#414141] dark:bg-white text-white dark:text-black flex justify-center items-center">
              <p>{ele.count}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tags;
