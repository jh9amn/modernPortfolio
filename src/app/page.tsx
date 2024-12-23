"use client";

import Layout from "@/components/Layout";
import Image from "next/image";
import profilePic from "./../../public/images/profile/developer-pic-1.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import lightBulb from "./../../public/images/svgs/miscellaneous_icons_1.svg";
import AnimationTmeplate from "@/components/AnimationTmeplate";

export default function Home() {
  return (
    <AnimationTmeplate>
      <main className="text-dark dark:text-light flex items-center w-full min-h-screen 2xl:d">
        <Layout className="pt-0">
          <div className="flex item-center justify-between w-full">
            <div className="w-1/2">
              <Image
                src={profilePic}
                alt="aman_kumar_jha"
                className="w-full h-auto"
                priority
                sizes="(max-width : 768px) 100vw,
                        (max-width: 1200px) 50vw,
                          50vw"
              ></Image>
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText
                text={"Turning Vision Into Reality With Code And Design."}
                className="!text-6xl !text-left"
              />
              <p className="my-4 text-sm font-medium">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
              <div className="flex items-center self-start mt-2 gap-4">
                <Link
                  href={"/dummy.pdf"}
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 rounded-lg px-6 text-lg font-semibold hover:bg-light hover:text-dark
              border-2 border-solid border-transparent hover:border-dark transition-all dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light"
                >
                  Resume
                  <LinkArrow className={"w-6 ml-1"} />{" "}
                </Link>
                <Link
                  href="mailto:amankumar9631400@gmail.com"
                  className="underline ml-4 capitalize text-lg font-medium dark:text-light"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />

        <div className="absolute bottom-8 right-8 inline-block w-20">
          <Image src={lightBulb} alt="idea_icon" className="w-full h-auto" />
        </div>
      </main>
    </AnimationTmeplate>
  );
}
