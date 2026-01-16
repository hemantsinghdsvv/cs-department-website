
"use client";

import { clubs } from "@/lib/data/studentResources";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, User, ArrowRight } from "lucide-react";

export default function ClubsPage() {
    return (
        <div className="container max-w-7xl mx-auto px-4 py-12 space-y-12">
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold font-heading text-primary">Student Societies</h1>
                <p className="text-slate-500 max-w-2xl mx-auto">
                    Join a club to pursue your passions, learn new skills, and connect with like-minded peers.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {clubs.map((club) => (
                    <Card key={club.id} className="overflow-hidden flex flex-col h-full border-primary/10 hover:shadow-xl transition-all duration-300">
                        <div className="relative h-48 w-full bg-slate-100">
                             <img src={club.image} alt={club.name} className="w-full h-full object-cover" />
                        </div>
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold text-slate-900">{club.name}</CardTitle>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <User className="h-4 w-4 text-accent" />
                                <span>Coordinator: {club.coordinator}</span>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-grow space-y-4">
                            <p className="text-slate-600">{club.description}</p>
                            <div>
                                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Activities</div>
                                <div className="flex flex-wrap gap-2">
                                    {club.activities.map((act, i) => (
                                        <Badge key={i} variant="secondary" className="bg-slate-100 text-slate-600 hover:bg-slate-200">
                                            {act}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="bg-slate-50 p-6 border-t border-slate-100">
                             <button className="w-full flex items-center justify-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all">
                                 Register for Club <ArrowRight className="h-4 w-4" />
                             </button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
