import React, { useState } from "react";
import { Bug, ChevronDown, ChevronUp, Code, Globe, Shield } from "lucide-react";
import { motion } from "framer-motion";

const Experience = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const badges = [
    { icon: Code, text: "MERN Stack" },
    { icon: Globe, text: "Web Development" },
    { icon: Shield, text: "Cybersecurity" },
    { icon: Bug, text: "Bug Bounties" },
  ];

  return (
    <section id="experience" className="md:w-full mx-1.5 ml-8  ">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ x: 50, opacity: 0 }}
          transition={{ duration: 1.4 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center  mb-8 dark:text-white"
        >
          Experience
        </motion.p>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ x: -50, opacity: 0 }}
          transition={{ duration: 1.4 }}
          className="bg-white dark:bg-transparent rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm"
        >
          <div className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
                  Software Developer
                </h2>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mt-1">
                  LeanTech Labs
                </p>
              </div>
              <span className=" md:w-[20%] w-[50%] items-center px-2.5 py-1 rounded-full text-xs sm:text-sm font-medium bg-gray-100 dark:bg-transparent border dark:border-gray-700 text-gray-700 dark:text-gray-300">
                June 2024 - Present
              </span>
            </div>
          </div>

          <div className="px-4 sm:px-6 pb-4 sm:pb-6">
            <div className="flex flex-wrap gap-2 mb-4">
              {badges.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs sm:text-sm border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-white bg-gray-50 dark:bg-transparent hover:bg-gray-100 dark:hover:bg-transparent transition-colors duration-200"
                >
                  <badge.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>

            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4">
              Involved in building web applications, designing user-friendly
              websites, and analyzing cyber threats to ensure security.
            </p>

            {isExpanded && (
              <div className="space-y-2 text-sm sm:text-base text-gray-600 dark:text-gray-300">
                <p className="flex items-start">
                  <span className="mr-2">•</span>
                  Developed and maintained multiple web applications using
                  modern frameworks
                </p>
                <p className="flex items-start">
                  <span className="mr-2">•</span>
                  Collaborated with cross-functional teams to deliver
                  high-quality websites
                </p>
                <p className="flex items-start">
                  <span className="mr-2">•</span>
                  Contributed to cyber analytics projects, enhancing security
                  measures
                </p>
              </div>
            )}

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-4 flex items-center text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-300 dark:hover:text-black dark:bg-opacity-30 rounded-lg px-3 py-2 transition-colors duration-200"
            >
              {isExpanded ? (
                <>
                  <ChevronUp className="w-4 h-4 mr-2" />
                  Show Less
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4 mr-2" />
                  Show More
                </>
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
