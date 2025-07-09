// components/Sidebar.js

import Link from "next/link";

const announcements = [
  {
    title: "BCA Admissions Deadline Extended",
    date: "July 8, 2025",
    link: "/admissions",
  },
  {
    title: "Workshop on Data Science Tools",
    date: "July 12, 2025",
    link: "/events/data-science-workshop",
  },
  {
    title: "Alumni Meet Scheduled",
    date: "August 1, 2025",
    link: "/events/alumni-meet",
  },
];

export default function Sidebar() {
  return (
    <aside className="bg-white p-4 rounded shadow hover:shadow-md transition">
      <h2 className="text-xl font-semibold text-blue-900 mb-4">Announcements</h2>
      <ul className="space-y-3">
        {announcements.map((item, idx) => (
          <li key={idx}>
            <Link href={item.link} className="block hover:underline">
              <p className="text-sm text-gray-500">{item.date}</p>
              <p className="text-blue-900 font-medium">{item.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
