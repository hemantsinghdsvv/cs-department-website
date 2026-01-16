"use client";

import { useState, useEffect } from "react";
import { FacultyService } from "@/services/facultyService";
import { Faculty } from "@/types";
import FacultyCard from "@/components/people/FacultyCard";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Users, Globe, Briefcase } from "lucide-react";

export default function FacultyDirectory() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedDomain, setSelectedDomain] = useState("All");
    const [allFaculty, setAllFaculty] = useState<Faculty[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFaculty = async () => {
            try {
                const data = await FacultyService.getAll();
                setAllFaculty(data);
            } catch (error) {
                console.error("Failed to fetch faculty", error);
            } finally {
                setLoading(false);
            }
        };
        fetchFaculty();
    }, []);

    // Extract unique domains
    const domains = ["All", ...Array.from(new Set(allFaculty.map(f => f.domain || 'General')))];

    const filterFaculty = (category: string) => { // category types on db might be lowercase
        return allFaculty.filter(faculty => {
            const facultyCategory = faculty.category || 'Core'; // Handle missing category
            // Case insensitive comparison for category if needed, but tabs use Title Case
            const matchesCategory = facultyCategory.toLowerCase() === category.toLowerCase();
            
            const matchesSearch = (faculty.name || "").toLowerCase().includes(searchQuery.toLowerCase()) || 
                                  (faculty.researchInterests || []).some(r => r.toLowerCase().includes(searchQuery.toLowerCase()));
            const matchesDomain = selectedDomain === "All" || faculty.domain === selectedDomain;
            
            return matchesCategory && matchesSearch && matchesDomain;
        });
    };

    if (loading) {
         return (
             <div className="min-h-screen flex items-center justify-center">
                 <div className="flex flex-col items-center gap-4">
                     <div className="animate-spin h-10 w-10 border-4 border-primary border-t-transparent rounded-full"></div>
                     <p className="text-slate-500 font-medium">Loading faculty directory...</p>
                 </div>
             </div>
         )
    }

    return (
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
            
            {/* Hero Section */}
            <section className="text-center space-y-4 max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-2">
                    <Users className="h-4 w-4" />
                    <span>Department Team</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary">
                    Meet Our <span className="text-accent">Mentors</span>
                </h1>
                <p className="text-muted-foreground text-lg leading-relaxed">
                    A blend of experienced academicians, visiting professors, and industry experts dedicated to excellence.
                </p>
            </section>

             {/* Filters - Global for all tabs */}
             <section className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm sticky top-20 z-40 backdrop-blur-md bg-white/80">
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                    <div className="relative w-full md:w-96">
                        <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                        <Input 
                            placeholder="Search by name or interest..." 
                            className="pl-10 bg-white"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                     <div className="flex items-center gap-4 w-full md:w-auto">
                        <span className="text-sm font-medium text-slate-700 whitespace-nowrap hidden sm:inline">Filter by Domain:</span>
                        <Select value={selectedDomain} onValueChange={setSelectedDomain}>
                            <SelectTrigger className="w-full md:w-64 bg-white">
                                <SelectValue placeholder="Select Domain" />
                            </SelectTrigger>
                            <SelectContent>
                                {domains.map(domain => (
                                    <SelectItem key={domain} value={domain}>{domain}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </section>

            {/* Tabs for Categories */}
            <Tabs defaultValue="Core" className="w-full space-y-8">
                <div className="flex justify-center">
                    <TabsList className="grid w-full max-w-2xl grid-cols-3 h-auto p-1 bg-slate-100/80">
                        <TabsTrigger value="Core" className="gap-2 py-2">
                            <Users className="h-4 w-4" /> Core Faculty
                        </TabsTrigger>
                        <TabsTrigger value="Visiting" className="gap-2 py-2">
                            <Globe className="h-4 w-4" /> Visiting Faculty
                        </TabsTrigger>
                        <TabsTrigger value="Guest" className="gap-2 py-2">
                            <Briefcase className="h-4 w-4" /> Industry Experts
                        </TabsTrigger>
                    </TabsList>
                </div>

                {/* Content Generation for Each Tab */}
                {(["Core", "Visiting", "Guest"] as const).map((category) => (
                    <TabsContent key={category} value={category} className="animate-in fade-in-50 duration-500">
                         {filterFaculty(category).length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {filterFaculty(category).map(faculty => (
                                    <FacultyCard key={faculty.id} faculty={faculty} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20 bg-slate-50 rounded-xl border border-dashed border-slate-200">
                                <Users className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                                <h3 className="text-xl font-medium text-slate-900">No {category.toLowerCase()} faculty found</h3>
                                <p className="text-slate-500">Try adjusting your search or filters.</p>
                            </div>
                        )}
                    </TabsContent>
                ))}
            </Tabs>

        </div>
    );
}
