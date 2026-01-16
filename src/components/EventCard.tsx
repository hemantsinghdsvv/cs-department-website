import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Event } from "@/types";
import { format } from "date-fns";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  const startDate = event.startDate?.toDate();
  
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-slate-200">
      <div className="flex flex-col md:flex-row h-full">
        {/* Date Column */}
        <div className="md:w-32 bg-primary text-white flex flex-col items-center justify-center p-6 shrink-0">
          <span className="text-xs font-bold uppercase tracking-widest text-white/70">
            {startDate ? format(startDate, "MMM") : "-"}
          </span>
          <span className="text-3xl font-extrabold font-heading">
            {startDate ? format(startDate, "dd") : "-"}
          </span>
          <span className="text-xs font-semibold text-accent mt-1">
            {startDate ? format(startDate, "yyyy") : "-"}
          </span>
        </div>
        
        {/* Content Column */}
        <div className="flex-1 p-6 flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors leading-tight">
              {event.title}
            </h3>
            <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">
              {event.description}
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                    <MapPin className="h-3.5 w-3.5 text-accent" />
                    <span>{event.location}</span>
                </div>
                {event.startDate && (
                    <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                        <Clock className="h-3.5 w-3.5 text-accent" />
                        <span>{format(startDate, "hh:mm a")} onwards</span>
                    </div>
                )}
            </div>
          </div>
          
          <div className="mt-6 pt-4 border-t border-slate-100">
             <Link href={`/events/${event.id}`} className="text-sm font-bold text-primary group-hover:text-accent flex items-center gap-1 transition-all">
                Event Details <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
             </Link>
          </div>
        </div>
      </div>
    </Card>
  );
}
