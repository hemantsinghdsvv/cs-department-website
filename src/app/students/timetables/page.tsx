
"use client";

import { timetables } from "@/lib/data/studentResources";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Calendar } from "lucide-react";

export default function TimetablesPage() {
    return (
        <div className="container max-w-4xl mx-auto px-4 py-12 space-y-10">
            <div className="text-center space-y-4">
                <h1 className="text-3xl font-bold font-heading text-primary">Class Schedules</h1>
                <p className="text-slate-500">Download the latest semester timetables.</p>
            </div>

            <div className="grid gap-4">
                {timetables.map((t) => (
                    <Card key={t.id} className="hover:border-primary/50 transition-colors">
                        <CardContent className="p-6 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                                    <Calendar className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 text-lg">{t.program}</h3>
                                    <p className="text-slate-500">{t.semester}</p>
                                </div>
                            </div>
                            <Button variant="outline" className="gap-2" asChild>
                                <a href={t.link} download>
                                    <Download className="h-4 w-4" /> Download PDF
                                </a>
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
