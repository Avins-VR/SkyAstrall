"use client";
import React from "react";
import { motion } from "framer-motion";
import Afflication from "./Afflication";
import Projects from "./Project";
import Background from "../Background";
import MagicCursor from "../Components/MagicCursor";

const awards = [
  {
    name: "Outstanding Startup of the Year",
    description: "Global Entrepreneurship Forum 2023",
    image: "https://www.shutterstock.com/image-vector/polygonal-frame-startup-award-crystal-260nw-1101147386.jpg",
  },
  {
    name: "Best AI Innovation Award",
    description: "Tech Excellence Council 2024",
    image: "https://vcinity.io/wp-content/uploads/2024/10/NLIT-2024-2024-10-07T021619.025.png",
  },
  {
    name: "Excellence in HR Tech Innovation",
    description: "HR Tech Awards 2025",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj0Dc0npX6Q0x_8zhssnoIeI1wnYICmkVLOA&s",
  },
  {
    name: "Best Project Delivery Award",
    description: "National IT Awards 2025",
    image: "https://www.middleearthhr.com/newsite/career_centre/mehr_cc_admin_panel/award_thumbnail_images/BEST_PROJECT_AWARD_6.png",
  },
  {
    name: "Excellence in Customer Experience",
    description: "International Business Awards 2025",
    image: "https://cdn.diyawards.com/images/products/themes/shangyang.500x500/770-sample-detail-customer-service-excellence-award-plaque-1663.jpg",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9, rotateY: 10 },
  visible: { opacity: 1, y: 0, scale: 1, rotateY: 0, transition: { duration: 0.7, type: "spring", stiffness: 120 } },
};

export default function Awards() {
  return (
    <div className="relative text-white overflow-x-hidden
      bg-[radial-gradient(at_top_left,#4a275e_0%,transparent_70%),radial-gradient(at_top_right,#34004a_0%,transparent_70%),radial-gradient(at_bottom_left,#140123_0%,transparent_80%),linear-gradient(180deg,#070707_0%,#020202_100%)]
      bg-blend-lighten m-0 p-0"
    >
      <MagicCursor />
      <Background />

      <motion.div
        className="relative z-10 pt-16 pb-5 px-4 sm:px-6 lg:px-8 text-center mt-[80px]"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2
          className="text-[60px] font-bold mb-[40px] relative after:content-[''] after:block after:w-[350px] after:h-[4px] after:bg-gradient-to-r after:from-[#9fcfbc] after:to-transparent after:rounded-md after:mt-3 after:mx-auto"
          style={{
            fontFamily: "'Impact, Haettenschweiler', 'Arial Narrow Bold', sans-serif",
            background: "linear-gradient(90deg, #686767ff, #adc7b6, #4d4b4b)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          OUR ACHIEVEMENTS
        </h2>

        <motion.p
          className="text-[22px] max-w-[1200px] text-[#cdced1] mx-auto mb-[30px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.2 }}
        >
          Showcasing a journey of recognition, groundbreaking milestones, and successful projects that highlight our unwavering commitment to excellence and innovation.
        </motion.p>
      </motion.div>

      <Afflication />

      <section className="text-white py-20 px-6 sm:px-10 font-sans">
        <motion.h2
          className="text-[43px] text-center font-bold mt-[-20px] mb-8 bg-gradient-to-r from-[#ffffff] via-[#dcdcddbd] to-[#1dcaffa7] bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          AWARDS & RECOGNITION
        </motion.h2>

        <motion.p
          className="text-[20px] text-center text-gray-300  max-w-[1100PX] mx-auto mb-[90px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Honoring the awards and recognitions that reflect our innovation, excellence, and industry leadership, showcasing the trust and impact we’ve built over time.
        </motion.p>

        <motion.div
          className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 place-items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {awards.map((award, index) => (
            <motion.div
              key={index}
              className="relative bg-[#8d31897b] rounded-full w-[250px] h-[250px] flex flex-col items-center text-center shadow-lg overflow-hidden group cursor-pointer"
              variants={cardVariants}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 150 }}
            >
              {/* Front side (image only) */}
              <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                <img
                  src={award.image}
                  alt={award.name}
                  className="w-[230px] h-[230px] object-contain rounded-full object-cover"
                />
              </div>

              {/* Back side (name + description) */}
              <div className="absolute inset-0 flex flex-col justify-center items-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="text-[20px] font-semibold mb-2">{award.name}</h4>
                <p className="text-[17px] font-light text-gray-300">{award.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <Projects />
    </div>
  );
}
