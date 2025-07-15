// pages/research/labs.js

import Head from "next/head";

const labs = [
  {
    name: "MCA Lab",
    description:
      "Equipped with high-performance systems for advanced programming, software development, and research projects for MCA students.",
    faculty: "Lab In-charge: Dr. A. Sharma",
  },
  {
    name: "BCA Lab",
    description:
      "Focused on core programming, web development, and project-based learning for BCA students with hands-on practical exposure.",
    faculty: "Lab In-charge: Mr. R. Verma",
  },
  {
    name: "BIT Lab",
    description:
      "Supports BIT students with resources for databases, networking, and foundational computing projects with guided practice.",
    faculty: "Lab In-charge: Ms. S. Gupta",
  },
];

export default function LabsPage() {
  return (
    <>
      <Head>
        <title>Labs | Department of Computer Science</title>
      </Head>

      <main className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold text-[#003366] mb-6">
          Department Labs 
        </h1>
        <p className="text-gray-700 mb-6 max-w-2xl">
          Our department maintains dedicated labs for each program to support effective hands-on learning and research activities.
        </p>

        {/* Highlighted AI Center */}
        <div className="bg-[#003366] text-white rounded p-6 mb-8 shadow hover:shadow-lg transition">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">
            Artificial Intelligence Lab, DSVV
          </h2>
          <p className="text-sm md:text-base">
            Our AI Research & Development Center is dedicated to advancing research in Artificial Intelligence and Machine Learning, focusing on real-world applications in healthcare, education, and industry. The center actively collaborates with students and faculty on innovative projects and organizes AI-focused workshops.
          </p>
        </div>

        {/* Labs Listing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {labs.map((lab, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded shadow-sm p-4 hover:shadow-md transition"
            >
              <h2 className="text-lg font-semibold text-[#003366]">{lab.name}</h2>
              <p className="text-gray-700 mt-2 text-sm">{lab.description}</p>
              <p className="text-sm text-gray-600 mt-1">
                <span className="font-medium text-[#003366]">Faculty:</span> {lab.faculty}
              </p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
