import React from "react";
import { motion } from "framer-motion";
import ScrollStack, { ScrollStackItem } from "../Components/ScrollStack";

const testimonials = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpyCbjsjx0m14-4AD8zSt9KxA7yPGmZ98QqA&s",
    stars: 5,
    name: "Gabriel Sher",
    Position: "Serial Entrepreneur",
    feedback: "Working with Marc on the Untapped Africa website was an incredible experience. He truly understood our vision and transformed it into a stunning, user-friendly platform. His creativity, professionalism, and attention to detail exceeded our expectations. The process was smooth, collaborative, and enjoyable throughout. We couldn’t be happier with the final result.",
  },
  {
    img: "https://imgcdn.stablediffusionweb.com/2024/5/30/45b6deec-9bb2-452c-abdf-58fdd6f71894.jpg",
    stars: 5,
    name: "Sarah Johnson",
    Position: "CTO, TechFlow Solutions",
    feedback: "Collaborating with Marc on the Untapped Africa website was a wonderful journey. He quickly grasped our vision and translated it into a sleek, intuitive, and visually striking platform. His blend of professionalism, creativity, and precision went far beyond what we expected. The entire process felt effortless and highly collaborative. We are absolutely delighted with the final outcome.",
  },
  {
    img: "https://heritageofficesuites.com/wp-content/uploads/2021/10/Give-Your-LinkedIn-Profile-a-Polish-Heritage-Office-Suites-Georgetown-Shared-Workspace-2.jpg",
    stars: 5,
    name: "Emily Rodriguez",
    Position: "Founder, InnovateHub",
    feedback: "The team’s ability to understand our business needs and deliver a scalable cloud solution was truly impressive. They met deadlines, stayed within budget, and ensured a smooth implementation. Their professionalism and commitment to quality stood out, along with the excellent ongoing support they continue to provide. It has been a genuine partnership experience that adds real value to our business.",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBICmdAmthX70ZwySneG2T5TNOseSfHl_agR00U-B-mzX4BEoQbx8W0TTpkcgKvpyFInk&usqp=CAU",
    stars: 5,
    name: "Michael Chen",
    Position: "VP Engineering, DataCore",
    feedback: "Outstanding work on our machine learning infrastructure. The team delivered a solution that boosted our processing speed by 300% while significantly reducing operational costs. Their expertise, professionalism, and attention to technical detail were evident at every stage. Collaboration was seamless, and communication remained clear and proactive throughout. A highly skilled team that brings real results.",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy0zV3bfd2jDheakC0qZXYS6r3AB_5YZXnMspq2HCLGxpg2JGoXp3Jkpe22yFgYWU8UQo&usqp=CAU",
    stars: 5,
    name: "David Thompson",
    Position: "CEO, NextGen Analytics",
    feedback: "SkyAstrall transformed our legacy system into a modern, efficient platform that perfectly fits our needs. Their agile approach and open communication made the entire process smooth and stress-free. The professionalism and dedication of the team were evident at every stage of the project. Most importantly, the results speak for themselves with a 40% increase in productivity. A truly valuable partnership that delivered beyond expectations."
  },
  {
    img: "https://static.vecteezy.com/system/resources/thumbnails/006/638/384/small_2x/asian-business-women-using-notebook-and-smart-phone-and-business-women-smiling-happy-for-working-photo.jpg",
    stars: 5,
    name: "Lisa Wang",
    Position: "Director of Technology, CloudFirst",
    feedback: "Exceptional service from start to finish. They delivered a robust solution while providing valuable insights that improved our architecture. Their expertise in cloud technologies is unmatched. The collaboration felt like a true partnership throughout. Overall, they drove measurable business value for our organization.",
  },
];
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

const headingVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
};

const paragraphVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.2, ease: "easeOut" } }
};

function Clientsucess() {
  return (
    <div className="App">
       <motion.h2
        className="text-[43px] mt-[-40px] text-center font-bold mb-8 bg-gradient-to-r from-[#ffffff] via-[#DCDCDC] to-[#1dcaffa7] bg-clip-text text-transparent"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={headingVariants}
      >
        CLIENT SUCCESS STORIES
      </motion.h2>

      <motion.p
        className="text-[20px] text-center text-gray-300 mb-[120px] max-w-[1100px] mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={paragraphVariants}
      >
        We take pride in our clients’ success, showcasing real-world stories where our solutions have driven growth, improved efficiency, and created lasting impact across industries.
      </motion.p>
      <div className="mt-[-80px]">
      <ScrollStack className="w-full h-[780px]">
        {testimonials.map((t, i) => (
          <ScrollStackItem key={i}>
            {/* <div
              className="min-w-[800px] max-w-[800px] p-6 rounded-xl border border-[#333] ml-[50px] mb-[30px] shadow-md"
              styd: "linear-gradient(90deg, #8d31897b, rgba(81, 8, 89, 0.52))",
              }}le={{
                backgroun
            > */}
              <div className="flex items-center justify-between mt-0 mb-[-20px]">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-[200px] h-[200px] ml-[30px] object-cover rounded-full border-2 border-white shadow-md"
                />
                <a
                  href="#"
                  className="flex items-center gap-2 mr-[70px] bg-[#0A66C2] text-white px-8 py-4 rounded-lg text-[18px] hover:bg-[#1dcaffa7] transition"
                >
                  <i className="bi bi-linkedin"></i> Connect
                </a>
              </div>

               <motion.h3
                  className="text-[25px] font-semibold mt-6 ml-[30px]"
                  custom={0}
                  initial="hidden"
                  whileInView="visible"
                  variants={textVariants}
                  viewport={{ once: true }}
                >
                  {t.name}
                </motion.h3>

                <motion.div
                  className="text-yellow-400 text-[25px] mt-2 ml-[30px]"
                  custom={1}
                  initial="hidden"
                  whileInView="visible"
                  variants={textVariants}
                  viewport={{ once: true }}
                >
                  {"★".repeat(t.stars)}
                </motion.div>

                <motion.p
                  className="text-gray-300 text-[20px] mt-2 ml-[30px]"
                  custom={2}
                  initial="hidden"
                  whileInView="visible"
                  variants={textVariants}
                  viewport={{ once: true }}
                >
                  {t.Position}
                </motion.p>

                <motion.p
                  className="mt-5 mb-7 text-gray-300 italic text-[18px] ml-[30px]"
                  custom={3}
                  initial="hidden"
                  whileInView="visible"
                  variants={textVariants}
                  viewport={{ once: true }}
                >
                  "{t.feedback}"
                </motion.p>
            {/* </div> */}
          </ScrollStackItem>
        ))}
      </ScrollStack>
      </div>
    </div>
  );
}

export default Clientsucess;
