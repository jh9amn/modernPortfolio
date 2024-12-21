import { useScroll, motion } from "framer-motion";
import React from "react";
import { useSpring } from "framer-motion";


type LiIconProps<T extends HTMLElement> = {
  reference: React.RefObject<T>;
};

const LiIcon = <T extends HTMLElement>({ reference }: LiIconProps<T>) => {
   const { scrollYProgress } = useScroll({
     target: reference,
     offset: ["center end", "end center"],
   });

   // Add a spring for smoother motion
   const smoothScrollProgress = useSpring(scrollYProgress, {
     stiffness: 100,
     damping: 20,
   });
  return (
    <figure className="absolute left-0 stroke-dark">
      {/* <svg
        className="-rotate-90"
        width={"75"}
        height={"75"}
        viewBox="0 0 100 100"
      >
        <circle
          cx={"75"}
          cy={"50"}
          r={"20"}
          className="stroke-primary stroke-1 fill-none"
        />
        <motion.circle
          cx={"75"}
          cy={"50"}
          r={"20"}
          className=" stroke-[5px] fill-light"
          style={{
            pathLength: scrollYProgress,
          }}
        />
        <circle
          cx={"75"}
          cy={"50"}
          r={"10"}
          className=" stroke-1 fill-primary animate-pulse"
        />
      </svg> */}

      <svg className="-rotate-90" width="75" height="75" viewBox="0 0 100 100">
        {/* Outer Circle */}
        <motion.circle
          cx="50"
          cy="50"
          r="20"
          className="stroke-primary stroke-[5px] fill-light"
          style={{
            pathLength: smoothScrollProgress, 
          }}
        />
        {/* Middle Circle */}
        <motion.circle
          cx="50"
          cy="50"
          r="10"
          className="stroke-primary stroke-[3px] fill-none"
          whileInView={{
            scale: [1, 1.2, 1], // Animate scale when in view
            opacity: [0, 1, 0.8],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
        {/* Inner Circle */}
        <circle
          cx="50"
          cy="50"
          r="5"
          className="fill-primary animate-pulse" // Pulsating center
        />
      </svg>
    </figure>
  );
};

export default LiIcon;
