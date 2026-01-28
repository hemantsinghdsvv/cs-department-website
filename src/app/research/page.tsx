
"use client";

import Link from "next/link";
import Image from "next/image";
import { researchAreas, publications, labs } from "@/lib/data/researchData";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, BrainCircuit, ShieldCheck, Database, Cpu, Microscope, Lightbulb, FileText, Globe, BookOpen, TrendingUp, Copyright } from "lucide-react";

// Helper to map string icon names to components
const iconMap: Record<string, any> = {
    "BrainCircuit": BrainCircuit,
    "ShieldCheck": ShieldCheck,
    "Database": Database,
    "Cpu": Cpu
};

export default function ResearchPage() {
    return (
        <div className="min-h-screen bg-slate-50/50">
            {/* 1. Hero Section */}
            <section className="relative bg-slate-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center opacity-10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/60"></div>
                
                <div className="container relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
                    <div className="max-w-3xl space-y-6">
                        <Badge variant="secondary" className="bg-accent text-slate-900 hover:bg-accent/90 border-none px-4 py-1 text-sm font-semibold tracking-wide uppercase">
                            Research & Innovation
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight">
                            Pioneering Future <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-amber-200">
                                Technologies
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
                            Our department fosters a vibrant research ecosystem where ancient wisdom meets modern technology to solve global challenges.
                        </p>
                        
                        <div className="flex flex-wrap gap-4 pt-4">
                            <Button size="lg" className="bg-accent text-slate-900 hover:bg-white hover:text-slate-900 font-semibold" asChild>
                                <Link href="/research/projects">Explore Projects</Link>
                            </Button>
                            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10" asChild>
                                <Link href="/research/publications">View Publications</Link>
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Stats Strip */}
                <div className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
                    <div className="container max-w-7xl mx-auto px-4 py-8">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                            {[
                                { label: "Research Papers", value: "108", icon: FileText },
                                { label: "Books", value: "15", icon: BookOpen },
                                { label: "Patents", value: "19", icon: Lightbulb },
                                { label: "Projects", value: "12", icon: Globe },
                                { label: "Total H-index", value: "31", icon: TrendingUp },
                                { label: "Copyrights", value: "12", icon: Copyright },
                            ].map((stat, i) => (
                                <div key={i} className="flex flex-col items-center gap-3 text-center group">
                                    <div className="h-14 w-14 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-accent group-hover:text-slate-900 transition-all duration-300 shadow-lg shadow-black/10">
                                        <stat.icon className="h-6 w-6 text-accent group-hover:text-slate-900 transition-colors" />
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold font-heading mb-1">{stat.value}</div>
                                        <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">{stat.label}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Research Areas */}
            <section className="py-20 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-4">Core Research Domains</h2>
                    <p className="text-slate-600 text-lg">
                        We focus on interdisciplinary research that has a tangible impact on society and industry.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {researchAreas.map((area) => {
                        const Icon = iconMap[area.icon] || BrainCircuit;
                        return (
                            <Card key={area.id} className="group hover:-translate-y-1 transition-all duration-300 hover:shadow-xl border-primary/5">
                                <CardHeader>
                                    <div className="h-12 w-12 rounded-lg bg-primary/5 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    <CardTitle className="text-xl group-hover:text-primary transition-colors">{area.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="text-slate-500 text-sm leading-relaxed">{area.description}</p>
                                    <div className="flex gap-2">
                                        {area.stats?.map((stat, idx) => (
                                            <Badge key={idx} variant="secondary" className="text-xs font-normal">
                                                {stat.value} {stat.label}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </section>

             {/* 3. Labs Preview */}
             <section className="py-20 bg-white">
                <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between mb-12">
                         <div className="max-w-2xl">
                            <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-2">Research Facilities</h2>
                            <p className="text-slate-600">Advanced labs equipping students and faculty for cutting-edge work.</p>
                        </div>
                        <Button variant="ghost" className="hidden md:flex gap-2 text-primary" asChild>
                            <Link href="/research/labs">View All Labs <ArrowRight className="h-4 w-4" /></Link>
                        </Button>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {labs.slice(0, 2).map((lab) => (
                            <div key={lab.id} className="group relative overflow-hidden rounded-2xl h-80">
                                <Image
                                    src={lab.image}
                                    alt={lab.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-8 space-y-2">
                                    <h3 className="text-2xl font-bold text-white mb-2">{lab.name}</h3>
                                    <p className="text-slate-300 line-clamp-2 text-sm max-w-md">{lab.description}</p>
                                    <div className="pt-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                                         <Button size="sm" variant="secondary" className="bg-white/10 text-white hover:bg-white hover:text-slate-900 backdrop-blur-md border-white/10" asChild>
                                            <Link href="/research/labs">Explore Lab</Link>
                                         </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                     <div className="md:hidden mt-8 text-center">
                        <Button variant="outline" className="w-full" asChild>
                            <Link href="/research/labs">View All Labs</Link>
                        </Button>
                    </div>
                </div>
             </section>

             {/* 4. Innovation Call to Action */}
             <section className="py-20 bg-primary text-white text-center">
                 <div className="container max-w-4xl mx-auto px-4 space-y-8">
                     <Lightbulb className="h-16 w-16 text-accent mx-auto" />
                     <h2 className="text-3xl md:text-5xl font-heading font-bold">Innovation & Incubation</h2>
                     <p className="text-lg text-primary-foreground/80 leading-relaxed">
                         Turn your ideas into reality. Our incubation center provides mentorship, resources, and funding support for student startups.
                     </p>
                     <Button size="lg" className="bg-white text-primary hover:bg-slate-100 rounded-full px-8 text-lg font-semibold shadow-lg shadow-black/20" asChild>
                         <Link href="/research/innovation">Start Your Journey</Link>
                     </Button>
                 </div>
             </section>

        </div>
    );
}
