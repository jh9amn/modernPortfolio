"use client";
import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import project1 from "../../../../public/images/projects/crypto-screener-cover-image.jpg";
import AnimationTmeplate from "@/components/AnimationTmeplate";

const FramerImage = motion(Image);

interface FeaturedProjectProps {
  type: string;
  title: string;
  summary?: string;
  img: string | StaticImageData;
  link: string;
  githublink: string;
}

const FeaturedProject: React.FC<FeaturedProjectProps> = ({
  type,
  title,
  summary,
  img,
  link,
  githublink,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20% 0% -20% 0%" });
  return (
    <motion.article
      className="w-full relative rounded-br-2xl flex items-center justify-between rounded-3xl border border-solid border-dark bg-light dark:bg-dark dark:border-light shadow-2xl
      lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
      initial={{ opacity: 0, y: -50 }}
      ref={ref}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="absolute -bottom-3 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] rounded-br-3xl bg-dark dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      />

      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg p-12
        lg:w-full"
      >
        <div className="image-container">
          <FramerImage
            src={img}
            alt={title}
            className="w-full h-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            priority
            sizes="(max-width : 768px) 100vw,
                        (max-width: 1200px) 50vw,
                          50vw"
          />
        </div>
      </Link>

      <div
        className="w-1/2 flex flex-col items-start justify-between pl-6
      lg:w-full lg:pl-0 lg:pt-6"
      >
        <span
          className="text-primary dark:text-primaryDark font-medium text-xl
        xs:text-base "
        >
          {type}
        </span>
        <Link
          href={link}
          target={"_blank"}
          className="hover:underline underline-offset-2"
        >
          <h2
            className="my-2 w-full text-left text-4xl font-bold dark:text-light
          sm:text-sm"
          >
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium dark:text-light text-dark sm:text-sm">
          {summary}
        </p>

        <div className="mt-2 flex items-center">
          <Link href={githublink} className="w-10">
            <GithubIcon className="rounded-sm" />
          </Link>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="ml-4 rounded-lg bg-dark text-light dark:bg-light dark:text-dark p-2 px-6 text-left font-semibold
            sm:px-4 sm:text-base"
          >
            <Link target="_blank" href={link}>
              Visit Project
            </Link>
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
};

const ProjectSecond: React.FC<FeaturedProjectProps> = ({
  title,
  type,
  img,
  link,
  githublink,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0% -20% 0% -20%" });
  // // apply motion feature while it is not mobile screen..
  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   const mediaQuery = window.matchMedia("(max-width: 640px)"); // Tailwind's "sm" breakpoint
  //   setIsMobile(mediaQuery.matches);

  //   const handleChange = (e) => setIsMobile(e.matches);
  //   mediaQuery.addEventListener("change", handleChange);

  //   return () => mediaQuery.removeEventListener("change", handleChange);
  // }, []);
  return (
    <motion.article
      className="w-full flex flex-col items-center justify-center rounded-3xl border border-solid border-dark bg-dark dark:border-light dark:bg-light p-6 relative
      xs:p-4"
      ref={ref}
      initial={{ opacity: 0, x: 0, y: 0 }}
      animate={isInView ? { opacity: 1, x: 100 } : { opacity: 0, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="absolute bottom-3 right-3 -z-10 w-[101%] h-[100%] rounded-[2rem] rounded-br-3xl bg-light dark:bg-dark
        md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg p-12"
      >
        <div className="image-container">
          <FramerImage
            src={img}
            alt={title}
            className="w-full h-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            priority
            sizes="(max-width : 768px) 100vw,
                        (max-width: 1200px) 50vw,
                          50vw"
          />
        </div>
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span
          className="text-primary dark:text-primaryDark font-medium text-xl
        lg:text-lg md:text-base"
        >
          {type}
        </span>
        <Link
          href={link}
          target={"_blank"}
          className="hover:underline underline-offset-2"
        >
          <h2
            className="my-2 w-full text-left text-3xl font-bold
           lg:text-2xl"
          >
            {title}
          </h2>
        </Link>

        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            className="underline rounded-lg  text-lg font-semibold
            md:text-base"
          >
            Visit
          </Link>
          <Link href={githublink} className="w-8  md:w-6">
            <GithubIcon className="rounded-sm" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
};
const ProjectFirst: React.FC<FeaturedProjectProps> = ({
  title,
  type,
  img,
  link,
  githublink,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0% -20% 0% -20%" });
  // apply motion feature while it is not mobile screen..
  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   const mediaQuery = window.matchMedia("(max-width: 640px)"); // Tailwind's "sm" breakpoint
  //   setIsMobile(mediaQuery.matches);

  //   const handleChange = (e) => setIsMobile(e.matches);
  //   mediaQuery.addEventListener("change", handleChange);

  //   return () => mediaQuery.removeEventListener("change", handleChange);
  // }, []);
  return (
    <motion.article
      className="w-full flex flex-col items-center justify-center rounded-3xl border border-solid border-dark bg-dark dark:border-light dark:bg-light p-6 relative
      xs:p-4"
      initial={{ opacity: 0, x: 0, y: 0 }}
      ref={ref}
      animate={isInView ? { opacity: 1, x: -100 } : { opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="absolute bottom-3 right-3 -z-10 w-[101%] h-[100%] rounded-[2rem] rounded-br-3xl bg-light dark:bg-dark
        md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />

      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg p-12"
      >
        <div className="image-container">
          <FramerImage
            src={img}
            alt={title}
            className="w-full h-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            priority
            sizes="(max-width : 768px) 100vw,
                        (max-width: 1200px) 50vw,
                          50vw"
          />
        </div>
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span
          className="text-primary dark:text-primaryDark font-medium text-xl
         lg:text-lg md:text-base"
        >
          {type}
        </span>
        <Link
          href={link}
          target={"_blank"}
          className="hover:underline underline-offset-2"
        >
          <h2
            className="my-2 w-full text-left text-3xl font-bold
          lg:text-2xl"
          >
            {title}
          </h2>
        </Link>

        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            className="underline rounded-lg  text-lg font-semibold
            md:text-base"
          >
            Visit
          </Link>
          <Link href={githublink} className="w-8 md:w-6">
            <GithubIcon className="rounded-sm" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

const Projets = () => {
  return (
    <>
      <AnimationTmeplate>
        <Head>
          <title>Aman | About Page</title>
          <meta name="description" content="my description" />
        </Head>
        <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
          <Layout className="pt-16">
            <AnimatedText
              text={"Imagination Trumps Knowledge!"}
              className="mb-16 sm:mb-8 lg:!text-7xl sm:!text-6xl xs:!text-4xl"
            />
            <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
              <div className="col-span-12">
                <FeaturedProject
                  title={"NetFlix GPT-AI"}
                  summary={
                    "A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency"
                  }
                  link={"https://www.google.com/"}
                  githublink={"https://www.google.com/"}
                  type={"Featured Projects"}
                  img={project1}
                />
              </div>
              <div className="col-span-6 sm:col-span-12">
                <ProjectFirst
                  title={"NetFlix GPT-AI"}
                  link={"https://www.google.com/"}
                  githublink={"https://www.google.com/"}
                  type={"Featured Projects"}
                  img={project1}
                />
              </div>
              <div className="col-span-6 sm:col-span-12">
                <ProjectSecond
                  title={"NetFlix GPT-AI"}
                  link={"https://www.google.com/"}
                  githublink={"https://www.google.com/"}
                  type={"Featured Projects"}
                  img={project1}
                />
              </div>
              <div className="col-span-12">
                <FeaturedProject
                  title={"NetFlix GPT-AI"}
                  summary={
                    "A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency"
                  }
                  link={"https://www.google.com/"}
                  githublink={"https://www.google.com/"}
                  type={"Featured Projects"}
                  img={project1}
                />
              </div>
              <div className="col-span-6 sm:col-span-12">
                <ProjectFirst
                  title={"NetFlix GPT-AI"}
                  link={"https://www.google.com/"}
                  githublink={"https://www.google.com/"}
                  type={"Featured Projects"}
                  img={project1}
                />
              </div>
              <div className="col-span-6 sm:col-span-12">
                <ProjectSecond
                  title={"NetFlix GPT-AI"}
                  link={"https://www.google.com/"}
                  githublink={"https://www.google.com/"}
                  type={"Featured Projects"}
                  img={project1}
                />
              </div>
            </div>
          </Layout>
        </main>
      </AnimationTmeplate>
    </>
  );
};

export default Projets;
