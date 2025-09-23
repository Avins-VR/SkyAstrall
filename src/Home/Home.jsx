"use client";
import React from "react";
import { motion } from "framer-motion";
import devImage from "../assets/Developers team.jpg";
import { TextGenerateEffect } from "../Components/text-generate-effect";
import MagicCursor from "../Components/MagicCursor";
import { IconCloud } from "../Components/icon-cloud";
import Background from "../Background";
import Clientsucess from "./Clientsucess";
import Process from "./Process";

const slugs = [
  "typescript",
  "javascript",
  "tailwindcss",
  // "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css",
  "nodedotjs",
  "express",
  "nextdotjs",
  "git",
  "anaconda",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "vite",
  "androidstudio",
  "sonarqubeserver",
  "figma",
  "mongodb",
  "tensorflow",
  "kubernetes",
  "python",
  "php",
  "redux",
];

const images = slugs.map(slug => `https://cdn.simpleicons.org/${slug}/${slug}`);

function Home() {
  const animatedText = `We, are a forward-thinking software company delivering AI-powered, cloud-enabled, and data-driven solutions for modern enterprises. We drive innovation, optimize operations, and help organizations thrive in a rapidly evolving digital landscape. Our mission is to transform ideas into intelligent, future-ready solutions that create meaningful, lasting impact worldwide.`;

  // Motion variants
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const floatEffect = {
    animate: {
      y: [0, -10, 0],
      rotate: [0, 2, -2, 0],
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
    }
  };

  return (
    <div className="relative text-white overflow-x-hidden
      bg-[radial-gradient(at_top_left,#2f3d54_0%,transparent_70%),radial-gradient(at_top_right,#1e1e1ea3_0%,transparent_70%),radial-gradient(at_bottom_left,#5f848475_0%,transparent_80%),linear-gradient(180deg,#070707_0%,#020202_100%)]
      bg-blend-lighten m-0 p-0"
    >
      <MagicCursor />
      <Background />

      <section className="flex flex-wrap justify-between items-center px-[5%] py-[2%] h-[90vh] mt-[70px] mb-[40px] relative z-10">
        {/* Left Text */}
        <motion.div
          className="flex-1 max-w-[800px] z-10 ml-6 mt-10"
          initial="hidden"
          animate="visible"
          variants={container}
        >
          <motion.h1
            className="text-[70px] font-bold leading-[1.1] mb-[50px] w-[700px]"
            variants={fadeInUp}
          >
            <span className="bg-gradient-to-r from-[#ffffff] via-[#dcdcddbd] to-[#e5faff6b] bg-clip-text text-transparent">
              Transforming Ideas Into Reality
            </span>
          </motion.h1>

          <motion.div
            className="text-[#fffcfca0] text-[22px] leading-[1.9] mb-[50px] max-w-[700px]"
            variants={fadeInUp}
          >
            <TextGenerateEffect words={animatedText} />
          </motion.div>

          {/* Buttons */}
          <motion.div className="flex gap-20 mt-19 mb-8" variants={fadeInUp}>
            <motion.a
              href="/Achievements"
              className="w-[280px] bg-gradient-to-r from-[#12ffccad] via-[#97dfe7b2] to-[#1dcaffa7] text-[#161616] font-bold text-[20px] px-8 py-5 rounded-lg transition hover:scale-105 hover:shadow-lg"
              whileHover={{ scale: 1.07, boxShadow: "0px 15px 25px rgba(0,255,255,0.4)" }}
            >
              Explore Our Work ➔
            </motion.a>
            <motion.a
              href="/Contact"
              className="w-[280px] border-2 border-gray-500 text-white text-[20px] px-10 py-5 rounded-lg transition hover:border-white hover:scale-105 text-center"
              whileHover={{ scale: 1.07, boxShadow: "0px 15px 25px rgba(255,255,255,0.2)" }}
            >
              Start Your Project
            </motion.a>
          </motion.div>

          {/* Social Icons */}
          <motion.div className="flex gap-8 mt-0 ml-[5px]" variants={fadeInUp}>
            {["github", "linkedin", "twitter"].map((platform, i) => (
              <motion.a
                key={platform}
                href={`https://${platform}.com`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 flex items-center justify-center rounded-full border border-gray-600 text-gray-300 hover:text-white hover:border-white transition"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.1 * i } }}
              >
                <i className={`bi bi-${platform} text-2xl`}></i>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
  className="flex-1 text-center z-10"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }}
  whileHover={{ scale: 1.03 }}
>
  <img
    src={devImage}
    alt="Developers team"
    className="max-w-[78%] h-[430px] rounded-2xl border-[10px] border-black outline outline-4 outline-offset-[-6px] mt-[-40px] ml-[120px]"
  />
</motion.div>
      </section>

      {/* Tech Stack */}
      <motion.section
        className="text-center my-[90px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 1.2 } }}
        viewport={{ once: true }}
      >
        <h2 className="text-[43px] font-bold mb-6 mt-[150px] bg-gradient-to-r from-[#ffffff] via-[#dcdcddbd] to-[#1dcaffa7] bg-clip-text text-transparent">
          OUR TECH STACK
        </h2>
        <p className="text-[20px] text-gray-300 mb-2 max-w-[1000px] mx-auto">
          We leverage modern technologies, frameworks, and tools to build scalable,
          secure, and innovative solutions tailored for enterprises.
        </p>
        <motion.div className="flex justify-center items-center z-10">
          <IconCloud images={images} />
        </motion.div>
      </motion.section>

      <Clientsucess />
      <Process />
    </div>
  );
}

export default Home;