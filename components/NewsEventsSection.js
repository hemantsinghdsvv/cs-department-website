// components/NewsEventsSection.js

import Link from "next/link";

const newsEvents = [
  {
    title: "AI Workshop for Undergraduate Students",
    date: "July 10, 2025",
    description: "A hands-on workshop on AI applications and tools for undergraduate students.",
    link: "/events/ai-workshop",
  },
  {
    title: "Admissions Open for BCA & B.Sc. IT",
    date: "July 5, 2025",
    description: "Apply now for our industry-aligned Computer Science undergraduate programs.",
    link: "/admissions",
  },
  {
    title: "Seminar on Quantum Computing",
    date: "July 18, 2025",
    description: "Guest lecture by Dr. Raghav on advancements in Quantum Computing research.",
    link: "/events/quantum-computing",
  },
];

export default function NewsEventsSection() {
  return (
    <section className="bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-academicBlue border-b-2 border-lightGray pb-2 mb-4">
  News & Events
</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {newsEvents.map((item, idx) => (
            <Link
              key={idx}
              href={item.link}
              className="bg-white p-4 rounded border border-lightGray hover:bg-lightGray transition"
            >
              <div>
                <p className="text-sm text-gray-500">{item.date}</p>
                <h3 className="text-lg font-semibold text-blue-900 mt-1">{item.title}</h3>
                <p className="text-sm text-gray-700 mt-2">{item.description}</p>
              </div>
              <span className="text-blue-700 mt-4 text-sm hover:underline">Read more →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
