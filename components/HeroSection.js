// components/HeroSection.js

import Link from "next/link";

export default function HeroSection() {
  return (
   <section className="relative bg-iitb-gray py-16 md:py-24 px-4 text-center">
      <h1 className="text-3xl md:text-5xl font-bold text-iitb-blue font-heading">
        Department of Computer Science
      </h1>
      <p className="text-lg md:text-xl text-gray-700 mt-4 max-w-2xl mx-auto font-body">
        Fostering Innovation, Research, and Excellence in Computing Education
      </p>
      <a
        href="/academics"
        className="mt-6 inline-block bg-iitb-blue text-white px-6 py-3 rounded shadow hover:bg-iitb-lightblue transition font-body"
      >
        Explore Programs
      </a>
    </section>

  );
}
