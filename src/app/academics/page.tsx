
"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { BookOpen, Calendar, Download, GraduationCap, FileText, CheckCircle2, Clock, Award, Search, Book, User } from "lucide-react";
import Link from "next/link";

// Mock Data for Curriculum
const curriculumData = {
    bca: [
        { semester: 1, subjects: ["Mathematics-I", "Fundamentals of Computers", "Programming in C", "Communication Skills", "Environmental Science"] },
        { semester: 2, subjects: ["Mathematics-II", "Data Structures", "Digital Electronics", "Principles of Management", "C Lab"] },
        { semester: 3, subjects: ["Operating Systems", "Object Oriented Programming (C++)", "DBMS", "Computer Networks", "Accounting & Financial Mgmt"] },
        { semester: 4, subjects: ["Java Programming", "Software Engineering", "Web Technology", "System Analysis & Design", "Numerical Methods"] },
        { semester: 5, subjects: ["Python Programming", "Android Application Development", "Cyber Security", "Elective-I", "Mini Project"] },
        { semester: 6, subjects: ["Cloud Computing", "Artificial Intelligence", "Introduction to Data Science", "Elective-II", "Project-I"] },
        { semester: 7, subjects: ["Machine Learning", "IoT", "Big Data Analytics", "Research Methodology", "Elective-III"] },
        { semester: 8, subjects: ["Major Research Project", "Internship", "Elective-IV"] }
    ],
    bsc: [
         { semester: 1, subjects: ["Fundamentals of Computers", "C Programming", "Mathematics-I", "Communication Skills", "Physics-I"] },
         { semester: 2, subjects: ["Data Structures", "Digital Electronics", "Mathematics-II", "Environmental Studies", "Physics-II"] },
         { semester: 3, subjects: ["Operating Systems", "C++ Programming", "DBMS", "Computer Networks", "Statistics"] },
         { semester: 4, subjects: ["Java Programming", "Software Engineering", "Web Designing", "Computer Graphics", "Discrete Maths"] },
         { semester: 5, subjects: ["Python Programming", "Mobile Computing", "Project Work", "Elective-I", "Visual Programming"] },
         { semester: 6, subjects: ["Cloud Computing", "Information Security", "Elective-II", "Mini Project"] },
         { semester: 7, subjects: ["Data Mining & Warehousing", "Bioinformatics", "Research Seminar", "Elective-III"] },
         { semester: 8, subjects: ["Dissertation / Major Project", "Industrial Training"] }
    ],
    mca: [
        { semester: 1, subjects: ["Advanced Java", "Advanced DBMS", "Operating Systems", "Discrete Maths"] },
        { semester: 2, subjects: ["Data Structures & Algo", "Web Technology", "Software Engg", "AI & ML"] },
        { semester: 3, subjects: ["Cloud Computing", "Big Data Analytics", "IoT", "Elective-I"] },
        { semester: 4, subjects: ["Major Project / Industrial Internship"] }
    ]
};

export default function AcademicsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filterSubjects = (subjects: string[]) => {
      if (!searchQuery) return subjects;
      return subjects.filter(sub => sub.toLowerCase().includes(searchQuery.toLowerCase()));
  };

  return (
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
      
      {/* 1. Hero Section */}
      <section className="text-center space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-2">
            <span className="flex h-2 w-2 rounded-full bg-accent"></span>
            Academic Year 2025-26
            <div className="h-4 w-px bg-primary/20 mx-2"></div>
            <span className="flex items-center gap-1 text-xs uppercase tracking-wide font-bold">
                 NEP 2020 Aligned <CheckCircle2 className="h-3 w-3" />
            </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-heading font-bold tracking-tight text-primary">
          Academic <span className="text-accent">Programs</span>
        </h1>
        <p className="text-muted-foreground max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
          Comprehensive curriculum designed to foster technical excellence, innovation, and ethical leadership in the field of Computer Science.
        </p>
      </section>

      {/* 2. Programs Tabs */}
      <section>
        <Tabs defaultValue="bca" className="w-full">
            <div className="flex flex-col items-center mb-8 gap-4">
                <TabsList className="grid w-full max-w-lg grid-cols-4 h-auto p-1">
                    <TabsTrigger value="bca" className="py-2">BCA (Honors)</TabsTrigger>
                     <TabsTrigger value="bsc" className="py-2 text-xs md:text-sm">B.Sc IT (Honors)</TabsTrigger>
                    <TabsTrigger value="mca" className="py-2">MCA</TabsTrigger>
                    <TabsTrigger value="phd" className="py-2">Ph.D</TabsTrigger>
                </TabsList>
            </div>
            
            {/* BCA (Honors) Content */}
            <TabsContent value="bca" className="space-y-8 animate-in fade-in-50 duration-500">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Program Overview */}
                    <Card className="md:col-span-2 border-primary/10 shadow-md">
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-2xl font-bold text-primary">BCA (Honors) with Research</CardTitle>
                                <Badge variant="secondary" className="text-sm">4 Years</Badge>
                            </div>
                            <CardDescription>Outcome Based Education (OBE) • NEP 2020 Compliant</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <p className="text-muted-foreground leading-relaxed">
                                The BCA Honors program allows students to specialize in advanced domains. It provides a rigorous foundation in computer applications while offering opportunities for research and industrial projects in the final year.
                            </p>
                            
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="p-4 bg-slate-50 rounded-lg flex items-start gap-3 border border-slate-100">
                                    <Clock className="h-5 w-5 text-primary mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-slate-900">Duration</h4>
                                        <p className="text-sm text-slate-500">8 Semesters (Full Time)</p>
                                    </div>
                                </div>
                                <div className="p-4 bg-slate-50 rounded-lg flex items-start gap-3 border border-slate-100">
                                    <GraduationCap className="h-5 w-5 text-primary mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-slate-900">Intake</h4>
                                        <p className="text-sm text-slate-500">25 Seats</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h4 className="font-semibold mb-3 text-slate-900">Program Outcomes (POs)</h4>
                                <div className="flex flex-wrap gap-2">
                                    {["Computational Knowledge", "Problem Analysis", "Design / Development of Solutions", "Modern Tool Usage", "Innovation", "Life-long Learning"].map((po, i) => (
                                        <Badge key={i} variant="outline" className="bg-slate-50 hover:bg-white transition-colors">{po}</Badge>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Quick Downloads & Info */}
                    <div className="space-y-6">
                        <Card className="bg-primary text-primary-foreground border-none shadow-xl">
                            <CardHeader>
                                <CardTitle className="text-xl flex items-center gap-2"><Download className="h-5 w-5"/> Syllabus</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <Button variant="secondary" className="w-full justify-start gap-2 bg-white/10 hover:bg-white/20 text-white border-none" asChild>
                                    <Link href="#">
                                        <FileText className="h-4 w-4" /> 1st Year Scheme
                                    </Link>
                                </Button>
                                <Button variant="secondary" className="w-full justify-start gap-2 bg-white/10 hover:bg-white/20 text-white border-none" asChild>
                                    <Link href="#">
                                        <FileText className="h-4 w-4" /> Complete Syllabus PDF
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                        
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Eligibility</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-4">
                                    <li>12th Pass with min 50% marks.</li>
                                    <li>Recognized Board (10+2).</li>
                                    <li>Max Age: 22 Years.</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Course Explorer */}
                <Card className="overflow-hidden">
                    <CardHeader className="bg-slate-50 border-b border-slate-100">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                                <CardTitle>Curriculum Explorer</CardTitle>
                                <CardDescription>Search and view subjects semester-wise</CardDescription>
                            </div>
                            <div className="relative w-full md:w-64">
                                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
                                <Input 
                                    placeholder="Search subjects..." 
                                    className="pl-9 bg-white"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="divide-y divide-slate-100">
                            {curriculumData.bca.map((sem) => (
                                <div key={sem.semester} className="p-4 hover:bg-slate-50 transition-colors">
                                    <h4 className="font-bold text-primary mb-3 text-sm uppercase tracking-wider">Semester {sem.semester}</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {filterSubjects(sem.subjects).map((sub, idx) => (
                                            <div key={idx} className="inline-flex items-center px-3 py-1 rounded-full border border-slate-200 bg-white text-sm text-slate-700 shadow-sm">
                                                <Book className="h-3 w-3 mr-2 text-slate-400" />
                                                {sub}
                                            </div>
                                        ))}
                                        {filterSubjects(sem.subjects).length === 0 && searchQuery && (
                                            <span className="text-sm text-slate-400 italic">No matching subjects in this semester.</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>

             {/* B.Sc (IT) Content */}
             <TabsContent value="bsc" className="space-y-8 animate-in fade-in-50 duration-500">
               <div className="grid md:grid-cols-3 gap-8">
                    <Card className="md:col-span-2 border-primary/10 shadow-md">
                        <CardHeader>
                             <div className="flex items-center justify-between">
                                <CardTitle className="text-2xl font-bold text-primary">B.Sc (Information Technology) Honors</CardTitle>
                                <Badge variant="secondary" className="text-sm">4 Years</Badge>
                            </div>
                            <CardDescription>Undergraduate Program with Research</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                             <p className="text-muted-foreground leading-relaxed">
                                The B.Sc (IT) Honors program offers an in-depth understanding of information technology. It combines strong theoretical foundations with practical skills in software development, networking, and data management.
                            </p>
                             <div className="grid sm:grid-cols-2 gap-4">
                                <div className="p-4 bg-slate-50 rounded-lg flex items-start gap-3 border border-slate-100">
                                    <Clock className="h-5 w-5 text-primary mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-slate-900">Duration</h4>
                                        <p className="text-sm text-slate-500">8 Semesters (Full Time)</p>
                                    </div>
                                </div>
                                <div className="p-4 bg-slate-50 rounded-lg flex items-start gap-3 border border-slate-100">
                                    <GraduationCap className="h-5 w-5 text-primary mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-slate-900">Intake</h4>
                                        <p className="text-sm text-slate-500">25 Seats</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                     <div className="space-y-6">
                        <Card className="bg-primary text-primary-foreground border-none shadow-xl">
                             <CardHeader>
                                <CardTitle className="text-xl flex items-center gap-2"><Download className="h-5 w-5"/> Syllabus</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <Button variant="secondary" className="w-full justify-start gap-2 bg-white/10 hover:bg-white/20 text-white border-none" asChild>
                                    <Link href="#">
                                        <FileText className="h-4 w-4" /> Download Syllabus PDF
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                         <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Eligibility</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-4">
                                    <li>12th Pass with min 50% marks.</li>
                                    <li>Recognized Board (10+2).</li>
                                    <li>Max Age: 22 Years.</li>
                                </ul>
                            </CardContent>
                        </Card>
                     </div>
               </div>

                {/* Course Explorer (Reusable structure) */}
                <Card className="overflow-hidden">
                    <CardHeader className="bg-slate-50 border-b border-slate-100">
                         <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                                <CardTitle>Curriculum Explorer</CardTitle>
                                <CardDescription>B.Sc (IT) Semester-wise subjects</CardDescription>
                            </div>
                             <div className="relative w-full md:w-64">
                                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
                                <Input 
                                    placeholder="Search subjects..." 
                                    className="pl-9 bg-white"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="p-0">
                         <div className="divide-y divide-slate-100">
                            {curriculumData.bsc.map((sem) => (
                                <div key={sem.semester} className="p-4 hover:bg-slate-50 transition-colors">
                                    <h4 className="font-bold text-primary mb-3 text-sm uppercase tracking-wider">Semester {sem.semester}</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {filterSubjects(sem.subjects).map((sub, idx) => (
                                            <div key={idx} className="inline-flex items-center px-3 py-1 rounded-full border border-slate-200 bg-white text-sm text-slate-700 shadow-sm">
                                                <Book className="h-3 w-3 mr-2 text-slate-400" />
                                                {sub}
                                            </div>
                                        ))}
                                         {filterSubjects(sem.subjects).length === 0 && searchQuery && (
                                            <span className="text-sm text-slate-400 italic">No matching subjects in this semester.</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
             </TabsContent>

            {/* MCA Content */}
            <TabsContent value="mca" className="space-y-8 animate-in fade-in-50 duration-500">
                 <Card>
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <CardTitle className="text-2xl font-bold text-primary">Master of Computer Application (Data Science)</CardTitle>
                            <Badge variant="secondary">2 Years</Badge>
                        </div>
                        <CardDescription>Advanced Post-Graduate Program</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <p className="text-muted-foreground leading-relaxed">
                            The MCA program focuses on application development, software engineering, and system design. It is designed for students who want to delve deeper into the practical aspects of computer science.
                        </p>
                        <div className="grid sm:grid-cols-3 gap-4">
                            <div className="p-4 bg-muted/30 rounded-lg">
                                <h4 className="font-semibold">Duration</h4>
                                <p className="text-sm text-muted-foreground">4 Semesters</p>
                            </div>
                             <div className="p-4 bg-muted/30 rounded-lg">
                                <h4 className="font-semibold">Intake</h4>
                                <p className="text-sm text-muted-foreground">20 Seats</p>
                            </div>
                            <div className="p-4 bg-muted/30 rounded-lg">
                                <h4 className="font-semibold">Eligibility</h4>
                                <p className="text-sm text-muted-foreground">Bachelor&apos;s (&gt;50%) + Maths (12th/Grad)</p>
                            </div>
                        </div>
                         <Button className="w-fit gap-2">
                            <Download className="h-4 w-4" /> Download MCA Syllabus
                         </Button>
                    </CardContent>
                </Card>

                 {/* MCA Course Explorer */}
                <Card className="overflow-hidden">
                    <CardHeader className="bg-slate-50 border-b border-slate-100">
                        <CardTitle>Curriculum Explorer</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                         <div className="divide-y divide-slate-100">
                            {curriculumData.mca.map((sem) => (
                                <div key={sem.semester} className="p-4 hover:bg-slate-50 transition-colors">
                                    <h4 className="font-bold text-primary mb-3 text-sm uppercase tracking-wider">Semester {sem.semester}</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {sem.subjects.map((sub, idx) => (
                                            <div key={idx} className="inline-flex items-center px-3 py-1 rounded-full border border-slate-200 bg-white text-sm text-slate-700 shadow-sm">
                                                <Book className="h-3 w-3 mr-2 text-slate-400" />
                                                {sub}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>

            {/* PhD Content */}
            <TabsContent value="phd" className="space-y-8 animate-in fade-in-50 duration-500">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold text-primary">Doctoral Program (Ph.D)</CardTitle>
                        <Badge variant="secondary" className="mt-2 w-fit">Min 3 Years</Badge>
                        <CardDescription className="mt-2">Research in Computer Science & Scientific Spirituality</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <p className="text-muted-foreground leading-relaxed">
                            Our Ph.D program encourages interdisciplinary research. Scholars work on cutting-edge topics like AI, Vedic Computing, Cryptography, and Consciousness Studies.
                        </p>
                        <div className="grid gap-6 md:grid-cols-2">
                            <div>
                                <h4 className="font-bold mb-3 flex items-center gap-2"><Award className="h-4 w-4 text-accent"/> Research Areas</h4>
                                <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                                    <li>Artificial Intelligence & Machine Learning</li>
                                    <li>Cyber Security & Blockchain</li>
                                    <li>Vedic Mathematics & Computing</li>
                                    <li>Scientific Spirituality</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold mb-3 flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent"/> Admission Criteria</h4>
                                <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                                    <li>Master's Degree (min 55% marks).</li>
                                    <li>Entrance Exam (2 Papers).</li>
                                    <li>NET/M.Phil Exempt from Written Exam.</li>
                                </ul>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
      </section>
      
      {/* 2.5 Program Outcome & Assessment Criteria */}
      <section className="bg-slate-900 text-white py-16 rounded-3xl overflow-hidden relative">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
             <GraduationCap className="h-64 w-64" />
          </div>
          <div className="absolute bottom-0 left-0 bg-accent/10 w-64 h-64 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

          <div className="container max-w-6xl mx-auto px-6 relative z-10">
              <div className="text-center mb-12">
                   <div className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-bold text-accent mb-4 uppercase tracking-widest">
                        Excellence in Education
                    </div>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Program Outcome (PO) & Assessment</h2>
                  <p className="text-slate-300 max-w-2xl mx-auto text-lg font-light">
                      A comprehensive evaluation system designed to measure student learning and development through continuous assessment.
                  </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-start">
                  
                  {/* Left Column: Assessment Criteria List */}
                  <div className="space-y-8">
                       <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-2xl">
                           <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                               <div className="p-2 bg-accent rounded-lg text-slate-900">
                                   <CheckCircle2 className="h-5 w-5" />
                               </div>
                               Assessment Criteria
                           </h3>
                           <div className="space-y-4">
                               {[
                                   { icon: FileText, label: "Home Assignments", desc: "Regular evaluation of understanding." },
                                   { icon: Book, label: "Group Discussions", desc: "Collaborative learning assessment." },
                                   { icon: GraduationCap, label: "Seminar / Presentation", desc: "Communication & research skills." },
                                   { icon: Clock, label: "Quiz", desc: "Quick knowledge checks." },
                                   { icon: CheckCircle2, label: "Viva", desc: "Oral examination & critical thinking." },
                                   { icon: User, label: "Attendance", desc: "Consistency & discipline." }
                               ].map((item, idx) => (
                                   <div key={idx} className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                                       <div className="mt-1 p-1.5 rounded-full bg-slate-800 text-slate-400 group-hover:text-accent group-hover:bg-slate-900 transition-colors">
                                            {/* We need to import User from lucide-react if not already available, using CheckCircle2 as fallback for now if simple map */}
                                           <item.icon className="h-4 w-4" />
                                       </div>
                                       <div>
                                           <h4 className="font-bold text-slate-200 group-hover:text-white transition-colors">{item.label}</h4>
                                           <p className="text-xs text-slate-500 font-medium tracking-wide">{item.desc}</p>
                                       </div>
                                   </div>
                               ))}
                           </div>
                       </div>
                  </div>

                  {/* Right Column: Evaluation Hierarchy Chart */}
                  <div className="relative">
                       <h3 className="text-xl font-bold mb-8 text-center flex items-center justify-center gap-2">
                           Evaluation Scheme <span className="text-sm font-normal text-slate-400">(Total 100 Marks)</span>
                       </h3>
                       
                       {/* Chart Representation */}
                       <div className="flex flex-col items-center space-y-8">
                           
                           {/* Root */}
                           <div className="relative z-10">
                               <div className="bg-slate-800 border-2 border-accent text-accent px-8 py-3 rounded-xl font-bold shadow-[0_0_20px_rgba(253,200,44,0.15)]">
                                   Total Marks (100)
                               </div>
                               {/* Branch Line */}
                               <div className="absolute top-full left-1/2 w-0.5 h-8 bg-slate-700 -translate-x-1/2"></div>
                           </div>

                           {/* Branches Container */}
                           <div className="grid grid-cols-2 gap-8 w-full relative">
                               {/* Connector Line Horizontal */}
                               <div className="absolute top-0 left-1/4 right-1/4 h-0.5 bg-slate-700 -translate-y-px"></div>
                               
                               {/* Formative Branch */}
                               <div className="flex flex-col items-center relative">
                                   <div className="w-0.5 h-6 bg-slate-700 absolute bottom-full left-1/2 -translate-x-1/2"></div>
                                    <div className="bg-white text-slate-900 px-6 py-2 rounded-lg font-bold text-sm shadow-lg mb-6 relative group cursor-default">
                                        Formative (40)
                                        <div className="absolute top-full left-1/2 w-px h-6 bg-slate-700 -translate-x-1/2"></div>
                                    </div>
                                    
                                    {/* Sub-branch Container Formative */}
                                    <div className="relative w-full flex justify-center gap-4">
                                         {/* Line for subs */}
                                         <div className="absolute top-0 left-10 right-10 h-px bg-slate-700 -translate-y-px"></div>
                                         
                                         <div className="flex flex-col items-center mt-4">
                                              <div className="w-px h-4 bg-slate-700 absolute -top-4"></div>
                                              <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 w-full max-w-[160px] text-center">
                                                  <h5 className="text-accent text-xs font-bold uppercase mb-2">Classroom Assessment</h5>
                                                  <p className="text-[10px] text-slate-400 leading-tight">Home Assignment, Quiz, Pres, GD, Viva</p>
                                              </div>
                                         </div>
                                         
                                          <div className="flex flex-col items-center mt-4">
                                              <div className="w-px h-4 bg-slate-700 absolute -top-4"></div>
                                              <div className="bg-slate-800 px-3 py-2 rounded-xl border border-slate-700">
                                                  <h5 className="text-slate-300 text-xs font-bold">Attendance</h5>
                                              </div>
                                         </div>
                                    </div>
                               </div>

                               {/* Summative Branch */}
                               <div className="flex flex-col items-center relative">
                                    <div className="w-0.5 h-6 bg-slate-700 absolute bottom-full left-1/2 -translate-x-1/2"></div>
                                    <div className="bg-primary text-white px-6 py-2 rounded-lg font-bold text-sm shadow-lg mb-6 relative">
                                        Summative (60)
                                        <div className="absolute top-full left-1/2 w-px h-6 bg-slate-700 -translate-x-1/2"></div>
                                    </div>

                                     {/* Sub-branch Container Summative */}
                                    <div className="relative w-full flex justify-center gap-4">
                                         {/* Line for subs */}
                                         <div className="absolute top-0 left-12 right-12 h-px bg-slate-700 -translate-y-px"></div>
                                         
                                         <div className="flex flex-col items-center mt-4">
                                              <div className="w-px h-4 bg-slate-700 absolute -top-4"></div>
                                              <div className="bg-slate-800 px-3 py-2 rounded-xl border border-slate-700 text-center">
                                                  <h5 className="text-white text-xs font-bold">Mid-Term</h5>
                                                  <span className="text-[10px] text-accent font-bold">(20)</span>
                                              </div>
                                         </div>
                                         
                                          <div className="flex flex-col items-center mt-4">
                                              <div className="w-px h-4 bg-slate-700 absolute -top-4"></div>
                                              <div className="bg-slate-800 px-3 py-2 rounded-xl border border-slate-700 text-center">
                                                  <h5 className="text-white text-xs font-bold">End-Term</h5>
                                                   <span className="text-[10px] text-accent font-bold">(40)</span>
                                              </div>
                                         </div>
                                    </div>
                               </div>
                           </div>
                       </div>
                  </div>
              </div>
          </div>
      </section>

      {/* 3. Academic Regulations Accordion */}
      <section className="max-w-4xl mx-auto space-y-8">
         <div className="text-center">
            <h2 className="text-3xl font-bold font-heading">Academic Regulations</h2>
            <p className="text-muted-foreground">Important guidelines for students.</p>
         </div>
         
         <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
                <AccordionTrigger>Attendance Policy</AccordionTrigger>
                <AccordionContent>
                    Minimum 75% attendance is mandatory in theory and practical classes to appear for End Semester Examinations. Medical leave or duty leave must be approved by the HoD within 3 days of absence.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>Evaluation System</AccordionTrigger>
                <AccordionContent>
                    The university follows the Choice Based Credit System (CBCS). Evaluation includes Continuous Internal Assessment (30%) and End Semester Examination (70%).
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>Code of Conduct regarding Uniform</AccordionTrigger>
                <AccordionContent>
                    Students must wear the prescribed university uniform (White Kurta-Pyjama/Salwar-Kameez with Dupatta and Saffron shoulder cloth) on campus.
                </AccordionContent>
            </AccordionItem>
             <AccordionItem value="item-4">
                <AccordionTrigger>Anti-Ragging Policy</AccordionTrigger>
                <AccordionContent>
                   Ragging is strictly prohibited. The university has a zero-tolerance policy towards ragging. Any involvement will lead to immediate suspension and legal action.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
      </section>

      {/* 4. Academic Calendar CTA */}
      <section className="bg-muted rounded-2xl p-8 md:p-12 text-center">
         <div className="max-w-2xl mx-auto space-y-6">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 mb-4">
                <Calendar className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-primary scroll-m-20 tracking-tight">Academic Calendar</h2>
            <p className="text-muted-foreground text-lg">
                Stay updated with important dates, exam schedules, and holidays for the current academic session.
            </p>
            <Button size="lg" className="rounded-full px-8 gap-2" asChild>
                <Link href="/academics/calendar">
                    <Calendar className="h-4 w-4" /> View Interactive Calendar
                </Link>
            </Button>
         </div>
      </section>

    </div>
  );
}
