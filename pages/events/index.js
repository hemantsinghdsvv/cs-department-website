// pages/events/index.js

import Head from "next/head";
import Link from "next/link";

// Dummy data
const talks = [
  {
    title: "Distinguished Lecture: Advances in Quantum Computing",
    speaker: "Prof. R. Singh",
    date: "July 22, 2025",
    link: "#",
  },
  {
    title: "Guest Talk: Blockchain Technologies",
    speaker: "Mr. S. Gupta",
    date: "August 5, 2025",
    link: "#",
  },
];

const upcomingEvents = [
  {
    title: "AI Workshop for Beginners",
    date: "July 30, 2025",
    description: "A hands-on workshop for students interested in AI basics.",
    link: "#",
  },
  {
    title: "Coding Contest 2025",
    date: "August 10, 2025",
    description: "Department-wide coding challenge for BCA & BSc students.",
    link: "#",
  },
];

const pastEvents = [
  {
    title: "Seminar: Cyber Security Trends",
    date: "June 15, 2025",
    link: "#",
  },
  {
    title: "Annual Alumni Meet",
    date: "May 20, 2025",
    link: "#",
  },
];

export default function Events() {
  return (
    <>
      <Head>
        <title>Events | Department of Computer Science</title>
      </Head>

      <main className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold text-[#003366] mb-6">
          Events
        </h1>
        <p className="text-gray-700 mb-8 max-w-2xl">
          Stay updated with the department’s upcoming events, talks, and past happenings.
        </p>

        {/* Talks */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-[#003366] mb-4">Talks</h2>
          <ul className="space-y-4">
            {talks.map((talk, idx) => (
              <li key={idx} className="border-b pb-4">
                <Link href={talk.link} className="text-lg text-[#003366] font-medium hover:underline">
                  {talk.title}
                </Link>
                <p className="text-sm text-gray-700">
                  Speaker: {talk.speaker} | Date: {talk.date}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Upcoming Events */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-[#003366] mb-4">Upcoming Events</h2>
          <ul className="space-y-4">
            {upcomingEvents.map((event, idx) => (
              <li key={idx} className="border-b pb-4">
                <Link href={event.link} className="text-lg text-[#003366] font-medium hover:underline">
                  {event.title}
                </Link>
                <p className="text-sm text-gray-700">
                  Date: {event.date} | {event.description}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Past Events */}
        <section>
          <h2 className="text-xl font-semibold text-[#003366] mb-4">Past Events</h2>
          <ul className="space-y-4">
            {pastEvents.map((past, idx) => (
              <li key={idx} className="border-b pb-4">
                <Link href={past.link} className="text-lg text-[#003366] font-medium hover:underline">
                  {past.title}
                </Link>
                <p className="text-sm text-gray-700">Date: {past.date}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
