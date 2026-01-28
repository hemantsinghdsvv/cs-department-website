"use client";

import { iqacMembers } from "@/lib/data/iqacData";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Target, Users, Mail } from "lucide-react";

export default function IQACPage() {
    return (
        <div className="container max-w-7xl mx-auto px-4 py-12 space-y-12">
            
            {/* Header */}
            <section className="text-center space-y-4 max-w-4xl mx-auto">
                <Badge className="bg-primary/5 text-primary border-none mb-2">Quality Assurance</Badge>
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary">
                    Internal Quality Assurance Cell <span className="text-accent">(IQAC)</span>
                </h1>
                <p className="text-muted-foreground text-lg">
                    Dedicated to developing a system for conscious, consistent, and catalytic improvement in the overall performance of the institution.
                </p>
            </section>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Objectives */}
                <div className="lg:col-span-2 space-y-8">
                    <Card className="border-t-4 border-t-primary h-full">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Target className="h-5 w-5 text-accent" /> Objectives & Functions
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <ul className="space-y-4">
                                {[
                                    "To ensure efficient and progressive performance of academic, administrative, and financial tasks.",
                                    "To integrate modern methods of teaching and learning.",
                                    "To ensure the adequacy, maintenance, and proper allocation of support structure and services.",
                                    "To share research findings and networking with other institutions in India and abroad.",
                                    "To incorporate the Indian Knowledge System (IKS) into the core curriculum."
                                ].map((obj, i) => (
                                    <li key={i} className="flex gap-3 text-slate-700">
                                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                                        <span>{obj}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </div>

                {/* Composition */}
                <div className="space-y-6">
                    <h2 className="text-xl font-bold font-heading text-slate-900 flex items-center gap-2">
                        <Users className="h-5 w-5 text-primary" /> Composition
                    </h2>
                    <div className="grid gap-4">
                        {iqacMembers.map((member) => (
                            <Card key={member.id} className="flex items-center p-4 gap-4 hover:shadow-md transition-shadow">
                                <div className="h-12 w-12 rounded-full overflow-hidden shrink-0">
                                    <img src={member.image} alt={member.name} className="h-full w-full object-cover" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900">{member.name}</h3>
                                    <p className="text-sm text-slate-500">{member.designation}</p>
                                    <Badge variant="outline" className="mt-1 text-xs">{member.role}</Badge>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>

            {/* Contact CTA */}
            <section className="bg-slate-50 rounded-xl p-8 text-center border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Have suggestions for quality improvement?</h3>
                <p className="text-slate-500 mb-6">We welcome feedback from authorized stakeholders.</p>
                <a 
                    href="mailto:iqac@dsvv.ac.in" 
                    className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                    <Mail className="h-4 w-4" /> Contact Coordinator
                </a>
            </section>
        </div>
    );
}
