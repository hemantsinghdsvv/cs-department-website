// components/EventCard.js
export default function EventCard({ title, date, description }) {
  return (
    <div className="border rounded p-4 shadow hover:shadow-md transition mb-3 bg-white">
      <div className="text-sm text-gray-500">{date}</div>
      <div className="font-semibold text-blue-900">{title}</div>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}
