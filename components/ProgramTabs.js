// components/ProgramTabs.js

export default function ProgramTabs({ selected, onSelect }) {
  const programs = ["BCA", "BIT", "MCA"];
  return (
    <div className="flex space-x-4 mb-4">
      {programs.map((program) => (
        <button
          key={program}
          onClick={() => onSelect(program)}
          className={`px-4 py-2 rounded ${
            selected === program ? "bg-[#003366] text-white" : "bg-gray-200 text-gray-700"
          }`}
        >
          {program}
        </button>
      ))}
    </div>
  );
}
