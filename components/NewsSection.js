// components/NewsSection.js

import Link from "next/link";

// Utility to check if a date is within the last N days
function isNew(dateString, days = 7) {
  const today = new Date();
  const newsDate = new Date(dateString);
  const diffTime = today - newsDate;
  const diffDays = diffTime / (1000 * 60 * 60 * 24);
  return diffDays <= days && diffDays >= 0;
}

// Dummy announcements with ISO dates for consistency
const announcements = [
  { title: "BCA Admissions Deadline Extended", date: "2025-07-08", link: "/admissions" },
  { title: "Workshop on Data Science Tools", date: "2025-07-15", link: "/events/data-science-workshop" },
  { title: "Annual Alumni Meet Announced", date: "2025-08-01", link: "/events/alumni-meet" },
  { title: "New AI Research Center Inaugurated", date: "2025-07-25", link: "/research/ai-center" },
  { title: "Hackathon 2025 Registrations Open", date: "2025-07-30", link: "/events/hackathon-2025" },
  { title: "Faculty Receives Best Paper Award", date: "2025-07-18", link: "/research/publications" },
  { title: "Guest Lecture: Future of Blockchain", date: "2025-08-05", link: "/events/blockchain-talk" },
  { title: "Semester Exams Timetable Released", date: "2025-07-28", link: "/academics/timetable" },
  { title: "Orientation Program for Freshers", date: "2025-08-10", link: "/events/orientation" },
  { title: "Placements 2025 Drive Begins", date: "2025-08-15", link: "/placements" },
];

export default function NewsSection() {
  return (
    <aside className="bg-white p-4 border border-gray-200 rounded shadow-sm">
      <h2 className="text-lg font-semibold text-[#003366] border-b border-gray-300 pb-2 mb-4">
        News & Announcements
      </h2>
      <ul className="space-y-3">
        {announcements.map((item, idx) => (
          <li key={idx} className="border-b border-gray-200 pb-3 last:border-b-0">
            <Link href={item.link} className="block hover:bg-gray-50 rounded px-2 py-1 transition">
              <p className="text-xs text-gray-500">
                {new Date(item.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
              <p className="text-sm text-[#003366] font-medium flex items-center flex-wrap">
                {item.title}
                {isNew(item.date) && (
                  <span className="ml-2 mt-1 px-2 py-0.5 text-xs font-semibold bg-yellow-100 text-yellow-800 rounded">
                    NEW
                  </span>
                )}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
