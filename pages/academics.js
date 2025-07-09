

const programs = [
  {
    name: "B.C.A. (Honors)",
    duration: "4 Years",
    eligibility: "10+2 with Mathematics, at least 50% marks",
    seats: "25",
  },
  {
    name: "B.Sc. IT (Honors)",
    duration: "4 Years",
    eligibility: "10+2 with Mathematics, at least 50% marks",
    seats: "30",
  },
  {
    name: "M.C.A.",
    duration: "2 Years",
    eligibility: "Graduation with Mathematics, entrance as per norms",
    seats: "20",
  },
];

export default function Academics() {
  return (
    <>
   
      <main className="max-w-4xl mx-auto py-8 px-4">
        <h1 className="text-2xl font-bold text-blue-900 mb-6">Academic Programs</h1>
        {programs.map((p, idx) => (
          <div key={idx} className="bg-white p-4 rounded shadow mb-4">
            <h2 className="text-blue-800 font-semibold">{p.name}</h2>
            <p className="text-gray-700">Duration: {p.duration}</p>
            <p className="text-gray-700">Eligibility: {p.eligibility}</p>
            <p className="text-gray-700">Seats: {p.seats}</p>
          </div>
        ))}
      </main>

    </>
  );
}
