export default function AnnouncementCard({ title, date, content }) {
  return (
    <div className="border border-gray-200 rounded p-4 shadow-sm bg-white mb-3 hover:shadow-md transition">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-xs text-gray-500 mb-1">{date}</p>
      <p className="text-sm text-gray-700">{content}</p>
    </div>
  );
}
