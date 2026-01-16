"use client";

import { useState, useEffect } from "react";
import { StudentService } from "@/services/studentService";
import { Student } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Search, GraduationCap, Filter, Mail, Phone, UserCircle, Loader2 } from "lucide-react";

export default function StudentDirectory() {
    const [students, setStudents] = useState<Student[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedProgram, setSelectedProgram] = useState("All");
    const [selectedSemester, setSelectedSemester] = useState("All");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadStudents = async () => {
             const data = await StudentService.getAll();
             setStudents(data);
             setLoading(false);
        };
        loadStudents();
    }, []);

    // Extract unique options
    const programs = ["All", ...Array.from(new Set(students.map(s => s.program)))];
    // Batch/Year logic might differ now as we store 'batch' (e.g. 2023-2027) not 'First Year'
    // We can map batch to year dynamically or just show Batch filter.
    // For now, let's filter by Batch instead of "Year" if that's what we stored.
    // The migration logic mapped: "First Year" -> "2023-2027".
    // So let's extract batches.
    const semesters = ["All", ...Array.from(new Set(students.map(s => s.semester))).sort()];

    const filteredStudents = students.filter(student => {
        const matchesSearch = 
            student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            student.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            student.phone?.includes(searchQuery) ||
            student.rollNo?.includes(searchQuery);
        
        const matchesProgram = selectedProgram === "All" || student.program === selectedProgram;
        const matchesSemester = selectedSemester === "All" || student.semester === selectedSemester;

        return matchesSearch && matchesProgram && matchesSemester;
    });

    return (
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
            
            {/* Header */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-primary/10 pb-8">
                <div>
                     <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-2">
                        <GraduationCap className="h-4 w-4" />
                        <span>Total Students: {students.length}</span>
                    </div>
                     <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary">
                        Student Directory
                    </h1>
                    <p className="text-muted-foreground mt-2">
                        Browse registered students across all academic programs.
                    </p>
                </div>
            </div>

            {/* Stats Summary */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                 {/* Total Students Card */}
                <Card className="bg-primary/5 border-primary/20">
                    <CardContent className="p-4 flex flex-col items-center justify-center text-center h-full">
                        <div className="text-2xl font-bold text-primary">{students.length}</div>
                        <div className="text-xs text-primary font-semibold uppercase tracking-wide mt-1">Total Students</div>
                    </CardContent>
                </Card>

                {/* Grouped Stats */}
                {Array.from(new Set(students.map(s => `${s.semester} (${s.program})`))).sort().map(key => {
                     // We need to parse key back or just filter based on composite key if we constructed it that way
                     // Simpler: just filter students where `${s.semester} (${s.program})` === key
                     const count = students.filter(s => `${s.semester} (${s.program})` === key).length;
                     return (
                        <Card key={key} className="bg-white border-slate-200">
                            <CardContent className="p-4 flex flex-col items-center justify-center text-center h-full">
                                <div className="text-2xl font-bold text-primary">{count}</div>
                                <div className="text-xs text-muted-foreground uppercase tracking-wide mt-1 px-1">{key}</div>
                            </CardContent>
                        </Card>
                     );
                })}
            </div>

            {/* Controls */}
            <Card className="bg-slate-50 border-slate-200">
                <CardContent className="pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="md:col-span-2 relative">
                             <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                            <Input 
                                placeholder="Search by Name, Email, or Phone..." 
                                className="pl-10 bg-white"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <Select value={selectedProgram} onValueChange={setSelectedProgram}>
                            <SelectTrigger className="bg-white">
                                <SelectValue placeholder="Select Program" />
                            </SelectTrigger>
                            <SelectContent>
                                {programs.map(prog => (
                                    <SelectItem key={prog} value={prog}>{prog}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                         <Select value={selectedSemester} onValueChange={setSelectedSemester}>
                            <SelectTrigger className="bg-white">
                                <SelectValue placeholder="Select Semester" />
                            </SelectTrigger>
                            <SelectContent>
                                {semesters.map(sem => (
                                    <SelectItem key={sem} value={sem}>{sem}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </CardContent>
            </Card>

            {/* Results Table */}
            <div className="rounded-xl border border-slate-200 shadow-sm overflow-hidden bg-white">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-100">
                            <tr>
                                <th className="px-6 py-4 font-semibold">Student Name</th>
                                <th className="px-6 py-4 font-semibold">Program</th>
                                <th className="px-6 py-4 font-semibold">Semester</th>
                                <th className="px-6 py-4 font-semibold">Contact</th>
                                <th className="px-6 py-4 font-semibold">Email</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                             {loading ? (
                                <tr>
                                    <td colSpan={5} className="px-6 py-12 text-center text-muted-foreground">
                                        <Loader2 className="h-8 w-8 animate-spin mx-auto mb-2" />
                                        Loading directory...
                                    </td>
                                </tr>
                            ) : filteredStudents.length > 0 ? (
                                filteredStudents.map((student) => (
                                    <tr key={student.id} className="hover:bg-slate-50/50 transition-colors">
                                        <td className="px-6 py-4 font-medium text-slate-900 flex items-center gap-3">
                                            {student.image ? (
                                                <img src={student.image} alt={student.name} className="h-8 w-8 rounded-full object-cover" />
                                            ) : (
                                                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                                                    {student.name.charAt(0)}
                                                </div>
                                            )}
                                            <div>
                                                <div>{student.name}</div>
                                                <div className="text-xs text-muted-foreground font-normal">{student.rollNo}</div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <Badge variant="outline" className="font-normal">
                                                {student.program}
                                            </Badge>
                                        </td>
                                        <td className="px-6 py-4 text-slate-600">
                                            {student.semester}
                                        </td>
                                        <td className="px-6 py-4 text-slate-600">
                                            {student.phone ? (
                                                <span className="flex items-center gap-2">
                                                    <Phone className="h-3 w-3" /> {student.phone}
                                                </span>
                                            ) : (
                                                <span className="text-slate-400">-</span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 text-slate-600">
                                             {student.email ? (
                                                <span className="flex items-center gap-2">
                                                    <Mail className="h-3 w-3" /> {student.email}
                                                </span>
                                            ) : (
                                                <span className="text-slate-400">-</span>
                                            )}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={5} className="px-6 py-12 text-center text-slate-500">
                                        No students found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                 <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 text-xs text-slate-500 flex justify-between">
                    <span>Showing {filteredStudents.length} students</span>
                    <span>Total {students.length} Records</span>
                </div>
            </div>

        </div>
    );
}
