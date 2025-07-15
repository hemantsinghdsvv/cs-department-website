// components/EventsSection.js

import Link from "next/link";

// Dummy events data
const events = [
  {
    title: "AI Workshop for Undergraduate Students",
    date: "2025-07-10",
    description: "A hands-on workshop on AI applications and tools for undergraduate students.",
    link: "/events/ai-workshop",
  },
  {
    title: "Admissions Open for BCA & B.Sc. IT",
    date: "2025-07-05",
    description: "Apply now for our industry-aligned Computer Science undergraduate programs.",
    link: "/admissions",
  },
  {
    title: "Seminar on Quantum Computing",
    date: "2025-07-18",
    description: "Guest lecture by Dr. Raghav on advancements in Quantum Computing research.",
    link: "/events/quantum-computing",
  },
];

// Utility to format date into { day, month }
function formatDate(dateString) {
  const options = { month: "short" };
  const dateObj = new Date(dateString);
  const day = dateObj.getDate();
  const month = dateObj.toLocaleDateString("en-US", options).toUpperCase();
  return { day, month };
}

export default function EventsSection() {
  return (
    <section className="bg-[#f5f5f5] py-8">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-[#003366] border-b-2 border-[#003366] pb-2 mb-6">
          Events
        </h2>

        <div className="space-y-4">
          {events.map((event, idx) => {
            const { day, month } = formatDate(event.date);
            return (
              <Link
                key={idx}
                href={event.link}
                className="block bg-white border border-gray-200 hover:bg-gray-50 transition rounded p-4"
              >
                <div className="flex items-start gap-4">
                  {/* Date Box */}
                  <div className="flex flex-col items-center justify-center bg-[#003366] text-white rounded w-16 h-16 flex-shrink-0">
                    <span className="text-lg font-bold leading-tight">{day}</span>
                    <span className="text-xs uppercase tracking-wider">{month}</span>
                  </div>

                  {/* Event Details */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-[#003366]">{event.title}</h3>
                    <p className="text-gray-700 mt-1 text-sm">{event.description}</p>
                    <span className="text-sm text-[#336699] hover:underline mt-1 inline-block">
                      Read more →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
