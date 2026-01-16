
"use client";

import { useState } from "react";
import { projects } from "@/lib/data/researchData";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building, IndianRupee, Calendar } from "lucide-react";

export default function ProjectsPage() {
    return (
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
            
            <section className="text-center space-y-4 max-w-3xl mx-auto">
                <Badge className="bg-primary/5 text-primary hover:bg-primary/10 border-none mb-2">Funded Research</Badge>
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary">
                    Sponsored <span className="text-accent">Projects</span>
                </h1>
                <p className="text-muted-foreground text-lg">
                    Ongoing and completed research projects funded by national agencies and industry partners.
                </p>
            </section>

            <Tabs defaultValue="all" className="w-full">
                <div className="flex justify-center mb-10">
                    <TabsList className="bg-slate-100 p-1">
                        <TabsTrigger value="all">All Projects</TabsTrigger>
                        <TabsTrigger value="Ongoing">Ongoing</TabsTrigger>
                        <TabsTrigger value="Completed">Completed</TabsTrigger>
                    </TabsList>
                </div>

                {["all", "Ongoing", "Completed"].map((status) => (
                    <TabsContent key={status} value={status}>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {projects
                                .filter(p => status === "all" || p.status === status)
                                .map((project) => (
                                    <Card key={project.id} className="hover:shadow-md transition-shadow flex flex-col h-full border-l-4 border-l-primary/40">
                                        <CardHeader>
                                            <div className="flex justify-between items-start gap-4 mb-2">
                                                <Badge variant={project.status === "Ongoing" ? "default" : "secondary"} className={project.status === "Ongoing" ? "bg-green-600" : ""}>
                                                    {project.status}
                                                </Badge>
                                                <span className="text-xs font-mono text-slate-400">{project.year}</span>
                                            </div>
                                            <CardTitle className="text-lg font-bold leading-tight">{project.title}</CardTitle>
                                            <CardDescription className="text-primary font-medium">{project.domain}</CardDescription>
                                        </CardHeader>
                                        <CardContent className="mt-auto space-y-4 text-sm text-slate-600">
                                            <div className="flex items-center gap-2">
                                                <Building className="h-4 w-4 text-slate-400" />
                                                <span className="font-semibold">{project.fundingAgency}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <IndianRupee className="h-4 w-4 text-slate-400" />
                                                <span>Grant: <span className="text-slate-900 font-medium">{project.amount}</span></span>
                                            </div>
                                            <div className="pt-4 border-t border-slate-100">
                                                PI: <span className="font-medium text-primary">{project.principalInvestigator}</span>
                                            </div>
                                        </CardContent>
                                    </Card>
                            ))}
                        </div>
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    );
}
