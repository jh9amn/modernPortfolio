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
  const isInView = useInView(ref, { once: false, margin: "-20% 0% -20% 0%" });
  return (
    <motion.article
      className="w-full relative rounded-br-2xl flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl"
      initial={{ opacity: 0, y: -50 }}
      ref={ref}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="absolute -bottom-3 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] rounded-br-3xl bg-dark"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg p-12"
      >
        <div className="image-container">
          <FramerImage
            src={img}
            alt={title}
            className="w-full h-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
        </div>
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target={"_blank"}
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark">{summary}</p>

        <div className="mt-2 flex items-center">
          <Link href={githublink} className="w-10">
            <GithubIcon className="rounded-sm" />
          </Link>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-left font-semibold"
          >
            <Link href={link}>Visit Project</Link>
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
  const isInView = useInView(ref, { once: false, margin: "0% -20% 0% -20%" });
  return (
    <motion.article
      className="w-full flex flex-col items-center justify-center rounded-3xl border border-solid border-dark bg-dark p-6 relative"
      ref={ref}
      initial={{ opacity: 0, x: 0, y: 0 }}
      animate={isInView ? { opacity: 1, x: 100 } : { opacity: 0, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="absolute bottom-3 right-3 -z-10 w-[101%] h-[100%] rounded-[2rem] rounded-br-3xl bg-light"
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
          />
        </div>
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target={"_blank"}
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>

        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            className="underline rounded-lg  text-lg font-semibold"
          >
            Visit
          </Link>
          <Link href={githublink} className="w-8">
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
  const isInView = useInView(ref, { once: false, margin: "0% -20% 0% -20%" });
  return (
    <motion.article
      className="w-full flex flex-col items-center justify-center rounded-3xl border border-solid border-dark bg-dark p-6 relative"
      initial={{ opacity: 0, x: 0, y: 0 }}
      ref={ref}
      animate={isInView ? { opacity: 1, x: -100 } : { opacity: 0, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="absolute bottom-3 right-3 -z-10 w-[101%] h-[100%] rounded-[2rem] rounded-br-3xl bg-light"
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
          />
        </div>
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target={"_blank"}
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>

        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            className="underline rounded-lg  text-lg font-semibold"
          >
            Visit
          </Link>
          <Link href={githublink} className="w-8">
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

        <main className="w-full mb-16 flex flex-col items-center justify-center">
          <Layout className="pt-16">
            <AnimatedText
              text={"Imagination Trumps Knowledge!"}
              className="mb-16"
            />
            <div className="grid grid-cols-12 gap-24 gap-y-32">
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
              <div className="col-span-6">
                <ProjectFirst
                  title={"NetFlix GPT-AI"}
                  link={"https://www.google.com/"}
                  githublink={"https://www.google.com/"}
                  type={"Featured Projects"}
                  img={project1}
                />
              </div>
              <div className="col-span-6">
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
              <div className="col-span-6">
                <ProjectFirst
                  title={"NetFlix GPT-AI"}
                  link={"https://www.google.com/"}
                  githublink={"https://www.google.com/"}
                  type={"Featured Projects"}
                  img={project1}
                />
              </div>
              <div className="col-span-6">
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
