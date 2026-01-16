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
      <HeroSlider>
        <div className="container max-w-5xl mx-auto px-4 md:px-6 text-center">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-3 py-1 text-sm font-medium text-white mb-4 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-accent mr-2"></span>
              Admissions Open 2026-27
            </div>
            
            <h1 className="text-4xl font-heading font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-md">
              Excellence in <br className="hidden md:block"/> 
              <span className="text-accent relative inline-block">
                Computer Science
              </span>
            </h1>
            
            <p className="mx-auto max-w-2xl text-lg text-gray-200 md:text-xl leading-relaxed drop-shadow-sm">
              Fostering innovation, research, and technical leadership at Dev Sanskriti Vishwavidyalaya through a synthesis of modern technology and traditional wisdom.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-bold px-8 h-12 text-base shadow-lg hover:shadow-xl transition-all" asChild>
              <Link href="/academics">
                Explore Programs <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 h-12 text-base transition-all bg-transparent backdrop-blur-sm" asChild>
              <Link href="/research">View Research</Link>
            </Button>
          </div>
        </div>
      </HeroSlider>


      {/* Department Overview Section */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="container max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 relative order-2 md:order-1">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
                <img 
                    src="https://www.dsvv.ac.in/wp-content/uploads/2022/01/dsvv1-1-1.jpg?q=80&w=1920&auto=format&fit=crop" 
                    alt="Department Building" 
                    className="relative rounded-2xl shadow-xl border border-slate-200 aspect-video object-cover" 
                />
            </div>
            <div className="md:w-1/2 space-y-6 order-1 md:order-2">
                <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
                    <span className="flex h-2 w-2 rounded-full bg-accent mr-2"></span>
                    About the Department
                </div>
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 leading-tight">
                    Bridging Ancient Wisdom with <span className="text-primary">Modern Computing</span>
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                    Established in 2002, the Department of Computer Science at Dev Sanskriti Vishwavidyalaya creates a unique learning environment where technical excellence meets human values. We are committed to producing IT professionals who are not only skilled coders but also conscientious leaders.
                </p>
                
                <div className="grid grid-cols-2 gap-4 pt-4">
                     <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                        <h4 className="font-bold text-slate-900 mb-1">Innovative Curriculum</h4>
                        <p className="text-sm text-slate-500">Industry-aligned courses with hands-on projects.</p>
                     </div>
                     <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                        <h4 className="font-bold text-slate-900 mb-1">Holistic Development</h4>
                        <p className="text-sm text-slate-500">Focus on life skills, ethics, and meditation.</p>
                     </div>
                </div>

                <div className="pt-2">
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white" asChild>
                        <Link href="/about">Read Detailed History</Link>
                    </Button>
                </div>
            </div>
        </div>
      </section>

      {/* Stats/Quick Info Section */}
      <section className="bg-primary py-16 text-white">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center divide-x divide-white/10">
            <div className="space-y-2">
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-accent">{faculty.length}+</h2>
              <p className="text-sm md:text-base font-medium text-white/80 uppercase tracking-widest">Faculty Members</p>
            </div>
            <div className="space-y-2">
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-accent">{publications.length}+</h2>
              <p className="text-sm md:text-base font-medium text-white/80 uppercase tracking-widest">Research Papers</p>
            </div>
            <div className="space-y-2">
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-accent">{alumni.length}+</h2>
              <p className="text-sm md:text-base font-medium text-white/80 uppercase tracking-widest">Distinguished Alumni</p>
            </div>
            <div className="space-y-2">
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-accent">94%</h2>
              <p className="text-sm md:text-base font-medium text-white/80 uppercase tracking-widest">Placement Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Informational Cards Section */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            
            {/* Notices Card */}
            <div className="flex flex-col bg-white rounded-xl shadow-sm border border-slate-200 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="p-6 border-b border-slate-100 flex items-center gap-3">
                <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-primary/10 transition-colors">
                    <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-heading">Latest Notices</h3>
              </div>
              <div className="p-6 flex-1">
                <div className="space-y-4">
                  {latestNotices.length === 0 ? (
                      <p className="text-sm text-muted-foreground text-center py-4">No active notices at the moment.</p>
                  ) : (
                      latestNotices.map((notice) => (
                        <div key={notice.id} className="pb-3 border-b border-dashed border-slate-200 last:border-0 last:pb-0 group/item">
                            <span className="text-xs font-semibold text-accent uppercase tracking-wide">
                                {notice.date ? format(notice.date.toDate(), "MMMM dd") : "Date N/A"}
                            </span>
                            <p className="text-sm font-medium text-slate-700 mt-1 group-hover/item:text-primary cursor-pointer transition-colors line-clamp-2">
                                {notice.title}
                            </p>
                        </div>
                      ))
                  )}
                </div>
              </div>
              <div className="p-4 bg-slate-50/50 rounded-b-xl border-t border-slate-100 group-hover:bg-white transition-colors">
                <Link href="/notices" className="text-sm font-semibold text-primary hover:text-primary/80 flex items-center justify-center">
                    View All Notices <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Events Card */}
            <div className="flex flex-col bg-white rounded-xl shadow-sm border border-slate-200 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="p-6 border-b border-slate-100 flex items-center gap-3">
                 <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-primary/10 transition-colors">
                    <Calendar className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-heading">Upcoming Events</h3>
              </div>
              <div className="p-6 flex-1">
                 <div className="space-y-4">
                  {upcomingEvents.length === 0 ? (
                     <p className="text-sm text-muted-foreground text-center py-4">No upcoming events scheduled.</p>
                  ) : (
                     upcomingEvents.map((event) => (
                        <div key={event.id} className="flex gap-4 items-start group/item">
                             <div className="flex flex-col items-center bg-slate-100 rounded-lg p-2 min-w-[3.5rem] group-hover/item:bg-white group-hover/item:shadow-sm transition-all">
                                 <span className="text-xs font-bold text-primary uppercase">
                                     {event.startDate ? format(event.startDate.toDate(), "MMM") : "-"}
                                 </span>
                                 <span className="text-lg font-bold text-slate-900">
                                     {event.startDate ? format(event.startDate.toDate(), "dd") : "-"}
                                 </span>
                             </div>
                             <div>
                                 <p className="text-sm font-semibold text-slate-800 line-clamp-1 group-hover/item:text-primary transition-colors">{event.title}</p>
                                 <p className="text-xs text-muted-foreground mt-1 line-clamp-1">{event.location}</p>
                             </div>
                        </div>
                     ))
                  )}
                </div>
              </div>
               <div className="p-4 bg-slate-50/50 rounded-b-xl border-t border-slate-100 group-hover:bg-white transition-colors">
                <Link href="/events" className="text-sm font-semibold text-primary hover:text-primary/80 flex items-center justify-center">
                    View Calendar <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Highlights/About Card */}
            <div className="flex flex-col bg-primary text-white rounded-xl shadow-lg border border-primary hover:shadow-xl transition-all duration-300 md:col-span-2 lg:col-span-1 relative overflow-hidden">
               {/* Decorative Circle */}
               <div className="absolute -top-12 -right-12 h-40 w-40 bg-accent/20 rounded-full blur-2xl"></div>
               
              <div className="p-6 border-b border-white/10 flex items-center gap-3 relative z-10">
                 <div className="p-2 bg-white/10 rounded-lg">
                    <Award className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-white">Why DSVV CS?</h3>
              </div>
              <div className="p-6 flex-1 relative z-10">
                <p className="text-white/90 leading-relaxed mb-6">
                  Our department stands at the intersection of modern computation and indigenous knowledge using a unique approach.
                </p>
                <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                        <UserCheck className="h-4 w-4 text-accent mt-0.5" />
                        <span className="text-sm text-white/80">Values-based technical education</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <BookOpen className="h-4 w-4 text-accent mt-0.5" />
                        <span className="text-sm text-white/80">Focus on Scientific Spirituality</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <GraduationCap className="h-4 w-4 text-accent mt-0.5" />
                        <span className="text-sm text-white/80">Industry-ready curriculum</span>
                    </li>
                </ul>
              </div>
               <div className="p-4 bg-primary-foreground/5 rounded-b-xl border-t border-white/10 relative z-10">
                <Link href="/about" className="text-sm font-semibold text-accent hover:text-white flex items-center justify-center transition-colors">
                    Discover Our Vision <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
