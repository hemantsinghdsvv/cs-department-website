"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Map, ChevronRight, FileText, Users, GraduationCap, Microscope, Building, ShieldCheck, Lock } from "lucide-react";

export default function SitemapPage() {
    const sitemapSections = [
        {
            title: "About Department",
            icon: <Building className="h-5 w-5 text-primary" />,
            links: [
                { name: "Department Profile (About Us)", href: "/about" },
                { name: "Infrastructure & Labs", href: "/infrastructure" },
                { name: "Faculty Directory", href: "/people/faculty" },
                { name: "Staff Directory", href: "/people/staff" },
                { name: "Contact Us", href: "/contact" },
                 // Adding News here for visibility
                { name: "News & Events", href: "/news" },
            ]
        },
        {
            title: "Academics",
            icon: <GraduationCap className="h-5 w-5 text-primary" />,
            links: [
                { name: "Academic Programs", href: "/academics" },
                { name: "Academic Calendar", href: "/academics/calendar" },
                { name: "Class Timetables", href: "/students/timetables" },
                { name: "Learning Resources / Downloads", href: "/resources" },
            ]
        },
        {
            title: "Research & Innovation",
            icon: <Microscope className="h-5 w-5 text-primary" />,
            links: [
                { name: "Research Overview", href: "/research" },
                { name: "Research Labs & Centers", href: "/research/labs" },
                { name: "Funded Projects", href: "/research/projects" },
                { name: "Publications & Patents", href: "/research/publications" },
                { name: "Innovation & Startups", href: "/research/innovation" },
            ]
        },
        {
            title: "Student Support",
            icon: <Users className="h-5 w-5 text-primary" />,
            links: [
                { name: "Student Dashboard", href: "/students" },
                { name: "Student Council & Clubs", href: "/students/clubs" },
                { name: "Achievements (Wall of Fame)", href: "/students/achievements" },
                { name: "Notices & Circulars", href: "/students/notices" },
                { name: "Alumni Association", href: "/alumni" },
                { name: "Training & Placement Cell", href: "/placements" },
            ]
        },
        {
            title: "IQAC & NAAC (Audit)",
            icon: <ShieldCheck className="h-5 w-5 text-primary" />,
            links: [
                { name: "Accreditation Status", href: "/about/naac" },
                { name: "IQAC Cell", href: "#" }, // Placeholder
                { name: "Feedback System", href: "#" }, // Placeholder
                { name: "Best Practices", href: "#" }, // Placeholder
            ]
        },
        {
            title: "Utility & Admin",
            icon: <Lock className="h-5 w-5 text-primary" />,
            links: [
                { name: "Faculty / Admin Login", href: "/admin/login" },
                { name: "Admissions (Apply Now)", href: "/admissions" },
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms of Use", href: "/terms" },
            ]
        }
    ];

    return (
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
            <section className="text-center space-y-4 max-w-3xl mx-auto">
                <Badge className="bg-primary/5 text-primary hover:bg-primary/10 border-none mb-2">Navigation</Badge>
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary">
                    Site <span className="text-accent">Map</span>
                </h1>
                <p className="text-muted-foreground text-lg">
                    Overview of the Department website structure and direct links to all sections.
                </p>
            </section>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sitemapSections.map((section, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow duration-300 border-t-4 border-t-primary">
                        <CardHeader className="pb-4">
                            <CardTitle className="flex items-center gap-3 text-xl font-bold text-slate-800">
                                <div className="p-2 bg-slate-50 rounded-lg">
                                    {section.icon}
                                </div>
                                {section.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-3">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <Link 
                                            href={link.href} 
                                            className="group flex items-center gap-2 text-sm text-slate-600 hover:text-primary transition-colors"
                                        >
                                            <ChevronRight className="h-3 w-3 text-accent opacity-50 group-hover:opacity-100 transition-opacity" />
                                            <span className="group-hover:translate-x-1 transition-transform duration-200">
                                                {link.name}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
