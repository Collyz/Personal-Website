'use client'

export default function Navbar() {
  return ( 
    <nav className="flex justify-center items-center p-4 py-24">
      <ul className="flex gap-8 text-lg">
        <li><a href="/" className="hover:underline hover:bg-sky-700">Home</a></li>
        <li><a href="/experiences" className="hover:underline hover:bg-sky-700">Experience</a></li>
        <li><a href="/projects" className="hover:underline">Projects</a></li>
        <li><a href="/contact" className="hover:underline">Contact</a></li>
      </ul>
    </nav>
  );
}