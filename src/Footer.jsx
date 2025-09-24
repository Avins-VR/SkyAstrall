"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  // Animation Variants
  const container = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const icon = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
    hover: { scale: 1.3, rotate: 5, transition: { duration: 0.3 } },
  };

  return (
    <footer className="bg-black text-gray-400 relative overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={container}
        className="mx-auto"
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          {/* Left Side */}
          <motion.div
            variants={container}
            className="pt-10 pb-3 px-14"
          >
            <motion.h2
              className="text-[25px] font-bold text-gray-300"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              SkyAstrall
            </motion.h2>
            <motion.p
              className="text-[16px] mt-1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              © 2025 SkyAstrall. All rights reserved.
            </motion.p>
          </motion.div>

          {/* Right Side - Icons */}
          <div className="flex space-x-12 mt-8 md:mt-0 px-14">
            {[
              { href: "https://github.com/", icon: "bi-github", label: "GitHub" },
              { href: "https://www.linkedin.com/", icon: "bi-linkedin", label: "LinkedIn" },
              { href: "http://twitter.com/", icon: "bi-twitter", label: "Twitter" },
            ].map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                variants={icon}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                custom={i}
                className="hover:text-white transition-colors"
              >
                <i className={`bi ${item.icon} text-[25px]`} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <motion.hr
          className="my-6 border-gray-700"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        {/* Bottom Text */}
        <motion.p
          className="text-center text-[16px] text-gray-400 pb-10 pt-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          Powered by innovation • Driven by excellence • Delivering solutions worldwide • Headquartered in India
        </motion.p>
      </motion.div>

      {/* Subtle Glow Background Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        style={{
          background:
            "radial-gradient(circle at 50% 120%, rgba(29,202,250,0.15), transparent 60%)",
        }}
      />
    </footer>
  );
}
