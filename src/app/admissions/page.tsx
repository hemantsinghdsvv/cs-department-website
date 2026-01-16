
"use client";

import Link from "next/link";
import { admissionTimeline, programsInfo, faqs } from "@/lib/data/admissionsData";
import Timeline from "@/components/admissions/Timeline";
import EligibilityCard from "@/components/admissions/EligibilityCard";
import { 
    Accordion, 
    AccordionContent, 
    AccordionItem, 
    AccordionTrigger 
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
    Download, 
    Phone, 
    Mail, 
    Calendar, 
    HelpCircle, 
    CheckCircle, 
    GraduationCap,
    ArrowRight,
    FileText,
    User
} from "lucide-react";

export default function AdmissionsPage() {
    return (
        <div className="min-h-screen bg-white">
            
            {/* 1. Hero Section */}
            <section className="bg-slate-900 text-white py-20 md:py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center opacity-10"></div>
                <div className="container relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
                    <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">
                        Begin Your <span className="text-accent">Journey</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        Join a community of innovators and thinkers. Apply now for our Undergraduate, Postgraduate, and Doctoral programs for the upcoming academic session.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                        <Button size="lg" className="bg-accent text-slate-900 hover:bg-white hover:text-slate-900 font-bold px-8" asChild>
                            <Link href="https://dsvv.ac.in/admissions" target="_blank">Apply Online</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10" asChild>
                            <Link href="#brochure">Download Brochure</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* 2. Why Choose Us (Quick Stats/Icons) */}
            <section className="py-16 bg-slate-50 border-b border-slate-100">
                <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { icon: CheckCircle, title: "NAAC 'A+'", desc: "Accredited University" },
                            { icon: GraduationCap, title: "100%", desc: "Placement Assistance" },
                            { icon: User, title: "1:15", desc: "Faculty-Student Ratio" }, // Replaced User with div below
                            { icon: Calendar, title: "Value Based", desc: "Education System" } // Replaced Calendar with div below
                        ].map((item, i) => (
                             <div key={i} className="space-y-3">
                                <div className="h-12 w-12 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm text-primary">
                                    <item.icon className="h-6 w-6" />
                                </div>
                                <div>
                                    <div className="font-bold text-slate-900 text-lg">{item.title}</div>
                                    <div className="text-sm text-slate-500">{item.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

             {/* 3. Programs & Eligibility */}
             <section className="py-20 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Academic Programs</h2>
                    <p className="text-slate-600 text-lg">
                        Explore our diverse range of courses designed to equip you with future-ready skills.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {programsInfo.map((program) => (
                        <EligibilityCard key={program.id} program={program} />
                    ))}
                </div>
             </section>

            {/* 4. Admission Process Timeline */}
            <section className="py-20 bg-slate-50">
                <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row gap-12">
                        <div className="md:w-1/3 space-y-6">
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">Admission Process</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Follow these simple steps to secure your seat at DSVV. Stay updated with the key dates.
                            </p>
                            <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                                <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                                    <HelpCircle className="h-4 w-4 text-accent" /> Need Help?
                                </h4>
                                <p className="text-sm text-slate-500 mb-4">
                                    Contact our admission cell for guidance.
                                </p>
                                <div className="space-y-2 text-sm">
                                    <div className="flex items-center gap-2 text-slate-700">
                                        <Phone className="h-4 w-4 text-slate-400" /> +91-9876543210
                                    </div>
                                    <div className="flex items-center gap-2 text-slate-700">
                                        <Mail className="h-4 w-4 text-slate-400" /> admissions@dsvv.ac.in
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-2/3">
                            <Timeline steps={admissionTimeline} />
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. FAQs */}
            <section className="py-20 container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
                <div className="text-center">
                    <h2 className="text-3xl font-heading font-bold text-primary mb-2">Frequently Asked Questions</h2>
                    <p className="text-slate-500">Answers to common queries about admission, fees, and campus life.</p>
                </div>
                
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq) => (
                        <AccordionItem key={faq.id} value={faq.id}>
                            <AccordionTrigger className="text-left text-slate-900 font-medium">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-slate-600 leading-relaxed">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </section>

             {/* 6. Brochure Download CTA (ID for scrolling) */}
             <section id="brochure" className="py-20 bg-primary text-white">
                <div className="container max-w-7xl mx-auto px-4 text-center space-y-8">
                    <Download className="h-16 w-16 text-accent mx-auto" />
                    <h2 className="text-3xl md:text-5xl font-heading font-bold">Download Admission Brochure</h2>
                    <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
                        Get detailed information about curriculum, faculty, facilities, and placement statistics in our comprehensive brochure.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button size="lg" className="bg-white text-primary hover:bg-slate-100 gap-2" asChild>
                            <Link href="/files/brochure-2024.pdf" target="_blank"> // Placeholder link
                                <FileText className="h-4 w-4" /> Download PDF
                            </Link>
                        </Button>
                    </div>
                </div>
             </section>

        </div>
    );
}

