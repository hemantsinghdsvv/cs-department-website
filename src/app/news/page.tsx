"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { NoticeService } from "@/services/noticeService";
import { EventService } from "@/services/eventService";
import { Notice, Event } from "@/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
    Calendar, 
    Clock, 
    MapPin, 
    ArrowRight, 
    FileText,
    Bell
} from "lucide-react";
import { format } from "date-fns";
import { Timestamp } from "firebase/firestore";

export default function NewsPage() {
    const [notices, setNotices] = useState<Notice[]>([]);
    const [events, setEvents] = useState<Event[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [noticesData, eventsData] = await Promise.all([
                    NoticeService.getAll(),
                    EventService.getAll()
                ]);
                
                // Sort notices by date desc
                const sortedNotices = noticesData.sort((a,b) => {
                    const dateA = a.date instanceof Timestamp ? a.date.toMillis() : 0;
                    const dateB = b.date instanceof Timestamp ? b.date.toMillis() : 0;
                    return dateB - dateA;
                });

                // Filter upcoming events and sort
                const now = new Date();
                const upcomingEvents = eventsData
                    .filter(e => {
                        const eventDate = e.startDate instanceof Timestamp ? e.startDate.toDate() : new Date(e.startDate);
                        // Show all events for now to ensure data visibility, or filter if strict upcoming required
                        return true; 
                    })
                    .sort((a,b) => {
                         const dateA = a.startDate instanceof Timestamp ? a.startDate.toMillis() : 0;
                         const dateB = b.startDate instanceof Timestamp ? b.startDate.toMillis() : 0;
                         return dateA - dateB;
                    });

                setNotices(sortedNotices);
                setEvents(upcomingEvents);
            } catch (error) {
                console.error("Error fetching news/events:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const getNoticeIcon = (type: string) => {
        return <Bell className="h-5 w-5 text-primary" />;
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="flex flex-col items-center gap-4">
                    <div className="animate-spin h-10 w-10 border-4 border-primary border-t-transparent rounded-full font-heading"></div>
                    <p className="text-slate-500 font-medium tracking-wide animate-pulse">Loading Department Updates...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50">
            
            {/* Page Header */}
            <div className="bg-white border-b border-slate-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-slate-50/50" style={{backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '24px 24px', opacity: 0.5}}></div>
                <div className="container mx-auto px-4 py-16 relative z-10">
                    <div className="max-w-4xl">
                        <Badge variant="outline" className="mb-4 bg-white/80 backdrop-blur border-slate-300 text-slate-600 px-3 py-1">
                            Department Portal
                        </Badge>
                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-4 tracking-tight">
                            News & <span className="text-primary">Announcements</span>
                        </h1>
                        <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
                            Stay informed with the latest updates, circulars, and events from the Computer Science department.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="grid lg:grid-cols-12 gap-10">
                    
                    {/* Left Column: Notices (4 cols) */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden sticky top-24">
                            <div className="p-5 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
                                <h2 className="font-bold text-lg text-slate-800 flex items-center gap-2">
                                    <Bell className="h-5 w-5 text-primary" /> Latest Notices
                                </h2>
                                <Link href="/students/notices" className="text-xs font-semibold uppercase tracking-wider text-primary hover:underline">
                                    View All
                                </Link>
                            </div>
                            
                            <div className="divide-y divide-slate-100 max-h-[600px] overflow-y-auto custom-scrollbar">
                                {notices.length === 0 ? (
                                    <div className="text-center py-12 px-6">
                                        <div className="bg-slate-50 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-3">
                                            <FileText className="h-6 w-6 text-slate-300" />
                                        </div>
                                        <p className="text-slate-500 text-sm">No notices currently active.</p>
                                    </div>
                                ) : (
                                    notices.map((notice) => (
                                        <div key={notice.id} className="p-5 hover:bg-slate-50 transition-colors group cursor-pointer">
                                            <div className="flex gap-4">
                                                <div className="shrink-0 mt-1">
                                                    <div className="h-10 w-10 rounded-lg bg-slate-100 flex items-center justify-center group-hover:bg-white group-hover:shadow-sm transition-all border border-transparent group-hover:border-slate-200">
                                                        {getNoticeIcon(notice.type)}
                                                    </div>
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2 mb-1.5">
                                                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                                                            {notice.date instanceof Timestamp ? format(notice.date.toDate(), "MMM d") : "N/A"}
                                                        </span>
                                                        {notice.isPinned && (
                                                            <span className="bg-amber-100 text-amber-700 text-[10px] font-bold px-1.5 py-0.5 rounded border border-amber-200">
                                                                PINNED
                                                            </span>
                                                        )}
                                                    </div>
                                                    <h3 className="text-sm font-semibold text-slate-900 leading-snug group-hover:text-primary transition-colors line-clamp-2">
                                                        {notice.title}
                                                    </h3>
                                                    <div className="flex items-center gap-2 mt-2">
                                                        <Badge variant="secondary" className="text-[10px] h-5 px-1.5 font-normal capitalize bg-slate-100 text-slate-500 border-slate-200">
                                                            {notice.type}
                                                        </Badge>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Events (8 cols) */}
                    <div className="lg:col-span-8 space-y-6">
                         <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                            <h2 className="text-2xl font-bold font-heading text-slate-900 flex items-center gap-3">
                                <Calendar className="h-6 w-6 text-primary" /> Upcoming Events
                            </h2>
                            <Button variant="outline" size="sm" asChild className="hidden sm:flex hover:bg-slate-50">
                                <Link href="/events">View Full Calendar</Link>
                            </Button>
                        </div>
                        
                        <div className="space-y-4">
                            {/* Events List - Limit to 6 */}
                            {events.length === 0 ? (
                                <div className="py-20 bg-white rounded-xl border border-dashed border-slate-300 text-center">
                                    <Calendar className="h-16 w-16 text-slate-200 mx-auto mb-4" />
                                    <h3 className="text-lg font-medium text-slate-900">No events scheduled</h3>
                                    <p className="text-slate-500 mt-1">Check back later for workshops, seminars, and activities.</p>
                                </div>
                            ) : (
                                <>
                                    {events.slice(0, 6).map((event) => (
                                        <div key={event.id} className="group bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col sm:flex-row h-full sm:h-40">
                                            <div className="sm:w-48 h-48 sm:h-full relative shrink-0 bg-slate-100 overflow-hidden">
                                                {event.image ? (
                                                     <img 
                                                        src={event.image} 
                                                        alt={event.title} 
                                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                                                    />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center bg-slate-50 text-slate-300">
                                                        <Calendar className="h-10 w-10 opacity-50" />
                                                    </div>
                                                )}
                                                
                                                <div className="absolute top-2 left-2 bg-white/95 backdrop-blur-sm px-2 py-1 rounded shadow-sm text-center min-w-[50px] border border-white/20">
                                                    <div className="text-[10px] font-bold text-red-600 uppercase tracking-wide">
                                                        {event.startDate instanceof Timestamp ? format(event.startDate.toDate(), "MMM") : "TBA"}
                                                    </div>
                                                    <div className="text-lg font-bold text-slate-900 leading-none mt-0.5 font-heading">
                                                        {event.startDate instanceof Timestamp ? format(event.startDate.toDate(), "d") : "?"}
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                                                <div>
                                                    <div className="flex justify-between items-start gap-4 mb-2">
                                                        <h3 className="font-bold text-lg text-slate-900 leading-tight group-hover:text-primary transition-colors line-clamp-2">
                                                            {event.title}
                                                        </h3>
                                                        <span className="shrink-0 text-[10px] font-semibold uppercase tracking-wider text-slate-400 bg-slate-50 px-2 py-1 rounded border border-slate-100 hidden sm:inline-block">
                                                            Event
                                                        </span>
                                                    </div>
                                                    
                                                    <div className="space-y-1.5">
                                                        <div className="flex items-center gap-2 text-sm text-slate-600">
                                                            <Clock className="h-3.5 w-3.5 text-slate-400 shrink-0" /> 
                                                            <span>{event.startDate instanceof Timestamp ? format(event.startDate.toDate(), "EEEE, h:mm a") : "Time TBA"}</span>
                                                        </div>
                                                        <div className="flex items-center gap-2 text-sm text-slate-600">
                                                            <MapPin className="h-3.5 w-3.5 text-slate-400 shrink-0" /> 
                                                            <span className="truncate line-clamp-1">{event.location}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div className="mt-4 flex items-center justify-end">
                                                    <Link href={`/events/${event.id}`} className="text-sm font-semibold text-primary flex items-center hover:underline group-hover:translate-x-1 transition-transform">
                                                        View Details <ArrowRight className="h-4 w-4 ml-1" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    
                                    {events.length > 6 && (
                                        <div className="text-center pt-4">
                                            <Button variant="ghost" className="text-primary hover:bg-slate-50" asChild>
                                                <Link href="/events">View All {events.length} Events <ArrowRight className="ml-2 h-4 w-4" /></Link>
                                            </Button>
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
