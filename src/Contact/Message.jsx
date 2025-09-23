import React from "react";
import { motion } from "framer-motion";

function Message() {
  // Define animation variants for a staggered reveal
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger children animations by 0.2 seconds
        delayChildren: 0.3, // Delay the start of children animations
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const socialLinkVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
    },
  };

  return (
    <motion.section
      id="contact"
      className="px-6 md:px-20 lg:px-32 py-16 font-sans text-white relative overflow-x-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible" // Animate when the element is in the viewport
      viewport={{ once: true, amount: 0.2 }} // Only animate once and trigger when 20% visible
    >
      <motion.h2
        className="text-[43px] mt-[-40px] text-center font-bold mb-8 bg-gradient-to-r from-[#EEEEEE] via-[#DCDCDC] to-[#1dcaffa7] bg-clip-text text-transparent"
        variants={itemVariants}
      >
        BUILD SOMETHING AMAZING
      </motion.h2>
      <motion.p
        className="text-[20px] text-center text-gray-300 max-w-[1100PX] mx-auto mb-20"
        variants={itemVariants}
      >
        We are always excited to collaborate on innovative projects and explore new opportunities. Whether you have a project in mind or just want to connect, feel free to reach out.
      </motion.p>
      
      <div className="flex flex-col lg:flex-row gap-28">
        {/* Left Column - Contact Form */}
        <motion.div
          className="flex-1 bg-[#101217] rounded-2xl shadow-lg shadow-[0_0_7px_#87c3ff55] p-14"
          variants={itemVariants}
        >
          <div className="flex flex-col gap-8">
            {/* Form inputs are part of the staggered animation */}
            <motion.div variants={itemVariants} className="flex flex-col">
              <label htmlFor="name" className="text-white text-sm mb-4">Name:</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-lg bg-[#242733] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col">
              <label htmlFor="email" className="text-white text-sm mb-4">Email:</label>
              <input
                type="email"
                name="email"
                placeholder="your.email@gmail.com"
                required
                className="w-full px-4 py-3 rounded-lg bg-[#242733] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </motion.div>

            <motion.label htmlFor="message" variants={itemVariants} className="text-white text-sm mb-[-10px]">
              Message:
            </motion.label>
            <motion.textarea
              name="message"
              rows="4"
              placeholder="Tell about your Project goals"
              required
              className="w-full px-4 py-3 rounded-lg bg-[#242733] text-white placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
              variants={itemVariants}
            ></motion.textarea>

            <motion.button
              type="submit"
              className="mt-4 w-full py-3 rounded-lg text-lg font-semibold flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90 transition"
              whileHover={{ scale: 1.05 }} // Scale up on hover
              whileTap={{ scale: 0.95 }} // Shrink on click
            >
              <i className="bi bi-send text-xl"></i> Send Message
            </motion.button>
          </div>
        </motion.div>

        {/* Right Column - Contact Info */}
        <motion.div
          className="flex-1 flex flex-col gap-16"
          variants={sectionVariants}
        >
          <motion.div
            className="bg-[#101217] rounded-2xl shadow-lg shadow-[0_0_7px_#87c3ff55] p-14"
            variants={itemVariants}
          >
            <motion.h3 variants={itemVariants} className="text-xl font-bold uppercase flex items-center gap-4 mb-8 text-gray-300">
              <i className="bi bi-globe"></i> Connect With Me
            </motion.h3>
            <div className="grid grid-cols-2 gap-10">
              <motion.a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 rounded-lg bg-[#0173a8] text-white font-medium text-center hover:bg-[#335566] transition flex items-center justify-center gap-2"
                variants={socialLinkVariants}
                whileHover={{ y: -5, scale: 1.05 }} // Lift and scale on hover
                whileTap={{ scale: 0.95 }}
              >
                <i className="bi bi-linkedin text-lg"></i> Linkedin
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 rounded-lg bg-[#1352bf] text-white font-medium text-center hover:bg-[#306c97] transition flex items-center justify-center gap-2"
                variants={socialLinkVariants}
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="bi bi-twitter text-lg"></i> Twitter
              </motion.a>
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 rounded-lg bg-[#383838] text-white font-medium text-center hover:bg-[#444343] transition flex items-center justify-center gap-2"
                variants={socialLinkVariants}
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="bi bi-github text-lg"></i> Github
              </motion.a>
              <motion.a
                href="https://medium.com"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 rounded-lg bg-[#145d45] text-white font-medium text-center hover:bg-[#2a8266] transition flex items-center justify-center gap-2"
                variants={socialLinkVariants}
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="bi bi-file-medical-fill"></i> Medium
              </motion.a>
            </div>
          </motion.div>

          {/* Availability */}
          <motion.div
            className="bg-[#101217] rounded-2xl shadow-lg shadow-[0_0_7px_#87c3ff55] p-10"
            variants={itemVariants}
          >
            <motion.h4 variants={itemVariants} className="text-lg uppercase flex items-center gap-3 text-white mb-4">
              <i className="bi bi-circle-fill text-green-500"></i> Available for Projects
            </motion.h4>
            <motion.p variants={itemVariants} className="text-gray-400">
              Currently accepting new clients and exciting collaborations. Let's build something incredible together!
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Message;