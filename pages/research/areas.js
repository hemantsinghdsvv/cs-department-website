// pages/research/areas.js

import Head from "next/head";

const researchAreas = [
  {
    title: "Artificial Intelligence and Machine Learning",
    description: "Exploring cutting-edge algorithms, deep learning, and applications in vision, language, and data analysis."
  },
  {
    title: "Data Science and Big Data",
    description: "Focusing on scalable data pipelines, advanced analytics, and visualization for real-world datasets."
  },
  {
    title: "Networks and Security",
    description: "Research on network protocols, cybersecurity, and blockchain technologies."
  },
  {
    title: "Algorithms and Theory",
    description: "Design and analysis of algorithms with a focus on computational complexity and optimization."
  },
  {
    title: "Software Engineering",
    description: "Best practices, agile methods, and automation tools for software development."
  },
  {
    title: "Human-Computer Interaction",
    description: "Designing user-friendly interfaces, accessibility, and usability testing."
  },
];

export default function ResearchAreasPage() {
  return (
    <>
      <Head>
        <title>Research Areas | Department of Computer Science</title>
      </Head>

      <main className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold text-[#003366] mb-6">
          Research Areas
        </h1>

        <p className="text-gray-700 mb-6 max-w-2xl">
          Our department actively engages in diverse research areas to advance knowledge and address real-world challenges through innovative solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {researchAreas.map((area, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded shadow-sm p-4 hover:shadow-md transition"
            >
              <h2 className="text-lg font-semibold text-[#003366] mb-1">{area.title}</h2>
              <p className="text-gray-700 text-sm">{area.description}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
