"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface NavItem {
  name: string;
  href?: string;
  children?: { name: string; href: string }[];
}

export const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  {
    name: "About",
    children: [
      { name: "Department", href: "/about" }, // Changed href to /about, clearer name
      { name: "News & Events", href: "/news" },
      { name: "NAAC Accreditation", href: "/about/naac" },
    ],
  },
  {
      name: "Academics",
      children: [
          { name: "Programs", href: "/academics" },
          { name: "Academic Calendar", href: "/academics/calendar" },
          { name: "Resources", href: "/resources" },
      ]
  },
  {
      name: "Research",
      children: [
          { name: "Overview", href: "/research" },
          { name: "Labs & Centers", href: "/research/labs" },
          { name: "Projects", href: "/research/projects" },
          { name: "Publications", href: "/research/publications" },
          { name: "Innovation", href: "/research/innovation" },
      ]
  },
  {
      name: "People",
      children: [
          { name: "Faculty Directory", href: "/people/faculty" },
          { name: "Staff", href: "/people/staff" }, // Shortened name
          { name: "Students Directory", href: "/people/students" },
          { name: "Alumni", href: "/alumni" },
      ]
  },
  {
      name: "Students Zone", // Renamed for clarity vs People->Students
      children: [
          { name: "Dashboard", href: "/students" },
          { name: "Timetable", href: "/students/timetables" },
          { name: "Notices", href: "/students/notices" },
          { name: "Societies & Clubs", href: "/students/clubs" },
          { name: "Wall of Fame", href: "/students/achievements" },
      ]
  },
  { name: "Placements", href: "/placements" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [mobileOpenGroup, setMobileOpenGroup] = React.useState<string | null>(null);
  const pathname = usePathname();

  const toggleMobileGroup = (name: string) => {
    setMobileOpenGroup(mobileOpenGroup === name ? null : name);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm transition-all duration-300">
      <div className="container max-w-7xl mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center">
          <Link href="/" className="flex items-center gap-3 group">
             <img src="/logo.png" alt="DSVV Logo" className="h-12 w-auto" />
             <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-primary font-heading group-hover:text-primary/90 transition-colors">
               Computer Science
              </span>
              <span className="text-[10px] font-bold text-accent uppercase tracking-[0.2em] leading-none">
                Dev Sanskriti Vishwavidyalaya
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-center space-x-1">
            {navItems.map((item) => (
                item.children ? (
                    <div key={item.name} className="relative group">
                         <button className={cn(
                             "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-primary/5 hover:text-primary outline-none focus:bg-primary/5",
                             pathname?.startsWith(item.href || "") ? "text-primary" : "text-slate-600"
                         )}>
                             {item.name}
                             <ChevronDown className="ml-1 h-3 w-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                         </button>
                         {/* Dropdown */}
                         <div className="absolute left-0 top-full pt-2 w-48 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 ease-in-out z-50">
                             <div className="bg-white rounded-lg shadow-xl border border-slate-100 p-2">
                                 {item.children.map((child) => (
                                     <Link
                                        key={child.name}
                                        href={child.href}
                                        className="block px-3 py-2 text-sm text-slate-600 hover:bg-primary/5 hover:text-primary rounded-md transition-colors"
                                     >
                                         {child.name}
                                     </Link>
                                 ))}
                             </div>
                         </div>
                    </div>
                ) : (
                    <Link
                        key={item.name}
                        href={item.href || "#"}
                        className={cn(
                            "px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-primary/5 hover:text-primary",
                            pathname === item.href ? "text-primary bg-primary/5" : "text-slate-600"
                        )}
                    >
                        {item.name}
                    </Link>
                )
            ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" size="sm" className="hidden lg:flex text-slate-600 border-slate-200 hover:border-primary hover:text-primary" asChild>
             <Link href="/admin/login">Login</Link>
          </Button>
          <Button size="sm" className="bg-primary hover:bg-primary/90 text-white shadow-sm font-semibold" asChild>
            <Link href="/admissions">Admissions</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-primary hover:bg-primary/5 focus:outline-none"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white">
          <nav className="px-2 pt-2 pb-6 space-y-1">
            {navItems.map((item) => (
                <div key={item.name}>
                    {item.children ? (
                        <>
                            <button
                                onClick={() => toggleMobileGroup(item.name)}
                                className="w-full flex items-center justify-between px-3 py-3 text-base font-medium text-slate-700 hover:text-primary hover:bg-primary/5 rounded-md"
                            >
                                {item.name}
                                <ChevronDown className={cn("h-5 w-5 transition-transform", mobileOpenGroup === item.name && "rotate-180")} />
                            </button>
                            {mobileOpenGroup === item.name && (
                                <div className="pl-4 space-y-1 bg-slate-50/50 rounded-b-md mb-2">
                                    {item.children.map((child) => (
                                        <Link
                                            key={child.name}
                                            href={child.href}
                                            onClick={() => setIsOpen(false)}
                                            className="block px-3 py-2 text-sm text-slate-600 hover:text-primary rounded-md"
                                        >
                                            {child.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </>
                    ) : (
                        <Link
                            href={item.href || "#"}
                            onClick={() => setIsOpen(false)}
                            className={cn(
                                "block px-3 py-3 text-base font-medium rounded-md",
                                pathname === item.href ? "bg-primary/5 text-primary" : "text-slate-700 hover:text-primary hover:bg-primary/5"
                            )}
                        >
                            {item.name}
                        </Link>
                    )}
                </div>
            ))}
            <div className="pt-6 mt-4 border-t border-primary/10 space-y-3">
                <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                    <Link href="/admissions">Admissions</Link>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                    <Link href="/admin/login">Login as Admin</Link>
                </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
