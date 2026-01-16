"use client";

import React from "react";
import Link from "next/link";
import { naacData } from "@/lib/data/naacData";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
    FileText, 
    Download, 
    CheckCircle, 
    ExternalLink, 
    BarChart3, 
    Award,
    BookOpen,
    Users,
    Mail,
    Phone,
    FileCheck
} from "lucide-react";

export default function NAACPage() {
    const totalWeightage = naacData.reduce((acc, curr) => acc + curr.weightage, 0);
    const totalDocuments = naacData.reduce((acc, curr) => 
        acc + curr.subCriteria.reduce((subAcc, sub) => subAcc + sub.documents.length, 0), 0
    );

    return (
        <div className="min-h-screen bg-slate-50">
            {/* 1. Enhanced Hero Section */}
            <div className="relative bg-[#1c4c94] text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                 <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80"></div>
                
                <div className="container relative mx-auto px-4 py-16 md:py-24 max-w-7xl">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="space-y-6 max-w-3xl">
                            <Badge className="bg-blue-400/20 text-blue-100 hover:bg-blue-400/30 border-blue-400/30 px-3 py-1 text-sm font-medium backdrop-blur-sm">
                                AQAR 2024-25 SUBMISSION CYCLE
                            </Badge>
                            <h1 className="text-4xl md:text-6xl font-bold font-heading tracking-tight leading-tight">
                                Quality Assurance <br/>
                                <span className="text-yellow-400">& Accreditation</span>
                            </h1>
                            <p className="text-lg md:text-xl text-blue-100/90 leading-relaxed max-w-2xl">
                                Comprehensive repository of Self Study Reports (SSR), evaluative documents, and compliance data for the National Assessment and Accreditation Council.
                            </p>
                            
                            <div className="flex flex-wrap gap-4 pt-4">
                                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-blue-950 font-bold shadow-lg shadow-blue-900/20 gap-2">
                                    <Download className="h-5 w-5" /> Download SSR 2024
                                </Button>
                                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white gap-2">
                                    <FileCheck className="h-5 w-5" /> View IIQA Status
                                </Button>
                            </div>
                        </div>

                        {/* Visual Decorative Element */}
                        <div className="hidden lg:block relative">
                            <div className="absolute -inset-4 bg-yellow-500/20 rounded-full blur-3xl"></div>
                            <img 
                                src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/National_Assessment_and_Accreditation_Council_logo.svg/1200px-National_Assessment_and_Accreditation_Council_logo.svg.png" 
                                alt="NAAC Emblem" 
                                className="h-48 w-auto relative z-10 drop-shadow-2xl grayscale brightness-0 invert opacity-90"
                            />
                        </div>
                    </div>
                </div>
            </div>



            {/* Main Content Layout */}
            <div className="container mx-auto px-4 max-w-7xl py-16">
                <div className="grid lg:grid-cols-3 gap-10">
                    
                    {/* Left Column: Criteria Accordion (2 cols wide) */}
                    <div className="lg:col-span-2 space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3 mb-6">
                                <span className="bg-primary h-8 w-1.5 rounded-full"></span>
                                Criteria-wise Verification Data
                            </h2>
                            
                            <Card className="border-none shadow-md bg-white">
                                <CardContent className="p-0">
                                    <Accordion type="single" collapsible className="w-full">
                                        {naacData.map((criteria, index) => (
                                            <AccordionItem 
                                                key={criteria.id} 
                                                value={criteria.id} 
                                                className={`border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50/30'}`}
                                            >
                                                <AccordionTrigger className="px-6 py-5 hover:no-underline group">
                                                    <div className="flex items-start gap-4 text-left w-full">
                                                        <div className="h-12 w-12 shrink-0 rounded-lg bg-slate-100 text-slate-600 flex flex-col items-center justify-center border border-slate-200 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors">
                                                            <span className="text-[10px] font-bold uppercase leading-none mt-1">Crit</span>
                                                            <span className="text-xl font-bold leading-none">{criteria.id.replace('c','')}</span>
                                                        </div>
                                                        <div className="flex-1">
                                                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                                                <h3 className="text-lg font-bold text-slate-800 group-hover:text-primary transition-colors">
                                                                    {criteria.title.split(':')[1]}
                                                                </h3>
                                                                <Badge variant="outline" className="w-fit bg-slate-50 text-slate-600 border-slate-200">
                                                                    Weightage: {criteria.weightage}
                                                                </Badge>
                                                            </div>
                                                            <p className="text-sm text-slate-500 mt-1 line-clamp-1">
                                                                {criteria.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </AccordionTrigger>
                                                <AccordionContent className="px-6 pb-6 pt-2">
                                                    <div className="pl-16 space-y-6">
                                                        {criteria.subCriteria.map((sub) => (
                                                            <div key={sub.id} className="relative border-l-2 border-slate-200 pl-6 py-1">
                                                                <div className="absolute -left-[9px] top-2 h-4 w-4 rounded-full border-2 border-slate-200 bg-white"></div>
                                                                <h4 className="text-base font-semibold text-slate-900 mb-1">
                                                                    {sub.title}
                                                                </h4>
                                                                <p className="text-sm text-slate-500 mb-4 leading-relaxed max-w-2xl">
                                                                    {sub.description}
                                                                </p>
                                                                
                                                                <div className="grid sm:grid-cols-2 gap-3">
                                                                    {sub.documents.map((doc, docIndex) => (
                                                                        <Link 
                                                                            key={docIndex} 
                                                                            href={doc.url} 
                                                                            target="_blank"
                                                                            className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 bg-white hover:border-primary/40 hover:bg-blue-50/50 hover:shadow-sm transition-all group/doc"
                                                                        >
                                                                            <div className="h-8 w-8 rounded bg-red-50 text-red-500 flex items-center justify-center shrink-0">
                                                                                <FileText className="h-4 w-4" />
                                                                            </div>
                                                                            <div className="flex-1 min-w-0">
                                                                                <div className="text-sm font-medium text-slate-700 truncate group-hover/doc:text-primary">
                                                                                    {doc.title}
                                                                                </div>
                                                                                <div className="text-[10px] text-slate-400">PDF Document</div>
                                                                            </div>
                                                                            <ExternalLink className="h-3 w-3 text-slate-300 group-hover/doc:text-primary opacity-0 group-hover/doc:opacity-100 transition-all" />
                                                                        </Link>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </AccordionContent>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Right Column: Sidebar (1 col wide) */}
                    <div className="space-y-8">
                        {/* IQAC Contact Card */}
                        <Card className="border-t-4 border-t-primary shadow-md">
                            <CardHeader className="pb-3">
                                <CardTitle className="text-lg font-bold flex items-center gap-2">
                                    <Users className="h-5 w-5 text-primary" /> IQAC Coordinator
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="h-14 w-14 rounded-full bg-slate-200 overflow-hidden">
                                        <img src="https://ui-avatars.com/api/?name=Dr+Sharma&background=0D8ABC&color=fff" alt="Coordinator" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Dr. Anjali Sharma</h4>
                                        <p className="text-xs text-slate-500 font-medium uppercase">IQAC Director</p>
                                    </div>
                                </div>
                                <div className="space-y-3 pt-2 border-t border-slate-100">
                                    <div className="flex items-center gap-3 text-sm text-slate-600">
                                        <Mail className="h-4 w-4 text-slate-400" /> iqac@dsvv.ac.in
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-slate-600">
                                        <Phone className="h-4 w-4 text-slate-400" /> +91 123 456 7890
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Quick Downloads */}
                        <Card className="shadow-md">
                            <CardHeader className="pb-3 border-b border-slate-100 bg-slate-50/50">
                                <CardTitle className="text-base font-bold text-slate-700">Quick Downloads</CardTitle>
                            </CardHeader>
                            <CardContent className="pt-4 space-y-2">
                                {[
                                    "SSR Report 2024 (Full)",
                                    "IIQA Submission Proof",
                                    "Student Satisfaction Survey",
                                    "Academic Audit Report 2023",
                                    "Best Practices Handbook"
                                ].map((item, i) => (
                                    <Button key={i} variant="ghost" className="w-full justify-start text-sm text-slate-600 h-auto py-2 px-2 hover:bg-slate-100 hover:text-primary">
                                        <Download className="h-4 w-4 mr-2 text-slate-400" />
                                        <span className="truncate">{item}</span>
                                    </Button>
                                ))}
                            </CardContent>
                        </Card>

                         {/* Important Links */}
                         <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                            <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                                <ExternalLink className="h-4 w-4" /> Important Links
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="text-blue-700 hover:underline">NAAC Official Website</a></li>
                                <li><a href="#" className="text-blue-700 hover:underline">UGC Notifications</a></li>
                                <li><a href="#" className="text-blue-700 hover:underline">NIRF Ranking 2024</a></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
