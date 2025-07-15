// pages/academics/programs.js

import Head from "next/head";

const programs = [
  {
    name: "BCA (Honors)",
    duration: "4 Years",
    eligibility: "10+2 with Mathematics, 50% marks",
    seats: "30",
  },
  {
    name: "B.Sc. IT (Honors)",
    duration: "4 Years",
    eligibility: "10+2 with Mathematics, 50% marks",
    seats: "30",
  },
  {
    name: "M.Sc. Computer Science",
    duration: "2 Years",
    eligibility: "Graduation in CS/IT or related fields, 50% marks",
    seats: "20",
  },
];

export default function ProgramsPage() {
  return (
    <>
      <Head>
        <title>Programs | Department of Computer Science</title>
        <meta name="description" content="Programs offered by the Department of Computer Science, DSVV" />
      </Head>

      <section className="max-w-5xl mx-auto py-8 px-4">
        <h1 className="text-2xl md:text-3xl font-semibold text-[#003366] mb-6">
          Programs Offered
        </h1>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-[#003366] text-white">
              <tr>
                <th className="text-left p-3">Program</th>
                <th className="text-left p-3">Duration</th>
                <th className="text-left p-3">Eligibility</th>
                <th className="text-left p-3">Seats</th>
              </tr>
            </thead>
            <tbody>
              {programs.map((prog, idx) => (
                <tr key={idx} className="border-t border-gray-200 hover:bg-gray-50">
                  <td className="p-3">{prog.name}</td>
                  <td className="p-3">{prog.duration}</td>
                  <td className="p-3">{prog.eligibility}</td>
                  <td className="p-3">{prog.seats}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
