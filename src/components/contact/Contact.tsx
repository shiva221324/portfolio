import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import { toast, ToastContainer } from "react-toastify";
import { TiTick } from "react-icons/ti";

import "react-toastify/dist/ReactToastify.css";
interface FormData {
  name: string;
  email: string;
  message: string;
}

interface Errors {
  name?: string;
  email?: string;
  message?: string;
}

interface EmailStatus {
  message: string;
  success: boolean | null;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Errors>({});

  const [emailStatus, setEmailStatus] = useState<EmailStatus>({
    message: "",
    success: null,
  });

  useEffect(() => {
    if (emailStatus.message) {
      const timer = setTimeout(() => {
        setEmailStatus({ message: "", success: null });
      }, 3000); // 3 seconds

      return () => clearTimeout(timer);
    }
  }, [emailStatus]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = (): boolean => {
    let formErrors: Errors = {};
    let isValid = true;

    if (formData.name.length < 3) {
      formErrors.name = "Name should be at least 3 letters.";
      isValid = false;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(formData.email) || formData.email.length < 5) {
      formErrors.email = "Enter a valid email address (at least 5 characters).";
      isValid = false;
    }

    if (formData.message.length < 5) {
      formErrors.message = "Message should be at least 5 letters.";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };
  const CustomToast = ({ message }) => (
    <div style={{ display: "flex", alignItems: "center" }}>
      <TiTick
        style={{ marginRight: "8px", fontSize: "24px", color: "#42fcfc" }}
      />
      <span>{message}</span>
    </div>
  );
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      const templateParams = {
        to_name: "shiva", // Replace with your recipient's name
        from_name: formData.name,
        message_html: formData.message,
        reply_to: formData.email,
      };
      console.log(templateParams);
      emailjs
        .send(
          "service_9ozm5wq",
          "template_d6xxrgn",
          templateParams,
          "V68XDvVbfK-9T6lQi"
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            setEmailStatus({
              message: "Message sent successfully!",
              success: true,
            });
            setFormData({
              name: "",
              email: "",
              message: "",
            });
            toast(<CustomToast message="Message sent successfully" />, {
              style: {
                fontWeight: "bold",
              },
              hideProgressBar: true,
              progressStyle: { backgroundColor: "#42fcfc" },
            });
          },
          (err) => {
            console.error("FAILED...", err);
            setEmailStatus({
              message: "Failed to send message. Please try again later.",
              success: false,
            });
            setFormData({
              name: "",
              email: "",
              message: "",
            });
            toast.error("Failed to send message. Please try again later");
          }
        );
    }
  };

  return (
    <section id="contact">
      <ToastContainer />
      <div
        id="contact"
        className=" mt-20 mb-5 active flex justify-center ml-8 items-center"
      >
        <div
        //  className="absolute top-[124rem] md:top-[143rem]  lg:top-[172rem] mt-10 overflow-hidden"
        >
          <h1 className="dark:text-white text-center text-3xl md:text-5xl opacity-85 mb-10">
            Contact
          </h1>
          <div
            style={{
              boxShadow:
                "  rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 10px 0px",
              // boxShadow:
              //   "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
              // boxShadow: " rgba(0, 0, 0, 0.1) 0px 4px 12px",
            }}
            className="flex flex-col gap-3 md:gap-5 border-2 border-[rgba(255,255,255,0.2)] w-[19rem] h-[31rem] md:w-[34rem] md:h-[35rem] p-5 shadow-lg rounded-lg"
          >
            <h1 className="md:text-3xl text-2xl opacity-90 text-center dark:text-white font-[550]">
              Say hello
            </h1>
            <form className="text-black p-5 rounded-lg" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-5 md:gap-7">
                <div className="relative mb-4 dark:text-white">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 dark:text-white bg-transparent border-b-2 border-t-0 border-gray-300 focus:border-[#42fcfc] focus:outline-none peer"
                  />
                  <label
                    htmlFor="name"
                    className={`absolute left-3 text-[1.1rem] md:text-[1.16rem] -top-2.5 transition-all transform ${
                      formData.name
                        ? "-translate-y-4 font-medium text-black dark:text-[#fff]"
                        : "top-2 dark:text-[#fff] text-black opacity-75 peer-focus:opacity-100 font-medium peer-focus:-translate-y-10"
                    }`}
                  >
                    Name
                  </label>
                  {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name}</p>
                  )}
                </div>
                <div className="relative mb-4">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 dark:text-white bg-transparent border-b-2 border-t-0 border-gray-300 focus:border-[#42fcfc] focus:outline-none peer"
                  />
                  <label
                    htmlFor="email"
                    className={`absolute left-3 text-[1.1rem] md:text-[1.16rem] -top-2.5 transition-all transform ${
                      formData.email
                        ? "-translate-y-4 font-medium dark:text-[#fff]"
                        : "top-2 dark:text-[#fff] opacity-75 peer-focus:opacity-100 font-medium peer-focus:-translate-y-10 dark:peer-focus:text-[#fff]"
                    }`}
                  >
                    Email
                  </label>
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>
                <div className="relative mb-4">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 dark:text-white bg-transparent border-b-2 border-t-0 border-gray-300 focus:border-[#42fcfc] focus:outline-none peer"
                    style={{ resize: "none", height: "150px" }}
                    rows={5}
                  />
                  <label
                    htmlFor="message"
                    className={`absolute left-3 -top-2.5 text-[1.1rem] md:text-[1.16rem] transition-all transform ${
                      formData.message
                        ? "-translate-y-4 font-medium dark:text-[#fff]"
                        : "top-2 dark:text-[#fff] opacity-75 peer-focus:opacity-100 font-medium peer-focus:-translate-y-10 peer-focus:dark:text-[#fff]"
                    }`}
                  >
                    Message
                  </label>
                  {errors.message && (
                    <p className="text-red-500 text-sm">{errors.message}</p>
                  )}
                </div>
              </div>
              <div className="flex justify-start">
                <button
                  type="submit"
                  className="rounded-full cursor-pointer group transition-all duration-200 lg:text-[1.1rem] flex bg-[#000] dark:bg-[#fff] text-white dark:text-[#000] font-semibold hover:font-bold px-[1.1rem] py-[0.70rem] md:py-[0.72rem]"
                >
                  <div className="flex flex-row gap-1 items-center justify-center">
                    <p className="translate-x-2 group-hover:translate-x-0 duration-300">
                      Send Message
                    </p>
                    <FaArrowRight className="transition duration-300 text-white dark:text-[#000] group-hover:block translate-x-12 ease-out group-hover:translate-x-2" />
                  </div>
                </button>
              </div>
            </form>
            {/* {emailStatus.message && (
              
            )} */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
