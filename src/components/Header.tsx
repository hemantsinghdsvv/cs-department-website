"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Mail, Phone, Lock } from "lucide-react";
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
      { name: "Department Profile", href: "/about" },
      { name: "Infrastructure", href: "/infrastructure" },
      { name: "Faculty Directory", href: "/people/faculty" },
      { name: "Staff Directory", href: "/people/staff" },
      { name: "News & Events", href: "/news" },
      { name: "Contact Us", href: "/contact" },
    ],
  },
  {
      name: "Academics",
      children: [
          { name: "Programs & POs", href: "/academics" },
          { name: "Academic Calendar", href: "/academics/calendar" },
          { name: "Time Table", href: "/students/timetables" },
          { name: "Learning Resources", href: "/resources" },
      ]
  },
  {
      name: "Research",
      children: [
          { name: "Overview", href: "/research" },
          { name: "Labs & Centers", href: "/research/labs" },
          { name: "Funded Projects", href: "/research/projects" },
          { name: "Publications & Patents", href: "/research/publications" },
          { name: "Innovation & Startups", href: "/research/innovation" },
      ]
  },
  {
      name: "Students",
      children: [
          { name: "Student Dashboard", href: "/students" },
          { name: "Council & Clubs", href: "/students/clubs" },
          { name: "Achievements", href: "/students/achievements" },
          { name: "Mentoring & Notices", href: "/students/notices" },
          { name: "Alumni Association", href: "/alumni" },
          { name: "Placement Cell", href: "/placements" },
      ]
  },
  {
      name: "IQAC",
      children: [
          { name: "Accreditation Status", href: "/about/naac" },
          { name: "IQAC Cell", href: "/about/iqac" },
          { name: "Feedback System", href: "/about/feedback" },
          { name: "Best Practices", href: "/about/best-practices" },
      ]
  }
];

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [mobileOpenGroup, setMobileOpenGroup] = React.useState<string | null>(null);
  const pathname = usePathname();

  const toggleMobileGroup = (name: string) => {
    setMobileOpenGroup(mobileOpenGroup === name ? null : name);
  };

  return (
    <>
        {/* 1. Top Bar */}
        <div className="w-full bg-slate-900 text-slate-300 py-2 text-xs border-b border-primary/20 relative z-50 hidden md:block">
            <div className="container max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-6">
                    <span className="flex items-center gap-2 hover:text-white transition-colors">
                        <Mail className="h-3.5 w-3.5" /> mca@dsvv.ac.in
                    </span>
                    <span className="flex items-center gap-2 hover:text-white transition-colors">
                        <Phone className="h-3.5 w-3.5" /> +91-9876543210
                    </span>
                </div>
                <div className="flex items-center gap-4">
                     <Link href="/admin/login" className="flex items-center gap-1.5 hover:text-white transition-colors">
                        <Lock className="h-3.5 w-3.5" /> Faculty / Admin Login
                    </Link>
                </div>
            </div>
        </div>

        {/* 2. Main Navigation */}
        <header className="sticky top-0 w-full bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 transition-all duration-300 z-40">
            <div className="container max-w-7xl mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
                
                {/* Logo Section */}
                {/* Logo Section */}
                <div className="flex-shrink-0 flex items-center pr-4 md:pr-8 border-r border-slate-100 mr-2 md:mr-4 h-full">
                    <Link href="/" className="flex items-center gap-2 md:gap-3 group">
                        <img src="/logo.png" alt="DSVV Logo" className="h-8 md:h-10 w-auto drop-shadow-sm group-hover:scale-105 transition-transform duration-300" />
                        <div className="flex flex-col">
                            <span className="text-sm md:text-xl font-bold tracking-tight text-primary font-heading group-hover:text-primary/80 transition-colors leading-tight">
                                Department Of Computer Science
                            </span>
                            <span className="text-[9px] md:text-[10px] font-bold text-accent uppercase tracking-[0.1em] md:tracking-[0.2em] leading-none text-slate-500 hidden sm:block">
                                Dev Sanskriti Vishwavidyalaya
                            </span>
                            <span className="text-[8px] font-bold text-accent uppercase tracking-[0.1em] leading-none text-slate-500 sm:hidden">
                                DSVV, Haridwar
                            </span>
                        </div>
                    </Link>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden xl:flex items-stretch justify-center space-x-1 flex-1 h-full">
                    {navItems.map((item) => (
                        item.children ? (
                            <div key={item.name} className="relative group h-full flex items-center">
                                <button className={cn(
                                    "flex items-center px-3 h-full text-sm font-medium transition-all duration-200 hover:text-primary outline-none focus:text-primary",
                                    pathname?.startsWith(item.href || "") ? "text-primary font-bold" : "text-slate-600"
                                )}>
                                    {item.name}
                                    <ChevronDown className="ml-1 h-3 w-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                                </button>
                                {/* Dropdown */}
                                <div className="absolute left-0 top-full pt-0 w-56 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 ease-out z-[60]">
                                    <div className="bg-white rounded-b-lg shadow-xl ring-1 ring-slate-900/5 p-2 border-t border-slate-100 mt-0">
                                        {item.children.map((child) => (
                                            <Link
                                                key={child.name}
                                                href={child.href}
                                                className="block px-3 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary rounded-md transition-colors"
                                            >
                                                {child.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div key={item.name} className="h-full flex items-center">
                                <Link
                                    href={item.href || "#"}
                                    className={cn(
                                        "flex items-center px-3 h-full text-sm font-medium transition-all duration-200 hover:text-primary",
                                        pathname === item.href ? "text-primary font-bold" : "text-slate-600"
                                    )}
                                >
                                    {item.name}
                                </Link>
                            </div>
                        )
                    ))}
                </nav>

                {/* Right Actions */}
                <div className="hidden md:flex items-center pl-4 lg:pl-8">
                    <Button size="sm" className="bg-accent text-slate-900 hover:bg-accent/90 shadow-md font-bold text-xs uppercase tracking-wide px-6" asChild>
                        <Link href="/admissions">Apply Now</Link>
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex xl:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-primary hover:bg-slate-50 focus:outline-none"
                    >
                        <span className="sr-only">Open main menu</span>
                        {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="xl:hidden border-t border-slate-100 bg-white absolute w-full shadow-lg h-[calc(100vh-5rem)] overflow-y-auto z-50">
                    <nav className="px-4 pt-4 pb-8 space-y-2">
                        {navItems.map((item) => (
                            <div key={item.name}>
                                {item.children ? (
                                    <>
                                        <button
                                            onClick={() => toggleMobileGroup(item.name)}
                                            className="w-full flex items-center justify-between px-3 py-3 text-base font-medium text-slate-700 hover:text-primary hover:bg-slate-50 rounded-md"
                                        >
                                            {item.name}
                                            <ChevronDown className={cn("h-5 w-5 transition-transform", mobileOpenGroup === item.name && "rotate-180")} />
                                        </button>
                                        {mobileOpenGroup === item.name && (
                                            <div className="pl-4 space-y-1 bg-slate-50 rounded-lg mb-2 py-2">
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
                                            pathname === item.href ? "bg-primary/5 text-primary" : "text-slate-700 hover:text-primary hover:bg-slate-50"
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                        <div className="pt-6 mt-4 border-t border-slate-100 space-y-3">
                            <Button className="w-full bg-accent text-slate-900 hover:bg-accent/90" asChild>
                                <Link href="/admissions">Apply Now</Link>
                            </Button>
                            <Button variant="outline" className="w-full" asChild>
                                <Link href="/admin/login">Faculty Login</Link>
                            </Button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    </>
  );
}
