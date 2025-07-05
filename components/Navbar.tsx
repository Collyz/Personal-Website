'use client'
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkClass = (path: string) =>
    `hover:underline ${pathname === path ? 'underline decoration-2 underline-offset-4' : ''}`;

  const navLinks = (
    <>
      <li><Link href="/" className={linkClass('/')} onClick={() => setIsMenuOpen(false)}>Home</Link></li>
      <li><Link href="/experience" className={linkClass('/experience')} onClick={() => setIsMenuOpen(false)}>Experience</Link></li>
      <li><Link href="/projects" className={linkClass('/projects')} onClick={() => setIsMenuOpen(false)}>Projects</Link></li>
      <li><Link href="/resume" className={linkClass('/resume')} onClick={() => setIsMenuOpen(false)}>Resume</Link></li>
      <li>
        <Link
          key={0}
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
      </li>
    </>
  );

  return (
    <nav className="relative flex flex-col items-center">
      {/* Top nav bar */}
      <motion.div
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5, ease: 'easeOut' }}
        className="w-full flex justify-center items-center p-4 pt-[50px] max-w-6xl"
      >
        

        {/* Desktop nav links */}
        <ul className="hidden md:flex gap-6 text-lg">{navLinks}</ul>

        {/* Hamburger icon (mobile only) */}
        <button
          className="absolute left-6 md:hidden p-2 justify-start"
          aria-label="Toggle menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </motion.div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden flex flex-col gap-4 text-lg overflow-hidden w-full px-4 pb-4"
          >
            {navLinks}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
