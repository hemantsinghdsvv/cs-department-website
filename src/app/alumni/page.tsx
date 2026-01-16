
"use client";

import Link from "next/link";
import { alumniProfiles, alumniEvents } from "@/lib/data/alumniData";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
    Users, 
    Calendar, 
    Briefcase, 
    Heart, 
    Search,
    MapPin,
    GraduationCap,
    ArrowRight
} from "lucide-react";

export default function AlumniPage() {
    const distinguished = alumniProfiles.filter(p => p.isDistinguished);

    return (
        <div className="min-h-screen bg-white">
            
            {/* 1. Hero Section */}
            <section className="bg-slate-900 text-white py-20 md:py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center opacity-20"></div>
                <div className="container relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
                    <span className="inline-block py-1 px-3 rounded-full bg-accent/20 text-accent border border-accent/20 text-sm font-semibold tracking-wide uppercase">
                        Welcome Home
                    </span>
                    <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">
                        Connect. Contribute. <span className="text-accent">Celebrate.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        Join a global network of over 5,000 graduates who are shaping the future of technology and society.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                        <Button size="lg" className="bg-accent text-slate-900 hover:bg-white hover:text-slate-900 font-bold px-8" asChild>
                            <Link href="/alumni/directory">Find Batchmates</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10" asChild>
                            <Link href="/alumni/mentorship">Become a Mentor</Link>
                        </Button>
                    </div>
                </div>
            </section>

             {/* 2. Stats Strip */}
             <div className="bg-primary py-8 border-t border-white/10">
                <div className="container max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
                    {[
                        { label: "Alumni Worldwide", value: "5,000+" },
                        { label: "Countries Represented", value: "30+" },
                        { label: "CXOs & Founders", value: "200+" },
                        { label: "Mentorship Sessions", value: "1,200+" },
                    ].map((stat, i) => (
                        <div key={i}>
                            <div className="text-3xl md:text-4xl font-bold font-heading mb-1">{stat.value}</div>
                            <div className="text-sm opacity-80 uppercase tracking-wide">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 3. Quick Actions */}
            <section className="py-20 bg-slate-50">
                <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8 -mt-24 relative z-10">
                        {[
                            { title: "Alumni Directory", icon: Search, desc: "Search for friends and network with professionals.", href: "/alumni/directory", color: "bg-blue-500" },
                            { title: "Career Opportunities", icon: Briefcase, desc: "Find jobs or hire talent from your alma mater.", href: "/alumni/careers", color: "bg-amber-500" },
                            { title: "Events & Reunions", icon: Calendar, desc: "Stay updated on meetups and annual gatherings.", href: "/alumni/events", color: "bg-green-500" },
                        ].map((item, i) => (
                            <Link key={i} href={item.href} className="group">
                                <Card className="h-full border-none shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                                    <CardContent className="p-8 space-y-4">
                                        <div className={`h-14 w-14 rounded-2xl ${item.color} flex items-center justify-center text-white shadow-lg`}>
                                            <item.icon className="h-7 w-7" />
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">{item.title}</h3>
                                        <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Distinguished Alumni */}
            <section className="py-20 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Distinguished Alumni</h2>
                    <p className="text-slate-600 text-lg">
                        Celebrating the achievements of our graduates who are making a difference in the world.
                    </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {distinguished.slice(0, 3).map((alum) => (
                        <Card key={alum.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="flex flex-col h-full">
                                <div className="p-6 flex items-center gap-4 border-b border-slate-100">
                                    <img src={alum.image} alt={alum.name} className="h-16 w-16 rounded-full object-cover border-2 border-primary/20" />
                                    <div>
                                        <h3 className="font-bold text-lg text-slate-900">{alum.name}</h3>
                                        <p className="text-sm text-slate-500">{alum.designation}</p>
                                        <p className="text-xs font-semibold text-primary">{alum.company}</p>
                                    </div>
                                </div>
                                <CardContent className="p-6 bg-slate-50/50 flex-grow">
                                    <p className="italic text-slate-600 text-sm leading-relaxed">"{alum.testimonial}"</p>
                                </CardContent>
                                <div className="p-4 border-t border-slate-100 flex justify-between items-center text-xs text-slate-500">
                                    <div className="flex items-center gap-1">
                                        <GraduationCap className="h-3 w-3" /> Batch of {alum.batch}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <MapPin className="h-3 w-3" /> {alum.location}
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
                <div className="text-center">
                    <Button variant="outline" className="gap-2" asChild>
                        <Link href="/alumni/directory">View All Alumni <ArrowRight className="h-4 w-4" /></Link>
                    </Button>
                </div>
            </section>

             {/* 5. Give Back CTA */}
             <section className="py-20 bg-primary/5">
                <div className="container max-w-5xl mx-auto px-4 text-center space-y-8">
                    <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm text-red-500">
                        <Heart className="h-8 w-8 fill-current" />
                    </div>
                    <h2 className="text-3xl font-heading font-bold text-primary">Give Back to Your Alma Mater</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Your support can help fund scholarships, research projects, and infrastructure development. 
                        Every contribution counts.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
                            Contribute Now
                        </Button>
                    </div>
                </div>
             </section>

        </div>
    );
}
