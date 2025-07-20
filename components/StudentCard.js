// components/StudentCard.js

import Image from "next/image";

export default function StudentCard({ student }) {
  return (
    <div className="flex items-center space-x-4 border border-gray-200 rounded p-3 bg-white hover:bg-gray-50 transition">
      <Image
        src={student.photoURL || "/default-avatar.png"}
        alt={student.name}
        width={60}
        height={60}
        className="rounded-full object-cover"
      />
      <div>
        <p className="font-semibold text-[#003366]">{student.name}</p>
        <p className="text-sm text-gray-600">{student.roll}</p>
        <p className="text-sm text-gray-600">{student.email}</p>
        <p className="text-xs text-gray-500 italic">{student.interests}</p>
      </div>
    </div>
  );
}
