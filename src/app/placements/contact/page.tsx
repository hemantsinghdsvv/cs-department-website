
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Mail, Phone, MapPin, Building2 } from "lucide-react";

export default function RecruitersContactPage() {
    return (
        <div className="container max-w-6xl mx-auto px-4 py-12 md:py-20 space-y-12">
            
            <div className="text-center max-w-3xl mx-auto space-y-4">
                <h1 className="text-4xl font-heading font-bold text-slate-900">Partner with Us</h1>
                <p className="text-slate-500 text-lg">
                    We invite esteemed organizations to visit our campus and explore the potential of our bright students.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                
                {/* Contact Info */}
                <div className="space-y-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>Placement Cell</CardTitle>
                            <CardDescription>Reach out to our placement officers directly.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <Phone className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900">Phone</h3>
                                    <p className="text-slate-600">+91 98765 43210</p>
                                    <p className="text-slate-600">+91 12345 67890</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-4">
                                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <Mail className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900">Email</h3>
                                    <p className="text-slate-600">placements@dsvv.ac.in</p>
                                    <p className="text-slate-600">tnp.cell@dsvv.ac.in</p>
                                </div>
                            </div>

                             <div className="flex items-start gap-4">
                                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <MapPin className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900">Office Location</h3>
                                    <p className="text-slate-600">
                                        Training & Placement Cell,<br/>
                                        Computer Science Block, Ground Floor,<br/>
                                        Dev Sanskriti Vishwavidyalaya, Haridwar - 249411
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                        <h3 className="font-bold text-slate-900 mb-2">Procedure</h3>
                        <ol className="list-decimal list-inside space-y-2 text-slate-600 text-sm">
                            <li>Contact the T&P Cell via email or phone.</li>
                            <li>Share the Job Description (JD) and eligibility criteria.</li>
                            <li>T&P Cell will share student profiles and coordinate dates.</li>
                            <li>Conduct Pre-Placement Talks, Tests, and Interviews.</li>
                            <li>Release offer letters.</li>
                        </ol>
                    </div>
                </div>

                {/* Inquiry Form */}
                <div className="bg-white rounded-xl shadow-lg border border-slate-100 p-8">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                        <Building2 className="h-6 w-6 text-accent" /> Recruiter Inquiry
                    </h2>
                    <form className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Company Name</label>
                                <Input placeholder="e.g. Google India" />
                            </div>
                             <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Industry</label>
                                <Input placeholder="e.g. IT / EdTech" />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">HR Name</label>
                                <Input placeholder="Your Name" />
                            </div>
                             <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Email</label>
                                <Input type="email" placeholder="hr@company.com" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">Roles Hiring For</label>
                            <Input placeholder="e.g. SDE, Data Analyst, Interns" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">Message / Requirements</label>
                            <Textarea placeholder="Please describe your requirements or any specific dates..." className="h-32" />
                        </div>

                        <Button type="button" className="w-full bg-primary text-white hover:bg-primary/90">
                            Send Inquiry
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}
