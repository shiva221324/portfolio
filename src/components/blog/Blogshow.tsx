import React from "react";

const Blogshow = () => {
  return (
    <div className="ml-[3.5rem] font-medium">
      <div className="flex flex-col gap-y-1 dark:text-white text-black">
        {/* Title */}
        <h1 className="hover:underline cursor-pointer font-semibold text-4xl">
          Uploading Files to Cloudinary using Multer
        </h1>
        {/* Date */}
        <span className="opacity-85">7 July 2024</span>
        {/* Tags */}
        <div className="flex gap-x-3 mt-2">
          <div className="border-[1.2px] px-2 py-1 rounded-md dark:border-white border-black">
            Node.js
          </div>
          <div className="border-[1.2px] px-2 py-1 rounded-md dark:border-white border-black">
            Express.js
          </div>
        </div>
        {/* Content */}
        <p className="text-[1.06rem] mt-2">
          Uploading files to Cloudinary via Multer involves configuring Multer
          for file handling in Node.js. Cloudinary's API complements this by
          enabling efficient uploads to their cloud storage, enhancing
          management with features like transformations and storage
          optimization.
        </p>
        {/* Read More Link */}
        <a href="." className="hover:underline text-lg text-blue-600">
          Read more
        </a>
      </div>
    </div>
  );
};

export default Blogshow;
