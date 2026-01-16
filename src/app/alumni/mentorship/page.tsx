
"use client";

import { mentorships, alumniProfiles } from "@/lib/data/alumniData";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Star } from "lucide-react";

export default function MentorshipPage() {
    return (
        <div className="container max-w-7xl mx-auto px-4 py-12 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-4">
                <h1 className="text-4xl font-bold font-heading text-primary">Alumni Mentorship Program</h1>
                <p className="text-slate-600 text-lg">
                    Bridge the gap between academia and industry. Connect with experienced alumni for career guidance, mock interviews, and technical advice.
                </p>
                <div className="flex justify-center gap-4">
                    <Button size="lg" className="bg-accent text-slate-900 hover:bg-accent/90">Find a Mentor</Button>
                    <Button size="lg" variant="outline">Sign up as Mentor</Button>
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mentorships.map((program) => {
                    const mentor = alumniProfiles.find(p => p.name === program.mentorName); // Link image if possible
                    return (
                        <Card key={program.id} className="border-t-4 border-t-accent hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle className="text-xl font-bold">{program.title}</CardTitle>
                                <CardDescription>
                                    by <span className="font-semibold text-slate-900">{program.mentorName}</span>
                                    <br/>
                                    <span className="text-xs">{program.mentorDesignation}</span>
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <p className="text-xs font-semibold text-slate-500 uppercase">Expertise</p>
                                    <div className="flex flex-wrap gap-1">
                                        {program.expertise.map((exp, i) => (
                                            <Badge key={i} variant="secondary" className="bg-slate-100">{exp}</Badge>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-green-600 bg-green-50 p-2 rounded w-fit">
                                    <Users className="h-4 w-4" />
                                    <span className="font-semibold">{program.availableSlots} Slots Available</span>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full">Apply for Mentorship</Button>
                            </CardFooter>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
}
