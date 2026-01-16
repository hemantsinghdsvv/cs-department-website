
"use client";

import { contactDetails, keyContacts, officeHours } from "@/lib/data/contactData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Send, Info } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            
            {/* 1. Header Hero */}
            <div className="bg-slate-900 text-white py-16 md:py-24">
                <div className="container max-w-7xl mx-auto px-4 text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold">Contact Us</h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Have a question? We're here to help. Reach out to our administrative team or faculty members.
                    </p>
                </div>
            </div>

            <div className="container max-w-7xl mx-auto px-4 py-12 -mt-10">
                <div className="grid lg:grid-cols-3 gap-8">
                    
                    {/* 2. Contact Information Cards */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* Address & Main Contact */}
                        <Card className="shadow-lg border-none">
                            <CardContent className="p-6 space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                                        <MapPin className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-1">Our Location</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">{contactDetails.address}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-1">Email Us</h3>
                                        <a href={`mailto:${contactDetails.email}`} className="text-slate-600 text-sm hover:text-primary transition-colors">
                                            {contactDetails.email}
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                                        <Phone className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-1">Call Us</h3>
                                        <a href={`tel:${contactDetails.phone}`} className="text-slate-600 text-sm hover:text-primary transition-colors">
                                            {contactDetails.phone}
                                        </a>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Office Hours */}
                        <Card className="shadow-lg border-none bg-slate-900 text-white">
                            <CardContent className="p-6 space-y-4">
                                <h3 className="font-bold text-lg flex items-center gap-2">
                                    <Clock className="h-5 w-5 text-accent" /> Office Hours
                                </h3>
                                <div className="space-y-2 text-sm text-slate-300">
                                    {officeHours.map((hour, i) => (
                                        <div key={i} className="flex justify-between">
                                            <span>{hour.day}</span>
                                            <span className="font-semibold text-white">{hour.time}</span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Quick Links */}
                        <div className="grid grid-cols-2 gap-4">
                            <Button variant="outline" className="h-auto py-4 flex flex-col gap-2 bg-white hover:bg-slate-50 border-slate-200" asChild>
                                <Link href="/contact/feedback">
                                    <Send className="h-5 w-5 text-primary" />
                                    <span>Feedback / Grievance</span>
                                </Link>
                            </Button>
                             <Button variant="outline" className="h-auto py-4 flex flex-col gap-2 bg-white hover:bg-slate-50 border-slate-200" asChild>
                                <Link href="/contact/rti">
                                    <Info className="h-5 w-5 text-primary" />
                                    <span>RTI & Compliance</span>
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* 3. Inquiry Form & Map */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Map */}
                        <div className="h-64 md:h-80 w-full rounded-xl overflow-hidden shadow-md bg-slate-200 relative">
                             <iframe 
                                src={contactDetails.mapUrl} 
                                width="100%" 
                                height="100%" 
                                style={{ border: 0 }} 
                                allowFullScreen 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>

                        {/* Form */}
                        <Card className="shadow-lg border-none">
                            <CardContent className="p-8 space-y-6">
                                <div>
                                    <h2 className="text-2xl font-bold font-heading text-slate-900">Send us a Message</h2>
                                    <p className="text-slate-500">We will get back to you within 24 hours.</p>
                                </div>
                                <form className="space-y-4">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-slate-700">Your Name</label>
                                            <Input placeholder="John Doe" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-slate-700">Email Address</label>
                                            <Input type="email" placeholder="john@example.com" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-700">Subject</label>
                                        <Input placeholder="Admission Inquiry / Collaboration" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-700">Message</label>
                                        <Textarea placeholder="How can we help you?" className="h-32" />
                                    </div>
                                    <Button type="button" className="w-full md:w-auto bg-primary text-white hover:bg-primary/90 gap-2">
                                        Send Message <Send className="h-4 w-4" />
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>

                </div>

                {/* 4. Directory Strip */}
                <div className="mt-16 pt-12 border-t border-slate-200">
                    <h2 className="text-2xl font-bold font-heading text-slate-900 mb-8 text-center">Key Department Contacts</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {keyContacts.map((person) => (
                            <div key={person.id} className="flex items-center gap-4 bg-white p-4 rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                <img src={person.image} alt={person.name} className="h-12 w-12 rounded-full bg-slate-100" />
                                <div>
                                    <div className="text-xs font-bold text-primary uppercase tracking-wider mb-1">{person.role}</div>
                                    <h3 className="font-bold text-slate-900">{person.name}</h3>
                                    <a href={`mailto:${person.email}`} className="text-sm text-slate-500 hover:text-primary block mt-1">{person.email}</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
