
const faculty = [
  { name: "Dr. A. Sharma", designation: "Professor", interests: "AI, ML" },
  { name: "Dr. B. Verma", designation: "Associate Professor", interests: "Networks, Security" },
  { name: "Ms. C. Gupta", designation: "Assistant Professor", interests: "Web Technologies" },
];

export default function People() {
  return (
    <>
    
      <main className="max-w-5xl mx-auto py-8 px-4">
        <h1 className="text-2xl font-bold text-blue-900 mb-6">Faculty Members</h1>
        <div className="grid gap-4 md:grid-cols-3">
          {faculty.map((f, idx) => (
            <div key={idx} className="bg-white shadow p-4 rounded hover:shadow-md transition">
              <h2 className="font-semibold text-blue-800">{f.name}</h2>
              <div className="text-sm text-gray-600">{f.designation}</div>
              <div className="text-gray-700 text-sm">Research: {f.interests}</div>
            </div>
          ))}
        </div>
      </main>
   
    </>
  );
}
