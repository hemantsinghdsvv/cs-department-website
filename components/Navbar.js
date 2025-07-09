// components/Navbar.js

import Link from "next/link";
import { useState } from "react";
import { ChevronDownIcon, MenuIcon, XIcon } from "@heroicons/react/outline";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [academicsOpen, setAcademicsOpen] = useState(false);
  const [researchOpen, setResearchOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-blue-900 text-white relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8 py-3">
        {/* Logo/Brand */}
        <Link href="/" className="text-lg font-semibold">
          Department of Computer Science
        </Link>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? (
              <XIcon className="h-6 w-6 text-white" />
            ) : (
              <MenuIcon className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="hover:text-gray-200">Home</Link>
          <Link href="/about" className="hover:text-gray-200">About</Link>
          <Link href="/people" className="hover:text-gray-200">People</Link>

          {/* Academics Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setAcademicsOpen(true)}
            onMouseLeave={() => setAcademicsOpen(false)}
          >
            <button className="flex items-center space-x-1 hover:text-gray-200">
              <span>Academics</span>
              <ChevronDownIcon className="h-4 w-4" />
            </button>
            {academicsOpen && (
              <div className="absolute top-full left-0 bg-white text-blue-900 shadow rounded mt-1 w-40 z-10">
                <Link href="/academics" className="block px-4 py-2 hover:bg-gray-100">Programs</Link>
                <Link href="/academics#syllabus" className="block px-4 py-2 hover:bg-gray-100">Syllabus</Link>
              </div>
            )}
          </div>

          {/* Research Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setResearchOpen(true)}
            onMouseLeave={() => setResearchOpen(false)}
          >
            <button className="flex items-center space-x-1 hover:text-gray-200">
              <span>Research</span>
              <ChevronDownIcon className="h-4 w-4" />
            </button>
            {researchOpen && (
              <div className="absolute top-full left-0 bg-white text-blue-900 shadow rounded mt-1 w-40 z-10">
                <Link href="/research" className="block px-4 py-2 hover:bg-gray-100">Labs</Link>
                <Link href="/research#publications" className="block px-4 py-2 hover:bg-gray-100">Publications</Link>
              </div>
            )}
          </div>

          <Link href="/events" className="hover:text-gray-200">Events</Link>
          <Link href="/contact" className="hover:text-gray-200">Contact</Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-800 px-4 pb-4 space-y-2">
          <Link href="/" className="block hover:text-gray-200">Home</Link>
          <Link href="/about" className="block hover:text-gray-200">About</Link>
          <Link href="/people" className="block hover:text-gray-200">People</Link>

          {/* Academics collapsible */}
          <div>
            <button
              className="flex justify-between w-full hover:text-gray-200"
              onClick={() => setAcademicsOpen(!academicsOpen)}
            >
              <span>Academics</span>
              <ChevronDownIcon className={`h-4 w-4 transform ${academicsOpen ? "rotate-180" : ""}`} />
            </button>
            {academicsOpen && (
              <div className="pl-4 mt-1 space-y-1">
                <Link href="/academics" className="block hover:text-gray-200">Programs</Link>
                <Link href="/academics#syllabus" className="block hover:text-gray-200">Syllabus</Link>
              </div>
            )}
          </div>

          {/* Research collapsible */}
          <div>
            <button
              className="flex justify-between w-full hover:text-gray-200"
              onClick={() => setResearchOpen(!researchOpen)}
            >
              <span>Research</span>
              <ChevronDownIcon className={`h-4 w-4 transform ${researchOpen ? "rotate-180" : ""}`} />
            </button>
            {researchOpen && (
              <div className="pl-4 mt-1 space-y-1">
                <Link href="/research" className="block hover:text-gray-200">Labs</Link>
                <Link href="/research#publications" className="block hover:text-gray-200">Publications</Link>
              </div>
            )}
          </div>

          <Link href="/events" className="block hover:text-gray-200">Events</Link>
          <Link href="/contact" className="block hover:text-gray-200">Contact</Link>
        </div>
      )}
    </nav>
  );
}
