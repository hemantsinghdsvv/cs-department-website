import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Notice } from "@/types";
import { format } from "date-fns";
import { Bell, Pin, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

interface NoticeCardProps {
  notice: Notice;
}

export function NoticeCard({ notice }: NoticeCardProps) {
  return (
    <Card className={cn(
        "overflow-hidden transition-all duration-300 hover:shadow-md border-l-4",
        notice.isPinned ? "border-l-accent bg-accent/5 shadow-sm" : "border-l-primary/20"
    )}>
      <CardContent className="p-6">
        <div className="flex justify-between items-start gap-4">
          <div className="space-y-2 flex-1">
            <div className="flex items-center gap-2">
                {notice.isPinned && (
                    <Pin className="h-3 w-3 text-accent fill-accent shrink-0" />
                )}
                <span className="text-xs font-bold text-primary uppercase tracking-widest">
                    {notice.date ? format(notice.date.toDate(), "MMMM dd, yyyy") : "Recent"}
                </span>
                <span className={cn(
                    "px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-tighter",
                    notice.type === 'exam' ? "bg-red-100 text-red-700" :
                    notice.type === 'admission' ? "bg-green-100 text-green-700" :
                    "bg-blue-100 text-blue-700"
                )}>
                    {notice.type}
                </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-primary transition-colors">
              {notice.title}
            </h3>
            <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">
              {notice.content}
            </p>
          </div>
          <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100 shrink-0">
             {notice.type === 'exam' ? <FileText className="h-5 w-5 text-red-500" /> : <Bell className="h-5 w-5 text-primary" />}
          </div>
        </div>
        
        {notice.fileUrl && (
            <div className="mt-4 pt-4 border-t border-slate-100 flex justify-end">
                <a 
                    href={notice.fileUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-primary hover:text-accent flex items-center gap-1 transition-colors"
                >
                    Download Attachment
                </a>
            </div>
        )}
      </CardContent>
    </Card>
  );
}
