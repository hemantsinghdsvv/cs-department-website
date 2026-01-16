
"use client";

import { startups } from "@/lib/data/researchData";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Rocket, Lightbulb, Users } from "lucide-react";

export default function InnovationPage() {
    return (
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
            
            {/* Hero */}
            <section className="text-center space-y-4 max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/5 px-3 py-1 text-sm font-medium text-amber-700 mb-2">
                    <Rocket className="h-4 w-4" />
                    <span>Incubation Center</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary">
                    Entreprenurship & <span className="text-accent">Innovation</span>
                </h1>
                <p className="text-muted-foreground text-lg">
                    Nurturing student ideas into successful startups through mentorship and tech support.
                </p>
            </section>

            {/* Startups Grid */}
            <div className="grid md:grid-cols-2 gap-8">
                {startups.map((startup) => (
                    <Card key={startup.id} className="relative overflow-hidden hover:shadow-xl transition-all duration-300 border-primary/10 group">
                        <div className="absolute top-0 right-0 p-4">
                            <Badge className={`
                                ${startup.status === "Graduated" ? "bg-green-100 text-green-700 hover:bg-green-100" : "bg-amber-100 text-amber-700 hover:bg-amber-100"}
                                border-none px-3
                            `}>
                                {startup.status}
                            </Badge>
                        </div>
                        <CardContent className="p-8 flex items-start gap-6">
                            <div className="relative h-20 w-20 shrink-0 rounded-2xl overflow-hidden border border-slate-100 bg-white shadow-sm">
                                <Image
                                    src={startup.logo}
                                    alt={startup.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="space-y-3">
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors">{startup.name}</h3>
                                    <p className="text-xs text-slate-400 font-mono">Est. {startup.incubatedYear}</p>
                                </div>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {startup.description}
                                </p>
                                <div className="flex items-center gap-2 text-xs text-slate-500 pt-2">
                                    <Users className="h-3 w-3 text-accent" />
                                    <span className="font-medium">Founders:</span>
                                    <span>{startup.founders.join(", ")}</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Call to Action */}
            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-8 md:p-12 text-center">
                <Lightbulb className="h-10 w-10 text-amber-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Have an Idea?</h3>
                <p className="text-slate-500 max-w-xl mx-auto mb-6">
                    Our incubation center accepts proposals from students throughout the year. Get access to office space, cloud credits, and expert mentorship.
                </p>
                <button className="px-6 py-2.5 bg-slate-900 text-white rounded-lg font-bold hover:bg-slate-800 transition-colors">
                    Submit Proposal
                </button>
            </div>
        </div>
    );
}
