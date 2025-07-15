// pages/people/students.js

import Head from "next/head";

const students = [
  {
    name: "Amit Sharma",
    degree: "PhD",
    advisor: "Dr. B. Verma",
    research: "Machine Learning for Healthcare",
  },
  {
    name: "Priya Gupta",
    degree: "MCA",
    advisor: "Dr. A. Sharma",
    research: "Blockchain Applications",
  },
  {
    name: "Rahul Mehta",
    degree: "BCA",
    advisor: "Ms. C. Gupta",
    research: "Web Accessibility",
  },
  // Add more students as needed
];

export default function StudentsPage() {
  return (
    <>
      <Head>
        <title>Students | Department of Computer Science</title>
      </Head>

      <main className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold text-[#003366] mb-6">
          Current Students
        </h1>

        <p className="text-gray-700 mb-6 max-w-2xl">
          Our department nurtures a vibrant student community actively engaged in research and project development across cutting-edge domains in Computer Science.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {students.map((student, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded shadow-sm p-4 hover:shadow-md transition"
            >
              <h2 className="text-lg font-semibold text-[#003366]">{student.name}</h2>
              <p className="text-gray-700 text-sm">{student.degree} Student</p>
              <p className="text-gray-700 text-sm">
                <strong>Advisor:</strong> {student.advisor}
              </p>
              <p className="text-gray-700 text-sm">
                <strong>Research:</strong> {student.research}
              </p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
