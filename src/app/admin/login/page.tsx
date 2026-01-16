"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase/config";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, ArrowRight, Quote } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function AdminLoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    // Redirect if already logged in
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                router.push("/admin/dashboard");
            }
        });
        return () => unsubscribe();
    }, [router]);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            await signInWithEmailAndPassword(auth, email, password);
            router.push("/admin/dashboard");
        } catch (err: any) {
            console.error(err);
             if (err.code === 'auth/invalid-credential') {
                setError("Invalid email or password.");
            } else if (err.code === 'auth/too-many-requests') {
                setError("Too many attempts. Application temporarily locked.");
            } else {
                setError("Failed to sign in. Please try again.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex bg-[#FFC800] overflow-hidden relative">
            {/* Background Pattern: Yellow Grid */}
            <div className="absolute inset-0 z-0">
                <div 
                    className="absolute inset-0" 
                    style={{
                        backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                    }}
                ></div>
            </div>

            {/* Geometric Shapes Layer */}
            <div className="absolute inset-0 z-0 pointer-events-none hidden lg:block">
                {/* Top Left Circle */}
                <div className="absolute top-12 left-24 w-24 h-24 bg-white rounded-full"></div>

                {/* Left Pill (White & Cyan) */}
                <div className="absolute top-48 left-24 w-24 h-64 bg-white rounded-full flex flex-col justify-end overflow-hidden">
                     <div className="h-24 w-full bg-[#00AEEF] rounded-full translate-y-12"></div>
                </div>

                {/* Bottom Left Pill (Blue) */}
                <div className="absolute bottom-[-40px] left-24 w-24 h-48 bg-[#1c4c94] rounded-t-full"></div>

                {/* Center Bottom Pill (Split) */}
                <div className="absolute bottom-24 left-1/3 w-48 h-24 bg-[#1c4c94] rounded-full flex items-center overflow-hidden">
                    <div className="w-1/2 h-full bg-[#1c4c94]"></div>
                    <div className="w-1/2 h-full bg-[#00AEEF] rounded-r-full"></div>
                </div>

                 {/* Right Side Pill (Blue & Cyan) */}
                 <div className="absolute top-24 right-1/2 translate-x-32 w-24 h-[500px] bg-[#1c4c94] rounded-full flex flex-col justify-between p-0 overflow-hidden">
                     <div className="h-24 w-full bg-[#00AEEF] rounded-t-full"></div>
                     <div className="h-24 w-full bg-[#00AEEF] rounded-b-full"></div>
                </div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center p-4 lg:p-12 gap-12 lg:gap-24">
                
                {/* Left Poster Content */}
                <div className="hidden lg:flex flex-col items-center text-center max-w-lg space-y-8">
                    {/* Portrait Frame */}
                    <div className="w-48 h-48 bg-[#1c4c94] p-1 shadow-xl">
                        {/* Placeholder for Gurudev - Using a generic dignified placeholder or leaving blank with style */}
                        <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/b/b3/Pt.ShriramSharma_Smiling.jpg" 
                            onError={(e) => { e.currentTarget.src = "https://ui-avatars.com/api/?name=Gurudev&size=200&background=1c4c94&color=fff"; }}
                            alt="Pandit Shriram Sharma Acharya" 
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Quote */}
                    <div className="relative">
                        <Quote className="absolute -top-6 -left-8 h-12 w-12 text-[#1c4c94]/20 fill-current rotate-180" />
                        <blockquote className="text-xl font-medium text-slate-900 leading-relaxed font-heading">
                            "There is a need for an educational institution which can mould its students into noble, enlightened, selfless, warm-hearted, compassionate and kind human beings."
                        </blockquote>
                        <Quote className="absolute -bottom-6 -right-8 h-12 w-12 text-[#1c4c94]/20 fill-current" />
                        
                        <div className="mt-4 font-bold text-[#1c4c94]">
                            - Gurudev Pandit Shriram Sharma Acharya
                        </div>
                    </div>

                     {/* Footer Text */}
                     <div className="mt-8">
                         <h3 className="text-2xl font-bold text-slate-900">Dev Sanskriti Vishwavidyalaya</h3>
                         <p className="text-slate-800">Gayatrikunj - Shantikunj, Haridwar - 249411 (Uttarakhand)</p>
                     </div>
                </div>

                {/* Right Login Form */}
                <div className="w-full max-w-md bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-white/50">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-50 text-primary mb-4">
                            <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900">Admin Portal</h2>
                        <p className="text-slate-500 text-sm">Sign in to manage department resources</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-5">
                        {error && (
                            <Alert variant="destructive" className="bg-red-50 text-red-600 border-red-200 text-sm py-2">
                                <AlertDescription>{error}</AlertDescription>
                            </Alert>
                        )}
                        
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold uppercase text-slate-500 tracking-wider">Email</label>
                            <Input 
                                type="email" 
                                placeholder="admin@dsvv.ac.in" 
                                className="h-11 bg-slate-50 border-slate-200 focus:border-[#1c4c94] focus:ring-[#1c4c94]/20 transition-all"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        
                        <div className="space-y-1.5">
                            <div className="flex items-center justify-between">
                                <label className="text-xs font-bold uppercase text-slate-500 tracking-wider">Password</label>
                                <a href="#" className="text-xs font-semibold text-[#1c4c94] hover:underline">Forgot?</a>
                            </div>
                            <Input 
                                type="password" 
                                placeholder="••••••••" 
                                className="h-11 bg-slate-50 border-slate-200 focus:border-[#1c4c94] focus:ring-[#1c4c94]/20 transition-all"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <Button type="submit" className="w-full h-11 bg-[#1c4c94] hover:bg-[#153a70] text-white font-bold tracking-wide shadow-lg shadow-blue-900/20" disabled={loading}>
                            {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : "AUTHENTICATE"}
                        </Button>
                    </form>

                    <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-center gap-2 text-xs text-slate-400">
                        <span>Secure Access Only</span> &bull; <span>Software Development Cell</span>
                    </div>
                </div>

            </div>
        </div>
    );
}
