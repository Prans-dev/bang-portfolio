"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-[#D8D7D3]/70 bg-[#F8F7F4]/90 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="text-xl font-bold tracking-tight"
          >
            Eleanor Javier
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="#about"
              className="text-sm transition hover:text-[#536D8A]"
            >
              About
            </Link>

            <Link
              href="#experience"
              className="text-sm transition hover:text-[#536D8A]"
            >
              Experience
            </Link>

            <Link
              href="#contact"
              className="text-sm transition hover:text-[#536D8A]"
            >
              Contact
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <div className="flex w-5 flex-col gap-1.5">
              <span
                className={`block h-0.5 w-full bg-[#171717] transition-transform duration-300 ${
                  menuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />

              <span
                className={`block h-0.5 w-full bg-[#171717] transition-opacity duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />

              <span
                className={`block h-0.5 w-full bg-[#171717] transition-transform duration-300 ${
                  menuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
        {/* Mobile Navigation */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            menuOpen ? "max-h-96 pb-6" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-5 pt-4">
            <Link
              href="#about"
              onClick={closeMenu}
              className="text-lg transition hover:text-[#536D8A]"
            >
              About
            </Link>

            <Link
              href="#experience"
              onClick={closeMenu}
              className="text-lg transition hover:text-[#536D8A]"
            >
              Experience
            </Link>

            <Link
              href="#contact"
              onClick={closeMenu}
              className="text-lg transition hover:text-[#536D8A]"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
