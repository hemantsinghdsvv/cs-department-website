
"use client";

import { jobs } from "@/lib/data/alumniData";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Building2, Clock } from "lucide-react";

export default function CareersPage() {
    return (
        <div className="container max-w-4xl mx-auto px-4 py-12 space-y-8">
             <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold font-heading text-primary">Career Board</h1>
                    <p className="text-slate-500">Exclusive opportunities posted by department alumni.</p>
                </div>
                <Button>Post a Job</Button>
            </div>

            <div className="space-y-4">
                {jobs.map((job) => (
                    <Card key={job.id} className="hover:border-primary/40 transition-colors">
                        <CardContent className="p-6">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <h3 className="text-xl font-bold text-slate-900">{job.role}</h3>
                                        <Badge className={`
                                            ${job.type === "Full-Time" ? "bg-blue-100 text-blue-700" : "bg-purple-100 text-purple-700"}
                                            hover:bg-opacity-80 border-none
                                        `}>
                                            {job.type}
                                        </Badge>
                                    </div>
                                    <div className="flex items-center gap-4 text-sm text-slate-600">
                                        <div className="flex items-center gap-1">
                                            <Building2 className="h-4 w-4 text-slate-400" /> {job.company}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <MapPin className="h-4 w-4 text-slate-400" /> {job.location}
                                        </div>
                                    </div>
                                    <p className="text-xs text-slate-400 flex items-center gap-1 pt-1">
                                        <Clock className="h-3 w-3" /> Posted {job.postedDate} by <span className="font-semibold text-slate-600">{job.postedBy}</span>
                                    </p>
                                </div>
                                <Button variant="outline" className="shrink-0">Apply Now</Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
