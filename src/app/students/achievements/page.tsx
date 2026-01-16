
"use client";

import { achievements } from "@/lib/data/studentResources";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy } from "lucide-react";

export default function AchievementsPage() {
    return (
        <div className="container max-w-7xl mx-auto px-4 py-12 space-y-12">
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold font-heading text-primary">Wall of Fame</h1>
                <p className="text-slate-500">Celebrating the exceptional achievements of our students.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {achievements.map((ach) => (
                    <Card key={ach.id} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                        <div className="relative h-56 w-full">
                             <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                                {ach.date}
                             </div>
                             <img src={ach.image} alt={ach.title} className="w-full h-full object-cover" />
                        </div>
                        <CardContent className="p-6 space-y-4">
                            <div className="flex items-start gap-3">
                                <Trophy className="h-6 w-6 text-amber-500 shrink-0 mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 leading-tight mb-2">{ach.title}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">{ach.description}</p>
                                </div>
                            </div>
                            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-sm">
                                <span className="font-semibold text-slate-800">{ach.studentName}</span>
                                <Badge variant="secondary">{ach.program}</Badge>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
