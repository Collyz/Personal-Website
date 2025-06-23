'use client'
import { motion } from 'framer-motion';

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: .7, duration: 1.8, ease: "easeOut" }}
      className="flex justify-center items-center p-4 py-24"
    >
      <ul className="flex gap-6 text-lg">
        <li><a href="/" className="hover:underline">Home</a></li>
        <li><a href="/experience" className="hover:underline">Experience</a></li>
        <li><a href="/projects" className="hover:underline">Projects</a></li>
        <li><a href="/resume" className="hover:underline">Resume</a></li>
      </ul>
    </motion.nav>
  );
}
