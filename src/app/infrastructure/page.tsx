"use client";

import { facilities } from "@/lib/data/infrastructureData";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Monitor, Cpu, Network, Projector, School } from "lucide-react";

export default function InfrastructurePage() {
    const getIcon = (id: string) => {
        switch (id) {
            case "mca-lab": return <Monitor className="h-6 w-6" />;
            case "bca-lab": return <Cpu className="h-6 w-6" />;
            case "bsc-it-lab": return <Network className="h-6 w-6" />;
            case "ai-lab": return <Cpu className="h-6 w-6" />; // Reusing Cpu for AI, could be Brain if imported
            case "ict-classrooms": return <Projector className="h-6 w-6" />;
            default: return <School className="h-6 w-6" />;
        }
    };

    return (
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
            {/* Hero Section */}
            <section className="text-center space-y-6 max-w-3xl mx-auto">
                <Badge className="bg-primary/5 text-primary hover:bg-primary/10 border-none mb-2 text-sm px-4 py-1.5">World-Class Facilities</Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary tracking-tight">
                    Our <span className="text-accent">Infrastructure</span>
                </h1>
                <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                    Explore our advanced labs and smart classrooms designed to foster innovation and hands-on learning.
                </p>
            </section>

             {/* Facilities Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {facilities.map((facility, index) => (
                    <Card key={facility.id} className="group overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="relative h-56 overflow-hidden">
                            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors z-10" />
                            <img 
                                src={facility.image} 
                                alt={facility.title}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                            />
                            <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-sm text-primary">
                                {getIcon(facility.id)}
                            </div>
                        </div>
                        <CardContent className="p-6 space-y-4">
                            <h3 className="text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                                {facility.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                {facility.description}
                            </p>
                            <div className="pt-4 border-t border-slate-100">
                                <ul className="space-y-2">
                                    {facility.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-slate-500">
                                            <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
            
            {/* CTA Section */}
             <section className="bg-slate-50 rounded-2xl p-8 md:p-12 text-center space-y-6 border border-slate-100">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Experience It Yourself</h2>
                <p className="text-slate-600 max-w-2xl mx-auto">
                    We invite prospective students and researchers to visit our campus and explore these facilities firsthand.
                </p>
            </section>
        </div>
    );
}
