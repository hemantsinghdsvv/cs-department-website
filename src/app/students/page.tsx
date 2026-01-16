
"use client";

import Link from "next/link";
import { notices, clubs } from "@/lib/data/studentResources";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
    Calendar, 
    BookOpen, 
    Bell, 
    Users, 
    Trophy, 
    FileText, 
    Download, 
    ExternalLink,
    Clock
} from "lucide-react";

export default function StudentZonePage() {
    return (
        <div className="min-h-screen bg-slate-50/50">
            
            {/* Hero Dashboard Header */}
            <header className="bg-slate-900 text-white py-12 md:py-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524178232363-1fb2b075b955?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center opacity-10"></div>
                <div className="container relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                        <div>
                            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-accent mb-2 border border-white/10">
                                <Users className="h-4 w-4" /> Student Zone
                            </div>
                            <h1 className="text-3xl md:text-5xl font-heading font-bold mb-2">
                                Welcome, <span className="text-accent">Innovator</span>
                            </h1>
                            <p className="text-slate-300 max-w-xl">
                                Your central hub for academics, events, and campus life news.
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <Button className="bg-accent text-slate-900 hover:bg-white" asChild>
                                <Link href="/students/timetables">
                                    <Clock className="mr-2 h-4 w-4" /> View Timetable
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
                
                {/* Quick Access Grid */}
                <section>
                    <h2 className="text-xl font-bold font-heading text-slate-900 mb-6 flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-primary" /> Quick Access
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { title: "Timetables", icon: Clock, href: "/students/timetables", color: "text-blue-600 bg-blue-50" },
                            { title: "Notices", icon: Bell, href: "/students/notices", color: "text-amber-600 bg-amber-50" },
                            { title: "Clubs", icon: Users, href: "/students/clubs", color: "text-purple-600 bg-purple-50" },
                            { title: "Achievements", icon: Trophy, href: "/students/achievements", color: "text-green-600 bg-green-50" },
                            { title: "Syllabus", icon: FileText, href: "/resources", color: "text-rose-600 bg-rose-50" },
                            { title: "Results", icon: ExternalLink, href: "https://dsvv.ac.in/results", color: "text-cyan-600 bg-cyan-50" },
                            { title: "LMS Login", icon: BookOpen, href: "#", color: "text-indigo-600 bg-indigo-50" },
                            { title: "Downloads", icon: Download, href: "#", color: "text-slate-600 bg-slate-100" },
                        ].map((item, i) => (
                            <Link key={i} href={item.href} className="group">
                                <Card className="h-full hover:shadow-lg transition-all duration-300 border-primary/5 hover:border-primary/20">
                                    <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                                        <div className={`h-12 w-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${item.color}`}>
                                            <item.icon className="h-6 w-6" />
                                        </div>
                                        <span className="font-semibold text-slate-700 group-hover:text-primary transition-colors">{item.title}</span>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </section>

                <div className="grid lg:grid-cols-3 gap-8">
                    
                    {/* Latest Notices */}
                    <section className="lg:col-span-2 space-y-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-bold font-heading text-slate-900 flex items-center gap-2">
                                <Bell className="h-5 w-5 text-amber-500" /> Latest Updates
                            </h2>
                            <Button variant="ghost" className="text-primary hover:bg-primary/5" asChild>
                                <Link href="/students/notices">View All</Link>
                            </Button>
                        </div>
                        <div className="space-y-4">
                            {notices.map((notice) => (
                                <Card key={notice.id} className="hover:bg-slate-50 transition-colors border-l-4 border-l-primary/20">
                                    <CardContent className="p-4 flex gap-4 items-start">
                                        <div className="flex flex-col items-center bg-slate-100 rounded-lg p-2 min-w-[60px]">
                                            <span className="text-xs font-bold text-slate-500 uppercase">{notice.date.split(" ")[0]}</span>
                                            <span className="text-xl font-bold text-slate-900">{notice.date.split(" ")[1].replace(",","")}</span>
                                        </div>
                                        <div className="space-y-1 flex-grow">
                                            <div className="flex justify-between items-start">
                                                <h3 className="font-semibold text-slate-900 line-clamp-1">{notice.title}</h3>
                                                {notice.isNew && (
                                                    <Badge variant="secondary" className="bg-red-100 text-red-700 hover:bg-red-100 text-[10px] px-2 h-5">NEW</Badge>
                                                )}
                                            </div>
                                            <div className="flex items-center gap-2 text-xs text-slate-500">
                                                <Badge variant="outline" className="text-xs font-normal border-slate-200">{notice.category}</Badge>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>

                    {/* Clubs Spotlight */}
                    <section className="space-y-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-bold font-heading text-slate-900 flex items-center gap-2">
                                <Users className="h-5 w-5 text-purple-500" /> Societies
                            </h2>
                            <Button variant="ghost" className="text-primary hover:bg-primary/5" asChild>
                                <Link href="/students/clubs">Explore</Link>
                            </Button>
                        </div>
                        <div className="space-y-4">
                            {clubs.slice(0, 2).map((club) => (
                                <Card key={club.id} className="overflow-hidden group">
                                    <div className="h-32 bg-slate-200 relative">
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                                        <img src={club.image} alt={club.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                        <div className="absolute bottom-3 left-4 z-20 text-white font-bold text-lg">{club.name}</div>
                                    </div>
                                    <CardContent className="p-4 space-y-3">
                                        <p className="text-sm text-slate-600 line-clamp-2">{club.description}</p>
                                        <div className="flex flex-wrap gap-1">
                                            {club.activities.slice(0, 2).map((act, i) => (
                                                <span key={i} className="text-[10px] bg-slate-100 px-2 py-1 rounded-full text-slate-600">{act}</span>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
}
