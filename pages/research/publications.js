// pages/research/publications.js

import Head from "next/head";

const publications = [
  {
    title: "Deep Learning Techniques for Image Recognition",
    authors: "Dr. A. Sharma, R. Verma",
    year: "2024",
    journal: "Journal of AI Research",
    link: "#",
  },
  {
    title: "Secure Communication in IoT Networks",
    authors: "Dr. B. Verma, S. Gupta",
    year: "2023",
    journal: "IEEE Transactions on Networking",
    link: "#",
  },
  {
    title: "Optimizing Web Applications using Edge Computing",
    authors: "Ms. C. Gupta",
    year: "2024",
    journal: "International Journal of Computer Applications",
    link: "#",
  },
];

export default function PublicationsPage() {
  return (
    <>
      <Head>
        <title>Publications | Department of Computer Science</title>
      </Head>

      <main className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold text-[#003366] mb-6">
          Publications
        </h1>
        <p className="text-gray-700 mb-6 max-w-2xl">
          Our faculty and students actively publish in top-tier journals and conferences, contributing to the advancement of research in Computer Science.
        </p>

        <div className="space-y-4">
          {publications.map((pub, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded p-4 hover:shadow-md transition"
            >
              <h2 className="text-lg font-semibold text-[#003366]">
                {pub.title}
              </h2>
              <p className="text-sm text-gray-700 mt-1">
                <span className="font-medium text-[#003366]">Authors:</span> {pub.authors}
              </p>
              <p className="text-sm text-gray-700 mt-1">
                <span className="font-medium text-[#003366]">Year:</span> {pub.year} &nbsp; | &nbsp;
                <span className="font-medium text-[#003366]">Journal:</span> {pub.journal}
              </p>
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-sm text-[#336699] hover:underline"
              >
                View Publication →
              </a>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
