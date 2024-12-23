"use client";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  PinterestIcon,
  SunIcon,
  TwitterIcon,
} from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "@/app/hooks/useThemeSwitcher";
import { useRouter } from "next/navigation";

interface CustomLinkProps {
  href?: string;
  title: string;
  className?: string | undefined;
}

// floid underline
const CustomLink: React.FC<CustomLinkProps> = ({
  href,
  title,
  className = "",
}) => {
  const pathname = usePathname(); // Replaces useRouter

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          pathname === href ? "w-full" : "w-0"
        } dark:bg-light `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink: React.FC<CustomLinkProps> = ({
  href,
  title,
  className = "",
  toggle,
}) => {
  const pathname = usePathname(); // Replaces useRouter
  const router = useRouter();

  const handleClick = () => {
    router.push(href);
    toggle();
  };

  return (
    <button
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          pathname === href ? "w-full" : "w-0"
        } dark:bg-dark `}
      >
        &nbsp;
      </span>
    </button>
  );
};

const Navbar: React.FC = () => {
  // for theme switching
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  // this function will operate that the nav button are open or not..
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative">
      {/* {Hemburger menu..} */}

      <button
        className="flex-col justify-between items-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm translate-y-0.5 ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          } `}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title={"Home"} className="mr-4" />
          <CustomLink href="/about" title={"About"} className="mx-4" />
          <CustomLink href="/projects" title={"Projects"} className="mx-4" />
          <CustomLink href="/articles" title={"Articles"} className="ml-4" />
        </nav>

        <nav className="flex flex-wrap items-center justify-center">
          <motion.a
            href="https://www.google.com/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mr-3"
            aria-label="Twitter"
          >
            <TwitterIcon className={""} />
          </motion.a>
          <motion.a
            href="https://www.google.com/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3 bg-light dark:bg-dark rounded-full"
            aria-label="GitHub"
          >
            <GithubIcon className={""} />
          </motion.a>
          <motion.a
            href="/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className={""} />
          </motion.a>
          <motion.a
            href="https://www.google.com/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3 bg-light rounded-full"
            aria-label="Pinterest"
          >
            <PinterestIcon className={""} />
          </motion.a>
          <motion.a
            href="https://www.google.com/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 ml-3"
            aria-label="Dribbble"
          >
            <DribbbleIcon className={""} />
          </motion.a>

          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-4 flex items-center justify-center rounded-full p-1 ${
              mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
            }`}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>

      {/* {For Mobile screen showing navigation buttons} */}
      {isOpen && (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%" }}
          animate={{ scale: 1, opacity: 1, y: "-50%" }}
          // transition={{
          //   duration: 0.2,
          //   ease: "easeInOut",
          // }}
          className="min-w-[70%] flex flex-col z-30   justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink
              href="/"
              title={"Home"}
              className=""
              toggle={handleClick} // when click on this the nav button will close after call of this function
            />
            <CustomMobileLink
              href="/about"
              title={"About"}
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title={"Projects"}
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/articles"
              title={"Articles"}
              className=""
              toggle={handleClick}
            />
          </nav>

          <nav className="flex flex-wrap items-center justify-center mt-2">
            <motion.a
              href="https://www.google.com/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mr-3 sm:mx-1"
              aria-label="Twitter"
            >
              <TwitterIcon className={""} />
            </motion.a>
            <motion.a
              href="https://www.google.com/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 sm:mx-1 bg-light dark:bg-dark rounded-full"
              aria-label="GitHub"
            >
              <GithubIcon className={""} />
            </motion.a>
            <motion.a
              href="/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 sm:mx-1"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className={""} />
            </motion.a>
            <motion.a
              href="https://www.google.com/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 sm:mx-1 bg-light rounded-full"
              aria-label="Pinterest"
            >
              <PinterestIcon className={""} />
            </motion.a>
            <motion.a
              href="https://www.google.com/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 ml-3 sm:mx-1"
              aria-label="Dribbble"
            >
              <DribbbleIcon className={""} />
            </motion.a>

            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`ml-4 flex items-center justify-center rounded-full p-1 ${
                mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
              }`}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </motion.div>
      )}

      <div className="absolute left-[50%] top-2 translate-x-[-50]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
