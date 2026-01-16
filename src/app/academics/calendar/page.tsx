"use client";

import React, { useState, useEffect } from "react";
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, eachDayOfInterval, isSameMonth, isSameDay, addMonths, subMonths, isToday } from "date-fns";
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, MapPin, Clock } from "lucide-react";
import { EventService } from "@/services/eventService";
import { Event } from "@/types";
import { cn } from "@/lib/utils";

export default function AcademicCalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [loading, setLoading] = useState(true);

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

  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));
  const goToToday = () => {
    const today = new Date();
    setCurrentDate(today);
    setSelectedDate(today);
  };

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const calendarDays = eachDayOfInterval({
    start: startDate,
    end: endDate,
  });

  const getEventsForDay = (day: Date) => {
    return events.filter(event => {
      const eventDate = event.startDate?.toDate();
      return eventDate && isSameDay(eventDate, day);
    });
  };

  const selectedDateEvents = getEventsForDay(selectedDate);
  
  // Get upcoming events for the sidebar list (sorted by date)
  const upcomingEvents = [...events]
    .filter(e => {
        const d = e.startDate?.toDate();
        return d && d >= new Date(); // Only future events
    })
    .sort((a, b) => (a.startDate?.toDate().getTime() || 0) - (b.startDate?.toDate().getTime() || 0));

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="mb-10">
            <h1 className="text-3xl font-bold text-slate-900 font-heading">Academic Calendar</h1>
            <p className="text-slate-600 mt-2">Schedule of academic activities, examinations, and departmental events.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Calendar Section (2/3) */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                {/* Calendar Header */}
                <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-white">
                    <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                        <CalendarIcon className="h-5 w-5 text-primary" />
                        {format(currentDate, "MMMM yyyy")}
                    </h2>
                    <div className="flex items-center gap-2">
                        <button onClick={prevMonth} className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-600">
                            <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button onClick={goToToday} className="px-3 py-1 text-sm font-medium bg-primary/5 text-primary rounded-md hover:bg-primary/10 transition-colors">
                            Today
                        </button>
                        <button onClick={nextMonth} className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-600">
                            <ChevronRight className="h-5 w-5" />
                        </button>
                    </div>
                </div>

                {/* Calendar Grid */}
                <div className="p-6">
                    {/* Days Header */}
                    <div className="grid grid-cols-7 mb-4">
                        {weekDays.map(day => (
                            <div key={day} className="text-center text-sm font-bold text-slate-400 uppercase tracking-wider py-2">
                                {day}
                            </div>
                        ))}
                    </div>

                    {/* Dates */}
                    <div className="grid grid-cols-7 gap-2">
                        {calendarDays.map((day, dayIdx) => {
                            const dayEvents = getEventsForDay(day);
                            const hasEvents = dayEvents.length > 0;
                            const isSelected = isSameDay(day, selectedDate);
                            
                            return (
                                <div key={day.toString()} className={cn(
                                    "aspect-square relative flex flex-col items-center justify-center rounded-lg cursor-pointer transition-all duration-200 border border-transparent hover:border-primary/20 hover:bg-slate-50",
                                    !isSameMonth(day, monthStart) && "text-slate-300 bg-slate-50/50",
                                    isSameMonth(day, monthStart) && "text-slate-700",
                                    isSelected && "bg-primary text-white shadow-md shadow-primary/20 hover:bg-primary hover:border-transparent ring-2 ring-primary ring-offset-2",
                                    isToday(day) && !isSelected && "bg-accent/10 text-accent font-bold",
                                )}
                                onClick={() => setSelectedDate(day)}
                                >
                                    <span className={cn("text-sm", isToday(day) && !isSelected && "text-accent")}>{format(day, "d")}</span>
                                    {hasEvents && (
                                        <div className="flex gap-0.5 mt-1">
                                            {dayEvents.slice(0, 3).map((_, i) => (
                                                <div key={i} className={cn(
                                                    "h-1.5 w-1.5 rounded-full",
                                                    isSelected ? "bg-white" : "bg-accent"
                                                )}></div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Selected Date Details */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <h3 className="text-lg font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">
                    Events for {format(selectedDate, "MMMM dd, yyyy")}
                </h3>
                {selectedDateEvents.length === 0 ? (
                    <p className="text-slate-500 text-sm py-4 italic">No events scheduled for this date.</p>
                ) : (
                    <div className="space-y-4">
                        {selectedDateEvents.map(event => (
                            <div key={event.id} className="flex gap-4 p-3 rounded-lg bg-slate-50 border border-slate-100 hover:border-primary/20 transition-colors">
                                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg border border-slate-200 flex items-center justify-center text-primary">
                                    <Clock className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">{event.title}</h4>
                                    <div className="flex items-center gap-4 mt-1 text-xs text-slate-500">
                                        <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {event.location}</span>
                                        {/* You can add time here if available in your type */}
                                    </div>
                                    {event.description && (
                                        <p className="text-sm text-slate-600 mt-2 line-clamp-2">{event.description}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
          </div>

          {/* Sidebar List (1/3) */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sticky top-24">
                <h3 className="text-lg font-bold text-slate-900 mb-6 font-heading">Upcoming Events</h3>
                
                {loading ? (
                    <div className="space-y-4">
                        {[1,2,3].map(i => <div key={i} className="h-20 bg-slate-100 rounded animate-pulse"></div>)}
                    </div>
                ) : upcomingEvents.length === 0 ? (
                    <p className="text-slate-500 text-sm">No upcoming events found.</p>
                ) : (
                    <div className="space-y-4 relative">
                        {/* Timeline Line */}
                        <div className="absolute left-3.5 top-2 bottom-2 w-0.5 bg-slate-100"></div>

                        {upcomingEvents.slice(0, 5).map((event, idx) => (
                            <div key={event.id} className="relative pl-10">
                                {/* Dot */}
                                <div className="absolute left-2 top-2 h-3.5 w-3.5 rounded-full border-2 border-white bg-primary shadow-sm z-10"></div>
                                
                                <div className="bg-slate-50 hover:bg-white p-3 rounded-lg border border-slate-100 hover:border-primary/20 hover:shadow-md transition-all group cursor-pointer">
                                    <span className="text-xs font-bold text-primary uppercase tracking-wider mb-1 block">
                                        {event.startDate ? format(event.startDate.toDate(), "MMM dd") : "TBA"}
                                    </span>
                                    <h4 className="font-semibold text-slate-800 text-sm group-hover:text-primary transition-colors line-clamp-2">
                                        {event.title}
                                    </h4>
                                    <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                                        {event.location}
                                    </p>
                                </div>
                            </div>
                        ))}
                        
                        {upcomingEvents.length > 5 && (
                            <div className="pt-2 pl-10">
                                <a href="/events" className="text-sm font-medium text-primary hover:underline">View all upcoming events &rarr;</a>
                            </div>
                        )}
                    </div>
                )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
