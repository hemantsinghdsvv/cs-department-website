
"use client";

import { labs } from "@/lib/data/researchData";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Microscope, User, Zap } from "lucide-react";

export default function ResearchLabsPage() {
    return (
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
            <section className="text-center space-y-4 max-w-3xl mx-auto">
                <Badge className="bg-primary/5 text-primary hover:bg-primary/10 border-none mb-2">Infrastructure</Badge>
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary">
                    Research <span className="text-accent">Labs</span>
                </h1>
                <p className="text-muted-foreground text-lg">
                    State-of-the-art facilities driving innovation in AI, Cyber Security, and more.
                </p>
            </section>

            <div className="grid md:grid-cols-2 gap-8">
                {labs.map((lab) => (
                    <Card key={lab.id} className="overflow-hidden flex flex-col h-full border-primary/10 shadow-lg">
                        <div className="relative h-64 w-full">
                            <Image 
                                src={lab.image}
                                alt={lab.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold text-slate-900">{lab.name}</CardTitle>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground pt-1">
                                <User className="h-4 w-4 text-accent" />
                                <span>Coordinator: <span className="font-medium text-slate-700">{lab.coordinator}</span></span>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-grow space-y-6">
                            <p className="text-slate-600 leading-relaxed">
                                {lab.description}
                            </p>
                            
                            <div>
                                <h4 className="flex items-center gap-2 font-semibold text-slate-900 mb-3 text-sm uppercase tracking-wide">
                                    <Microscope className="h-4 w-4 text-primary" /> Key Equipment
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {lab.equipment.map((eq, i) => (
                                        <Badge key={i} variant="secondary" className="bg-slate-100 text-slate-700 border-slate-200">
                                            {eq}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="bg-slate-50 border-t border-slate-100 p-6">
                            <div className="flex items-center gap-2 text-sm text-slate-500">
                                <Zap className="h-4 w-4 text-amber-500" />
                                <span>{lab.projects.length} Active Projects</span>
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
