'use client'

import { motion } from 'framer-motion'; 
import { JSX } from "react";

export default function CascadingFadeIn({ components }: { components: JSX.Element[] }) {
  return (
    <div>
      {components.map((Component, index) => {
        const timedDelay = index * 0.3 + 1.3;
        return (
          <motion.div key={index}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: timedDelay, duration: 1.3, ease: "easeOut" }}
            >
            {Component}
          </motion.div>
        );
      })}
    </div>
  );
}