// components/Footer.js

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-6 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Institute Details */}
        <div>
          <h3 className="text-lg font-semibold">Department of Computer Science</h3>
          <p className="text-sm text-gray-300 mt-1">
            Your University, Haridwar, Uttarakhand - 249411
          </p>
          <p className="text-sm text-gray-300 mt-1">
            Email: <a href="mailto:csdept@youruniversity.ac.in" className="hover:underline">csdept@youruniversity.ac.in</a>
          </p>
          <p className="text-sm text-gray-300 mt-1">
            Phone: +91-XXXXXXXXXX
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col md:items-end">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-1">
            <li>
              <Link href="/admissions" className="text-sm hover:underline hover:text-gray-100">Admissions</Link>
            </li>
            <li>
              <Link href="/placements" className="text-sm hover:underline hover:text-gray-100">Placements</Link>
            </li>
            <li>
              <Link href="/alumni" className="text-sm hover:underline hover:text-gray-100">Alumni</Link>
            </li>
            <li>
              <Link href="/contact" className="text-sm hover:underline hover:text-gray-100">Contact</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-gray-400 mt-4">
        © 2025 Your University. All rights reserved.
      </div>
    </footer>
  );
}
