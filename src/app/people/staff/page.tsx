
"use client";

import Image from "next/image";
import { technicalStaff, adminStaff } from "@/lib/data/staffData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, Phone, Users } from "lucide-react";

export default function StaffDirectory() {
    return (
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
            
            {/* Hero */}
            <section className="text-center space-y-4 max-w-3xl mx-auto">
                 <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-2">
                    <Users className="h-4 w-4" />
                    <span>Support Team</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary">
                    Technical & Administrative <span className="text-accent">Staff</span>
                </h1>
                <p className="text-muted-foreground text-lg">
                    The backbone of our department, ensuring smooth operations and lab facilities.
                </p>
            </section>

            {/* Staff Lists */}
            <Tabs defaultValue="technical" className="w-full">
                <div className="flex justify-center mb-10">
                    <TabsList className="bg-slate-100 p-1">
                        <TabsTrigger value="technical" className="px-8 py-2">Technical Staff</TabsTrigger>
                        <TabsTrigger value="admin" className="px-8 py-2">Administrative Staff</TabsTrigger>
                    </TabsList>
                </div>

                <TabsContent value="technical" className="animate-in fade-in-50">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {technicalStaff.map((staff) => (
                            <div key={staff.id} className="flex gap-4 p-6 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="relative h-20 w-20 shrink-0 rounded-full overflow-hidden bg-slate-100 border-2 border-slate-50">
                                    <Image 
                                        src={staff.image} 
                                        alt={staff.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="font-bold text-lg text-slate-900">{staff.name}</h3>
                                    <p className="text-sm font-medium text-accent">{staff.designation}</p>
                                    <p className="text-xs text-muted-foreground">{staff.qualification}</p>
                                    {staff.email && (
                                        <div className="flex items-center gap-2 text-xs text-slate-500 mt-2">
                                            <Mail className="h-3 w-3" /> {staff.email}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </TabsContent>

                <TabsContent value="admin" className="animate-in fade-in-50">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {adminStaff.map((staff) => (
                            <div key={staff.id} className="flex gap-4 p-6 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="relative h-20 w-20 shrink-0 rounded-full overflow-hidden bg-slate-100 border-2 border-slate-50">
                                    <Image 
                                        src={staff.image} 
                                        alt={staff.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="font-bold text-lg text-slate-900">{staff.name}</h3>
                                    <p className="text-sm font-medium text-accent">{staff.designation}</p>
                                    <p className="text-xs text-muted-foreground">{staff.qualification}</p>
                                    {staff.email && (
                                        <div className="flex items-center gap-2 text-xs text-slate-500 mt-2">
                                            <Mail className="h-3 w-3" /> {staff.email}
                                        </div>
                                    )}
                                     {staff.phone && (
                                        <div className="flex items-center gap-2 text-xs text-slate-500">
                                            <Phone className="h-3 w-3" /> {staff.phone}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </TabsContent>
            </Tabs>

        </div>
    );
}
