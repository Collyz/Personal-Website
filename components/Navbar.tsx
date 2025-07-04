'use client'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const pathname = usePathname();
  // Arrow func with conditional to check input string to add underline styling based on what page is routed
  const linkClass = (path: string) => `hover:underline ${pathname === path ? 'underline decoration-2 underline-offset-4' : ''}`;
  
  return (
    <motion.nav
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: .3, duration: .5, ease: "easeOut" }}
      className="flex justify-center items-center p-4 pt-[50px]"
    >
      <ul className="flex gap-4 md:gap-6 lg:gap-8 text-lg">
        <li><Link href="/" className={linkClass('/')}>Home</Link></li>
        <li><Link href="/experience" className={linkClass('/experience')}>Experience</Link></li>
        <li><Link href="/projects" className={linkClass('/projects')}>Projects</Link></li>
        <li><Link href="/resume" className={linkClass('/resume')}>Resume</Link></li>
        {/* <li>
          <Link
            href="https://github.com/Collyz/Personal-Website"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5"
              aria-hidden="true"
            >
              <path d="M12 0C5.37 0 0 5.373 0 12a12 12 0 008.205 11.385c.6.113.82-.26.82-.577 0-.285-.01-1.04-.016-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.086 1.84 1.238 1.84 1.238 1.07 1.832 2.807 1.303 3.492.996.11-.776.418-1.304.76-1.604-2.665-.304-5.467-1.334-5.467-5.932 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.004-.403c1.02.004 2.047.137 3.004.403 2.29-1.553 3.296-1.23 3.296-1.23.655 1.652.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.48 5.922.43.37.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .32.216.694.825.576A12.003 12.003 0 0024 12c0-6.627-5.373-12-12-12z" />
            </svg>
            Source
          </Link>
        </li> */}

      </ul>
    </motion.nav>
  );
}
