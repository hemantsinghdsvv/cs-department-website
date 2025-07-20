// components/SearchBar.js

export default function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <input
      type="text"
      placeholder="Search by name, roll, interests..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="w-full border border-gray-300 rounded px-4 py-2 mb-4"
    />
  );
}
