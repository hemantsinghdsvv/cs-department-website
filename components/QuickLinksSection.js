// components/QuickLinksSection.js

import Link from "next/link";
import { CalendarIcon, DocumentTextIcon, AcademicCapIcon, UsersIcon } from "@heroicons/react/outline";

const quickLinks = [
  {
    title: "Academic Calendar",
    href: "/utilities/calendar",
    icon: <CalendarIcon className="h-10 w-10 text-blue-900" />,
  },
  {
    title: "Admissions Open",
    href: "/admissions",
    icon: <DocumentTextIcon className="h-10 w-10 text-blue-900" />,
  },
  {
    title: "Placements",
    href: "/placements",
    icon: <AcademicCapIcon className="h-10 w-10 text-blue-900" />,
  },
  {
    title: "Alumni Network",
    href: "/alumni",
    icon: <UsersIcon className="h-10 w-10 text-blue-900" />,
  },
];

export default function QuickLinksSection() {
  return (
    <section className="bg-white py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex space-x-4 overflow-x-auto md:grid md:grid-cols-4 md:gap-4">
          {quickLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="flex flex-col items-center justify-center bg-blue-50 hover:bg-blue-100 text-blue-900 rounded p-4 shadow transition min-w-[140px] md:min-w-0"
            >
              {link.icon}
              <span className="mt-2 text-sm md:text-base font-medium text-center">{link.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
