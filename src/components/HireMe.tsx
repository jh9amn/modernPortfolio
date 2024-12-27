 "use client"
import React from "react";
import { CircularText } from "./Icons";
import Link from "next/link";

const HireMe = () => {
  return (
    <div
      className="fixed md:absolute left-4 bottom-4 flex items-center justify-center overflow-hidden 
    lg:right-2 lg:left-auto lg:top-0 lg:bottom-auto sm:right-0 sm:top-0 sm:left-auto sm:bottom-auto"
    >
      <div className="w-48 h-auto flex items-center justify-center relative md:w-24 lg:w-28">
        <CircularText
          className={"fill-dark animate-spin-slow dark:fill-light"}
        />
        <Link
          href="mailto:amankumar9631400@gmail.com"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md
              border border-solid border-dark w-20 h-20 rounded-full hover:bg-white hover:text-dark transition-all dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
               lg:w-14 lg:h-14 lg:text-[12px]"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
