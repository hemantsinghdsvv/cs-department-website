"use client";

import React, { useEffect, useState } from "react";
import { EventService } from "@/services/eventService";
import { EventCard } from "@/components/EventCard";
import { Event } from "@/types";
import { Calendar, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await EventService.getAll();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  const filteredEvents = events.filter(event => 
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12 space-y-6">
        <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
            <span className="flex h-2 w-2 rounded-full bg-accent mr-2"></span>
            Upcoming Events
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary font-heading">
                Events & <span className="text-accent">Happenings</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Explore upcoming workshops, conferences, seminars, and cultural activities organized by the department.
            </p>
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
                placeholder="Search events..." 
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      {loading ? (
        <div className="grid gap-6 md:grid-cols-1">
            {[1,2].map(i => (
                <div key={i} className="h-48 bg-slate-100 rounded-xl animate-pulse" />
            ))}
        </div>
      ) : filteredEvents.length === 0 ? (
        <div className="text-center py-20 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
          <Calendar className="h-12 w-12 text-slate-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-slate-900">No events found</h3>
          <p className="text-slate-500">Stay tuned for upcoming departmental events!</p>
        </div>
      ) : (
        <div className="grid gap-8">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}
    </div>
  );
}
