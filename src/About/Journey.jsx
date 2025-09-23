"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArcTimeline } from "../Components/ArcTimeline";

const data = [
  {
    time: "2022",
    steps: [
      { icon: <span><i className="bi bi-rocket-takeoff"></i></span>, content: "Founded SkyAstrall, pioneering AI-driven solutions for the modern tech landscape." },
      { icon: <span><i className="bi bi-box"></i></span>, content: "Launched first full-stack platform delivering AI-powered enterprise solutions." },
    ],
  },
  {
    time: "2023",
    steps: [
      { icon: <span><i className="bi bi-stars"></i></span>, content: "Expanded team with top-tier full-stack developers and AI engineers." },
      { icon: <span><i className="bi bi-globe"></i></span>, content: "Onboarded first international clients, scaling our solutions globally." },
      { icon: <span><i className="bi bi-people-fill"></i></span>, content: "Built collaborative culture with focus on innovation and agility." },
    ],
  },
  {
    time: "2024",
    steps: [
      { icon: <span><i className="bi bi-lightning-charge"></i></span>, content: "Released upgraded AI-powered enterprise platform with cloud integration." },
      { icon: <span><i className="bi bi-graph-up-arrow"></i></span>, content: "Achieved 5x growth in active client projects and deployments." },
      { icon: <span><i className="bi bi-award"></i></span>, content: "Received industry recognition for innovation in AI and full-stack development." },
    ],
  },
  {
    time: "2025",
    steps: [
      { icon: <span><i className="bi bi-trophy"></i></span>, content: "Recognized as a leading full-stack AI solutions provider in the industry." },
      { icon: <span><i className="bi bi-currency-dollar"></i></span>, content: "Secured strategic funding to expand AI research and enterprise offerings." },
      { icon: <span><i className="bi bi-rocket-takeoff"></i></span>, content: "Launched next-gen AI products targeting enterprise digital transformation." },
      { icon: <span><i className="bi bi-globe"></i></span>, content: "Expanded global presence, delivering solutions to multiple international markets." },
    ],
  }
];

// Variants for staggered reveal
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

function Journey() {
  return (
    <div className="p-8 min-h-screen mb-[50px]">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-[43px] text-center font-bold mt-[-20px] mb-8 bg-gradient-to-r from-[#ffffff] via-[#dcdcddbd] to-[#1dcaffa7] bg-clip-text text-transparent"
      >
        OUR JOURNEY
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 1 }}
        className="text-[20px] text-center text-gray-300 max-w-[1100px] mx-auto mb-[60px]"
      >
        A remarkable journey of growth and transformation, marked by milestones
        that reflect our resilience, innovation, and unwavering commitment to shaping
        a brighter future.
      </motion.p>

      {/* Timeline container */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative w-full max-w-[1300px] ml-[70px] p-6 rounded-[30px] border-2 border-gray-600 bg-black timeline-box shadow-2xl"
      >
        <motion.div variants={item}>
          <ArcTimeline data={data} />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Journey;
