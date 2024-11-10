import React, { useState } from "react";
import { Bug, ChevronDown, ChevronUp, Code, Globe, Shield } from "lucide-react";

export default function Experience() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="experience">
      <div className="w-[80%] mt-5 dark:text-white mx-auto p-5 max-w-2xl overflow-hidden transition-all duration-300 ease-in-out  relative">
        <h1 className="dark:text-white text-center text-3xl md:text-5xl opacity-85 mb-10">
          Experience
        </h1>
        <div
          style={{
            boxShadow:
              " rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
          }}
          className=" dark:border-[0.7px] shadow-xl w-full rounded-xl"
        >
          {" "}
          {/* Adjust shadow size here */}
          <div className="p-6 relative z-10">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Software Developer
                </h2>
                <p className="text-lg text-gray-600 dark:text-white dark:text-opacity-80 mt-1">
                  LeanTech Labs
                </p>
              </div>
              <span className="text-sm font-medium bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                July 2024 - Present
              </span>
            </div>
          </div>
          <div className="px-6 pb-6 relative z-10">
            <div className="flex flex-wrap gap-3 mb-4">
              {[
                { icon: Code, text: "MERN Stack" },
                { icon: Globe, text: "Web Development" },
                { icon: Shield, text: "Cybersecurity" },
                { icon: Bug, text: "Bug Bounties" },
              ].map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1 px-3 py-1 rounded-full border border-gray-200 text-sm text-gray-700 bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                >
                  <badge.icon size={14} />
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-600 dark:text-white mb-4">
              Involved in building web applications, designing user-friendly
              websites, and analyzing cyber threats to ensure security.
            </p>
            {isExpanded && (
              <div className="mt-4 text-sm dark:text-whitespace-y-2">
                <p>
                  • Developed and maintained multiple web applications using
                  modern frameworks
                </p>
                <p>
                  • Collaborated with cross-functional teams to deliver
                  high-quality website
                </p>
                <p>
                  • Contributed to cyber analytics projects, enhancing security
                  measures
                </p>
              </div>
            )}
            <button
              className={`mt-4 flex items-center text-black dark:text-white transition-colors duration-200 dark:hover:bg-gray-400 hover:bg-gray-200 rounded-lg px-3 py-2`}
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? (
                <>
                  <ChevronUp className="mr-2" size={16} />
                  Show Less
                </>
              ) : (
                <>
                  <ChevronDown className="mr-2" size={16} />
                  Show More
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
