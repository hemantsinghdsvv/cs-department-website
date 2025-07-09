// components/TopHeaderBar.js

import Image from "next/image";

export default function TopHeaderBar() {
  return (
    <div className="bg-white py-2 px-4 md:px-8 flex flex-wrap md:flex-nowrap items-center justify-between border-b border-gray-200">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Image
          src="/logo.png" // Place your logo in /public/logo.png
          alt="Department Logo"
          width={48}
          height={48}
          className="h-12 w-auto"
        />
        <span className="text-lg font-semibold text-blue-900">
          Department of Computer Science
        </span>
      </div>

      {/* Institute Tagline */}
      <div className="mt-2 md:mt-0 text-sm text-blue-900">
        Dev Sanskriti Viswavidyalaya, Haridwar
      </div>
    </div>
  );
}
