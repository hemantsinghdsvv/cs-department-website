// pages/admissions.js

import Head from "next/head";
import Link from "next/link";

export default function AdmissionsPage() {
  return (
    <>
      <Head>
        <title>Admissions | Department of Computer Science</title>
      </Head>

      <main className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold text-[#003366] mb-4">
          Admissions
        </h1>

        <p className="mb-6 text-gray-700 max-w-2xl">
          We welcome aspiring students to join our Department of Computer Science at Dev Sanskriti Vishwavidyalaya. Our programs are designed to nurture analytical skills, innovative thinking, and a spirit of service through computing education.
        </p>

        {/* Application Deadlines */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#003366] mb-2">Application Deadlines</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>BCA: Last date to apply – July 20, 2025</li>
            <li>B.Sc. IT: Last date to apply – July 20, 2025</li>
            <li>MCA: Last date to apply – July 31, 2025</li>
          </ul>
        </section>

        {/* How to Apply */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#003366] mb-2">How to Apply</h2>
          <ol className="list-decimal pl-6 text-gray-700 space-y-1">
            <li>Download the application form from the admissions portal or collect it from the university office.</li>
            <li>Fill out the application form with accurate details.</li>
            <li>Attach required documents (mark sheets, ID proof, photos).</li>
            <li>Pay the application fee via online payment or at the accounts office.</li>
            <li>Submit the completed form to the admissions office or upload via the online portal.</li>
          </ol>
        </section>

        {/* Eligibility */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#003366] mb-2">Eligibility Criteria</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li><strong>BCA:</strong> 10+2 with Mathematics, minimum 50% marks.</li>
            <li><strong>B.Sc. IT:</strong> 10+2 with Mathematics/Computer Science, minimum 50% marks.</li>
            <li><strong>MCA:</strong> Bachelor’s degree with Mathematics at 10+2 or Graduation level.</li>
          </ul>
        </section>

        {/* Contact Information */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#003366] mb-2">Contact for Admissions</h2>
          <p className="text-gray-700">
            For any admissions-related queries, please contact:
          </p>
          <p className="mt-2 text-gray-700">
            <strong>Admissions Office</strong><br />
            Department of Computer Science, Dev Sanskriti Vishwavidyalaya<br />
            Email: <a href="mailto:admissions@dsvv.ac.in" className="text-[#003366] underline">admissions@dsvv.ac.in</a><br />
            Phone: +91-XXXXXXXXXX
          </p>
        </section>

        {/* Apply Now Button */}
        <Link
          href="/apply"
          className="inline-block bg-[#003366] text-white px-6 py-3 rounded hover:bg-[#336699] transition"
        >
          Apply Now
        </Link>
      </main>
    </>
  );
}
