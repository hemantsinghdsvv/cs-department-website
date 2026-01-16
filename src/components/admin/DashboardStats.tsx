
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Users, Bell, Calendar, BookOpen, ArrowUpRight } from "lucide-react";

interface DashboardStatsProps {
  stats: {
    faculty: number;
    notices: number;
    events: number;
    publications: number;
  };
}

export function DashboardStats({ stats }: DashboardStatsProps) {
  const items = [
    {
      title: "Total Faculty",
      value: stats.faculty || 0,
      label: "Active Members",
      icon: Users,
      color: "bg-blue-500",
      trend: "+2.5%",
      bg: "bg-blue-50 text-blue-700"
    },
    {
      title: "Active Notices",
      value: stats.notices || 0,
      label: "Posted this month",
      icon: Bell,
      color: "bg-amber-500",
      trend: "+12%",
      bg: "bg-amber-50 text-amber-700"
    },
    {
      title: "Upcoming Events",
      value: stats.events || 0,
      label: "Scheduled",
      icon: Calendar,
      color: "bg-purple-500",
      trend: "+5%",
      bg: "bg-purple-50 text-purple-700"
    },
    {
      title: "Publications",
      value: stats.publications || 0,
      label: "Research items",
      icon: BookOpen,
      color: "bg-emerald-500",
      trend: "+8%",
      bg: "bg-emerald-50 text-emerald-700"
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {items.map((item, index) => (
        <Card key={index} className="border-none shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden relative">
          <CardContent className="p-6">
             <div className="flex items-center justify-between mb-4">
                 <div className={`p-3 rounded-xl ${item.bg}`}>
                     <item.icon className="h-6 w-6" />
                 </div>
                 <span className="flex items-center text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                     {item.trend} <ArrowUpRight className="h-3 w-3 ml-1" />
                 </span>
             </div>
             
             <div className="space-y-1">
                 <h3 className="text-3xl font-bold text-slate-900 tracking-tight group-hover:scale-105 transition-transform origin-left">
                     {item.value}
                 </h3>
                 <p className="text-sm font-medium text-slate-500">{item.title}</p>
             </div>
             
             {/* Decorative Background Element */}
             <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-slate-50 group-hover:bg-slate-100 transition-colors z-0" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
