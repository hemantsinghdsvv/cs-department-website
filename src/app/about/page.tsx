import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  History, Target, Eye, User, Award, 
  BookOpen, Microchip, Globe, Building2, 
  FileText, Download, CheckCircle2, ArrowLeft 
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
      
      {/* 1. Header Section */}
      <section className="text-center space-y-6">
        <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-2">
            <span className="flex h-2 w-2 rounded-full bg-accent mr-2"></span>
            Est. 2006
        </div>
        <h1 className="text-4xl md:text-6xl font-heading font-bold tracking-tight text-primary">
          Department of <span className="text-accent">Computer Science</span>
        </h1>
        <p className="text-muted-foreground max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
          Bridging the gap between ancient wisdom and modern technology. We are committed to developing values-based professionals who can lead the digital revolution with ethical grounding.
        </p>
      </section>

      {/* 2. Vision & Mission Cards */}
      <section className="grid md:grid-cols-2 gap-8">
        <Card className="relative overflow-hidden border-t-4 border-t-accent shadow-lg bg-gradient-to-br from-white to-orange-50/50">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Eye className="h-32 w-32" />
          </div>
          <CardContent className="p-8 space-y-4">
            <div className="h-12 w-12 bg-accent/10 rounded-lg flex items-center justify-center">
              <Eye className="h-6 w-6 text-accent-foreground" />
            </div>
            <h2 className="text-2xl font-bold font-heading">Our Vision</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              "To evolve as a facilitator of excellent places for learning and a producer of competent IT Professionals, Innovators and Entrepreneurs with core human values, and professional ethics."
            </p>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden border-t-4 border-t-primary shadow-lg bg-gradient-to-br from-white to-blue-50/50">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Target className="h-32 w-32" />
          </div>
          <CardContent className="p-8 space-y-4">
             <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold font-heading">Our Mission</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                <span>To transform ambitious students into IT professionals with a great extent of technical skills and to develop an innovative mindset.</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                <span>To prepare the next generation of IT professionals and innovators.</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                <span>To provide the best infrastructure to facilitate teaching-learning in an effective way.</span>
              </li>
               <li className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                <span>To facilitate value-added courses to produce highly competent and socially conscious information technology professionals and entrepreneurs.</span>
              </li>
               <li className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                <span>To accomplish academic excellence with human values through a well-designed curriculum adaptable to dynamic technological needs, competent faculty and the innovative teaching-learning process.</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* 3. HoD Message */}
      <section className="bg-primary text-primary-foreground rounded-3xl p-8 md:p-12 shadow-xl">
        <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="shrink-0 relative">
                 <div className="h-56 w-56 bg-white/10 rounded-full overflow-hidden border-4 border-accent shadow-2xl relative z-10">
                    {/* Placeholder for HoD Image */}
                    <div className="h-full w-full flex items-center justify-center bg-white/20 text-white/50">
                        <User className="h-24 w-24" />
                    </div>
                 </div>
                 <div className="absolute -bottom-4 -right-4 bg-accent text-primary font-bold px-4 py-1 rounded-full shadow-lg z-20">
                    H.O.D.
                 </div>
            </div>
            <div className="space-y-6 text-center md:text-left">
                <div>
                     <h2 className="text-3xl font-bold font-heading">Dr. Gopal Krishna Sharma</h2>
                     <p className="text-accent font-medium text-lg">Head & Assistant Professor, Department of Computer Science</p>
                </div>
                <blockquote className="text-xl md:text-2xl italic leading-relaxed opacity-90">
                    "In an era defined by rapid digital transformation, we strive to ground our students in the timeless fundamentals while exposing them to the cutting edge. Our curriculum is not just about coding; it's about coding with conscience. We prepare you to solve the world's problems with wisdom."
                </blockquote>
            </div>
        </div>
      </section>

      {/* 3.1 Accreditation Strip (New) */}
      <section className="bg-slate-50 border-y border-slate-200 py-12">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Logos - Using text placeholders with distinct styles if images aren't available */}
            <div className="text-center group">
                <div className="text-4xl font-black text-slate-900 tracking-tighter group-hover:text-[#F47920]">NAAC A+</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Accredited</div>
            </div>
             <div className="h-12 w-px bg-slate-200 hidden md:block"></div>
            <div className="text-center group">
                <div className="text-4xl font-black text-slate-900 tracking-tighter group-hover:text-[#1c4c94]">NBA</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Accredited Program</div>
            </div>
             <div className="h-12 w-px bg-slate-200 hidden md:block"></div>
            <div className="text-center group">
                <div className="text-4xl font-black text-slate-900 tracking-tighter group-hover:text-[#009CDE]">ISO 9001</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Certified</div>
            </div>
            <div className="h-12 w-px bg-slate-200 hidden md:block"></div>
            <div className="text-center group">
                <div className="text-4xl font-black text-slate-900 tracking-tighter group-hover:text-[#D11822]">UGC 12(B)</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Recognized</div>
            </div>
        </div>
      </section>

      {/* 4. Infrastructure & Labs Gallery */}
      <section className="space-y-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-4">
            <div className="space-y-4">
                 <h2 className="text-3xl font-bold text-primary font-heading">Infrastructure & Laboratories</h2>
                 <p className="text-muted-foreground max-w-2xl">
                    State-of-the-art facilities designed to foster practical learning and research.
                 </p>
            </div>
            <Button variant="outline" asChild>
                <Link href="/about/infrastructure">View All Facilities <ArrowLeft className="ml-2 h-4 w-4 rotate-180" /></Link>
            </Button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
            {[
                { title: "IoT & Robotics Lab", icon: Microchip, desc: "Equipped with Arduino, Raspberry Pi, and sensors for embedded systems research." },
                { title: "High Performance Computing", icon: Globe, desc: "Server clusters for Big Data Analytics and AI/ML model training." },
                { title: "Software Development Centre", icon: Building2, desc: "A dedicated space for students to work on industry projects and startups." },
                { title: "Digital Library", icon: BookOpen, desc: "Access to IEEE Xplore, ACM Digital Library, and thousands of e-books." },
                { title: "Language Lab", icon: FileText, desc: "Tools for enhancing communication skills and technical writing." },
                { title: "Conference Hall", icon: User, desc: "Modern AV-equipped hall for seminars, webinars, and guest lectures." }
            ].map((lab, idx) => (
                <Link key={idx} href="/about/infrastructure" className="block h-full">
                    <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer group border-slate-200 hover:border-primary/50">
                        <CardHeader>
                            <div className="h-12 w-12 bg-primary/5 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors mb-2">
                                <lab.icon className="h-6 w-6 text-primary group-hover:text-white" />
                            </div>
                            <CardTitle className="text-xl group-hover:text-primary transition-colors">{lab.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{lab.desc}</p>
                        </CardContent>
                    </Card>
                </Link>
            ))}
        </div>
      </section>

      {/* 5. Academic PEOs & Rankings (Tabs) */}
      <section className="space-y-8">
        <div className="text-center">
            <h2 className="text-3xl font-bold text-primary font-heading mb-4">Academic Framework</h2>
            <p className="text-muted-foreground">Aligned with NBA & NAAC Accreditation Standards</p>
        </div>

        <Tabs defaultValue="peo" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="peo">PEOs</TabsTrigger>
                <TabsTrigger value="po">Program Outcomes</TabsTrigger>
                <TabsTrigger value="mou">Collaborations</TabsTrigger>
            </TabsList>
            
            <TabsContent value="peo" className="space-y-4">
                <Card>
                    <CardHeader><CardTitle>Program Educational Objectives (PEOs)</CardTitle></CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex gap-4">
                            <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center shrink-0 font-bold text-primary">1</div>
                            <p className="text-muted-foreground">To prepare students with a solid foundation in mathematics, science, and engineering fundamentals.</p>
                        </div>
                        <div className="flex gap-4">
                             <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center shrink-0 font-bold text-primary">2</div>
                            <p className="text-muted-foreground">To train students in analyzing, designing, and implementing software solutions for real-world problems.</p>
                        </div>
                        <div className="flex gap-4">
                             <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center shrink-0 font-bold text-primary">3</div>
                            <p className="text-muted-foreground">To inculcate professional ethics, leadership qualities, and indefinite learning capabilities.</p>
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>

            <TabsContent value="po" className="space-y-4">
                 <Card>
                    <CardHeader><CardTitle>Program Outcomes (POs)</CardTitle></CardHeader>
                    <CardContent>
                        <ul className="grid sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
                            {[
                                "Engineering Knowledge", "Problem Analysis", "Design/Development of Solutions",
                                "Conduct Investigations", "Modern Tool Usage", "The Engineer and Society",
                                "Environment and Sustainability", "Ethics", "Individual and Team Work",
                                "Communication", "Project Management", "Life-long Learning"
                            ].map((po, i) => (
                                <li key={i} className="flex items-center gap-2">
                                    <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" /> {po}
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            </TabsContent>

            <TabsContent value="mou">
                 <Card>
                    <CardHeader><CardTitle>MoUs & Collaborations</CardTitle></CardHeader>
                    <CardContent className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="p-4 border rounded-lg bg-muted/20">
                                <h4 className="font-bold">IIT Bombay</h4>
                                <p className="text-sm text-muted-foreground">Collaboration for Spoken Tutorial Project & Virtual Labs.</p>
                            </div>
                            <div className="p-4 border rounded-lg bg-muted/20">
                                <h4 className="font-bold">C-DAC, Pune</h4>
                                <p className="text-sm text-muted-foreground">Joint research in High Performance Computing.</p>
                            </div>
                            <div className="p-4 border rounded-lg bg-muted/20">
                                <h4 className="font-bold">HCL Technologies</h4>
                                <p className="text-sm text-muted-foreground">Industry academia partnership for internships.</p>
                            </div>
                             <div className="p-4 border rounded-lg bg-muted/20">
                                <h4 className="font-bold">Coursera</h4>
                                <p className="text-sm text-muted-foreground">Partner for providing global certifications to students.</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
      </section>

      {/* 6. History Timeline */}
      <section className="space-y-10">
         <div className="text-center">
             <h2 className="text-3xl font-bold text-primary font-heading">Our Journey</h2>
             <p className="text-muted-foreground">Milestones in our 20+ years of excellence.</p>
         </div>

         <div className="relative border-l-4 border-muted ml-6 md:ml-auto md:mr-auto md:w-2/3 space-y-8 pl-8 md:pl-12 py-4">
            {[
                { year: "2002", title: "Establishment", desc: "Department established with MCA program." },
                { year: "2005", title: "PhD Program Started", desc: "Research center approved for Computer Science." },
                { year: "2010", title: "New Building", desc: "Shifted to the dedicated 'Chanakya Bhawan' with modern labs." },
                { year: "2015", title: "B.Tech Introduced", desc: "Started B.Tech in CSE with a focus on holistic education." },
                { year: "2020", title: "NAAC A+ Accreditation", desc: "University accredited with A+ grade, Dept recognized for best practices." },
                { year: "2024", title: "AI Research Lab", desc: "Inauguration of dedicated AI & Robotics Center of Excellence." }
            ].map((item, i) => (
                <div key={i} className="relative">
                    <div className="absolute -left-[46px] md:-left-[62px] top-1 h-6 w-6 rounded-full bg-primary border-4 border-white shadow-sm" />
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-2">
                        <span className="text-xl font-bold text-accent">{item.year}</span>
                        <h4 className="text-lg font-semibold">{item.title}</h4>
                    </div>
                    <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>
                </div>
            ))}
         </div>
      </section>

      {/* 7. Action Area / Downloads */}
       <section className="bg-muted rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
                <h3 className="text-2xl font-bold">Annual Reports & Manuals</h3>
                <p className="text-muted-foreground">Download the detailed departmental reports for accreditation.</p>
            </div>
            <div className="flex gap-4">
                <Button variant="outline" className="gap-2">
                    <Download className="h-4 w-4" /> Annual Report 2024
                </Button>
                <Button className="gap-2">
                    <Download className="h-4 w-4" /> Lab Manuals
                </Button>
            </div>
       </section>

    </div>
  );
}
