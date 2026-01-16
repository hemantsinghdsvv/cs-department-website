
"use client";

import Link from "next/link";
import { placementStats, topRecruiters, testimonials } from "@/lib/data/placementData";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
    Briefcase, 
    TrendingUp, 
    Users, 
    Building, 
    Download,
    ArrowRight
} from "lucide-react";
import { 
    LineChart, 
    Line, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    Legend, 
    ResponsiveContainer,
    BarChart,
    Bar
} from 'recharts';

export default function PlacementsPage() {
    const latestStat = placementStats[placementStats.length - 1];

    return (
        <div className="min-h-screen bg-slate-50">
            
            {/* 1. Hero Section */}
            <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551434678-e076c2236033?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center opacity-10"></div>
                <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
                    <Badge variant="outline" className="text-accent border-accent px-4 py-1 text-sm uppercase tracking-wider mb-4">
                        Career Excellence
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">
                        Launch Your <span className="text-accent">Career</span> with Us
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        Consistently ranked among top departments for placements. We bridge the gap between academic learning and industry requirements.
                    </p>
                    
                    {/* Key Stats Strip */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 max-w-4xl mx-auto">
                        <div className="p-4 bg-white/5 backdrop-blur rounded-lg border border-white/10">
                            <div className="text-3xl font-bold text-accent">{latestStat.placedPercentage}%</div>
                            <div className="text-sm text-slate-400">Students Placed</div>
                        </div>
                        <div className="p-4 bg-white/5 backdrop-blur rounded-lg border border-white/10">
                            <div className="text-3xl font-bold text-accent">{latestStat.highestPackage} LPA</div>
                            <div className="text-sm text-slate-400">Highest Package</div>
                        </div>
                        <div className="p-4 bg-white/5 backdrop-blur rounded-lg border border-white/10">
                            <div className="text-3xl font-bold text-accent">{latestStat.averagePackage} LPA</div>
                            <div className="text-sm text-slate-400">Average Package</div>
                        </div>
                        <div className="p-4 bg-white/5 backdrop-blur rounded-lg border border-white/10">
                            <div className="text-3xl font-bold text-accent">{latestStat.totalOffers}+</div>
                            <div className="text-sm text-slate-400">Offers Made</div>
                        </div>
                    </div>

                    <div className="flex justify-center gap-4 pt-4">
                        <Button size="lg" className="bg-accent text-slate-900 hover:bg-white" asChild>
                            <Link href="/placements/contact">For Recruiters</Link>
                        </Button>
                         <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10" asChild>
                            <Link href="/resources">Placement Resources</Link>
                        </Button>
                    </div>
                </div>
            </section>

             {/* 2. Interactive Charts */}
             <section className="py-20 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-heading font-bold text-slate-900 flex items-center justify-center gap-2">
                        <TrendingUp className="h-8 w-8 text-primary" /> Placement Trends
                    </h2>
                    <p className="text-slate-500">Consistent growth in opportunities and compensation over the years.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Package Trend */}
                    <Card className="p-6 shadow-md border-none">
                        <h3 className="text-lg font-bold text-slate-900 mb-6 pl-2 border-l-4 border-primary">
                            Compensation Trends (LPA)
                        </h3>
                        <div className="h-[300px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={placementStats}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                    <XAxis dataKey="year" fontSize={12} tickLine={false} axisLine={false} />
                                    <YAxis fontSize={12} tickLine={false} axisLine={false} />
                                    <Tooltip 
                                        contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                    />
                                    <Legend />
                                    <Line type="monotone" dataKey="highestPackage" name="Highest Package" stroke="#0ea5e9" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                                    <Line type="monotone" dataKey="averagePackage" name="Average Package" stroke="#f59e0b" strokeWidth={3} dot={{ r: 4 }} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </Card>

                    {/* Offers Trend */}
                    <Card className="p-6 shadow-md border-none">
                        <h3 className="text-lg font-bold text-slate-900 mb-6 pl-2 border-l-4 border-accent">
                            Total Offers
                        </h3>
                         <div className="h-[300px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={placementStats}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                    <XAxis dataKey="year" fontSize={12} tickLine={false} axisLine={false} />
                                    <YAxis fontSize={12} tickLine={false} axisLine={false} />
                                    <Tooltip 
                                         cursor={{fill: 'transparent'}}
                                         contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                    />
                                    <Bar dataKey="totalOffers" name="Offers Made" fill="#0f172a" radius={[4, 4, 0, 0]} barSize={40} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </Card>
                </div>
             </section>

             {/* 3. Top Recruiters */}
             <section className="py-20 bg-white">
                <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                    <div className="text-center">
                        <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">Our Top Recruiters</h2>
                        <p className="text-slate-500">Leading companies that trust our talent.</p>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center grayscale hover:grayscale-0 transition-all duration-500">
                        {topRecruiters.map((recruiter) => (
                            <div key={recruiter.id} className="w-32 h-20 flex items-center justify-center p-4 hover:scale-110 transition-transform">
                                <img src={recruiter.logo} alt={recruiter.name} className="max-w-full max-h-full object-contain" />
                            </div>
                        ))}
                    </div>
                    
                    <div className="text-center">
                        <Button variant="ghost" asChild>
                            <Link href="/placements/contact" className="gap-2">
                                Become a Hiring Partner <ArrowRight className="h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
             </section>

            {/* 4. Testimonials */}
             <section className="py-20 bg-slate-50">
                <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                     <div className="text-center">
                        <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">Success Stories</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testi) => (
                            <Card key={testi.id} className="relative mt-8 pt-8">
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full border-4 border-white shadow-lg overflow-hidden">
                                    <img src={testi.image} alt={testi.name} className="w-full h-full object-cover" />
                                </div>
                                <CardContent className="text-center p-6 space-y-4">
                                    <div>
                                        <h3 className="font-bold text-lg text-slate-900">{testi.name}</h3>
                                        <p className="text-xs font-semibold text-primary">{testi.designation} at {testi.company}</p>
                                    </div>
                                    <p className="text-slate-600 italic leading-relaxed text-sm">
                                        "{testi.quote}"
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
             </section>

             {/* 5. Placement Brochure CTA */}
             <section className="py-16 bg-primary text-white">
                 <div className="container max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-2">Download Placement Brochure 2024</h2>
                        <p className="text-primary-foreground/80">Get detailed insights into our student demographics, curriculum, and past records.</p>
                    </div>
                    <Button size="lg" className="bg-white text-primary hover:bg-slate-100 font-bold gap-2">
                        <Download className="h-5 w-5" /> Download PDF
                    </Button>
                 </div>
             </section>

        </div>
    );
}
