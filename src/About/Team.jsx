import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useAnimation,
  useTransform,
} from "framer-motion";
import "./Team.css";

const TEAM = [
  {
    name: "John Doe",
    position: "CEO & Founder",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR-9ELVfKQi7PanMuugufOquNFrdN6_iIU3g&s",
  },
  {
    name: "Raj Patel",
    position: "CTO & Co-Founder",
    image:
      "https://img.freepik.com/premium-photo/portrait-smiling-young-businessman-standing-with-hands-pockets-office-with-ai-generated_144089-7344.jpg",
  },
  {
    name: "Amit Kumar",
    position: "Head of AI Development",
    image:
      "https://media.istockphoto.com/id/1562983249/photo/portrait-of-happy-and-successful-businessman-indian-man-smiling-and-looking-at-camera.jpg?s=612x612&w=0&k=20&c=tfBv6taG9nTidFwENcrvEEvRHABN5gDAmg-K1G1Etnc=",
  },
  {
    name: "Michael Smith",
    position: "Senior Cloud Engineer",
    image:
      "https://t4.ftcdn.net/jpg/06/63/17/45/360_F_663174509_cI98mWznXts28zFrfrIenJlpxZQutWA0.jpg",
  },
  {
    name: "Daniel Lee",
    position: "Product Manager",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq4yJ98qGZmwxpFleUxmrBf7kpWOj5gyc8x0BpMOGaKcg0vdY33Qj12MCV_Q1WpY_ubyg&usqp=CAU",
  },
  {
    name: "Kevin Brown",
    position: "Cloud Architect",
    image:
      "https://media.istockphoto.com/id/1406966951/photo/businessman-in-office-looking-at-camera-with-arms-crossed.jpg?s=612x612&w=0&k=20&c=Fg6DNiYjrwafDNUKE0kOCYeDyX3S_h80zRqktvoxG4E=",
  },
  {
    name: "Lucas Garcia",
    position: "AI Specialist",
    image:
      "https://static.vecteezy.com/system/resources/previews/037/098/807/non_2x/ai-generated-a-happy-smiling-professional-man-light-blurry-office-background-closeup-view-photo.jpg",
  },
  {
    name: "Ethan White",
    position: "Lead Data Scientist",
    image:
      "https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM=",
  },
];

const RollingGallery = ({ autoplay = true, pauseOnHover = true }) => {
  const [isScreenSizeSm, setIsScreenSizeSm] = useState(
    window.innerWidth <= 640
  );

  const cards = TEAM;
  const cylinderWidth = isScreenSizeSm ? 2200 : 3200;
  const faceCount = cards.length;
  const faceWidth = (cylinderWidth / faceCount) * 1.5;
  const dragFactor = 0.05;
  const radius = cylinderWidth / (2 * Math.PI);

  const rotation = useMotionValue(0);
  const controls = useAnimation();
  const autoplayRef = useRef();

  const handleDrag = (_, info) => {
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };

  const handleDragEnd = (_, info) => {
    controls.start({
      rotateY: rotation.get() + info.velocity.x * dragFactor,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 20,
        mass: 0.1,
        ease: "easeOut",
      },
    });
  };

  const transform = useTransform(rotation, (value) => {
    return `rotate3d(0, 1, 0, ${value}deg)`;
  });

  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(() => {
        controls.start({
          rotateY: rotation.get() - 360 / faceCount,
          transition: { duration: 2, ease: "linear" },
        });
        rotation.set(rotation.get() - 360 / faceCount);
      }, 2500);

      return () => clearInterval(autoplayRef.current);
    }
  }, [autoplay, rotation, controls, faceCount]);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenSizeSm(window.innerWidth <= 640);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseEnter = () => {
    if (autoplay && pauseOnHover) {
      clearInterval(autoplayRef.current);
      controls.stop();
    }
  };

  const handleMouseLeave = () => {
    if (autoplay && pauseOnHover) {
      autoplayRef.current = setInterval(() => {
        controls.start({
          rotateY: rotation.get() - 360 / faceCount,
          transition: { duration: 2, ease: "linear" },
        });
        rotation.set(rotation.get() - 360 / faceCount);
      }, 2500);
    }
  };

  return (
    <section className="text-white py-0 px-0 font-sans">
     <motion.h3
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1, ease: "easeOut" }}
  className="text-[43px] text-center font-bold mt-[0px] mb-8 bg-gradient-to-r from-[#ffffff] via-[#dcdcddbd] to-[#1dcaffa7] bg-clip-text text-transparent"
>
  MEET OUR TEAM
</motion.h3>

<motion.p
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
  className="text-[20px] text-center text-gray-300 max-w-[1100px] mx-auto mb-[-50px]"
>
  A diverse team of passionate innovators and leaders, united by expertise and vision to drive meaningful impact and shape the future together.
</motion.p>
      <div className="gallery-container">
        <div className="gallery-gradient gallery-gradient-left"></div>
        <div className="gallery-gradient gallery-gradient-right"></div>

        <div className="gallery-content">
          <motion.div
            drag="x"
            className="gallery-track"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: transform,
              rotateY: rotation,
              width: cylinderWidth,
              transformStyle: "preserve-3d",
            }}
            onDrag={handleDrag}
            onDragEnd={handleDragEnd}
            animate={controls}
          >
            {cards.map((member, i) => (
              <div
                key={i}
                className="gallery-item"
                style={{
                  width: `${faceWidth}px`,
                  transform: `rotateY(${
                    i * (360 / faceCount)
                  }deg) translateZ(${radius}px)`,
                }}
              >
                <div className="team-card">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="team-img"
                  />
                  <h4 className="team-name">{member.name}</h4>
                  <p className="team-position">{member.position}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RollingGallery;
