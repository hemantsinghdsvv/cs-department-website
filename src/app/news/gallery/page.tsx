
"use client";

import { galleryItems } from "@/lib/data/eventsData";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ImageIcon } from "lucide-react";

export default function GalleryPage() {
    const categories = ["All", ...Array.from(new Set(galleryItems.map(i => i.category)))];
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredItems = selectedCategory === "All" 
        ? galleryItems 
        : galleryItems.filter(i => i.category === selectedCategory);

    return (
        <div className="container max-w-7xl mx-auto px-4 py-12 space-y-8">
            <div className="text-center space-y-4">
                <h1 className="text-3xl font-bold font-heading text-primary flex items-center justify-center gap-2">
                    <ImageIcon className="h-8 w-8 text-accent" /> Media Gallery
                </h1>
                <p className="text-slate-500">A visual journey through our department's milestones.</p>
                
                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-2">
                    {categories.map((cat) => (
                        <Button
                            key={cat}
                            variant={selectedCategory === cat ? "default" : "outline"}
                            onClick={() => setSelectedCategory(cat)}
                            className="rounded-full"
                        >
                            {cat}
                        </Button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredItems.map((item) => (
                    <div key={item.id} className="group relative overflow-hidden rounded-lg bg-slate-100 aspect-square">
                        <img 
                            src={item.url} 
                            alt={item.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="text-white font-bold text-center px-4">
                                {item.title}
                                <br/>
                                <span className="text-xs font-normal opacity-80">{item.date}</span>
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
