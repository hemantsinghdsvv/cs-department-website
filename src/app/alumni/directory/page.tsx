
"use client";

import { alumniProfiles } from "@/lib/data/alumniData";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Briefcase, GraduationCap, Linkedin } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function DirectoryPage() {
    const [search, setSearch] = useState("");

    const filtered = alumniProfiles.filter(p => 
        p.name.toLowerCase().includes(search.toLowerCase()) || 
        p.company.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="container max-w-7xl mx-auto px-4 py-12 space-y-8">
            <div className="space-y-4">
                <h1 className="text-3xl font-bold font-heading text-primary">Alumni Directory</h1>
                <div className="relative max-w-xl">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input 
                        placeholder="Search by name, company, or batch..." 
                        className="pl-10 h-10"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filtered.map((alum) => (
                    <Card key={alum.id} className="hover:shadow-md transition-shadow group relative overflow-hidden">
                        {alum.isDistinguished && (
                            <div className="absolute top-0 right-0 bg-accent text-slate-900 text-[10px] font-bold px-2 py-1 z-10 rounded-bl-lg">
                                DISTINGUISHED
                            </div>
                        )}
                        <CardContent className="p-6 text-center space-y-4 pt-8">
                            <img src={alum.image} alt={alum.name} className="h-24 w-24 rounded-full mx-auto object-cover border-4 border-slate-50 shadow-sm" />
                            <div>
                                <h3 className="font-bold text-lg text-slate-900">{alum.name}</h3>
                                <p className="text-sm text-slate-500 font-medium">{alum.designation}</p>
                                <p className="text-xs font-bold text-primary mt-1">{alum.company}</p>
                            </div>
                            
                            <div className="pt-4 border-t border-slate-100 space-y-2 text-sm text-slate-600 text-left">
                                <div className="flex items-center gap-2">
                                    <GraduationCap className="h-3.5 w-3.5 text-slate-400" />
                                    <span>{alum.program} ({alum.batch})</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin className="h-3.5 w-3.5 text-slate-400" />
                                    <span className="truncate">{alum.location}</span>
                                </div>
                            </div>

                           <div className="pt-2">
                                <Link href="#" className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:underline">
                                    <Linkedin className="h-3 w-3" /> Connect on LinkedIn
                                </Link>
                           </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
