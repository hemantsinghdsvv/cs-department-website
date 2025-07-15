// pages/utilities/links.js

import Head from "next/head";
import Link from "next/link";

const facultyLinks = [
  { title: "Faculty Login Portal", url: "#" },
  { title: "Research Project Submission", url: "#" },
  { title: "NAAC Documentation Guidelines", url: "#" },
  { title: "Leave Application Form", url: "#" },
  { title: "Internal Assessment Upload", url: "#" },
];

const studentLinks = [
  { title: "Student Portal", url: "#" },
  { title: "Online Fee Payment", url: "#" },
  { title: "Library Resources", url: "#" },
  { title: "Academic Calendar", url: "#" },
  { title: "Exam Timetable", url: "#" },
  { title: "Scholarship Form", url: "#" },
  { title: "Placement Portal", url: "#" },
];

export default function LinksPage() {
  return (
    <>
      <Head>
        <title>Useful Links | Department of Computer Science</title>
        <meta
          name="description"
          content="Useful links for faculty and students of the Department of Computer Science at DSVV."
        />
      </Head>

      <main className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-[#003366] mb-6 border-b-2 border-[#003366] pb-2">
          Useful Links
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Faculty Links */}
          <div>
            <h2 className="text-xl font-semibold text-[#003366] mb-4">Faculty Links</h2>
            <ul className="space-y-3">
              {facultyLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.url}
                    className="block bg-white border border-gray-200 hover:bg-gray-50 transition rounded p-4 text-[#003366] font-medium"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Student Links */}
          <div>
            <h2 className="text-xl font-semibold text-[#003366] mb-4">Student Links</h2>
            <ul className="space-y-3">
              {studentLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.url}
                    className="block bg-white border border-gray-200 hover:bg-gray-50 transition rounded p-4 text-[#003366] font-medium"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
