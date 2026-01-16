"use client";

import React, { useEffect, useState } from "react";
import { NoticeService } from "@/services/noticeService";
import { NoticeCard } from "@/components/NoticeCard";
import { Notice } from "@/types";
import { Bell, Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function NoticesPage() {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const data = await NoticeService.getAll();
        setNotices(data);
      } catch (error) {
        console.error("Error fetching notices:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchNotices();
  }, []);

  const filteredNotices = notices.filter(notice => 
    notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    notice.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12 space-y-6">
        <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
            <span className="flex h-2 w-2 rounded-full bg-accent mr-2"></span>
            Real-time Updates
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary font-heading">
                Notice <span className="text-accent">Board</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Stay informed about examinations, admissions, guest lectures, and other departmental activities.
            </p>
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
                placeholder="Search notices..." 
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      {loading ? (
        <div className="grid gap-6">
            {[1,2,3].map(i => (
                <div key={i} className="h-32 bg-slate-100 rounded-xl animate-pulse" />
            ))}
        </div>
      ) : filteredNotices.length === 0 ? (
        <div className="text-center py-20 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
          <Bell className="h-12 w-12 text-slate-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-slate-900">No notices found</h3>
          <p className="text-slate-500">Try adjusting your search or check back later.</p>
        </div>
      ) : (
        <div className="grid gap-6">
          {filteredNotices.map((notice) => (
            <NoticeCard key={notice.id} notice={notice} />
          ))}
        </div>
      )}
    </div>
  );
}
