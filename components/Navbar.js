// components/Navbar.js

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDownIcon, MenuIcon, XIcon } from "@heroicons/react/outline";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [academicsOpen, setAcademicsOpen] = useState(false);
  const [researchOpen, setResearchOpen] = useState(false);
  const [peopleOpen, setPeopleOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Close other dropdowns when one is opened
  const toggleDropdown = (dropdown) => {
    setAcademicsOpen(dropdown === "academics" ? !academicsOpen : false);
    setResearchOpen(dropdown === "research" ? !researchOpen : false);
    setPeopleOpen(dropdown === "people" ? !peopleOpen : false);
  };

  return (
    <nav className="bg-[#003366] text-white relative shadow z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8 py-4">

        {/* Logo + Department Name */}
        <Link href="/" className="flex items-center space-x-3 hover:text-[#FFCC00] transition">
          <Image
            src="/logo.png"
            alt="Department Logo"
            width={64}
            height={64}
            className="h-16 w-auto"
          />
          <span className="text-2xl md:text-2xl font-bold">
            Department of Computer Science
          </span>
        </Link>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {menuOpen ? (
              <XIcon className="h-8 w-8 text-white" />
            ) : (
              <MenuIcon className="h-8 w-8 text-white" />
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center text-md font-medium">
          <Link href="/" className="hover:text-[#FFCC00] transition">Home</Link>
          <Link href="/about" className="hover:text-[#FFCC00] transition">About</Link>

          {/* Academics Dropdown */}
          <div className="relative">
            <button
              className="flex items-center space-x-1 hover:text-[#FFCC00] transition"
              onClick={() => toggleDropdown("academics")}
            >
              <span>Academics</span>
              <ChevronDownIcon className={`h-5 w-5 transform transition ${academicsOpen ? "rotate-180" : ""}`} />
            </button>
            {academicsOpen && (
              <div className="absolute top-full left-0 bg-white text-[#003366] shadow rounded mt-1 w-52 z-50">
                <Link href="/academics/programs" className="block px-4 py-2 hover:bg-gray-100">Programs</Link>
                <Link href="/academics/courses" className="block px-4 py-2 hover:bg-gray-100">Courses</Link>
                <Link href="/academics/timetable" className="block px-4 py-2 hover:bg-gray-100">Timetable</Link>
              </div>
            )}
          </div>

          {/* People Dropdown */}
          <div className="relative">
            <button
              className="flex items-center space-x-1 hover:text-[#FFCC00] transition"
              onClick={() => toggleDropdown("people")}
            >
              <span>People</span>
              <ChevronDownIcon className={`h-5 w-5 transform transition ${peopleOpen ? "rotate-180" : ""}`} />
            </button>
            {peopleOpen && (
              <div className="absolute top-full left-0 bg-white text-[#003366] shadow rounded mt-1 w-52 z-50">
                <Link href="/people/student" className="block px-4 py-2 hover:bg-gray-100">Students</Link>
                <Link href="/people/faculty" className="block px-4 py-2 hover:bg-gray-100">Faculty</Link>
                <Link href="/people/staff" className="block px-4 py-2 hover:bg-gray-100">Staff</Link>
                <Link href="/people/alumni" className="block px-4 py-2 hover:bg-gray-100">Alumni</Link>
              </div>
            )}
          </div>

          {/* Research Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setResearchOpen(true)}
            onMouseLeave={() => setResearchOpen(false)}
          >
            <button className="flex items-center space-x-1 hover:text-[#FFCC00] transition">
              <span>Research</span>
              <ChevronDownIcon className={`h-5 w-5 transform transition ${researchOpen ? "rotate-180" : ""}`} />
            </button>
            {researchOpen && (
              <div className="absolute top-full left-0 bg-white text-[#003366] shadow rounded mt-1 w-52 z-50">
                <Link href="/research/areas" className="block px-4 py-2 hover:bg-gray-100">Areas</Link>
                <Link href="/research/labs" className="block px-4 py-2 hover:bg-gray-100">Labs</Link>
                <Link href="/research/publications" className="block px-4 py-2 hover:bg-gray-100">Publications</Link>
              </div>
            )}
          </div>

          <Link href="/events" className="hover:text-[#FFCC00] transition">Events</Link>
          <Link href="/contact" className="hover:text-[#FFCC00] transition">Contact</Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#003366] px-4 pb-4 space-y-2 text-lg font-medium">
          <Link href="/" className="block hover:text-[#FFCC00] transition">Home</Link>
          <Link href="/about" className="block hover:text-[#FFCC00] transition">About</Link>

          {/* Academics collapsible */}
          <div>
            <button
              className="flex justify-between w-full hover:text-[#FFCC00] transition"
              onClick={() => setAcademicsOpen(!academicsOpen)}
            >
              <span>Academics</span>
              <ChevronDownIcon className={`h-5 w-5 transform ${academicsOpen ? "rotate-180" : ""}`} />
            </button>
            {academicsOpen && (
              <div className="pl-4 mt-1 space-y-1">
                <Link href="/academics/programs" className="block hover:text-[#FFCC00] transition">Programs</Link>
                <Link href="/academics/courses" className="block hover:text-[#FFCC00] transition">Courses</Link>
                <Link href="/academics/timetable" className="block hover:text-[#FFCC00] transition">Timetable</Link>
              </div>
            )}
          </div>

          {/* People collapsible */}
          <div>
            <button
              className="flex justify-between w-full hover:text-[#FFCC00] transition"
              onClick={() => setPeopleOpen(!peopleOpen)}
            >
              <span>People</span>
              <ChevronDownIcon className={`h-5 w-5 transform ${peopleOpen ? "rotate-180" : ""}`} />
            </button>
            {peopleOpen && (
              <div className="pl-4 mt-1 space-y-1">
                <Link href="/people/students" className="block hover:text-[#FFCC00] transition">Students</Link>
                <Link href="/people/faculty" className="block hover:text-[#FFCC00] transition">Faculty</Link>
                <Link href="/people/staff" className="block hover:text-[#FFCC00] transition">Staff</Link>
                <Link href="/people/alumni" className="block hover:text-[#FFCC00] transition">Alumni</Link>
              </div>
            )}
          </div>

          {/* Research collapsible */}
          <div>
            <button
              className="flex justify-between w-full hover:text-[#FFCC00] transition"
              onClick={() => setResearchOpen(!researchOpen)}
            >
              <span>Research</span>
              <ChevronDownIcon className={`h-5 w-5 transform ${researchOpen ? "rotate-180" : ""}`} />
            </button>
            {researchOpen && (
              <div className="pl-4 mt-1 space-y-1">
                <Link href="/research/areas" className="block hover:text-[#FFCC00] transition">Areas</Link>
                <Link href="/research/labs" className="block hover:text-[#FFCC00] transition">Labs</Link>
                <Link href="/research/publications" className="block hover:text-[#FFCC00] transition">Publications</Link>
              </div>
            )}
          </div>

          <Link href="/events" className="block hover:text-[#FFCC00] transition">Events</Link>
          <Link href="/contact" className="block hover:text-[#FFCC00] transition">Contact</Link>
        </div>
      )}
    </nav>
  );
}
