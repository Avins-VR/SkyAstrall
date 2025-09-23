"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Background from "./Background";
import MagicCursor from "./Components/MagicCursor";

// Modal with animation
const Modal = ({ service, onClose }) => {
  if (!service) return null;

  const achievements = service.Achievements.split(". ").filter((a) => a.trim());

  return (
    <motion.div
      className="fixed inset-0 bg-black/70 flex justify-center items-center z-[1000] backdrop-blur-md"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-[#1e1e1e] rounded-xl p-8 max-w-[600px] mt-24 w-[90%] shadow-2xl relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <button
          className="absolute top-3 right-8 bg-none border-none text-[37px] text-gray-300 hover:text-red-500 transition"
          onClick={onClose}
        >
          &times;
        </button>

        <div className="flex flex-col items-center text-center mb-8 border-b border-gray-700 pb-6">
          <h2 className="text-2xl font-bold text-white">{service.title}</h2>
          <motion.img
            src={service.image}
            alt={service.title}
            className="w-[350px] h-[200px] rounded-lg shadow-lg mt-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          />
        </div>

        <div>
          <h3 className="text-[23px] font-semibold mb-5 text-white">
            Key Achievements
          </h3>
          <ul className="list-none p-0 m-0">
            {achievements.map((achievement, index) => (
              <motion.li
                key={index}
                className="text-[16px] text-gray-400 mb-3 flex items-start gap-3"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <i className="bi-star-fill text-blue-500" /> {achievement}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Data for all services, updated with 'Achievements' field
const servicesData = [
  {
    id: 1,
    title: "Full-Stack Development",
    description:
      "Mastered comprehensive full-stack development including microservices architecture, cloud deployment, and modern DevOps practices. Built scalable applications with advanced security implementations.",
    icon: "bi-code-slash",
    tags: [
      { icon: "bi-laptop", text: "FRONTEND" },
      { icon: "bi-server", text: "BACKEND" },
    ],
    image:
      "https://www.fullstackgurupune.com/storage/blog_icons/3436f348b07119512ba1a5b86e1e794e.jpeg",
    button: "View Project",
    Achievements:
      "Developed 15+ full-stack applications. Optimized server-side performance by 40%. Implemented CI/CD pipelines for automated deployment.",
  },
  {
    id: 2,
    title: "AI & Machine Learning",
    description:
      "We leverage advanced AI and machine learning techniques to create intelligent systems that can learn from data, make predictions, and automate complex tasks. Our expertise includes developing custom algorithms, neural networks, and data processing pipelines to drive innovation and efficiency in various applications.",
    icon: "bi-robot",
    tags: [
      { icon: "bi-cpu", text: "PYTHON" },
      { icon: "bi-braces", text: "TENSORFLOW" },
    ],
    image:
      "https://blog.credgenics.com/wp-content/uploads/2023/07/futuristic-robot-artificial-intelligence-enlightening-ai-technology-concept-min-scaled-2.jpg",
    button: "View Project",
    Achievements:
      "Developed predictive models with 95% accuracy. Processed and analyzed large datasets (1TB+). Created custom neural networks for image recognition.",
  },
  {
    id: 3,
    title: "Cloud Solutions",
    description:
      "We design and implement cloud-based architectures that enhance scalability, reliability, and performance. By utilizing platforms like AWS, Azure, or Google Cloud, we ensure seamless deployment, management, and optimization of applications in the cloud environment.",
    icon: "bi-cloud-check",
    tags: [
      { icon: "bi-cloud-upload", text: "DOCKER" },
      { icon: "bi-cloud", text: "AWS" },
    ],
    image:
      "https://www.device42.com/blog/wp-content/uploads/2023/03/14_01edge-cloud-computing-900x600.jpg",
    button: "View Project",
    Achievements:
      "Managed 50+ cloud servers with 99.9% uptime. Reduced hosting costs by 30% through resource optimization. Automated cloud infrastructure with Terraform.",
  },
  {
    id: 4,
    title: "API Development", // Updated title to match image
    description:
      "We create and integrate APIs that enable seamless communication between different software systems. Our focus is on building secure, efficient, and well-documented APIs that enhance functionality and user experience across applications.",
    icon: "bi-diagram-3",
    tags: [
      { icon: "bi-box-arrow-in-right", text: "REST API" },
      { icon: "bi-code-slash", text: "GRAPHQL" },
    ],
    image:
      "https://www.ibexa.co/var/site/storage/images/_aliases/ibexa_content_full/3/4/1/0/300143-1-eng-GB/d4255a27c1fa-AdobeStock_261705271_What-is-an-API.jpeg",
    button: "View Project",
    Achievements:
      "Building secure APIs handling 1M+ requests daily. Integrating 50+ third-party services seamlessly. Reducing API response time by 60% through optimization.",
  },
  {
    id: 5,
    title: "UI/UX Design",
    description:
      "We design user interfaces and experiences that are visually appealing, intuitive, and user-friendly. Our approach combines aesthetics with usability to ensure that applications are engaging and easy to navigate.",
    icon: "bi bi-palette",
    tags: [
      { icon: "bi-pencil", text: "FIGMA" },
      { icon: "bi-brush", text: "ADOBE XD" },
    ],
    image:
      "https://mobitouch.net/_next/image?url=https%3A%2F%2Fnew.mobitouch.pl%2Fwp-content%2Fuploads%2F2023%2F09%2FUI-Designera_-Blog-Main.jpg&w=3840&q=75",
    button: "View Project",
    Achievements:
      "Redesigned a platform's UI, increasing user engagement by 25%. Conducted 100+ usability tests to refine designs. Created and maintained comprehensive design systems.",
  },
  {
    id: 6,
    title: "DevOps & Automation",
    description:
      "We implement DevOps practices to automate the software development lifecycle, ensuring faster delivery, continuous integration, and deployment. Our expertise includes using tools like Docker, Kubernetes, and CI/CD pipelines to streamline operations and improve collaboration.",
    icon: "bi-gear",
    tags: [
      { icon: "bi-kanban", text: "KUBERNETES" },
      { icon: "bi-git", text: "GITLAB CI" },
    ],
    image:
      "https://acropolium.com/img/articles/why-you-need-devops/img02.jpg",
    button: "View Project",
    Achievements:
      "Automated deployment pipelines, reducing release time by 75%. Implemented monitoring solutions to achieve 99.99% uptime. Deployed containerized applications with Docker and Kubernetes.",
  },
  {
    id: 7,
    title: "App Development",
    description:
      "We specialize in developing mobile applications for iOS and Android platforms, creating native-like experiences that deliver seamless user experiences across different devices and operating systems.",
    icon: "bi-phone",
    tags: [
      { icon: "bi-phone", text: "REACT NATIVE" },
      { icon: "bi-phone-fill", text: "FLUTTER" },
    ],
    image:
      "https://blog.emb.global/wp-content/uploads/2023/08/image-83-1.png",
    button: "View Project",
    Achievements:
      "Launched 5+ mobile apps on App Store and Google Play. Integrated push notifications and payment gateways. Developed cross-platform apps with a single codebase.",
  },
  {
    id: 8,
    title: "Data Analytics",
    description:
      "We leverage data analytics and visualization techniques to extract insights from complex datasets, creating interactive dashboards and reports that empower users to make informed, data-driven decisions.",
    icon: "bi-bar-chart-line",
    tags: [
      { icon: "bi-graph-up", text: "POWER BI" },
      { icon: "bi-database", text: "SQL" },
    ],
    image:
      "https://assets.cioinsight.com/uploads/2022/06/Data-Analyst-1024x682.jpeg",
    button: "View Project",
    Achievements:
      "Created interactive dashboards that increased user retention by 20%. Processed and cleaned large datasets for analysis. Generated monthly performance reports for key stakeholders.",
  },
];
function ServiceCard({ service, onShowDetails }) {
  return (
    <motion.div
      className="mt-[50px] mb-[100px] relative flex flex-col lg:flex-row items-center justify-between bg-[black]/90 rounded-2xl overflow-hidden shadow-lg backdrop-blur-md max-w-6xl mx-auto mb-10 h-[450px] cursor-pointer"
      whileHover={{ scale: 1.03}}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Left content */}
      <motion.div
  className="flex-1 text-white space-y-4 z-10 pl-[50px]"
  initial={{ x: -50, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  whileHover={{ scale: 1.02 }}
>
  <div className="flex items-center space-x-4 mb-[20px]">
    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-black border border-white">
      <i className={`bi ${service.icon} text-white text-[22px]`} />
    </div>
    <h2 className="text-[35px] text-[#d5f2fd] font-bold">{service.title}</h2>
  </div>

  <p className="text-gray-300 max-w-[540px] leading-[1.9]">{service.description}</p>

  {/* Tags container */}
  <div className="flex gap-3 flex-wrap">
    {service.tags.map((tag, i) => (
      <motion.span
        key={i}
        className="flex items-center mt-[15px] mb-[20px] gap-2 px-6 py-2.5 bg-black border border-white rounded-full text-sm text-gray-200"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 + i * 0.1, duration: 0.5, ease: "easeOut" }}
      >
        <i className={`bi ${tag.icon}`} />
        {tag.text}
      </motion.span>
    ))}
  </div>

  <motion.button
    className="px-6 py-2.5 rounded-full border border-cyan-400 text-cyan-400 font-medium text-[18px] hover:bg-cyan-500 hover:text-black transition-all shadow-[0_0_15px_rgba(34,211,238,0.4)]"
    onClick={() => onShowDetails(service)}
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.2 + service.tags.length * 0.1, duration: 0.5, ease: "easeOut" }}
  >
    View Details
  </motion.button>
</motion.div>

      {/* Right content: Image */}
      <motion.div
        className="relative flex-1 h-[500px] w-full"
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.img
          src={service.image}
          alt={service.title}
          className="rounded-xl shadow-2xl h-full w-full"
          style={{
            opacity: 0.85,
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 75%, black 100%)",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskSize: "cover",
            maskImage:
              "linear-gradient(to right, transparent 0%, black 75%, black 100%)",
            maskRepeat: "no-repeat",
            maskSize: "cover",
          }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
    </motion.div>
  );
}
export default function ServicesList() {
  const [selectedService, setSelectedService] = useState(null);

  const handleShowDetails = (service) => setSelectedService(service);
  const handleCloseModal = () => setSelectedService(null);

  return (
    <div className="relative text-white overflow-x-hidden
      bg-[radial-gradient(at_top_left,#2f3d54_0%,transparent_70%),radial-gradient(at_top_right,#1e1e1ea3_0%,transparent_70%),radial-gradient(at_bottom_left,#5f848475_0%,transparent_80%),linear-gradient(180deg,#070707_0%,#020202_100%)]
      bg-blend-lighten m-0 p-0"
    >
      <MagicCursor />
      <Background />

      <div className="relative z-10 pt-16 pb-5 px-4 sm:px-6 lg:px-8 text-center mt-[80px]">
        <motion.h2
          className="text-[60px] font-bold mb-[40px] relative after:content-[''] after:block after:w-[200px] after:h-[4px] after:bg-gradient-to-r after:from-[#9fcfbc] after:to-transparent after:rounded-md after:mt-3 after:mx-auto"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            fontFamily: "'Impact, Haettenschweiler', 'Arial Narrow Bold', sans-serif",
            background: "linear-gradient(90deg, #686767ff, #adc7b6, #4d4b4b)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          OUR SERVICES
        </motion.h2>

        <motion.p
          className="text-[22px] max-w-[1220px] text-[#cdced1] mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          We build complete digital solutions—from clean, user-friendly
          interfaces to strong, scalable backend systems—delivering reliable,
          secure, and high-performing web and mobile applications.
        </motion.p>
      </div>

      {servicesData.map((service, index) => (
        <ServiceCard
          key={service.id}
          service={service}
          onShowDetails={handleShowDetails}
        />
      ))}

      <Modal service={selectedService} onClose={handleCloseModal} />
    </div>
  );
}