"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Users,
  Bell,
  Calendar,
  BookOpen,
  GraduationCap,
  LogOut,
  Settings,
  Contact
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AuthService } from "@/services/authService";
import { useRouter } from "next/navigation";

const sidebarItems = [
  { title: "Overview", href: "/admin/dashboard", icon: LayoutDashboard },
  { title: "Faculty Directory", href: "/admin/faculty", icon: Users },
  { title: "Student Directory", href: "/admin/students", icon: Contact },
  { title: "Notices & Circulars", href: "/admin/notices", icon: Bell },
  { title: "Event Calendar", href: "/admin/events", icon: Calendar },
  { title: "Research & Publications", href: "/admin/publications", icon: BookOpen },
  { title: "Alumni Network", href: "/admin/alumni", icon: GraduationCap },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    await AuthService.logout();
    router.push("/admin/login");
  };

  return (
    <aside className="hidden md:flex flex-col w-72 bg-white border-r border-slate-200 h-screen sticky top-0">
      
      {/* Header */}
      <div className="h-20 flex items-center px-6 border-b border-slate-100">
        <div className="flex items-center gap-3">
            <div className="h-9 w-9 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold shadow-md">
                DS
            </div>
            <div>
                <h1 className="font-bold text-slate-900 leading-none">Admin Portal</h1>
                <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider mt-1">Computer Science</p>
            </div>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 py-6 px-4 space-y-1">
        <div className="px-2 mb-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Main Menu
        </div>
        {sidebarItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-md transition-all duration-200",
              pathname === item.href
                ? "bg-slate-900 text-white shadow-md shadow-slate-900/10"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            )}
          >
            <item.icon className={cn("h-4 w-4", pathname === item.href ? "text-slate-300" : "text-slate-400")} />
            {item.title}
          </Link>
        ))}
      </nav>

      {/* Footer / User Profile */}
      <div className="p-4 bg-slate-50 border-t border-slate-200">
        <button className="flex items-center w-full gap-3 p-2 rounded-lg hover:bg-white transition-colors text-left group">
            <div className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center">
                <Settings className="h-4 w-4 text-slate-500 group-hover:text-slate-700" />
            </div>
            <div className="flex-1 overflow-hidden">
                <p className="text-sm font-medium text-slate-900 truncate">Administrator</p>
                <p className="text-xs text-slate-500 truncate">Settings & Profile</p>
            </div>
        </button>
        <div className="mt-2 pt-2 border-t border-slate-200/50">
            <Button 
                variant="ghost" 
                size="sm"
                className="w-full justify-start gap-2 text-red-600 hover:text-red-700 hover:bg-red-50"
                onClick={handleLogout}
            >
            <LogOut className="h-4 w-4" />
            Sign Out
            </Button>
        </div>
      </div>
    </aside>
  );
}
