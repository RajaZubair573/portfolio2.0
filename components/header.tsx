"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Case Studies", path: "/case-studies" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/50 backdrop-blur-md border-b border-white/5">
      <nav className="w-[90%] max-w-[1200px] mx-auto flex justify-between items-center py-4">
        {/* Logo */}
        <Link
          href="/"
          className="z-50 relative group"
          onClick={() => setIsOpen(false)}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-orange-500 rounded-full blur opacity-40 group-hover:opacity-70 transition-opacity duration-300" />
          <Image
            src="/svgs/icon.jpg"
            alt="Logo"
            width={40}
            height={40}
            className="relative size-10 hover:rotate border border-white/10"
          />
        </Link>

        {/* Mobile Toggle */}
        <div className="md:hidden z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          ref={menuRef}
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row gap-8 fixed md:relative inset-0 md:inset-auto bg-slate-950/95 md:bg-transparent p-8 md:p-0 transition-all duration-300 ease-in-out z-40 ${
            isOpen ? "h-screen w-screen items-start justify-center pl-10" : "items-center"
          }`}
        >
          {navItems.map((item) => (
            <li key={item.name} className="relative group w-full md:w-auto">
              <Link
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={`font-['Space_Mono'] text-2xl md:text-xs tracking-[0.15em] uppercase transition-colors duration-300 ${
                  pathname === item.path
                    ? "text-orange-500"
                    : "text-slate-400 group-hover:text-slate-100"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}

          <li className="mt-4 md:mt-0">
            <a
              href="/Raja_Zubair_CV.pdf"
              download
              onClick={() => setIsOpen(false)}
              className="font-['Space_Mono'] text-xs tracking-[0.12em] uppercase px-5 py-2.5 bg-slate-900/50 backdrop-blur-sm text-slate-300 border border-slate-100/10 no-underline transition-all duration-300 hover:text-slate-100 hover:border-slate-100/30 hover:bg-slate-800/50 flex items-center gap-2 rounded-sm"
            >
              Resumé
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
