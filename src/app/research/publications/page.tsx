
"use client";

import { publications } from "@/lib/data/researchData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, BookOpen, FileText } from "lucide-react";
import Link from "next/link";

export default function PublicationsPage() {
    return (
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
             <section className="text-center space-y-4 max-w-3xl mx-auto">
                <Badge className="bg-primary/5 text-primary hover:bg-primary/10 border-none mb-2">Knowledge Output</Badge>
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary">
                    Research <span className="text-accent">Publications</span>
                </h1>
                <p className="text-muted-foreground text-lg">
                    Scholarly articles, conference papers, and patents by our faculty and scholars.
                </p>
            </section>

            <div className="space-y-6">
                {publications.map((pub) => (
                    <Card key={pub.id} className="hover:border-primary/30 transition-colors">
                        <CardContent className="p-6">
                            <div className="flex flex-col md:flex-row gap-4 justify-between items-start">
                                <div className="space-y-2 flex-1">
                                    <div className="flex items-center gap-2 text-xs md:text-sm">
                                        <Badge variant="outline" className="border-slate-200 text-slate-600">{pub.type}</Badge>
                                        <span className="text-slate-400">|</span>
                                        <span className="font-medium text-slate-700">{pub.venue}</span>
                                        <span className="text-slate-400">|</span>
                                        <span className="text-slate-600">{pub.year}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 leading-snug">{pub.title}</h3>
                                    <p className="text-slate-500 text-sm">
                                        Authors: <span className="text-slate-700 font-medium">{pub.authors.join(", ")}</span>
                                    </p>
                                    {pub.doi && (
                                        <p className="text-xs text-slate-400 font-mono">DOI: {pub.doi}</p>
                                    )}
                                </div>
                                <div className="flex gap-2 self-start md:self-center shrink-0">
                                    {pub.link && (
                                        <Button size="sm" variant="outline" className="gap-2" asChild>
                                            <Link href={pub.link} target="_blank">
                                                <ExternalLink className="h-3 w-3" /> View
                                            </Link>
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
