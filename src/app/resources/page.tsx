
"use client";

import { resourceCategories, resources } from "@/lib/data/resourceData";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
    Download, 
    FileText, 
    Link as LinkIcon, 
    Search, 
    Filter,
    File
} from "lucide-react";
import { useState } from "react";

export default function ResourcesPage() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredResources = resources.filter(res => {
        const matchesCategory = activeCategory === "All" || res.categoryId === activeCategory;
        const matchesSearch = res.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              res.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-slate-50">
            
            {/* Header */}
            <div className="bg-white border-b border-slate-200">
                <div className="container max-w-7xl mx-auto px-4 py-12 md:py-16 text-center space-y-4">
                    <h1 className="text-3xl md:text-5xl font-heading font-bold text-slate-900">
                        Resources & <span className="text-primary">Downloads</span>
                    </h1>
                    <p className="text-slate-500 max-w-2xl mx-auto">
                        Access important forms, question papers, lab manuals, and external learning materials in one place.
                    </p>
                </div>
            </div>

            <div className="container max-w-7xl mx-auto px-4 py-8 md:py-12">
                <div className="flex flex-col lg:flex-row gap-8">
                    
                    {/* Sidebar / Filters */}
                    <div className="lg:w-1/4 space-y-6">
                        {/* Search */}
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                            <Input 
                                placeholder="Search resources..." 
                                className="pl-10"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        {/* Categories */}
                        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4 space-y-1">
                            <div className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                                <Filter className="h-4 w-4" /> Categories
                            </div>
                            <button
                                onClick={() => setActiveCategory("All")}
                                className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                                    activeCategory === "All" ? "bg-primary/10 text-primary" : "text-slate-600 hover:bg-slate-50"
                                }`}
                            >
                                All Resources
                            </button>
                            {resourceCategories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveCategory(cat.id)}
                                    className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                                        activeCategory === cat.id ? "bg-primary/10 text-primary" : "text-slate-600 hover:bg-slate-50"
                                    }`}
                                >
                                    {cat.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Main Content Grid */}
                    <div className="lg:w-3/4">
                        <div className="mb-4 text-sm text-slate-500">
                            Showing {filteredResources.length} result(s)
                        </div>

                        {filteredResources.length > 0 ? (
                            <div className="grid md:grid-cols-2 gap-4">
                                {filteredResources.map((res) => (
                                    <Card key={res.id} className="hover:border-primary/50 transition-colors">
                                        <CardContent className="p-5 flex items-start gap-4">
                                            <div className={`
                                                h-12 w-12 rounded-lg flex items-center justify-center shrink-0
                                                ${res.type === 'PDF' ? 'bg-red-50 text-red-500' : 
                                                  res.type === 'DOC' ? 'bg-blue-50 text-blue-500' : 'bg-green-50 text-green-500'}
                                            `}>
                                                {res.type === 'PDF' ? <FileText className="h-6 w-6" /> : 
                                                 res.type === 'Link' ? <LinkIcon className="h-6 w-6" /> : <File className="h-6 w-6" />}
                                            </div>
                                            <div className="flex-grow space-y-1">
                                                <h3 className="font-bold text-slate-900 leading-tight">
                                                    {res.title}
                                                </h3>
                                                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                                                    <Badge variant="outline" className="font-normal text-slate-500 border-slate-200">
                                                        {resourceCategories.find(c => c.id === res.categoryId)?.name}
                                                    </Badge>
                                                    {res.size && <span>• {res.size}</span>}
                                                    <span>• {res.date}</span>
                                                </div>
                                            </div>
                                            <Button variant="ghost" size="icon" className="shrink-0 text-slate-400 hover:text-primary">
                                                {res.type === 'Link' ? <LinkIcon className="h-4 w-4" /> : <Download className="h-4 w-4" />}
                                            </Button>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20 bg-white rounded-lg border border-dashed border-slate-300">
                                <FileText className="h-10 w-10 text-slate-300 mx-auto mb-3" />
                                <h3 className="text-lg font-bold text-slate-700">No resources found</h3>
                                <p className="text-slate-500">Try adjusting your search or category filter.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
