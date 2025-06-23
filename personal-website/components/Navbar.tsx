'use client'
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';


export function Navbar() {
  const pathname = usePathname();
  // Arrow func with conditional to check input string to add underline styling
  const linkClass = (path: string) => `hover:underline ${pathname === path ? 'underline decoration-2 underline-offset-4' : ''}`;
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: .3, duration: 1.3, ease: "easeOut" }}
      className="flex justify-center items-center p-4 py-24"
    >
      <ul className="flex gap-6 text-lg">
        <li><a href="/" className={linkClass('/')}>Home</a></li>
        <li><a href="/experience" className={linkClass('/experience')}>Experience</a></li>
        <li><a href="/projects" className={linkClass('/projects')}>Projects</a></li>
        <li><a href="/resume" className={linkClass('/resume')}>Resume</a></li>
      </ul>
    </motion.nav>
  );
}
