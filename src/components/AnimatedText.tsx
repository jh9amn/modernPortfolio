"use client";

import React from "react";
import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const quote = {
  initial: {
    opacity: 1, // All children visible initially
  },
  animate: {
    opacity: 1, // All children remain visible during animation
    transition: {
      delay: 0.5, // Wait 0.5 seconds before starting the animation
      staggerChildren: 0.08, // Delay of 0.08 seconds between children
    },
  },
};


const singleword = {
  initial: {
    opacity: 0, // Each word starts invisible
    y: 50, // Starts 50px below its final position
  },
  animate: {
    opacity: 1, // Fades into view
    y: 0, // Moves to its final position
    transition: {
      duration: 0.5, // Each word animation lasts 0.5 seconds
    },
  },
};
const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = "",
}) => {
  return (
    <div className="w-full  mx-auto py-2 flex items-center justify-center text-center overflow-hidden">
      <motion.h1
        className={`inline-block w-full text-dark dark:text-light font-bold capitalize text-8xl ${className}`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {text &&
          text.split(" ").map((word, index) => (
            <motion.span
              key={`${word}-${index}`}
              className="inline-block"
              variants={singleword}
            >
              {word}&nbsp;
            </motion.span>
          ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
