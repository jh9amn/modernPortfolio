"use client";
import TransitionEffect from "@/components/TransitionEffect";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathName}>
        <TransitionEffect />
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
