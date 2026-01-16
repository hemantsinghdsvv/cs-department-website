
"use client";

import { events } from "@/lib/data/eventsData";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock } from "lucide-react";

export default function EventsCalendarPage() {
    return (
        <div className="container max-w-5xl mx-auto px-4 py-12 space-y-8">
            <div className="text-center space-y-2">
                <h1 className="text-3xl font-bold font-heading text-primary">Department Calendar</h1>
                <p className="text-slate-500">Upcoming and past events, seminars, and workshops.</p>
            </div>

            <div className="grid gap-6">
                {events.map((event) => (
                    <Card key={event.id} className={`overflow-hidden ${!event.isUpcoming ? 'opacity-70 bg-slate-50' : 'border-l-4 border-l-primary'}`}>
                        <div className="flex flex-col md:flex-row">
                            <div className="md:w-1/4 bg-slate-100 p-6 flex flex-col items-center justify-center text-center">
                                <span className="text-sm font-bold text-slate-500 uppercase">{event.date.split(" ")[0]}</span>
                                <span className="text-3xl font-bold text-slate-900">{event.date.split(" ")[1].replace(",","")}</span>
                                <span className="text-xs text-slate-400 mt-1">{event.date.split(" ")[2]}</span>
                            </div>
                            <CardContent className="md:w-3/4 p-6 space-y-3">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <Badge variant={event.isUpcoming ? "default" : "secondary"} className="mb-2">
                                            {event.isUpcoming ? "Upcoming" : "Past Event"}
                                        </Badge>
                                        <h3 className="text-xl font-bold text-slate-900">{event.title}</h3>
                                    </div>
                                    {event.isUpcoming && <Button size="sm">Register</Button>}
                                </div>
                                <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                                    <div className="flex items-center gap-1">
                                        <Clock className="h-4 w-4" /> {event.time}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <MapPin className="h-4 w-4" /> {event.location}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Calendar className="h-4 w-4" /> {event.type}
                                    </div>
                                </div>
                                <p className="text-slate-600">{event.description}</p>
                            </CardContent>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}
