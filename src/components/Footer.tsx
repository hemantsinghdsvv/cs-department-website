import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-primary text-primary-foreground pt-20 pb-10 border-t-4 border-accent relative">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-12 md:grid-cols-4">
        
        {/* Brand Column */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
             <img src="/logo.png" alt="DSVV Logo" className="h-12 w-auto brightness-0 invert" />
             <div className="flex flex-col">
                <h2 className="text-xl font-bold font-heading tracking-tight text-white">DSVV</h2>
                <p className="text--[10px] font-bold text-accent uppercase tracking-[0.15em]">Computer Science</p>
             </div>
          </div>
          <p className="text-sm text-white/80 leading-relaxed max-w-xs">
            Empowering students with cutting-edge technology and ancient spiritual wisdom for a holistic educational journey.
          </p>
        </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-accent">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/academics" className="hover:text-white transition-colors">Academics</Link></li>
              <li><Link href="/admissions" className="hover:text-white transition-colors">Admissions</Link></li>
              <li><Link href="/placements" className="hover:text-white transition-colors">Placements</Link></li>
              <li><Link href="/faculty" className="hover:text-white transition-colors">Faculty Directory</Link></li>
              <li><Link href="/alumni" className="hover:text-white transition-colors">Alumni Network</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-accent">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/students" className="hover:text-white transition-colors">Student Corner</Link></li>
              <li><Link href="/news" className="hover:text-white transition-colors">News & Events</Link></li>
              <li><Link href="/research" className="hover:text-white transition-colors">Research Labs</Link></li>
              <li><Link href="/resources" className="hover:text-white transition-colors">Downloads</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/admin/login" className="hover:text-white transition-colors">Admin Login</Link></li>
            </ul>
          </div>

        {/* Contact */}
        <div>
          <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-accent">Contact Us</h3>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="font-semibold text-white">Department of Computer Science</li>
            <li>Dev Sanskriti Vishwavidyalaya</li>
            <li>Gayatrikunj-Shantikunj</li>
            <li>Haridwar, Uttarakhand - 249411</li>
            <li className="pt-2 text-accent font-medium">+91 1334-261367</li>
          </ul>
          
          {/* Social Links */}
          <div className="flex gap-4 mt-6">
             <a href="https://github.com/dsvv-cs" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-white hover:text-primary transition-colors text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
             </a>
             <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white hover:text-primary transition-colors text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
             </a>
             <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white hover:text-primary transition-colors text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
             </a>
             <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white hover:text-primary transition-colors text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
             </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-white/10 text-center text-sm text-white/60">
        <p>© {new Date().getFullYear()} Department of Computer Science, DSVV. All rights reserved.</p>
      </div>
    </footer>
  );
}
