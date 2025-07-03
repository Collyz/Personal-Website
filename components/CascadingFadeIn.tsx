'use client'

import { time } from 'console';
import { motion } from 'framer-motion'; 
import { JSX } from "react";

export default function CascadingFadeIn({ components }: { components: JSX.Element[] }) {
  return (
    <div>
      {components.map((Component, index) => {
        const timedDelay = index * 0.1 + 1.3;
        console.log(timedDelay)
        return (
          <motion.div key={index}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: timedDelay, duration: .8, ease: "easeInOut" }}
            >
            {Component}
          </motion.div>
        );
      })}
    </div>
  );
}