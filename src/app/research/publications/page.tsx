
"use client";

import { publications, copyrights, patents, books } from "@/lib/data/researchData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, BookOpen, FileText, ShieldCheck, Lightbulb } from "lucide-react";
import Link from "next/link";

export default function PublicationsPage() {
    return (
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
             <section className="text-center space-y-4 max-w-3xl mx-auto">
                <Badge className="bg-primary/5 text-primary hover:bg-primary/10 border-none mb-2">Knowledge Output</Badge>
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary">
                    Research <span className="text-accent">Output</span>
                </h1>
                <p className="text-muted-foreground text-lg">
                    Scholarly articles, copyrights, and intellectual property contributions by our faculty.
                </p>
            </section>

            <Tabs defaultValue="publications" className="w-full">
                <div className="flex justify-center mb-10 overflow-x-auto">
                    <TabsList className="bg-slate-100 p-1">
                        <TabsTrigger value="publications" className="gap-2"><FileText className="h-4 w-4"/> Publications</TabsTrigger>
                        <TabsTrigger value="patents" className="gap-2"><Lightbulb className="h-4 w-4"/> Patents</TabsTrigger>
                        <TabsTrigger value="books" className="gap-2"><BookOpen className="h-4 w-4"/> Books</TabsTrigger>
                        <TabsTrigger value="copyrights" className="gap-2"><ShieldCheck className="h-4 w-4"/> Copyrights</TabsTrigger>
                    </TabsList>
                </div>

                <TabsContent value="publications">
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
                </TabsContent>

                <TabsContent value="patents">
                    <Card>
                        <CardContent className="p-0 overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm text-left">
                                    <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b">
                                        <tr>
                                            <th className="px-6 py-4 font-medium">S.N.</th>
                                            <th className="px-6 py-4 font-medium">Title</th>
                                            <th className="px-6 py-4 font-medium">Faculty</th>
                                            <th className="px-6 py-4 font-medium">Status</th>
                                            <th className="px-6 py-4 font-medium">Year</th>
                                            <th className="px-6 py-4 font-medium">Link</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {patents.map((item, index) => (
                                            <tr key={item.id} className="hover:bg-slate-50/50 transition-colors">
                                                <td className="px-6 py-4 text-slate-500">{index + 1}</td>
                                                <td className="px-6 py-4 font-medium text-slate-900 max-w-md">{item.title}</td>
                                                <td className="px-6 py-4 text-slate-600 whitespace-nowrap">{item.faculty}</td>
                                                <td className="px-6 py-4">
                                                    <Badge variant={item.status === 'Granted' ? 'default' : 'secondary'} className={item.status === 'Granted' ? 'bg-green-600' : ''}>
                                                        {item.status}
                                                    </Badge>
                                                </td>
                                                <td className="px-6 py-4 text-slate-500 whitespace-nowrap">{item.year}</td>
                                                <td className="px-6 py-4">
                                                    {item.link ? (
                                                        <Link href={item.link} className="text-primary hover:text-primary/80 font-medium text-xs flex items-center gap-1">
                                                             View <ExternalLink className="h-3 w-3" />
                                                        </Link>
                                                    ) : (
                                                        <span className="text-slate-400 text-xs italic">N/A</span>
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="books">
                    <Card>
                         <CardContent className="p-0 overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm text-left">
                                    <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b">
                                        <tr>
                                            <th className="px-6 py-4 font-medium">S.N.</th>
                                            <th className="px-6 py-4 font-medium">Title</th>
                                            <th className="px-6 py-4 font-medium">Author(s)</th>
                                            <th className="px-6 py-4 font-medium">Publisher</th>
                                            <th className="px-6 py-4 font-medium">ISBN</th>
                                            <th className="px-6 py-4 font-medium">Year</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {books.map((item, index) => (
                                            <tr key={item.id} className="hover:bg-slate-50/50 transition-colors">
                                                <td className="px-6 py-4 text-slate-500">{index + 1}</td>
                                                <td className="px-6 py-4 font-medium text-slate-900 max-w-sm">{item.title}</td>
                                                <td className="px-6 py-4 text-slate-600">{item.author}</td>
                                                <td className="px-6 py-4 text-slate-600">{item.publisher}</td>
                                                <td className="px-6 py-4 font-mono text-xs text-slate-500 whitespace-nowrap">{item.isbn}</td>
                                                <td className="px-6 py-4 text-slate-500 whitespace-nowrap">{item.year}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="copyrights">
                    <Card>
                        <CardContent className="p-0 overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm text-left">
                                    <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b">
                                        <tr>
                                            <th className="px-6 py-4 font-medium">S.N.</th>
                                            <th className="px-6 py-4 font-medium">Title</th>
                                            <th className="px-6 py-4 font-medium">Applicant</th>
                                            <th className="px-6 py-4 font-medium">ROC No.</th>
                                            <th className="px-6 py-4 font-medium">Date/Year</th>
                                            <th className="px-6 py-4 font-medium">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {copyrights.map((item, index) => (
                                            <tr key={item.id} className="hover:bg-slate-50/50 transition-colors">
                                                <td className="px-6 py-4 text-slate-500">{index + 1}</td>
                                                <td className="px-6 py-4 font-medium text-slate-900 max-w-md">{item.title}</td>
                                                <td className="px-6 py-4 text-slate-600">{item.applicant}</td>
                                                <td className="px-6 py-4 font-mono text-slate-500">{item.rocNo}</td>
                                                <td className="px-6 py-4 text-slate-500 whitespace-nowrap">
                                                    <div>{item.rocDate}</div>
                                                    <div className="text-xs text-slate-400">Year: {item.year}</div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    {item.link ? (
                                                        <Link href={item.link} className="text-primary hover:text-primary/80 font-medium text-xs flex items-center gap-1">
                                                             View <ExternalLink className="h-3 w-3" />
                                                        </Link>
                                                    ) : (
                                                        <span className="text-slate-400 text-xs italic">N/A</span>
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
