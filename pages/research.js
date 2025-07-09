
const labs = [
  { name: "AI & ML Lab", description: "Focuses on AI, ML, and Data Science projects." },
  { name: "Networking Lab", description: "Research on networks, IoT, and security." },
];

const publications = [
  { title: "Efficient Algorithms for Data Analysis", author: "Dr. A. Sharma", year: 2024 },
  { title: "Secure IoT Systems", author: "Dr. B. Verma", year: 2023 },
];

export default function Research() {
  return (
    <>
 
      <main className="max-w-5xl mx-auto py-8 px-4">
        <h1 className="text-2xl font-bold text-blue-900 mb-6">Research</h1>

        <h2 className="text-xl font-semibold text-blue-800 mt-4 mb-2">Research Labs</h2>
        {labs.map((lab, idx) => (
          <div key={idx} className="bg-white p-4 rounded shadow mb-3">
            <h3 className="text-blue-700 font-semibold">{lab.name}</h3>
            <p className="text-gray-700">{lab.description}</p>
          </div>
        ))}

        <h2 className="text-xl font-semibold text-blue-800 mt-6 mb-2">Recent Publications</h2>
        {publications.map((pub, idx) => (
          <div key={idx} className="bg-white p-4 rounded shadow mb-3">
            <p className="text-gray-800 font-semibold">{pub.title}</p>
            <p className="text-gray-600 text-sm">Author: {pub.author} | Year: {pub.year}</p>
          </div>
        ))}
      </main>
    
    </>
  );
}
