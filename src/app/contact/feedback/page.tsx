
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send } from "lucide-react";

export default function FeedbackPage() {
    return (
        <div className="container max-w-3xl mx-auto px-4 py-16 space-y-8">
            <div className="text-center space-y-4">
                <h1 className="text-3xl font-bold font-heading text-slate-900">Feedback & Grievance Redressal</h1>
                <p className="text-slate-500">
                    Your feedback helps us improve. Use this form to submit suggestions, complaints, or grievances securely.
                </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100">
                <form className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Category</label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Select Category" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="academic">Academic Issue</SelectItem>
                                <SelectItem value="infrastructure">Infrastructure</SelectItem>
                                <SelectItem value="suggestion">General Suggestion</SelectItem>
                                <SelectItem value="complaint">Complaint / Grievance</SelectItem>
                                <SelectItem value="ragging">Anti-Ragging Report</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                             <label className="text-sm font-medium text-slate-700">Your Name (Optional)</label>
                             <Input placeholder="Anonymous" />
                        </div>
                        <div className="space-y-2">
                             <label className="text-sm font-medium text-slate-700">Role</label>
                             <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="I am a..." />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="student">Student</SelectItem>
                                    <SelectItem value="parent">Parent</SelectItem>
                                    <SelectItem value="faculty">Faculty/Staff</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Description</label>
                        <Textarea placeholder="Please describe your concern in detail..." className="h-40" />
                    </div>

                    <Button type="button" className="w-full bg-primary text-white hover:bg-primary/90">
                        Submit Feedback
                    </Button>
                    <p className="text-xs text-center text-slate-400 mt-4">
                        * Confidentiality will be maintained for sensitive issues.
                    </p>
                </form>
            </div>
        </div>
    );
}
