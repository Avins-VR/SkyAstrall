"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const projectsData = [
  {
    title: "AI-Powered Healthcare Platform",
    img: "https://oncodaily.com/pub/uploads/2025/02/369610885_326721749896038_8296421618398550557_n.png",
    domain: "AI&ML",
    year: "2025",
    description:
      "Machine learning solution for diagnostic assistance, serving 10,000+ patients daily.",
    tech: ["Python", "TensorFlow", "React", "AWS"],
    features: "40% faster diagnosis accuracy",
  },
  {
    title: "E-Commerce Automation Suite",
    img: "https://constructor.com/hs-fs/hubfs/top-ecommerce-automation-software-blog-post@2x.png?width=700&height=350&name=top-ecommerce-automation-software-blog-post@2x.png",
    domain: "Full-Stack",
    year: "2025",
    description:
      "AI-driven full-stack platform for personalized shopping and inventory forecasting.",
    tech: ["Next.js", "PostgreSQL", "Scikit-learn", "Docker"],
    features: "50% increase in user retention",
  },
  {
    title: "Smart Traffic Management",
    img: "https://blues.com/wp-content/uploads/2022/05/hero-image-min.png",
    domain: "IoT & AI",
    year: "2024",
    description:
      "Real-time traffic prediction and signal optimization for urban areas with IoT integration.",
    tech: ["Node.js", "MongoDB", "Python", "OpenCV"],
    features: "35% reduction in congestion across pilot cities",
  },
  {
    title: "Financial Trading Platform",
    img: "https://foundersguide.com/wp-content/uploads/2020/10/trade1.jpg",
    domain: "FinTech",
    year: "2024",
    description:
      "Real-time algorithmic trading platform with risk management and portfolio analytics.",
    tech: ["React", "Node.js", "Redis", "WebSocket"],
    features: "25% improved trading efficiency",
  },
  {
    title: "Smart Learning Management",
    img: "https://www.mindinventory.com/blog/wp-content/uploads/2023/12/learning-management-system-development-guide.webp",
    domain: "EdTech",
    year: "2024",
    description:
      "Comprehensive LMS with AI-powered personalized learning paths and progress tracking.",
    tech: ["Vue.js", "Django", "PostgreSQL", "TensorFlow"],
    features: "60% increase in student engagement",
  },
  {
    title: "Supply Chain Optimization",
    img: "https://online.jwu.edu/wp-content/uploads/2024/05/JWU-April_optimize_supply_chain.jpg",
    domain: "Logistics",
    year: "2025",
    description:
      "AI-driven supply chain management system with predictive analytics and route optimization.",
    tech: ["Angular", "Spring Boot", "MySQL", "Apache Kafka"],
    features: "30% reduction in delivery time",
  },
];
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (customDelay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: customDelay },
  }),
};
const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const hoverVariants = {
  hover: { scale: 1.05, y: -5, transition: { duration: 0.3, ease: "easeOut" } },
};

function Projects() {
  const [projects] = useState(projectsData);

  return (
    <div className="py-12 px-4 md:px-12 flex justify-center items-center">
      <div className="container mx-auto">
        <motion.h3
  className="text-[43px] text-center font-bold mt-[0px] mb-6 bg-gradient-to-r from-[#ffffff] via-[#dcdcddbd] to-[#1dcaffa7] bg-clip-text text-transparent"
  variants={textVariants}
  initial="hidden"
  whileInView="visible"
  custom={0}
  viewport={{ once: true }}
>
  OUR PROJECTS
</motion.h3>

<motion.p
  className="text-[20px] text-center text-gray-300 max-w-[1100px] mx-auto mb-[40px]"
  variants={textVariants}
  initial="hidden"
  whileInView="visible"
  custom={0.2}
  viewport={{ once: true }}
>
  Showcasing innovative solutions and impactful projects that demonstrate our creativity, expertise, and commitment to solving real-world problems.
</motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative m-[20px] p-6 rounded-3xl bg-black border border-gray-200 shadow-2xl cursor-pointer overflow-hidden"
              variants={cardVariants}
              whileHover="hover"
              initial="hidden"
              animate="show"
            >
              <motion.div
                className="relative overflow-hidden rounded-2xl h-[250px] mb-6"
                whileHover={{ scale: 1.1 }}
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500"
                />
                <span className="absolute top-3 right-3 bg-gray-800 text-white text-[15px] px-2 py-1 rounded-full font-semibold">
                  {project.year}
                </span>
                <motion.div
                  className="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity duration-300"
                ></motion.div>
              </motion.div>

              <div className="relative z-10">
                <motion.h4
                  className="text-2xl font-extrabold mb-4 bg-gradient-to-br from-indigo-600 via-teal-500 to-violet-600 bg-clip-text text-transparent"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
                  viewport={{ once: true }}
                >
                  {project.title}
                </motion.h4>

                <motion.p
  className="text-[18px] font-semibold text-gray-300 mb-5"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } }}
  viewport={{ once: true }}
>
  {project.domain}
</motion.p>

<motion.p
  className="text-[16px] text-gray-200 mb-7 leading-relaxed"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }}
  viewport={{ once: true }}
>
  {project.description}
</motion.p>

<motion.div
  className="flex flex-wrap gap-2 mb-4"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } }}
  viewport={{ once: true }}
>
  {project.tech.map((tech, i) => (
    <span
      key={i}
      className="text-[12px] px-4 py-2 bg-black/20 border border-gray-200 text-gray-200 rounded-full font-medium"
    >
      {tech}
    </span>
  ))}
</motion.div>

<motion.p
  className="text-[16px] mb-4 mt-5 italic font-medium text-gray-300"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } }}
  viewport={{ once: true }}
>
  {project.features}
</motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;