
"use client";

import { useEffect, useState } from "react";
import { FacultyService } from "@/services/facultyService";
import { NoticeService } from "@/services/noticeService";
import { EventService } from "@/services/eventService";
import { PublicationService } from "@/services/publicationService";
import { AuthService } from "@/services/authService";
import { DashboardStats } from "@/components/admin/DashboardStats";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, ChevronRight, FileText, Calendar } from "lucide-react";
import Link from "next/link";
import { format } from "date-fns";

export default function DashboardPage() {
  const [stats, setStats] = useState({
    faculty: 0,
    notices: 0,
    events: 0,
    publications: 0
  });
  const [user, setUser] = useState<any>(null);
  const [recentActivity, setRecentActivity] = useState<any[]>([]);

  useEffect(() => {
    const loadData = async () => {
        try {
            const currentUser = await AuthService.getCurrentUser();
            setUser(currentUser);

            // Fetch all data in parallel
            const [faculty, notices, events, publications] = await Promise.all([
                FacultyService.getAll(),
                NoticeService.getAll(),
                EventService.getAll(),
                PublicationService.getAll()
            ]);
            
            setStats({
                faculty: faculty.length,
                notices: notices.length,
                events: events.length,
                publications: publications.length
            });

            // Combine notices and events for recent activity feed
            const combinedData = [
                ...notices.map(n => ({ ...n, type: 'notice', date: n.date?.toDate() })),
                ...events.map(e => ({ ...e, type: 'event', date: e.startDate?.toDate() }))
            ].sort((a, b) => (b.date?.getTime() || 0) - (a.date?.getTime() || 0))
             .slice(0, 5);
             
            setRecentActivity(combinedData);

        } catch (e) {
            console.error("Failed to load dashboard data", e);
        }
    };
    loadData();
  }, []);

  return (
    <div className="space-y-8 max-w-[1600px] mx-auto min-h-screen">
      
      {/* 1. Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-200">
        <div className="space-y-1">
            <h1 className="text-4xl font-bold font-heading text-slate-900 tracking-tight">
                Overview
            </h1>
            <p className="text-slate-500 font-medium text-lg">
               Welcome back, <span className="text-primary font-semibold">{user?.email?.split('@')[0] || "Admin"}</span>.
            </p>
        </div>
        <div className="flex items-center gap-3">
             <div className="text-right hidden md:block mr-2 px-4 py-2 bg-white rounded-lg border border-slate-200 shadow-sm">
                 <div className="text-sm font-bold text-slate-800">{format(new Date(), "MMM d, yyyy")}</div>
                 <div className="text-xs font-medium text-slate-400">{format(new Date(), "EEEE")}</div>
             </div>
             <Button asChild className="h-12 px-6 rounded-xl shadow-lg shadow-primary/20 bg-primary hover:bg-primary/90 transition-all hover:-translate-y-0.5 font-semibold">
                 <Link href="/admin/notices"><Plus className="h-5 w-5 mr-2"/> Create New</Link>
             </Button>
        </div>
      </div>

      {/* 2. Stats Grid */}
      <DashboardStats stats={stats} />

      {/* 3. Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* Left Col: Recent Activity */}
        <Card className="lg:col-span-2 border-none shadow-sm bg-white">
            <CardHeader className="flex flex-row items-center justify-between border-b border-slate-100 pb-4">
                <div>
                    <CardTitle className="text-xl font-bold font-heading text-slate-900">Recent Updates</CardTitle>
                    <CardDescription>Live activity feed from the portal</CardDescription>
                </div>
                <Button variant="ghost" size="sm" asChild>
                    <Link href="/admin/notices" className="text-primary font-semibold hover:bg-primary/5">View Full Log <ChevronRight className="h-4 w-4 ml-1" /></Link>
                </Button>
            </CardHeader>
            <CardContent className="p-0">
                <div className="divide-y divide-slate-50">
                    {recentActivity.length === 0 ? (
                        <div className="text-center py-12">
                             <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FileText className="h-8 w-8 text-slate-300" />
                             </div>
                             <p className="text-slate-500">No recent activity found.</p>
                             <p className="text-xs text-slate-400 mt-1">Updates will appear here dynamically.</p>
                        </div>
                    ) : (
                        recentActivity.map((item, i) => (
                            <div key={i} className="flex items-center gap-4 p-5 hover:bg-slate-50 transition-colors group">
                                <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${item.type === 'notice' ? 'bg-amber-100 text-amber-600' : 'bg-blue-100 text-blue-600'}`}>
                                    {item.type === 'notice' ? <FileText className="h-5 w-5" /> : <Calendar className="h-5 w-5" />}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-semibold text-slate-900 truncate group-hover:text-primary transition-colors">{item.title}</p>
                                    <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
                                        <span className="capitalize">{item.type}</span>
                                        <span>•</span>
                                        <span>{item.date ? format(item.date, "MMM d, h:mm a") : "Just now"}</span>
                                    </div>
                                </div>
                                <Button variant="ghost" size="icon" className="text-slate-300 opacity-0 group-hover:opacity-100 transition-all">
                                     <ChevronRight className="h-4 w-4" />
                                </Button>
                            </div>
                        ))
                    )}
                </div>
            </CardContent>
        </Card>

        {/* Right Col: Quick Actions */}
        <div className="space-y-6">
             <Card className="border-none shadow-sm bg-white">
                <CardHeader>
                    <CardTitle className="text-lg font-bold text-slate-900">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    <Button variant="outline" className="w-full justify-start h-12 border-slate-200 hover:border-primary hover:text-primary transition-all font-medium text-slate-600" asChild>
                        <Link href="/admin/faculty">
                            <Plus className="h-4 w-4 mr-3" /> Add Faculty
                        </Link>
                    </Button>
                    <Button variant="outline" className="w-full justify-start h-12 border-slate-200 hover:border-primary hover:text-primary transition-all font-medium text-slate-600" asChild>
                        <Link href="/admin/events">
                            <Plus className="h-4 w-4 mr-3" /> Schedule Event
                        </Link>
                    </Button>
                    <Button variant="outline" className="w-full justify-start h-12 border-slate-200 hover:border-primary hover:text-primary transition-all font-medium text-slate-600" asChild>
                        <Link href="/admin/publications">
                            <Plus className="h-4 w-4 mr-3" /> Add Publication
                        </Link>
                    </Button>
                    <Button variant="outline" className="w-full justify-start h-12 border-slate-200 hover:border-primary hover:text-primary transition-all font-medium text-slate-600" asChild>
                         <Link href="/admin/notices">
                            <Plus className="h-4 w-4 mr-3" /> Post Notice
                        </Link>
                    </Button>
                </CardContent>
            </Card>

             <Card className="bg-slate-900 text-white border-none shadow-lg relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
                 <CardContent className="p-6 relative z-10">
                     <h3 className="font-bold text-lg mb-2">Need Help?</h3>
                     <p className="text-sm text-slate-400 mb-4">Check the admin documentation or contact technical support.</p>
                     <Button size="sm" variant="secondary" className="w-full">View Documentation</Button>
                 </CardContent>
             </Card>
        </div>

      </div>
    </div>
  );
}
