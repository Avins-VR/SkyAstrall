import React from "react";
import { motion } from "framer-motion";
import callIcon from "../assets/call.png";
import mapicon from "../assets/map.png";
import mailIcon from "../assets/mail.png";
import Message from "./Message";
import MagicCursor from "../Components/MagicCursor";
import Background from "../Background";
import Footer from "../Footer";

const Contact = () => {
  const options = [
    {
      id: 1,
      icon: callIcon,
      title: "PHONE",
      description: "Innovation starts with a single call.",
      button: "Call Now",
      action: "tel:+919274873847",
    },
    {
      id: 2,
      icon: mailIcon,
      title: "EMAIL",
      description: "Your message, our quick response always.",
      button: "Mail Now",
      action: "mailto:info@skyastrall.com",
    },
    {
      id: 3,
      icon: mapicon,
      title: "LOCATION",
      description: "Visit our office for real connection.",
      button: "Locate Us",
      action:
        "https://www.google.com/maps/place/India/@14.290863,37.5916274,7232135m/data=!3m1!1e3!4m6!3m5!1s0x30635ff06b92b791:0xd78c4fa1854213a6!8m2!3d20.593684!4d78.96288!16zL20vMDNyazA?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D",
    },
  ];

  const handleClick = (action) => {
    window.open(action, "_blank");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const contactItemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className="relative text-white overflow-x-hidden
      bg-[radial-gradient(at_top_left,#2f3d54_0%,transparent_70%),radial-gradient(at_top_right,#1e1e1ea3_0%,transparent_70%),radial-gradient(at_bottom_left,#5f848475_0%,transparent_80%),linear-gradient(180deg,#070707_0%,#020202_100%)]
      bg-blend-lighten m-0 p-0"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <MagicCursor />
      <Background />
      <div className="relative z-10 pt-16 pb-5 px-4 sm:px-6 lg:px-8 text-center mt-[80px]">
        <motion.h2
          variants={itemVariants}
          className="text-[60px] font-bold mb-[40px] relative after:content-[''] after:block after:w-[200px] after:h-[4px] after:bg-gradient-to-r after:from-[#9fcfbc] after:to-transparent after:rounded-md after:mt-3 after:mx-auto"
          style={{
            fontFamily:
              "'Impact, Haettenschweiler', 'Arial Narrow Bold', sans-serif",
            background:
              "linear-gradient(90deg, #686767ff, #adc7b6, #4d4b4b)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          GET IN TOUCH
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-[22px] max-w-[1200px] text-[#cdced1] mx-auto mb-[-20px]"
        >
          Ready to transform your business with cutting-edge technology? Let's discuss your project and explore how we can bring your vision to life.
        </motion.p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-40 py-16 text-white">
        {options.map((item) => (
          <motion.div
            key={item.id}
            className="flex flex-col items-center text-center"
            variants={contactItemVariants}
            whileHover={{ scale: 1.1, y: -10, transition: { duration: 0.2 } }}
          >
            <motion.img
              src={item.icon}
              alt={item.title}
              className="w-36 h-36 mb-6 object-contain"
              whileTap={{ scale: 0.9 }}
            />
            <motion.h3 variants={itemVariants} className="text-[30px] font-semibold">{item.title}</motion.h3>
            <motion.p variants={itemVariants} className="text-gray-400 text-[16px] mt-5">{item.description}</motion.p>
            <motion.button
              onClick={() => handleClick(item.action)}
              className="px-8 py-4 mt-10 rounded-full border border-cyan-400 text-cyan-400 font-medium text-[20px] hover:bg-[#1dcaffa7] hover:text-black transition-all shadow-[0_0_15px_rgba(34,211,238,0.4)]"
              whileTap={{ scale: 0.95 }}
            >
              {item.button} <span className="text-lg">+</span>
            </motion.button>
          </motion.div>
        ))}
      </div>
      <Message />
      <Footer />
    </motion.div>
  );
};

export default Contact;
