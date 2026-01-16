
"use client";

import { alumniEvents } from "@/lib/data/alumniData";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock } from "lucide-react";

export default function AlumniEventsPage() {
    return (
        <div className="container max-w-5xl mx-auto px-4 py-12 space-y-8">
            <div className="text-center space-y-2">
                <h1 className="text-3xl font-bold font-heading text-primary">Reunions & Events</h1>
                <p className="text-slate-500">Upcoming gatherings and networking sessions.</p>
            </div>

            <div className="space-y-6">
                {alumniEvents.map((event) => (
                    <Card key={event.id} className="overflow-hidden">
                        <div className="flex flex-col md:flex-row">
                            <div className="md:w-1/3 bg-slate-100 relative h-48 md:h-auto">
                                <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                            </div>
                            <CardContent className="md:w-2/3 p-6 space-y-4">
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">
                                            {event.type}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900">{event.title}</h3>
                                </div>
                                
                                <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="h-4 w-4 text-accent" /> {event.date}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <MapPin className="h-4 w-4 text-accent" /> {event.location}
                                    </div>
                                </div>

                                <p className="text-slate-600">{event.description}</p>

                                <div className="pt-2">
                                    <Button>Register Now</Button>
                                </div>
                            </CardContent>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}
