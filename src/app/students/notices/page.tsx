"use client";

import { useState, useEffect } from "react";
import { NoticeService } from "@/services/noticeService";
import { Notice } from "@/types";
import { format } from "date-fns";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Bell, Download } from "lucide-react";


export default function NoticesPage() {
    const [search, setSearch] = useState("");
    const [notices, setNotices] = useState<Notice[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNotices = async () => {
            try {
                const data = await NoticeService.getAll();
                setNotices(data);
            } catch (error) {
                console.error("Failed to fetch notices", error);
            } finally {
                setLoading(false);
            }
        };
        fetchNotices();
    }, []);

    const filteredNotices = notices.filter(n => n.title.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className="container max-w-5xl mx-auto px-4 py-12 space-y-8">
            <div className="text-center space-y-4">
                <h1 className="text-3xl font-bold font-heading text-primary">Notices & Circulars</h1>
                <p className="text-slate-500">Official announcements from the department.</p>
                <div className="relative max-w-md mx-auto">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input 
                        placeholder="Search notices..." 
                        className="pl-10"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>

            <div className="space-y-4">
                {loading ? (
                    <div className="text-center py-12">
                         <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
                         <p className="text-slate-500">Loading notices...</p>
                    </div>
                ) : filteredNotices.length === 0 ? (
                    <div className="text-center py-12 bg-slate-50 rounded-lg">
                        <Bell className="h-12 w-12 text-slate-300 mx-auto mb-3" />
                        <h3 className="text-lg font-medium text-slate-900">No notices found</h3>
                        <p className="text-slate-500">Check back later for updates.</p>
                    </div>
                ) : (
                    filteredNotices.map((notice) => (
                        <Card key={notice.id} className="hover:shadow-md transition-shadow">
                            <CardContent className="p-6 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                                <div className="flex gap-4 items-start">
                                    <div className="h-12 w-12 rounded-full bg-primary/5 flex items-center justify-center shrink-0 text-primary">
                                        <Bell className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <div className="flex flex-wrap gap-2 items-center mb-1">
                                            <Badge variant="secondary" className="text-xs font-normal capitalize">{notice.category || notice.type || 'General'}</Badge>
                                            <span className="text-xs text-slate-400">
                                                {notice.date ? format(notice.date.toDate(), "dd MMM yyyy") : "Recent"}
                                            </span>
                                            {notice.isPinned && <Badge className="bg-red-500 h-5 px-1.5 text-[10px]">PINNED</Badge>}
                                        </div>
                                        <h3 className="font-semibold text-slate-900 text-lg leading-snug">{notice.title}</h3>
                                        {notice.content && <p className="text-sm text-slate-500 mt-1 line-clamp-2">{notice.content}</p>}
                                    </div>
                                </div>
                                <Badge variant="outline" className="cursor-pointer hover:bg-slate-50 gap-1 pl-2 pr-3 py-1.5">
                                    <Download className="h-3 w-3" /> View Details
                                </Badge>
                            </CardContent>
                        </Card>
                    ))
                )}
            </div>
        </div>
    );
}
