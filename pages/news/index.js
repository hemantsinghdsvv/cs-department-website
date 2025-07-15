// pages/news/index.js

import Head from "next/head";
import Link from "next/link";

// Dummy News Data
const newsItems = [
  {
    title: "Department secures DST grant for AI Research",
    date: "July 12, 2025",
    description:
      "Our department has received a prestigious grant from the Department of Science and Technology for research in Artificial Intelligence applications in healthcare.",
    link: "#",
  },
  {
    title: "Faculty member receives Best Paper Award",
    date: "June 28, 2025",
    description:
      "Dr. A. Sharma received the Best Paper Award at the International Conference on Machine Learning and Applications for his work on Federated Learning.",
    link: "#",
  },
  {
    title: "Hackathon 2025 winners announced",
    date: "June 15, 2025",
    description:
      "Congratulations to the student team for winning the DSVV Tech Hackathon 2025 with their innovative project on disaster management using IoT.",
    link: "#",
  },
];

export default function NewsPage() {
  return (
    <>
      <Head>
        <title>News | Department of Computer Science</title>
      </Head>

      <main className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold text-[#003366] mb-6">
          News
        </h1>
        <p className="text-gray-700 mb-6 max-w-2xl">
          Stay updated with the latest news and announcements from the Department of Computer Science.
        </p>

        <div className="space-y-4">
          {newsItems.map((news, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded p-4 hover:shadow-md transition"
            >
              <p className="text-sm text-gray-500">{news.date}</p>
              <h2 className="text-lg font-semibold text-[#003366] mt-1">
                {news.title}
              </h2>
              <p className="text-gray-700 mt-2 text-sm">{news.description}</p>
              <Link
                href={news.link}
                className="inline-block mt-2 text-sm text-[#336699] hover:underline"
              >
                Read more →
              </Link>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
