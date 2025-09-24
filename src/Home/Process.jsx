import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ProcessFlow = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <div className="container mx-auto p-4 font-sans text-white mb-[80px]">
      <motion.h2
        className="text-[43px] text-center font-bold mb-8 bg-gradient-to-r from-[#ffffff] via-[#dcdcddbd] to-[#1dcaffa7] bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        OUR PROCESS
      </motion.h2>
      <motion.p
        className="text-[20px] text-center text-gray-300 max-w-[1100PX] mx-auto mb-[100px]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Our process combines strategy, creativity, and precision, ensuring every solution delivers excellence, efficiency, and measurable results for our clients.
      </motion.p>
      <motion.div
        ref={containerRef}
        className="grid grid-cols-4 gap-0 relative"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Step 1 */}
        <motion.div
          className="relative flex flex-col items-center z-40 w-[350px] ml-[20px]"
          variants={stepVariants}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
        >
          <div className="bg-[#E43636] text-white p-4 font-bold text-[26px] text-xl w-full flex items-center justify-start h-20" style={{ clipPath: 'polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%)' }}>
            STEP #1
          </div>
          <div className="bg-[#f0c3fb] text-gray-800 p-6 shadow-md w-full rounded-b-md">
            <h3 className="font-bold text-[21px] mb-5">Discovery & Planning</h3>
            <ul className="list-disc ml-5 text-[16px] space-y-1">
              <li>Initial consultation to understand client requirements, goals, and expectations.</li>
              <li>Conduct research on industry trends, competitors, and user needs.</li>
              <li>Define project scope, objectives, and success metrics.</li>
              <li>Identify potential challenges and outline mitigation strategies.</li>
              <li>Create a roadmap with clear milestones and deliverables.</li>
            </ul>
          </div>
        </motion.div>

        {/* Step 2 */}
        <motion.div
          className="relative flex flex-col items-center z-30 mt-[80px] ml-[40px]"
          variants={stepVariants}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
        >
          <div className="bg-[#FAA533] text-white p-4 font-bold text-[26px] text-xl w-full flex items-center justify-start h-20" style={{ clipPath: 'polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%)' }}>
            STEP #2
          </div>
          <div className="bg-[#D283FF] text-gray-800 p-6 shadow-md w-full rounded-b-md">
            <h3 className="font-bold text-[21px] mb-5">Design & Prototyping</h3>
            <ul className="list-disc ml-5 text-[16px] space-y-1">
              <li>Develop initial wireframes to visualize the structure and flow.</li>
              <li>Create high-fidelity UI designs aligned with brand identity.</li>
              <li>Build interactive prototypes for user experience testing.</li>
              <li>Collect feedback from stakeholders and end users.</li>
              <li>Refine designs iteratively to ensure usability and clarity.</li>
            </ul>
          </div>
        </motion.div>

        {/* Step 3 */}
        <motion.div
          className="relative flex flex-col items-center z-20 mt-[160px] ml-[40px]"
          variants={stepVariants}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
        >
          <div className="bg-green-600 text-white p-4 font-bold text-[26px] text-xl w-full flex items-center justify-start h-20" style={{ clipPath: 'polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%)' }}>
            STEP #3
          </div>
          <div className="bg-[#f0c3fb] text-gray-800 p-6 shadow-md w-full rounded-b-md">
            <h3 className="font-bold text-[21px] mb-5">Development & Testing</h3>
            <ul className="list-disc ml-5 text-[16px] space-y-1">
              <li>Set up the development environment and frameworks.</li>
              <li>Write clean, scalable, and maintainable code based on requirements.</li>
              <li>Integrate APIs, databases, and third-party services as needed.</li>
              <li>Conduct unit, integration, and system testing to ensure functionality.</li>
              <li>Fix bugs, optimize performance, and validate against acceptance criteria.</li>
            </ul>
          </div>
        </motion.div>

        {/* Step 4 */}
        <motion.div
          className="relative flex flex-col items-center z-10 mt-[240px] ml-[40px]"
          variants={stepVariants}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
        >
          <div className="bg-teal-600 text-white p-4 font-bold text-[26px] text-xl w-full flex items-center justify-start h-20" style={{ clipPath: 'polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%)' }}>
            STEP #4
          </div>
          <div className="bg-[#D283FF] text-gray-800 p-6 shadow-md w-full rounded-b-md">
            <h3 className="font-bold text-[21px] mb-5">Deployment & Support</h3>
            <ul className="list-disc ml-5 text-[16px] space-y-1">
              <li>Deploy the application to the production environment.</li>
              <li>Perform final checks to ensure smooth functionality post-deployment.</li>
              <li>Provide user training and documentation for easy adoption.</li>
              <li>Offer ongoing technical support and issue resolution.</li>
              <li>Monitor performance, apply updates, and ensure system security.</li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProcessFlow;