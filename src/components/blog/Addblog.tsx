import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";

const Addblog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  // const [images, setImages] = useState([]);

  const handleImageUpload = async (file) => {
    // const files = e.target.files;
    const formData = new FormData();
    // for (let key in files) {
    //   formData.append("file", files[key]);
    //   console.log(formData);
    // }
    console.log(file);
    formData.append("file", file);
    console.log(formData);

    try {
      const response = await axios.post(
        "http://localhost:8070/blogs/addfiles",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
      const imageUrl = response.data.fileUrl;
      console.log(imageUrl);
      setContent(
        (prevContent) =>
          prevContent +
          `<div> <img style={{}} class=" object-cover w-52 " src="${imageUrl}" alt="Image" /></div>`
      );
    } catch (error) {
      console.error("Error uploading image", error);
    }
  };

  const handleImageInputChange = (e) => {
    try {
      const file = e.target.files;
      // console.log(e);
      // console.log(file[0]);
      if (file) {
        handleImageUpload(file[0]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handlePublish = async () => {
    const formData = {
      title: title,
      desc: content,
    };
    try {
      const response = await axios.post(
        "http://localhost:8070/blogs/addblogcontent",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);

      setTitle("");
      setContent("");
    } catch (error) {
      console.error("Error uploading blog post", error);
    }
  };

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ align: [] }],
      [{ color: [] }, { background: [] }],
      ["link", "image", "video"],
      ["clean"],
      [{ script: "sub" }, { script: "super" }],
    ],
    clipboard: {
      matchVisual: false,
    },
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
    "color",
    "background",
    "align",
    "script",
  ];

  return (
    <div>
      <h2>Create a New Post</h2>

      <input
        className="p-4 text-3xl border-b-2 outline-none focus:border-blue-500 transition-all duration-300"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <ReactQuill
        value={content}
        onChange={setContent}
        modules={modules}
        formats={formats}
      />
      <input type="file" accept="image/*" onChange={handleImageInputChange} />
      <button onClick={handlePublish}>Publish</button>
    </div>
  );
};

export default Addblog;
