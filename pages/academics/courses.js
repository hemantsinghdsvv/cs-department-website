// pages/academics/courses.js

import Head from "next/head";
import { useState } from "react";

const coursesData = [
  { code: "CS101", name: "Introduction to Programming", credits: 4, category: "UG" },
  { code: "CS201", name: "Data Structures and Algorithms", credits: 4, category: "UG" },
  { code: "CS501", name: "Advanced Machine Learning", credits: 3, category: "PG" },
  { code: "CS601", name: "Research Methodologies", credits: 2, category: "PhD" },
  { code: "CS401", name: "Operating Systems", credits: 4, category: "UG" },
  { code: "CS502", name: "Natural Language Processing", credits: 3, category: "PG" },
];

export default function CoursesPage() {
  const [filter, setFilter] = useState("All");

  const filteredCourses = filter === "All"
    ? coursesData
    : coursesData.filter(course => course.category === filter);

  return (
    <>
      <Head>
        <title>Courses | Department of Computer Science</title>
      </Head>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold text-[#003366] mb-4">Courses Offered</h1>
        <p className="mb-6 text-gray-700 max-w-2xl">
          The department offers a wide range of courses across undergraduate, postgraduate, and doctoral programs, ensuring a strong foundation and advanced research orientation in computer science.
        </p>

        {/* Filters */}
        <div className="flex space-x-2 mb-4">
          {["All", "UG", "PG", "PhD"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1 rounded border ${
                filter === cat
                  ? "bg-[#003366] text-white"
                  : "bg-white text-[#003366] border-[#003366]"
              } hover:bg-[#336699] hover:text-white transition`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Courses Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-[#003366] text-white">
              <tr>
                <th className="text-left px-4 py-2">Course Code</th>
                <th className="text-left px-4 py-2">Course Name</th>
                <th className="text-left px-4 py-2">Credits</th>
                <th className="text-left px-4 py-2">Category</th>
              </tr>
            </thead>
            <tbody>
              {filteredCourses.map((course, idx) => (
                <tr key={idx} className="border-t border-gray-200 hover:bg-gray-50">
                  <td className="px-4 py-2">{course.code}</td>
                  <td className="px-4 py-2">{course.name}</td>
                  <td className="px-4 py-2">{course.credits}</td>
                  <td className="px-4 py-2">{course.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
