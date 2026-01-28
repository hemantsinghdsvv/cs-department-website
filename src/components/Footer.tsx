import Link from "next/link";
import { Github, Linkedin, Twitter, Youtube, MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-slate-950 text-slate-300 pt-12 md:pt-20 pb-10 border-t border-slate-800">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        
        {/* Brand Column */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
             <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/30">
               <img src="/logo.png" alt="DSVV Logo" className="h-8 w-auto brightness-0 invert opacity-90" />
             </div>
             <div className="flex flex-col">
                <h2 className="text-lg font-bold font-heading tracking-tight text-white leading-none">DSVV</h2>
                <p className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mt-1">Computer Science</p>
             </div>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
            Empowering students with <span className="text-slate-200">cutting-edge technology</span> and <span className="text-slate-200">ancient spiritual wisdom</span> for a holistic educational journey.
          </p>
          <div className="flex gap-4 mt-2">
             <a href="https://github.com/dsvv-cs" target="_blank" rel="noopener noreferrer" className="bg-slate-900 p-2 rounded-lg border border-slate-800 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 text-slate-400">
                <Github className="h-4 w-4" />
             </a>
             <a href="#" className="bg-slate-900 p-2 rounded-lg border border-slate-800 hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all duration-300 text-slate-400">
                <Linkedin className="h-4 w-4" />
             </a>
             <a href="#" className="bg-slate-900 p-2 rounded-lg border border-slate-800 hover:bg-[#1DA1F2] hover:text-white hover:border-[#1DA1F2] transition-all duration-300 text-slate-400">
                <Twitter className="h-4 w-4" />
             </a>
             <a href="#" className="bg-slate-900 p-2 rounded-lg border border-slate-800 hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000] transition-all duration-300 text-slate-400">
                <Youtube className="h-4 w-4" />
             </a>
          </div>
        </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-2">
                <span className="w-8 h-0.5 bg-accent rounded-full"></span>
                Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-primary transition-colors hover:pl-1 flex items-center gap-2 group"><span className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-accent">›</span> About Us</Link></li>
              <li><Link href="/academics" className="hover:text-primary transition-colors hover:pl-1 flex items-center gap-2 group"><span className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-accent">›</span> Academics</Link></li>
              <li><Link href="/admissions" className="hover:text-primary transition-colors hover:pl-1 flex items-center gap-2 group"><span className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-accent">›</span> Admissions</Link></li>
              <li><Link href="/placements" className="hover:text-primary transition-colors hover:pl-1 flex items-center gap-2 group"><span className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-accent">›</span> Placements</Link></li>
              <li><Link href="/faculty" className="hover:text-primary transition-colors hover:pl-1 flex items-center gap-2 group"><span className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-accent">›</span> Faculty Directory</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-2">
                <span className="w-8 h-0.5 bg-accent rounded-full"></span>
                Resources
            </h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/students" className="hover:text-primary transition-colors hover:pl-1 flex items-center gap-2 group"><span className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-accent">›</span> Student Corner</Link></li>
              <li><Link href="/news" className="hover:text-primary transition-colors hover:pl-1 flex items-center gap-2 group"><span className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-accent">›</span> News & Events</Link></li>
              <li><Link href="/research" className="hover:text-primary transition-colors hover:pl-1 flex items-center gap-2 group"><span className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-accent">›</span> Research Labs</Link></li>
              <li><Link href="/resources" className="hover:text-primary transition-colors hover:pl-1 flex items-center gap-2 group"><span className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-accent">›</span> Downloads</Link></li>
              <li><Link href="/admin/login" className="hover:text-primary transition-colors hover:pl-1 flex items-center gap-2 group"><span className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-accent">›</span> Admin Login</Link></li>
            </ul>
          </div>

        {/* Contact */}
        <div className="space-y-6">
          <h3 className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-2">
            <span className="w-8 h-0.5 bg-accent rounded-full"></span>
            Contact Us
          </h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                    Department of Computer Science<br/>
                    Dev Sanskriti Vishwavidyalaya<br/>
                    Gayatrikunj-Shantikunj, Haridwar<br/>
                    Uttarakhand - 249411
                </span>
            </li>
            <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span className="font-medium hover:text-white transition-colors cursor-pointer">+91 1334-261367</span>
            </li>
            <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span className="font-medium hover:text-white transition-colors cursor-pointer">mca@dsvv.ac.in</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Department of Computer Science, DSVV. All rights reserved.</p>
        <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
}
