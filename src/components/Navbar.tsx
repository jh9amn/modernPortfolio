"use client";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  TwitterIcon,
} from "./Icons";
import { motion } from "framer-motion";

interface CustomLinkProps {
  href: string;
  title: string;
  className?: string | undefined;
}

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
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar: React.FC = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink href="/" title={"Home"} className="mr-4" />
        <CustomLink href="/about" title={"About"} className="mx-4" />
        <CustomLink href="/products" title={"Projects"} className="mx-4" />
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
          className="w-6 mx-3"
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
          className="w-6 mx-3"
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
      </nav>

      <div className="absolute left-[50%] top-2 translate-x-[-50]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
