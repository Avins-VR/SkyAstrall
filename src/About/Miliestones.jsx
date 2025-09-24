"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import SpotlightCard from "../Components/SpotlightCard";

const Counter = ({ from, to, duration = 5, suffix = "" }) => {
  const [value, setValue] = useState(from);

  useEffect(() => {
    let start = null;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / (duration * 1000), 1);
      setValue(Math.floor(progress * (to - from) + from));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [from, to, duration]);

  return (
    <span>
      {value}
      {suffix}
    </span>
  );
};

// ✅ Single Milestone Item with hover + motion
const MilestoneItem = ({ icon, number, suffix, subtitle }) => {
  const controls = useAnimation();

  return (
    <motion.div
      onHoverStart={() => controls.start({ scale: 1.1, y: -5 })}
      onHoverEnd={() => controls.start({ scale: 1, y: 0 })}
      animate={controls}
      transition={{ type: "spring", stiffness: 150 }}
      className="flex items-center gap-10 cursor-default"
    >
      {/* Icon with subtle floating/rotating effect */}
      <motion.div
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="flex justify-center items-center w-[85px] h-[85px] rounded-full bg-blue-100 text-blue-600"
      >
        {icon}
      </motion.div>

      {/* Counter + Subtitle */}
      <div>
        <h3 className="text-[50px] font-bold text-gray-200">
          <Counter from={0} to={number} duration={5} suffix={suffix} />
        </h3>
        <p className="text-gray-300 font-bold text-[22px]">{subtitle}</p>
      </div>
    </motion.div>
  );
};

function Milestones() {
  return (
    <div className="container mx-auto p-4 font-sans text-white mb-[80px]">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-[43px] text-center font-bold mt-[80px] mb-8 bg-gradient-to-r from-[#ffffff] via-[#dcdcddbd] to-[#1dcaffa7] bg-clip-text text-transparent"
      >
        OUR MILESTONES
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 1 }}
        className="text-[20px] text-center text-gray-300 max-w-[1100px] mx-auto mb-[30px]"
      >
        Celebrating key milestones that showcase our growth, innovation, and
        lasting impact across industries worldwide, inspiring success and driving
        meaningful change.
      </motion.p>

      {/* Card Container */}
      <div className="flex justify-center items-center py-12 px-6 ">
        <SpotlightCard className="w-full max-w-[1400px]">
          <div className="rounded-3xl shadow-lg h-[580px] w-full flex flex-row items-center justify-between p-12">
            {/* Left Side Image */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="flex justify-center w-1/2"
            >
              <img
                src="https://thumbs.dreamstime.com/b/silhouette-cutouts-man-walking-up-steps-hand-other-businessman-building-stairs-him-conceptual-image-100531888.jpg"
                alt="Teamwork Illustration"
                className="max-w-[600px] h-[400px] w-full rounded-2xl ml-[100px]"
              />
            </motion.div>

            {/* Right Side Stats */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="w-1/2 flex flex-col gap-16 pl-16 ml-[200px]"
            >
              <MilestoneItem
                icon={<i className="bi bi-people text-[55px] text-black"></i>}
                number={100}
                suffix="%"
                subtitle="Client Satisfaction"
              />

              <MilestoneItem
                icon={<i className="bi bi-card-checklist text-[55px] text-black"></i>}
                number={60}
                suffix="+"
                subtitle="Projects Delivered"
              />

              <MilestoneItem
                icon={
                  <i className="bi bi-globe-central-south-asia-fill text-[55px] text-black"></i>
                }
                number={10}
                suffix="+"
                subtitle="Countries Served"
              />
            </motion.div>
          </div>
        </SpotlightCard>
      </div>
    </div>
  );
}

export default Milestones;