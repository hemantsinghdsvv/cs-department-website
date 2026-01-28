import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, BookOpen, Calendar, Award, UserCheck, GraduationCap } from "lucide-react";
import { FacultyService } from "@/services/facultyService";
import { NoticeService } from "@/services/noticeService";
import { EventService } from "@/services/eventService";
import { PublicationService } from "@/services/publicationService";
import { AlumniService } from "@/services/alumniService";
import { format } from "date-fns";
import { HeroSlider } from "@/components/HeroSlider";

export const dynamic = "force-dynamic";

export default async function Home() {
  const [faculty, notices, events, publications, alumni] = await Promise.all([
    FacultyService.getAll(),
    NoticeService.getAll(),
    EventService.getAll(),
    PublicationService.getAll(),
    AlumniService.getAll(),
  ]);

  const latestNotices = notices.slice(0, 3);
  const upcomingEvents = events.slice(0, 2);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      {/* Hero Section */}
      <HeroSlider>
        <div className="container max-w-5xl mx-auto px-4 md:px-6 text-center relative z-10">
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            
            {/* Badge */}
            <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-md shadow-sm mx-auto">
              <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse mr-2"></span>
              Admissions Open 2026-27
            </div>
            
            {/* Heading */}
            <h1 className="text-3xl font-heading font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl drop-shadow-2xl leading-tight">
              Excellence in <br className="hidden md:block"/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">
                Computer Science
              </span>
            </h1>
            
            {/* Description */}
            <p className="mx-auto max-w-2xl text-lg text-slate-200 md:text-xl leading-relaxed drop-shadow-md font-light tracking-wide">
              Fostering innovation, research, and technical leadership at Dev Sanskriti Vishwavidyalaya through a synthesis of <span className="text-white font-medium">modern technology</span> and <span className="text-white font-medium">traditional wisdom</span>.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center mt-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-slate-900 font-bold px-8 h-14 text-base rounded-full shadow-[0_0_20px_rgba(255,193,7,0.3)] hover:shadow-[0_0_30px_rgba(255,193,7,0.5)] transition-all hover:-translate-y-1" asChild>
              <Link href="/academics">
                Explore Programs <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white/40 text-white hover:bg-white/10 font-semibold px-8 h-14 text-base rounded-full backdrop-blur-sm transition-all hover:border-white" asChild>
              <Link href="/research">View Research</Link>
            </Button>
          </div>
        </div>
      </HeroSlider>


      {/* Department Overview Section */}
      <section className="py-12 md:py-24 bg-gradient-to-b from-white to-slate-50/50 border-b border-slate-100 overflow-hidden">
        <div className="container max-w-7xl mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center gap-16">
            
            {/* Image Column */}
            <div className="lg:w-1/2 relative order-2 lg:order-1 animate-in slide-in-from-left-8 duration-700 delay-200">
                {/* Decorative Blobs */}
                <div className="absolute -top-12 -left-12 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10"></div>
                <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
                
                <div className="relative group">
                    <img 
                        src="https://www.dsvv.ac.in/wp-content/uploads/2022/01/dsvv1-1-1.jpg?q=80&w=1920&auto=format&fit=crop" 
                        alt="Department Building" 
                        className="relative rounded-2xl shadow-2xl border border-white/50 aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-[1.01]" 
                    />
                    
                    {/* Floating Badge */}
                    <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-4 animate-in zoom-in duration-500 delay-500">
                        <div className="bg-primary/10 p-3 rounded-full">
                            <Calendar className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Established</p>
                            <p className="text-xl font-bold text-slate-900">Since 2002</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Column */}
            <div className="lg:w-1/2 space-y-8 order-1 lg:order-2">
                <div className="space-y-4">
                    <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold text-primary tracking-wide uppercase">
                        <span className="flex h-2 w-2 rounded-full bg-accent mr-2 animate-pulse"></span>
                         Department Significance
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold font-heading text-slate-900 leading-[1.15]">
                        Bridging Ancient Wisdom with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Modern Computing</span>
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        At Dev Sanskriti Vishwavidyalaya, we don't just teach code; we cultivate character. Our Computer Science department creates a unique ecosystem where cutting-edge technology merges with the timeless values of Indian culture, producing professionals who are skilled, ethical, and visionary.
                    </p>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-5">
                     <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 group">
                        <div className="h-10 w-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                            <BookOpen className="h-5 w-5 text-blue-600 group-hover:text-white transition-colors" />
                        </div>
                        <h4 className="font-bold text-slate-900 mb-2 text-lg">Innovative Curriculum</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">AI, Cloud Computing, and Data Science integrated with practical, hands-on projects.</p>
                     </div>

                     <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 group">
                        <div className="h-10 w-10 bg-amber-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-slate-900 transition-colors">
                            <UserCheck className="h-5 w-5 text-amber-600 group-hover:text-slate-900 transition-colors" />
                        </div>
                        <h4 className="font-bold text-slate-900 mb-2 text-lg">Holistic Development</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">Daily meditation, life skills workshops, and community service alongside coding.</p>
                     </div>
                </div>

                <div className="pt-4">
                    <Button className="bg-slate-900 text-white hover:bg-slate-800 px-8 h-12 rounded-full shadow-lg hover:shadow-xl transition-all" asChild>
                        <Link href="/about">
                            Read Our History <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
      </section>

      {/* International Collaborations (MoU) Section */}
      <section className="py-20 bg-slate-100 overflow-hidden border-t border-slate-200">
        <div className="container max-w-7xl mx-auto px-4 mb-12 text-center">
             <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-bold text-primary mb-3">
                <span className="flex h-2 w-2 rounded-full bg-accent mr-2 animate-pulse"></span>
                Global Reach
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900">International Collaborations</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                Proud partners with leading institutions worldwide for student exchange, joint research, and academic excellence.
            </p>
        </div>

        {/* Marquee Container */}
        <div className="relative flex overflow-x-hidden group">
            <div className="animate-marquee flex gap-6 px-6 sm:px-0">
               {[
                   { name: "Riga Technical University", country: "Latvia" },
                   { name: "Baltic International Academy", country: "Latvia" },
                   { name: "Wright Graduate University", country: "USA (Chicago)" },
                   { name: "University of Texas", country: "USA (San Antonio)" },
                   { name: "St. Catherine University", country: "USA" },
                   { name: "The Evergreen State College", country: "USA (Olympia)" },
                   { name: "UWI St. Augustine Campus", country: "Trinidad & Tobago" },
                   { name: "University of Oradea", country: "Romania" },
                   { name: "University of Opole", country: "Poland" },
                   { name: "NIELIT", country: "India" },
                   { name: "National Formosa University", country: "Taiwan" },
                   { name: "University of KwaZulu-Natal", country: "South Africa" },
                   { name: "Durban University of Technology", country: "South Africa" },
                   { name: "University of Winchester", country: "United Kingdom" },
                   { name: "Universiti Malaysia Sarawak", country: "Malaysia" },
                   { name: "Tribhuvan University", country: "Nepal" },
                   { name: "Humboldt University", country: "Germany" },
                   { name: "M. Utemissov West Kazakhstan State University", country: "Kazakhstan" },
                   { name: "Dongguk University", country: "Korea" },
                   { name: "Indian Art Training School", country: "China" }
               ].map((uni, idx) => (
                   <div key={idx} className="flex-none w-72 bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center text-center justify-center gap-3 hover:shadow-md hover:border-primary/30 transition-all duration-300 group/card">
                       <div className="h-12 w-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover/card:bg-primary/10 group-hover/card:text-primary transition-colors">
                           <Award className="h-6 w-6" /> 
                       </div>
                       <div>
                           <h4 className="font-bold text-slate-800 text-sm leading-tight group-hover/card:text-primary transition-colors">{uni.name}</h4>
                           <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1 block">{uni.country}</span>
                       </div>
                   </div>
               ))}
               {/* Duplicate for infinite loop effect */}
               {[
                   { name: "Riga Technical University", country: "Latvia" },
                   { name: "Baltic International Academy", country: "Latvia" },
                   { name: "Wright Graduate University", country: "USA (Chicago)" },
                   { name: "University of Texas", country: "USA (San Antonio)" },
                   { name: "St. Catherine University", country: "USA" },
                   { name: "The Evergreen State College", country: "USA (Olympia)" },
                   { name: "UWI St. Augustine Campus", country: "Trinidad & Tobago" },
                   { name: "University of Oradea", country: "Romania" },
                   { name: "University of Opole", country: "Poland" },
                   { name: "NIELIT", country: "India" },
                   { name: "National Formosa University", country: "Taiwan" },
                   { name: "University of KwaZulu-Natal", country: "South Africa" },
                   { name: "Durban University of Technology", country: "South Africa" },
                   { name: "University of Winchester", country: "United Kingdom" },
                   { name: "Universiti Malaysia Sarawak", country: "Malaysia" },
                   { name: "Tribhuvan University", country: "Nepal" },
                   { name: "Humboldt University", country: "Germany" },
                   { name: "M. Utemissov West Kazakhstan State University", country: "Kazakhstan" },
                   { name: "Dongguk University", country: "Korea" },
                   { name: "Indian Art Training School", country: "China" }
               ].map((uni, idx) => (
                   <div key={`dup-${idx}`} className="flex-none w-72 bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center text-center justify-center gap-3 hover:shadow-md hover:border-primary/30 transition-all duration-300 group/card">
                       <div className="h-12 w-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover/card:bg-primary/10 group-hover/card:text-primary transition-colors">
                           <Award className="h-6 w-6" /> 
                       </div>
                       <div>
                           <h4 className="font-bold text-slate-800 text-sm leading-tight group-hover/card:text-primary transition-colors">{uni.name}</h4>
                           <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1 block">{uni.country}</span>
                       </div>
                   </div>
               ))}
            </div>
            
            <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-100 to-transparent"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-100 to-transparent"></div>
        </div>
      </section>

      {/* Stats/Quick Info Section - Overlapping style */}
      <section className="relative z-10 -mt-8 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            
            <div className="bg-slate-900 text-white p-6 rounded-xl shadow-xl border-t-4 border-accent hover:-translate-y-1 transition-transform duration-300">
               <div className="flex flex-col items-center text-center">
                 <div className="mb-2 p-2 bg-white/10 rounded-full text-accent">
                    <UserCheck className="h-6 w-6" />
                 </div>
                 <h2 className="text-4xl font-bold font-heading mb-1">{faculty.length}+</h2>
                 <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Faculty Members</p>
               </div>
            </div>

            <div className="bg-white text-slate-900 p-6 rounded-xl shadow-xl border-t-4 border-primary hover:-translate-y-1 transition-transform duration-300">
               <div className="flex flex-col items-center text-center">
                 <div className="mb-2 p-2 bg-primary/10 rounded-full text-primary">
                    <BookOpen className="h-6 w-6" />
                 </div>
                 <h2 className="text-4xl font-bold font-heading mb-1">{publications.length}+</h2>
                 <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Research Papers</p>
               </div>
            </div>

            <div className="bg-slate-900 text-white p-6 rounded-xl shadow-xl border-t-4 border-accent hover:-translate-y-1 transition-transform duration-300">
               <div className="flex flex-col items-center text-center">
                 <div className="mb-2 p-2 bg-white/10 rounded-full text-accent">
                    <GraduationCap className="h-6 w-6" />
                 </div>
                 <h2 className="text-4xl font-bold font-heading mb-1">{alumni.length}+</h2>
                 <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Alumni Network</p>
               </div>
            </div>

            <div className="bg-white text-slate-900 p-6 rounded-xl shadow-xl border-t-4 border-primary hover:-translate-y-1 transition-transform duration-300">
               <div className="flex flex-col items-center text-center">
                 <div className="mb-2 p-2 bg-primary/10 rounded-full text-primary">
                    <Award className="h-6 w-6" />
                 </div>
                 <h2 className="text-4xl font-bold font-heading mb-1">94%</h2>
                 <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Placement Rate</p>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Informational Cards Section */}
      <section className="py-12 md:py-24 bg-slate-50">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
             <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-bold text-primary mb-4">
                <span className="flex h-2 w-2 rounded-full bg-accent mr-2 animate-pulse"></span>
                Happening Now
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900">Department at a Glance</h2>
            <p className="mt-4 text-lg text-slate-600">Stay updated with the latest announcements, upcoming events, and what makes our department unique.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            
            {/* Notices Card - Primary Brand Color Theme */}
            <div className="flex flex-col bg-white rounded-2xl shadow-lg border-t-4 border-primary overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="p-6 bg-slate-50 border-b border-slate-100 flex items-center justify-between group-hover:bg-primary/5 transition-colors">
                <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-primary text-white rounded-lg shadow-md group-hover:scale-110 transition-transform">
                        <BookOpen className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 font-heading">Notices</h3>
                </div>
                <span className="text-xs font-bold bg-white px-2.5 py-1 rounded-full border border-primary/20 text-primary uppercase tracking-wide">Latest</span>
              </div>
              
              <div className="p-6 flex-1 bg-white">
                <div className="space-y-5">
                  {latestNotices.length === 0 ? (
                      <p className="text-sm text-slate-500 text-center py-8 italic">No active notices.</p>
                  ) : (
                      latestNotices.map((notice) => (
                        <div key={notice.id} className="group/item cursor-pointer">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="h-1.5 w-1.5 rounded-full bg-accent"></span>
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider group-hover/item:text-primary transition-colors">
                                    {notice.date ? format(notice.date.toDate(), "MMM dd, yyyy") : "Date N/A"}
                                </span>
                            </div>
                            <p className="text-sm font-medium text-slate-700 group-hover/item:text-primary transition-colors line-clamp-2 pl-3.5 border-l-2 border-slate-100 group-hover/item:border-accent">
                                {notice.title}
                            </p>
                        </div>
                      ))
                  )}
                </div>
              </div>
              <div className="p-4 bg-slate-50 border-t border-slate-100 group-hover:bg-primary/5 transition-colors">
                <Link href="/notices" className="text-sm font-bold text-primary flex items-center justify-center gap-2 hover:gap-3 transition-all">
                    View All Notices <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Events Card - Accent Brand Color Theme */}
            <div className="flex flex-col bg-white rounded-2xl shadow-lg border-t-4 border-accent overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="p-6 bg-slate-50 border-b border-slate-100 flex items-center justify-between group-hover:bg-accent/5 transition-colors">
                <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-accent text-slate-900 rounded-lg shadow-md group-hover:scale-110 transition-transform">
                        <Calendar className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 font-heading">Events</h3>
                </div>
                 <span className="text-xs font-bold bg-white px-2.5 py-1 rounded-full border border-accent/40 text-slate-700 uppercase tracking-wide">Upcoming</span>
              </div>
              
              <div className="p-6 flex-1 bg-white">
                 <div className="space-y-4">
                  {upcomingEvents.length === 0 ? (
                     <p className="text-sm text-slate-500 text-center py-8 italic">No upcoming events.</p>
                  ) : (
                     upcomingEvents.map((event) => (
                        <div key={event.id} className="flex gap-4 items-start group/item">
                             <div className="flex flex-col items-center bg-slate-50 border border-slate-100 rounded-xl p-2 min-w-[4rem] shadow-sm group-hover/item:border-accent group-hover/item:bg-accent group-hover/item:shadow-md transition-all duration-300">
                                 <span className="text-[10px] font-bold text-slate-500 uppercase group-hover/item:text-slate-800">
                                     {event.startDate ? format(event.startDate.toDate(), "MMM") : "-"}
                                 </span>
                                 <span className="text-xl font-extrabold text-slate-900">
                                     {event.startDate ? format(event.startDate.toDate(), "dd") : "-"}
                                 </span>
                             </div>
                             <div>
                                 <p className="text-sm font-bold text-slate-800 line-clamp-2 group-hover/item:text-primary transition-colors">{event.title}</p>
                                 <div className="flex items-center gap-1 mt-1 text-xs text-slate-500">
                                     <span className="h-1 w-1 rounded-full bg-slate-300"></span>
                                     <span className="line-clamp-1">{event.location || "DSVV Campus"}</span>
                                 </div>
                             </div>
                        </div>
                     ))
                  )}
                </div>
              </div>
               <div className="p-4 bg-slate-50 border-t border-slate-100 group-hover:bg-accent/10 transition-colors">
                <Link href="/events" className="text-sm font-bold text-slate-800 flex items-center justify-center gap-2 hover:gap-3 transition-all">
                    Full Calendar <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Why DSVV CS? - Full Brand Theme */}
            <div className="flex flex-col bg-primary text-white rounded-2xl shadow-xl border-t-4 border-accent overflow-hidden hover:shadow-2xl transition-all duration-300 transform md:col-span-2 lg:col-span-1 relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-blue-900 to-slate-900 opacity-100 z-0"></div>
                {/* Decorative Pattern */}
                <div className="absolute top-0 right-0 p-8 opacity-10 transform translate-x-8 -translate-y-8">
                     <Award className="h-48 w-48 text-white" />
                </div>
               
              <div className="p-6 border-b border-white/10 flex items-center gap-3 relative z-10">
                 <div className="p-2.5 bg-white/10 rounded-lg text-accent backdrop-blur-sm shadow-inner overflow-hidden border border-white/5">
                    <Award className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-white font-heading">Why Choose Us?</h3>
              </div>
              
              <div className="p-7 flex-1 relative z-10">
                <p className="text-blue-100 leading-relaxed mb-6 font-medium">
                  A unique blend of <span className="text-accent font-bold">technical excellence</span> and <span className="text-accent font-bold">human values</span> that outlines our core philosophy.
                </p>
                <ul className="space-y-4">
                    <li className="flex items-start gap-3 group/li">
                        <div className="mt-1 min-w-[1.25rem] h-5 w-5 flex items-center justify-center rounded-full bg-accent text-primary font-bold shadow-lg shadow-accent/20 group-hover/li:scale-110 transition-transform">
                             <UserCheck className="h-3 w-3" />
                        </div>
                        <span className="text-sm text-blue-50 group-hover/li:text-white transition-colors font-medium">Values-based technical education</span>
                    </li>
                    <li className="flex items-start gap-3 group/li">
                        <div className="mt-1 min-w-[1.25rem] h-5 w-5 flex items-center justify-center rounded-full bg-accent text-primary font-bold shadow-lg shadow-accent/20 group-hover/li:scale-110 transition-transform">
                             <BookOpen className="h-3 w-3" />
                        </div>
                        <span className="text-sm text-blue-50 group-hover/li:text-white transition-colors font-medium">Focus on Scientific Spirituality</span>
                    </li>
                    <li className="flex items-start gap-3 group/li">
                        <div className="mt-1 min-w-[1.25rem] h-5 w-5 flex items-center justify-center rounded-full bg-accent text-primary font-bold shadow-lg shadow-accent/20 group-hover/li:scale-110 transition-transform">
                             <GraduationCap className="h-3 w-3" />
                        </div>
                        <span className="text-sm text-blue-50 group-hover/li:text-white transition-colors font-medium">Industry-ready curriculum</span>
                    </li>
                </ul>
              </div>
               <div className="p-4 bg-white/5 border-t border-white/10 relative z-10 hover:bg-white/10 transition-colors">
                <Link href="/about" className="text-sm font-bold text-accent flex items-center justify-center gap-2 hover:gap-3 transition-all">
                    Discover Our Vision <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
