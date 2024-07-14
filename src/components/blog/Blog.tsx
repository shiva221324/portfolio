import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
type Props = {};

const Blog = (props: Props) => {
  const [data, setData] = useState({
    title: "",
    value: "",
  });
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get("http://localhost:8070/blogs/getblog");
        console.log(response.data.message);
        const newdata = response.data.message;
        console.log(newdata);
        setData({
          ...data,
          title: newdata[0].title,
          value: newdata[0].desc,
        });
      } catch (error) {
        console.error("Error fetching tags:", error);
      }
    };

    fetchBlog();
  }, []);
  return (
    <div>
      <div>{data.title}</div>
      <div dangerouslySetInnerHTML={{ __html: data.value }} />
    </div>
  );
};

export default Blog;
