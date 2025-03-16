import React, { useState } from "react";
import { motion } from "framer-motion";
const AchievementsGallery = () => {
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sample achievement data with multiple images
  const achievements = [
    {
      id: 4,
      title: "Skelo EduTech",
      category: "Skelo",
      images: [
        "/images/achivements/skelo1.jpg",
        "/images/achivements/skelo2.jpg",
        "/images/achivements/skelo3.jpg",
      ],
      description: ` Skelo EduTech is an innovative education technology
 company focused on assessments, training, and skill
 development for businesses, educational institutions,
 and training providers. Our platform, Skelo, empowers
 organizations with AI-driven proctoring, real-time
 coding evaluations, and structured learning paths to
 enhance hiring, upskilling, and academic assessments.
  Our Mission & Vision
 We aim to bridge the gap between education and
 industry by providing cutting-edge tools for effective
 learning, secure assessments, and scalable training
 solutions. Our vision is to make evaluations fair, skill
based, and technology-driven to prepare students and
 professionals for the future
 `,
    },
    {
      id: 1,
      title: "AI AUTONOMOUS Hackathon 2025",
      category: "hackthons",
      images: [
        "/images/achivements/ai1.jpg",
        "/images/achivements/ai2.jpg",
        "/images/achivements/ai3.jpg",
      ],
      description: `🚀 AI AUTONOMOUS Hackathon 2025 - 1st Place Winner! 🏆

I am thrilled to share that my team and I secured 1st place at the AI AUTONOMOUS Hackathon 2025, a prestigious national-level AI competition! 🎉

The hackathon presented us with challenging problem statements related to AI and automation, pushing us to think innovatively and develop real-world solutions. With cutting-edge AI models, strategic problem-solving, and teamwork, we successfully built and presented solutions that stood out from the competition.

This victory is a testament to our dedication, technical expertise, and the power of AI in solving complex problems. Grateful for the opportunity, the learning experience, and the recognition! 💡💻

`,
    },
    {
      id: 2,
      title: "MERN STACK Hackthon 2024 ",
      category: "hackthons",
      images: [
        "/images/achivements/mern1.png",
        "/images/achivements/mern2.jpg",
      ],
      description: `Excited to share that my team and I secured 1st place at the MERN Stack Hackathon, a prestigious national-level competition! 🎉

The hackathon challenged us to build a full-stack web application using the MERN (MongoDB, Express.js, React, Node.js) stack. With a limited timeframe, we designed and developed a scalable, efficient, and user-friendly solution that impressed the judges.

Our project stood out due to its robust backend architecture, seamless frontend experience, and efficient state management. This victory reaffirms our expertise in full-stack development and our ability to build high-impact applications.

Grateful for this achievement, the learning experience, and the incredible teamwork that made it possible! 💡💻`,
    },
    {
      id: 3,
      title: "HACK IT Hackthon 2024",
      category: "hackthons",
      images: ["/images/achivements/it1.jpg", "/images/achivements/it2.jpg"],
      description: `Excited to share that my team and I won 1st place at the HACK IT Hackathon 2024, a national-level competition! 🎉

We built a cybersecurity tool that finds security issues and helps fix them. Our tool uses advanced techniques to detect threats and improve security.

Proud of our team’s effort and grateful for the experience! 🔐💻

`,
    },
    {
      id: 4,
      title: "KGF Coding Contest",
      category: "Coding",
      images: ["/images/achivements/kgf2.jpg"],
      description: `Excited to share that I secured 3rd place in the KGF Coding Contest, competing against 200 participants! 🚀🎉

This achievement was special as I won it during my 2nd year, competing with skilled coders. It was a great learning experience that strengthened my problem-solving and coding skills.

Grateful for the challenge and looking forward to more competitions! 💻🔥

`,
    },
  ];

  const categories = [
    "all",
    ...new Set(achievements.map((item) => item.category)),
  ];
  const [activeCategory, setActiveCategory] = useState("all");

  const openAchievement = (achievement) => {
    setSelectedAchievement(achievement);
    setCurrentImageIndex(0);
    setIsDialogOpen(true);
  };

  const nextImage = () => {
    if (selectedAchievement) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === selectedAchievement.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedAchievement) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? selectedAchievement.images.length - 1 : prevIndex - 1
      );
    }
  };

  const selectImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="text-center mb-12">
        <motion.h1
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ x: 50, opacity: 0 }}
          transition={{ duration: 1.4 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center  mb-8 dark:text-white"
        >
          <span className=" ">My Journey</span>
        </motion.h1>
      </div>

      {/*   
    //   <div className="flex justify-center mb-8">
    //     {categories.map((category) => (
    //       <button
    //         key={category}
    //         className={`px-4 py-2 mx-2 rounded-md ${
    //           activeCategory === category ? "bg-blue-500 text-white" : ""
    //         }`}
    //         onClick={() => setActiveCategory(category)}
    //       >
    //         {category}
    //       </button>
    //     ))}
    //   </div> */}

      {/* Achievement Grid */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ x: -50, opacity: 0 }}
        transition={{ duration: 1.4 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6"
      >
        {achievements
          .filter(
            (achievement) =>
              activeCategory === "all" ||
              achievement.category === activeCategory
          )
          .map((achievement) => (
            <div
              key={achievement.id}
              className="group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => openAchievement(achievement)}
            >
              <div className="aspect-square relative">
                <img
                  src={achievement.images[0]}
                  alt={achievement.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 dark:grayscale"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
              <div className="p-4 bg-white dark:bg-transparent dark:text-white">
                <h3 className="font-medium text-lg truncate">
                  {achievement.title}
                </h3>
                <p className="text-sm capitalize opacity-90">
                  {achievement.category}
                </p>
              </div>
            </div>
          ))}
      </motion.div>

      {/* Dialog Modal */}
      {isDialogOpen && selectedAchievement && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen p-4 text-center">
            <div
              className="fixed inset-0 bg-black bg-opacity-40 transition-opacity"
              onClick={() => setIsDialogOpen(false)}
            />
            <div className="inline-block w-full max-w-4xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white dark:bg-black dark:text-white shadow-xl rounded-lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">
                    {selectedAchievement.title}
                  </h3>
                  <p className="opacity-90 capitalize">
                    {selectedAchievement.category}
                  </p>
                </div>
                <button
                  className="opacity-80 hover:text-gray-700"
                  onClick={() => setIsDialogOpen(false)}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="relative aspect-square">
                    <img
                      src={selectedAchievement.images[currentImageIndex]}
                      alt={`${selectedAchievement.title} image ${
                        currentImageIndex + 1
                      }`}
                      className="w-full dark:grayscale h-full object-cover rounded-md"
                    />

                    {/* Image navigation arrows */}
                    {selectedAchievement.images.length > 1 && (
                      <>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            prevImage();
                          }}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white dark:bg-black bg-opacity-75 rounded-full p-2 hover:bg-opacity-100 transition-all"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 19l-7-7 7-7"
                            />
                          </svg>
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            nextImage();
                          }}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white dark:bg-black bg-opacity-75 rounded-full p-2 hover:bg-opacity-100 transition-all"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </button>
                      </>
                    )}
                  </div>

                  {/* Thumbnails */}
                  {selectedAchievement.images.length > 1 && (
                    <div className="flex items-center justify-center gap-2 mt-2">
                      {selectedAchievement.images.map((image, index) => (
                        <button
                          key={index}
                          onClick={(e) => {
                            e.stopPropagation();
                            selectImage(index);
                          }}
                          className={`w-12 h-12 rounded-md overflow-hidden border-2 ${
                            currentImageIndex === index
                              ? "border-blue-500"
                              : "border-transparent"
                          }`}
                        >
                          <img
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-full dark:grayscale h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {selectedAchievement.title}
                    </h3>
                    <p className=" opacity-85 mb-4">
                      {selectedAchievement.description}
                    </p>

                    {/* Image counter */}
                    {selectedAchievement.images.length > 1 && (
                      <p className="text-sm text-gray-500 mb-4">
                        Image {currentImageIndex + 1} of{" "}
                        {selectedAchievement.images.length}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AchievementsGallery;
