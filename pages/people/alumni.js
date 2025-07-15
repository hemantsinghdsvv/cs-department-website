// pages/people/alumni.js

import Head from "next/head";

const alumniData = [
  {
    batch: "BCA 2022",
    alumni: [
      {
        name: "Karan Mehta",
        position: "Software Engineer, TCS",
        email: "karan.mehta@example.com",
      },
      {
        name: "Simran Kaur",
        position: "Data Analyst, Infosys",
        email: "simran.kaur@example.com",
      },
    ],
  },
  {
    batch: "B.Sc. IT 2021",
    alumni: [
      {
        name: "Rohit Sharma",
        position: "Web Developer, StartupX",
        email: "rohit.sharma@example.com",
      },
      {
        name: "Pooja Verma",
        position: "Graduate Studies, IIT Delhi",
        email: "pooja.verma@example.com",
      },
    ],
  },
];

export default function AlumniPage() {
  return (
    <>
      <Head>
        <title>Alumni | Department of Computer Science</title>
        <meta name="description" content="Alumni of the Computer Science Department, DSVV." />
      </Head>

      <section className="max-w-5xl mx-auto py-8 px-4">
        <h1 className="text-2xl md:text-3xl font-semibold text-[#003366] mb-6">
          Alumni
        </h1>

        {alumniData.map((batch, idx) => (
          <div key={idx} className="mb-8">
            <h2 className="text-xl font-semibold text-[#336699] mb-4">{batch.batch}</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {batch.alumni.map((alumnus, i) => (
                <div
                  key={i}
                  className="bg-white rounded shadow p-4 hover:shadow-md transition"
                >
                  <h3 className="font-medium text-[#003366]">{alumnus.name}</h3>
                  <p className="text-sm text-gray-600">{alumnus.position}</p>
                  <a
                    href={`mailto:${alumnus.email}`}
                    className="text-sm text-[#336699] hover:underline break-all"
                  >
                    {alumnus.email}
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
