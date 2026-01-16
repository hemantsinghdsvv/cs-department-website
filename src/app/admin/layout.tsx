"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AuthService } from "@/services/authService";
import { Loader2 } from "lucide-react";

import { AdminSidebar } from "@/components/admin/AdminSidebar";

import { usePathname } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const isLoginPage = pathname === "/admin/login";

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const user = await AuthService.getCurrentUser();
        if (!user && !isLoginPage) {
          router.replace("/admin/login");
        }
      } catch (error) {
        console.error("Auth check failed", error);
        if (!isLoginPage) router.replace("/admin/login");
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, [router, isLoginPage]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-slate-100 font-sans">
       {!isLoginPage && <AdminSidebar />}
       <div className="flex-1 flex flex-col h-screen overflow-hidden">
            <main className={`flex-1 overflow-y-auto ${!isLoginPage ? 'p-4 md:p-8' : ''}`}>
                {children}
            </main>
       </div>
    </div>
  );
}
