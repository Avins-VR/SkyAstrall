"use client";
import React from "react";
import { motion } from "framer-motion";
import SkyAstrall from "../assets/SkyAstrall.png";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

function Affiliation() {
  const outerLogos = [
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWrYNBFLU6D1-v_AJA-WFrX_2f3UwiKGvKYovdAC2sJfTore-AAyRmuOd5k_np9p8oiUg&usqp=CAU",
      alt: "MSME",
      style: { top: 0, left: "130px", translateX: "-50%", marginTop: "30px" },
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTUC4YhFyPvuBYqzsk95AcrxJd-JbR7AnRsep57dsxNStMTMw35iXj52BLmOFBHc7gVFQ&usqp=CAU",
      alt: "NSDC Academy",
      style: { top: "130px", right: 0 },
    },
    {
      src: "https://images.news18.com/ibnlive/uploads/2023/04/startup-india-1.jpg",
      alt: "Startup India",
      style: { bottom: 0, right: "130px", translateX: "50%", marginBottom: "30px" },
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI5SRUZpqWrVCLLaNOgptXstX4ENFsj-t_FA&s",
      alt: "Nasscom Foundation",
      style: { bottom: "130px", left: 0 },
    },
  ];

  return (
    <div className="min-h-screen text-white flex items-center justify-center px-6 py-12 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-7xl">
        {/* Left Section - Text & CTA */}
        <motion.div
          className="flex flex-col justify-center ml-[-30px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p
            className="text-gray-400 text-[25px] uppercase tracking-wide mb-3 mt-[-30px]"
            custom={1}
            variants={textVariants}
          >
            Affiliated Partners
          </motion.p>

          <motion.h1
            className="text-[52px] bg-gradient-to-r from-[#ffffff] via-[#dcdcddbd] to-[#e5faff6b] bg-clip-text text-transparent md:text-[52px] font-extrabold leading-tight mb-8"
            custom={2}
            variants={textVariants}
          >
            Partnership with <br /> SkyAstrall
          </motion.h1>

          <motion.h2
            className="text-[27px] text-gray-200 font-bold mb-7"
            custom={3}
            variants={textVariants}
          >
            How it works
          </motion.h2>

          <motion.p
            className="text-gray-200 text-[17px] mb-12 leading-[1.9]"
            custom={4}
            variants={textVariants}
          >
            SkyAstrall is proudly affiliated with MSME, Startup India, NASSCOM, and NSDC Academy — partnerships that empower groundbreaking innovation, foster a culture of entrepreneurship, and strengthen industry credibility. These recognized collaborations not only validate our mission but also accelerate our journey toward creating meaningful impact on a global scale.
          </motion.p>

          <motion.a
            href="/Contact"
            className="w-[270px] bg-gradient-to-r from-[#12ffccad] via-[#97dfe7b2] to-[#1dcaffa7] text-[#161616] font-bold text-[20px] px-5 py-4 rounded-lg shadow-lg"
            whileHover={{ scale: 1.08, boxShadow: "0 0 20px rgba(29,202,250,0.6)" }}
            transition={{ type: "spring", stiffness: 150 }}
          >
            Become an Affiliate ➔
          </motion.a>
        </motion.div>

        {/* Right Section - Network Graph */}
        <div className="relative flex items-center justify-center ml-[70px]">
          {/* Concentric Circles */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute w-[550px] h-[550px] border border-gray-700 rounded-full"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute w-[420px] h-[420px] border border-gray-800 rounded-full"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="absolute w-[200px] h-[200px] border border-gray-900 rounded-full"
          />

          {/* Center Image */}
          <motion.div
            className="relative z-10 text-center"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <img
              src={SkyAstrall}
              alt="SkyAstrall"
              className="w-28 h-28 rounded-full border-4 border-white shadow-lg mx-auto"
            />
          </motion.div>

          {/* Outer Images with Rotating Animation */}
          <motion.div
            className="absolute w-[550px] h-[550px]"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          >
            {outerLogos.map((logo, idx) => (
              <motion.div
                key={idx}
                className="absolute"
                style={logo.style}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 + idx * 0.3, duration: 0.8, type: "spring" }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="w-24 h-24 rounded-full border-2 border-white shadow-md mx-auto"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Affiliation;
