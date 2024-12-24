"use client";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { motion, useInView, useMotionValue } from "framer-motion";
import article1 from "../../../../public/images/articles/pagination component in reactjs.jpg";
import article2 from "../../../../public/images/articles/create loading screen in react js.jpg";
import article3 from "../../../../public/images/articles/pagination component in reactjs.jpg";
import article4 from "../../../../public/images/articles/create modal component in react using react portals.png";

const FramerImage = motion(Image);

interface FeaturedArticleProps {
  img: string | StaticImageData;
  title: string;
  time: string;
  summary?: string;
  link: string;
}

// Image on hover on Title with help of framer motion and useRef
const MovingImage = ({
  title,
  img,
  link,
}: {
  title: string;
  img: string | StaticImageData;
  link: string;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imageRef = useRef(null);

  function handleMouse(event) {
    // console.log(event.pageX);
    imageRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }
  function handleMouseLeave(event) {
    // console.log(event.pageX);
    imageRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        ref={imageRef}
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        src={img}
        alt={title}
        className="w-96 z-10 h-auto hidden absolute rounded-lg
        md:!hidden"
      />
    </Link>
  );
};

const Article: React.FC<FeaturedArticleProps> = ({
  img,
  title,
  link,
  time,
}) => {
  return (
    <motion.li
      className="relative w-full p-4 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:text-light dark:bg-dark
      sm:flex-col"
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
    >
      <MovingImage link={link} title={title} img={img} />
      <span className="text-primary dark:text-primaryDark font-semibold pl-4
      sm:self-start sm:pl-0 xs:text-sm">{time}</span>
    </motion.li>
  );
};

const FeaturedArticle: React.FC<FeaturedArticleProps> = ({
  img,
  title,
  time,
  summary,
  link,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20% 0% -20% 0%" });
  return (
    <motion.li
      className="col-span-1 w-full p-4 bg-light border border-solid border-dark dark:bg-dark dark:border-light rounded-2xl relative"
      initial={{ opacity: 0, y: -50 }}
      ref={ref}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="absolute -bottom-4 -right-4 -z-10 w-[101%] h-[103%] rounded-[2.5rem] rounded-br-3xl bg-dark dark:bg-light"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg inline-block"
      >
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
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize hover:underline text-2xl font-bold my-2 mt-4
        xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary dark:text-primaryDark font-semibold">
        {time}
      </span>
    </motion.li>
  );
};

const Articles = () => {
  return (
    <>
      <Head>
        <title>Aman | About Page</title>
        <meta name="description" content="my description" />
      </Head>

      <main className="w-full mb-16 dark:text-light flex flex-col justify-center items-center overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText
            text={"Words Can Change The World!"}
            className="mb-16 
            lg:!text-7xl sm:!text-6xl xs:!text-4xl"
          />
          <ul
            className="grid grid-cols-2 gap-16
           md:grid-cols-1 lg:gap-8 md:gap-y-16"
          >
            <FeaturedArticle
              title={
                "Build A Custom Pagination Component In Reactjs From Scratch"
              }
              summary="Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              time="9 min read"
              img={article1}
              link="/"
            />
            <FeaturedArticle
              title={
                "Build A Custom Pagination Component In Reactjs From Scratch"
              }
              summary="Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              time="9 min read"
              img={article2}
              link="/"
            />
          </ul>

          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Articles
          </h2>
          <ul>
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling
"
              img={article4}
              time="December 21, 2024"
              link="/"
            />
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling
"
              img={article3}
              time="December 21, 2024"
              link="/"
            />
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling
"
              img={article4}
              time="December 21, 2024"
              link="/"
            />
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling
"
              img={article3}
              time="December 21, 2024"
              link="/"
            />
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling
"
              img={article3}
              time="December 21, 2024"
              link="/"
            />
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling
"
              img={article3}
              time="December 21, 2024"
              link="/"
            />
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling
"
              img={article3}
              time="December 21, 2024"
              link="/"
            />
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling
"
              img={article3}
              time="December 21, 2024"
              link="/"
            />
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling
"
              img={article3}
              time="December 21, 2024"
              link="/"
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default Articles;
