'use client'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const pathname = usePathname();
  // Arrow func with conditional to check input string to add underline styling
  const linkClass = (path: string) => `hover:underline ${pathname === path ? 'underline decoration-2 underline-offset-4' : ''}`;
  
  return (
    <motion.nav
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: .3, duration: .5, ease: "easeOut" }}
      className="flex justify-center items-center p-4 pt-[50px]"
    >
      <ul className="flex gap-6 text-lg">
        <li><Link href="/" className={linkClass('/')}>Home</Link></li>
        <li><Link href="/experience" className={linkClass('/experience')}>Experience</Link></li>
        <li><Link href="/projects" className={linkClass('/projects')}>Projects</Link></li>
        <li><Link href="/resume" className={linkClass('/resume')}>Resume</Link></li>
      </ul>
    </motion.nav>
  );
}
