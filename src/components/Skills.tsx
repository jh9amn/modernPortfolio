import React from "react";
import { motion } from "framer-motion";

interface skillProps {
  name: string;
  x: string;
  y: string;
  bgColor: string;
  textColor: string;
}

const Skill: React.FC<skillProps> = ({ name, x, y, bgColor, textColor }) => {
  return (
    <motion.div
      className={`flex items-center justify-center rounded-full font-semibold ${bgColor} ${textColor} text-light
              px-6 py-3 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light
              lg:pt-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold`}
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y , transition : {duration : 1.5}}}
      // transition={{ duration: 1.5 }}
        // viewport={{once: true}}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
        Skils
      </h2>
      <div
        className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
      lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg
      md:bg-circularLightMd md:dark:bg-circularDarkMd
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm"
      >
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light dark:bg-light dark:text-dark
              p-8 shadow-dark cursor-pointer lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill
          name={"CSS"}
          x={"-5vw"}
          y={"-12vw"}
          bgColor={"bg-dark"}
          textColor={"text-light"}
        />
        <Skill
          name={"HTML"}
          x={"-21vw"}
          y={"2vw"}
          bgColor="bg-dark"
          textColor="text-light"
        />
        <Skill
          name={"Javascript"}
          x={"18vw"}
          y={"6vw"}
          bgColor="bg-dark"
          textColor="text-light"
        />
        <Skill
          name={"ReactJS"}
          x={"-5vw"}
          y={"11vw"}
          bgColor="bg-dark"
          textColor="text-light"
        />
        <Skill
          name={"Tailwind"}
          x={"15vw"}
          y={"-13vw"}
          bgColor="bg-dark"
          textColor="text-light"
        />
        <Skill
          name={"ExpressJS"}
          x={"-24vw"}
          y={"-15vw"}
          bgColor="bg-dark"
          textColor="text-light"
        />
        <Skill
          name={"Java"}
          x={"35vw"}
          y={"-3vw"}
          bgColor="bg-dark"
          textColor="text-light"
        />
        <Skill
          name={"Web Dev"}
          x={"0vw"}
          y={"-20vw"}
          bgColor="bg-dark"
          textColor="text-light"
        />
        <Skill
          name={"NextJS"}
          x={"-32vw"}
          y={"8vw"}
          bgColor="bg-dark"
          textColor="text-light"
        />
        <Skill
          name={"Springboot"}
          x={"5vw"}
          y={"20vw"}
          bgColor="bg-dark"
          textColor="text-light"
        />
        <Skill
          name={"Firebase"}
          x={"-22vw"}
          y={"20vw"}
          bgColor="bg-dark"
          textColor="text-light"
        />
        <Skill
          name={"Python"}
          x={"-41vw"}
          y={"-3vw"}
          bgColor="bg-dark"
          textColor="text-light"
        />
        <Skill
          name={"MongoDB"}
          x={"35vw"}
          y={"14vw"}
          bgColor="bg-dark"
          textColor="text-light"
        />
        <Skill
          name={"Figma"}
          x={"28vw"}
          y={"-18vw"}
          bgColor="bg-dark"
          textColor="text-light"
        />
      </div>
    </>
  );
};

export default Skills;
