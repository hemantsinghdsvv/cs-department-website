"use client";

import { feedbackStats } from "@/lib/data/iqacData";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, TrendingUp, MessageSquare, HandHeart } from "lucide-react";

export default function FeedbackPage() {
    return (
        <div className="container max-w-7xl mx-auto px-4 py-12 space-y-12">
            
            <section className="text-center space-y-4 max-w-3xl mx-auto">
                <Badge className="bg-primary/5 text-primary border-none mb-2">Continuous Improvement</Badge>
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary">
                    Feedback <span className="text-accent">System</span>
                </h1>
                <p className="text-muted-foreground text-lg">
                    We value the voice of our stakeholders. Annual feedback is collected, analyzed, and action is taken to enhance the educational experience.
                </p>
            </section>

            {/* Stats Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {feedbackStats.map((stat, i) => (
                    <Card key={i} className="text-center hover:shadow-lg transition-shadow border-t-4 border-t-accent">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-lg font-medium text-slate-500">{stat.category}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center justify-center gap-2 mb-2">
                                <span className="text-4xl font-bold text-slate-900">{stat.score}</span>
                                <Star className="h-6 w-6 text-amber-500 fill-amber-500" />
                            </div>
                            <p className="text-xs text-slate-400">{stat.responses} responses • {stat.year}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Action Taken Report */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
                <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 rounded-lg bg-green-50 px-3 py-1 text-sm font-medium text-green-700">
                        <TrendingUp className="h-4 w-4" /> Action Taken Report (ATR) 2023-24
                    </div>
                    <h2 className="text-3xl font-bold font-heading text-slate-900">Closing the Loop</h2>
                    <p className="text-slate-600 leading-relaxed">
                        Based on the feedback received from students and industry experts, the following key changes have been implemented:
                    </p>
                    <ul className="space-y-4">
                        {[
                            "Introduced 'Cloud Computing' as a core subject based on alumni feedback.",
                            "Increased lab hours for creating practical projects.",
                            "Launched 'Mentor-Mentee' system for better student support.",
                            "Upgraded classroom projectors to interactive smart boards."
                        ].map((item, i) => (
                            <li key={i} className="flex gap-3 text-slate-700 shadow-sm p-4 rounded-lg bg-slate-50 border border-slate-100">
                                <HandHeart className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="bg-slate-100 rounded-2xl p-8 text-center space-y-6">
                    <MessageSquare className="h-16 w-16 text-primary mx-auto opacity-20" />
                    <h3 className="text-2xl font-bold text-slate-900">Submit Your Feedback</h3>
                    <p className="text-slate-500">
                        Current session feedback forms are now open. Please login with your university ID to participate.
                    </p>
                    <div className="flex flex-col gap-3">
                        <Button className="w-full" size="lg">Student Feedback Form</Button>
                        <Button variant="outline" className="w-full">Faculty Feedback Form</Button>
                        <Button variant="ghost" className="w-full text-slate-500">Alumni Feedback (External)</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
