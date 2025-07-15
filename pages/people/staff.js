// pages/people/staff.js

import Head from "next/head";

const staff = [
  { name: "Mr. R. Mishra", designation: "Lab Assistant" },
  { name: "Ms. P. Gupta", designation: "Department Clerk" },
  { name: "Mr. S. Tiwari", designation: "Technical Assistant" },
];

export default function StaffPage() {
  return (
    <>
      <Head>
        <title>Staff | Department of Computer Science</title>
        <meta name="description" content="Meet our dedicated staff at the Department of Computer Science, DSVV." />
      </Head>

      <main className="max-w-5xl mx-auto py-8 px-4">
        <h1 className="text-2xl md:text-3xl font-semibold text-[#003366] mb-6">
          Staff Members
        </h1>
        <div className="grid gap-4 md:grid-cols-3">
          {staff.map((member, idx) => (
            <div
              key={idx}
              className="bg-white shadow p-4 rounded hover:shadow-md transition"
            >
              <h2 className="font-medium text-[#003366]">{member.name}</h2>
              <p className="text-sm text-gray-700">{member.designation}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
