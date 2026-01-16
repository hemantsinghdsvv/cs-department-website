
"use client";

import { newsItems } from "@/lib/data/eventsData";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ArchivePage() {
    return (
        <div className="container max-w-5xl mx-auto px-4 py-12 space-y-8">
            <div className="flex items-center gap-4">
                <Link href="/news">
                    <Button variant="ghost" size="icon">
                        <ArrowLeft className="h-4 w-4" />
                    </Button>
                </Link>
                <div>
                    <h1 className="text-3xl font-bold font-heading text-primary">News Archive</h1>
                    <p className="text-slate-500">Historical updates and announcements.</p>
                </div>
            </div>

            <div className="space-y-6">
                {newsItems.map((news) => (
                    <Card key={news.id} className="flex flex-col md:flex-row overflow-hidden hover:shadow-md transition-shadow">
                        <div className="md:w-1/4 h-48 md:h-auto relative">
                             <img src={news.image} alt={news.title} className="w-full h-full object-cover" />
                        </div>
                        <CardContent className="md:w-3/4 p-6 flex flex-col justify-center gap-2">
                             <div className="flex items-center gap-2 text-sm text-slate-500">
                                <span>{news.date}</span>
                                <span>•</span>
                                <Badge variant="secondary" className="font-normal">{news.category}</Badge>
                             </div>
                             <h3 className="text-xl font-bold text-slate-900 leading-tight">
                                <Link href={`/news/${news.id}`} className="hover:text-primary transition-colors">
                                    {news.title}
                                </Link>
                             </h3>
                             <p className="text-slate-600 line-clamp-2">
                                {news.summary}
                             </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
