
"use client";

import { notFound, useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { facultyData } from "@/lib/data/facultyData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Download, ExternalLink, Linkedin, BookOpen, GraduationCap, Building2 } from "lucide-react";

export default function FacultyProfile() {
    const params = useParams();
    // In a real app with async params, we'd await params. But useParams is client hook.
    // If using server component, params would be a prop. 
    // Since "use client" is easier for Tabs interactions for now, I'll use it.
    
    const id = params?.id as string;
    const faculty = facultyData.find(f => f.id === id);

    if (!faculty) {
        return <div className="p-20 text-center">Faculty member not found.</div>;
    }

    return (
        <div className="min-h-screen pb-20">
            {/* Header Section */}
            <div className="bg-slate-900 text-white pb-24 pt-32 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="container max-w-7xl mx-auto px-4 relative z-10">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="relative h-48 w-48 rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl shrink-0">
                             <Image 
                                src={faculty.image} 
                                alt={faculty.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="space-y-4 flex-1">
                            <div>
                                <Badge className="mb-3 bg-accent text-slate-900 hover:bg-accent/90">{faculty.domain}</Badge>
                                <h1 className="text-4xl md:text-5xl font-heading font-bold">{faculty.name}</h1>
                                <p className="text-xl text-slate-300 mt-2 font-medium">{faculty.designation}</p>
                            </div>
                            <div className="flex flex-wrap gap-4 text-sm text-slate-300">
                                <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                                    <GraduationCap className="h-4 w-4 text-accent" />
                                    {faculty.qualification}
                                </div>
                                <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                                    <Building2 className="h-4 w-4 text-accent" />
                                    Dept. of Computer Science
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 w-full md:w-auto">
                            <Button className="w-full gap-2 bg-accent text-slate-900 hover:bg-accent/90">
                                <Download className="h-4 w-4" /> Download CV
                            </Button>
                            <div className="flex gap-2">
                                {faculty.linkedin && (
                                    <Button size="icon" variant="outline" className="bg-transparent text-white border-white/20 hover:bg-white/10">
                                        <Linkedin className="h-4 w-4" />
                                    </Button>
                                )}
                                <Button size="icon" variant="outline" className="bg-transparent text-white border-white/20 hover:bg-white/10" asChild>
                                    <Link href={`mailto:${faculty.email}`}>
                                        <Mail className="h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container max-w-7xl mx-auto px-4 -mt-12 relative z-20">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left Sidebar Info */}
                    <div className="space-y-6">
                        <Card className="shadow-lg border-none">
                            <CardHeader className="bg-slate-50 border-b border-slate-100">
                                <CardTitle className="text-lg">Contact Information</CardTitle>
                            </CardHeader>
                            <CardContent className="pt-6 space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                        <Mail className="h-4 w-4 text-primary" />
                                    </div>
                                    <div className="overflow-hidden">
                                        <p className="text-sm font-medium text-slate-500">Email Address</p>
                                        <p className="text-sm font-semibold truncate hover:text-primary cursor-pointer" title={faculty.email}>{faculty.email}</p>
                                    </div>
                                </div>
                                {faculty.phone && (
                                    <div className="flex items-start gap-3">
                                        <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                            <Phone className="h-4 w-4 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-slate-500">Phone</p>
                                            <p className="text-sm font-semibold">{faculty.phone}</p>
                                        </div>
                                    </div>
                                )}
                                <div className="flex items-start gap-3">
                                    <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                        <MapPin className="h-4 w-4 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-slate-500">Office</p>
                                        <p className="text-sm font-semibold">Faculty Block A, Room 204</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="shadow-lg border-none">
                            <CardHeader className="bg-slate-50 border-b border-slate-100">
                                <CardTitle className="text-lg">Research Interests</CardTitle>
                            </CardHeader>
                            <CardContent className="pt-6">
                                <div className="flex flex-wrap gap-2">
                                    {faculty.researchInterests.map((interest, i) => (
                                        <Badge key={i} variant="outline" className="px-3 py-1 border-slate-200 text-slate-600">
                                            {interest}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Content Tabs */}
                    <div className="lg:col-span-2">
                        <Tabs defaultValue="overview" className="w-full">
                            <TabsList className="bg-white border rounded-xl p-1 h-auto w-full justify-start shadow-sm mb-6">
                                <TabsTrigger value="overview" className="px-6 py-2.5 rounded-lg">Overview</TabsTrigger>
                                <TabsTrigger value="publications" className="px-6 py-2.5 rounded-lg">Publications</TabsTrigger>
                                <TabsTrigger value="teaching" className="px-6 py-2.5 rounded-lg">Teaching & Projects</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview" className="space-y-6 animate-in fade-in-50">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <Users className="h-5 w-5 text-accent" /> Biography
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground leading-relaxed text-lg">
                                            {faculty.bio}
                                        </p>
                                    </CardContent>
                                </Card>

                                <div className="grid sm:grid-cols-2 gap-6">
                                    <Card className="bg-gradient-to-br from-primary/5 to-transparent border-primary/10">
                                        <CardContent className="pt-6">
                                            <h4 className="text-3xl font-bold text-primary mb-1">{faculty.experience}</h4>
                                            <p className="text-muted-foreground font-medium">Academic Experience</p>
                                        </CardContent>
                                    </Card>
                                     <Card className="bg-gradient-to-br from-accent/10 to-transparent border-accent/20">
                                        <CardContent className="pt-6">
                                            <h4 className="text-3xl font-bold text-slate-900 mb-1">{faculty.publications.length}+</h4>
                                            <p className="text-muted-foreground font-medium">Publications</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>

                            <TabsContent value="publications" className="space-y-6 animate-in fade-in-50">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Selected Publications</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-6">
                                        {faculty.publications.length > 0 ? (
                                            faculty.publications.map((pub, idx) => (
                                                <div key={idx} className="flex gap-4 items-start group">
                                                    <div className="h-10 w-10 shrink-0 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                                        <BookOpen className="h-5 w-5" />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold text-slate-900 group-hover:text-primary transition-colors leading-tight">
                                                            {pub.title}
                                                        </h4>
                                                        <p className="text-sm text-muted-foreground mt-1">
                                                            {pub.journal}, {pub.year}
                                                        </p>
                                                    </div>
                                                    {pub.link && (
                                                        <Button variant="ghost" size="icon" className="ml-auto text-slate-400 hover:text-primary" asChild>
                                                            <Link href={pub.link}>
                                                                <ExternalLink className="h-4 w-4" />
                                                            </Link>
                                                        </Button>
                                                    )}
                                                </div>
                                            ))
                                        ) : (
                                            <p className="text-muted-foreground italic">Publication list being updated.</p>
                                        )}
                                    </CardContent>
                                </Card>
                            </TabsContent>

                             <TabsContent value="teaching" className="space-y-6 animate-in fade-in-50">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Courses Taught</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex flex-wrap gap-2">
                                            {faculty.courses.map((course, i) => (
                                                <div key={i} className="px-4 py-2 bg-slate-50 rounded-md border border-slate-100 font-medium text-slate-700">
                                                    {course}
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>

                                {faculty.projects.length > 0 && (
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Funded Projects</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="space-y-4">
                                                {faculty.projects.map((proj, idx) => (
                                                    <div key={idx} className="p-4 rounded-lg border border-slate-100 bg-slate-50/50">
                                                        <h4 className="font-bold text-slate-900">{proj.title}</h4>
                                                        <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                                                            <span className="flex items-center gap-1"><Badge variant="outline" className="h-5 text-[10px]">{proj.role}</Badge></span>
                                                            <span className="font-medium text-primary">₹ {proj.grantAmount}</span>
                                                            <span>{proj.fundingAgency}</span>
                                                            <span>{proj.duration}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                )}
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    );
}
