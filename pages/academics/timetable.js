// pages/academics/timetable.js

import Head from "next/head";
import Link from "next/link";

export default function TimetablePage() {
  return (
    <>
      <Head>
        <title>Time Table | Department of Computer Science</title>
      </Head>

      <main className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold text-[#003366] mb-4">
          Class Time Table
        </h1>
        <p className="mb-6 text-gray-700 max-w-2xl">
          Below are the academic timetables for the current semester for undergraduate, postgraduate, and PhD courses.
          Please check regularly for updates.
        </p>

        {/* UG Timetable */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#003366] mb-2">Undergraduate (UG) Timetable</h2>
          <div className="border rounded p-4 bg-gray-50">
            <p className="mb-2 text-gray-700">Download the UG timetable for the current semester:</p>
            <Link
              href="/docs/ug-timetable.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#003366] text-white px-4 py-2 rounded hover:bg-[#336699] transition"
            >
              Download UG Timetable (PDF)
            </Link>
          </div>
        </section>

        {/* PG Timetable */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#003366] mb-2">Postgraduate (PG) Timetable</h2>
          <div className="border rounded p-4 bg-gray-50">
            <p className="mb-2 text-gray-700">Download the PG timetable for the current semester:</p>
            <Link
              href="/docs/pg-timetable.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#003366] text-white px-4 py-2 rounded hover:bg-[#336699] transition"
            >
              Download PG Timetable (PDF)
            </Link>
          </div>
        </section>

        {/* PhD Timetable */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#003366] mb-2">PhD Coursework Timetable</h2>
          <div className="border rounded p-4 bg-gray-50">
            <p className="mb-2 text-gray-700">Download the PhD coursework timetable for the current semester:</p>
            <Link
              href="/docs/phd-timetable.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#003366] text-white px-4 py-2 rounded hover:bg-[#336699] transition"
            >
              Download PhD Timetable (PDF)
            </Link>
          </div>
        </section>

        <p className="text-sm text-gray-600">
          For any timetable-related queries, please contact the department office at
          <a href="mailto:csoffice@dsvv.ac.in" className="text-[#003366] underline ml-1">csoffice@dsvv.ac.in</a>.
        </p>
      </main>
    </>
  );
}
