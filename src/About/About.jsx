import React from "react";
import { motion } from "framer-motion";
import Miliestones from "./Miliestones";
import Team from "./Team";
import TimelinePage from "./Journey";
import MagicCursor from "../Components/MagicCursor";
import Background from "../Background";

function About() {
  const items = [
    {
      title: "MISSION",
      desc: "Our mission is deliver intelligent, scalable, and secure digital solutions combining Full Stack Development, Cloud Computing, Artificial Intelligence. We aim help businesses modernize operations, accelerate innovation, and achieve sustainable growth. By building end-to-end applications, leveraging cloud-native architectures, and integrating AI-driven insights, we empower organizations stay ahead rapidly evolving digital era.",
      color: "from-red-400 to-red-500",
      textColor: "text-red-600",
      icon: "bi-bullseye",
      bgColor: "bg-red-50",
    },
    {
      title: "VISION",
      desc: "Our vision is to become a global leader in intelligent digital transformation, where Full Stack innovation, Cloud technologies, and AI advancements converge to shape a smarter, more connected world. We aspire to create a future where businesses of all sizes can harness cutting-edge technology with simplicity, security, and scalability, enabling them to unlock limitless opportunities and deliver meaningful impact to society.",
      color: "from-blue-400 to-blue-500",
      textColor: "text-blue-600",
      icon: "bi-eye",
      bgColor: "bg-blue-200",
    },
    {
      title: "VALUES",
      desc: "Our values are built on innovation, integrity, and customer focus, guiding every solution we create. We deliver with excellence and collaboration, ensuring our work impactful and future-ready. By fostering trust and transparency, we build long-term partnerships that empower businesses  grow. At the core, we harness Full Stack development, Cloud, and AI to create technology that drives progress and delivers meaningful value to society.",
      color: "from-green-400 to-green-500",
      textColor: "text-green-600",
      icon: "bi-gem",
      bgColor: "bg-green-200",
    },
  ];

  // Variants for staggered animation
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 80, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1], // smooth cubic bezier
      },
    },
  };

  return (
    <div
      className="relative text-white overflow-x-hidden
      bg-[radial-gradient(at_top_left,#2f3d54_0%,transparent_70%),radial-gradient(at_top_right,#1e1e1ea3_0%,transparent_70%),radial-gradient(at_bottom_left,#5f848475_0%,transparent_80%),linear-gradient(180deg,#070707_0%,#020202_100%)]
      bg-blend-lighten m-0 p-0"
    >
      <MagicCursor />
      <Background />

      {/* Heading */}
      <div className="relative z-10 pt-16 pb-5 px-4 sm:px-6 lg:px-8 text-center mt-[80px]">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-[60px] font-bold mb-[40px] relative after:content-[''] after:block after:w-[350px] after:h-[4px] after:bg-gradient-to-r after:from-[#9fcfbc] after:to-transparent after:rounded-md after:mt-3 after:mx-auto"
          style={{
            fontFamily:
              "'Impact, Haettenschweiler', 'Arial Narrow Bold', sans-serif",
            background: "linear-gradient(90deg, #686767ff, #adc7b6, #4d4b4b)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          ABOUT SKYASTRALL
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-[22px] max-w-[1200px] text-[#cdced1] mx-auto"
        >
          Founded in 2022, we've been at the forefront of technological
          innovation, helping businesses harness the power of AI and modern
          software solutions
        </motion.p>
      </div>

      {/* Cards Section */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col md:flex-row justify-center items-center gap-32 p-10 mt-[50px]"
      >
        {items.map((item, i) => (
          <motion.div
            key={i}
            variants={cardVariant}
            whileHover={{ y: -15, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className={`${item.bgColor} rounded-full shadow-xl p-10 w-[400px] h-[730px] text-center flex flex-col items-center relative`}
          >
            {/* Circle with floating icon */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className={`absolute rounded-full p-6 bg-gradient-to-br ${item.color} shadow-lg`}
            >
              <div className="bg-white rounded-full p-6 px-8 shadow-md flex items-center justify-center">
                <i
                  className={`bi ${item.icon} text-[40px] ${item.textColor}`}
                ></i>
              </div>
            </motion.div>

            <div className="mt-[180px] px-[5px]">
  <motion.h3
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="font-bold mb-4 text-[30px] text-gray-900"
  >
    {item.title}
  </motion.h3>

  <motion.p
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
    className="text-gray-900 text-justify text-[18px] mt-2"
  >
    {item.desc}
  </motion.p>
</div>

          </motion.div>
        ))}
      </motion.section>

      {/* Other Sections */}
      <Miliestones />
      <Team autoplay={true} pauseOnHover={true} />
      <TimelinePage />
    </div>
  );
}

export default About;
