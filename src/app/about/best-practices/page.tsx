"use client";

import { bestPractices } from "@/lib/data/iqacData";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Target, Sparkles, Trophy } from "lucide-react";

export default function BestPracticesPage() {
    return (
        <div className="container max-w-7xl mx-auto px-4 py-12 space-y-12">
            
            <section className="text-center space-y-4 max-w-3xl mx-auto">
                <Badge className="bg-primary/5 text-primary border-none mb-2">Institutional distinctiveness</Badge>
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary">
                    Best <span className="text-accent">Practices</span>
                </h1>
                <p className="text-muted-foreground text-lg">
                    Distinctive approaches and innovative practices that we have institutionalized to achieve our vision of value-based education.
                </p>
            </section>

            <div className="grid gap-8">
                {bestPractices.map((bp, index) => (
                    <Card key={bp.id} className="overflow-hidden border-t-4 border-t-accent hover:shadow-lg transition-all duration-300">
                        <CardHeader className="bg-slate-50/50 pb-6 border-b border-slate-100">
                            <div className="flex items-start gap-4">
                                <div className="h-12 w-12 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-sm text-2xl font-bold text-slate-300 shrink-0">
                                    0{index + 1}
                                </div>
                                <div className="flex-1">
                                    <Badge variant="outline" className="mb-2 bg-white">Practice {index + 1}</Badge>
                                    <CardTitle className="text-2xl font-bold text-slate-900 leading-tight">{bp.title}</CardTitle>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="p-6 md:p-8 space-y-8">
                            
                            {/* Context & Objectives */}
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <h3 className="flex items-center gap-2 font-bold text-slate-800">
                                        <Lightbulb className="h-5 w-5 text-amber-500" /> Context
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed text-sm">{bp.context}</p>
                                </div>
                                <div className="space-y-3">
                                    <h3 className="flex items-center gap-2 font-bold text-slate-800">
                                        <Target className="h-5 w-5 text-red-500" /> Objectives
                                    </h3>
                                    <ul className="space-y-1 list-disc list-inside text-sm text-slate-600">
                                        {bp.objectives.map((obj, i) => (
                                            <li key={i}>{obj}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* The Practice */}
                            <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                                <h3 className="flex items-center gap-2 font-bold text-slate-800 mb-3">
                                    <Sparkles className="h-5 w-5 text-purple-500" /> The Practice
                                </h3>
                                <p className="text-slate-700 leading-relaxed">{bp.practice}</p>
                            </div>

                            {/* Evidence & Outcome */}
                            <div className="grid md:grid-cols-2 gap-8 pt-2">
                                <div>
                                    <h4 className="font-semibold text-slate-900 mb-2 text-sm uppercase tracking-wide">Evidence of Success</h4>
                                    <p className="text-sm text-slate-600">{bp.evidence}</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-900 mb-2 text-sm uppercase tracking-wide">Impact / Outcome</h4>
                                    <p className="text-sm text-slate-600">{bp.outcome}</p>
                                </div>
                            </div>

                        </CardContent>
                    </Card>
                ))}
            </div>

            <section className="bg-primary/5 rounded-2xl p-8 text-center mt-8">
                <Trophy className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">Recognized by NAAC Peer Team</h3>
                <p className="text-slate-600 max-w-2xl mx-auto">
                    These practices were highlighted as "Institutional Strengths" during the previous accreditation cycle (2017).
                </p>
            </section>
        </div>
    );
}
