"use client";

import { useEffect, useState } from "react";
import { StudentService } from "@/services/studentService";
import { Student } from "@/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Pencil, Trash2, Plus, Loader2, Upload, Download, GraduationCap, User } from "lucide-react";
import { studentData } from "@/lib/data/studentData";
import { Database } from "lucide-react";
import * as XLSX from 'xlsx';

export default function StudentsAdminPage() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [currentStudent, setCurrentStudent] = useState<Partial<Student>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [importing, setImporting] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchStudents = async () => {
    setLoading(true);
    const data = await StudentService.getAll();
    setStudents(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      if (currentStudent.id) {
        await StudentService.update(currentStudent.id, currentStudent);
      } else {
        await StudentService.add(currentStudent as Student);
      }
      setIsOpen(false);
      setCurrentStudent({});
      fetchStudents();
    } catch (error) {
      console.error("Error saving student", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this student record?")) {
      await StudentService.delete(id);
      fetchStudents();
    }
  };

  const openEdit = (s: Student) => {
    setCurrentStudent(s);
    setIsOpen(true);
  };

    // Excel Handlers
    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        setImporting(true);

        reader.onload = async (evt) => {
            try {
                const bstr = evt.target?.result;
                const wb = XLSX.read(bstr, { type: 'binary' });
                const wsname = wb.SheetNames[0];
                const ws = wb.Sheets[wsname];
                const data = XLSX.utils.sheet_to_json(ws);

                let successCount = 0;
                for (const row of data as any[]) {
                    if (row.Name && row.RollNo) {
                        const newStudent: Student = {
                            name: row.Name,
                            rollNo: String(row.RollNo),
                            semester: row.Semester ? String(row.Semester) : "Unknown",
                            program: row.Program || "B.Tech CSE",
                            email: row.Email || "",
                            phone: row.Phone ? String(row.Phone) : "",
                            image: row.Image || "",
                        };
                        await StudentService.add(newStudent);
                        successCount++;
                    }
                }
                alert(`Successfully imported ${successCount} student records.`);
                fetchStudents();
            } catch (error) {
                console.error("Import error:", error);
                alert("Failed to import data.");
            } finally {
                setImporting(false);
                e.target.value = "";
            }
        };
        reader.readAsBinaryString(file);
    };

    const downloadSample = () => {
        const ws = XLSX.utils.json_to_sheet([
            { 
                Name: "John Doe", 
                RollNo: "21102030", 
                Semester: "3rd Semester", 
                Program: "B.Tech CSE", 
                Email: "john.doe@example.com", 
                Phone: "9876543210", 
                Image: "" 
            }
        ]);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Students");
        XLSX.writeFile(wb, "students_sample.xlsx");
    };

  // Delete All Handler
  const handleDeleteAll = async () => {
    if (confirm("ARE YOU SURE? This will delete ALL student records permanently. This action cannot be undone.")) {
        if (confirm("Please confirm again to DELETE ALL DATA.")) {
            setIsSubmitting(true);
            try {
                await StudentService.deleteAll();
                alert("All student records have been deleted.");
                fetchStudents();
            } catch (error) {
                console.error("Delete all error:", error);
                alert("Failed to delete all records.");
            } finally {
                setIsSubmitting(false);
            }
        }
    }
  };

  // Filter Logic
  const filteredStudents = students.filter(student => 
    student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.rollNo.includes(searchQuery) ||
    student.email?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Stats Logic
  const semesterStats = students.reduce((acc, student) => {
    const key = `${student.semester} (${student.program})`;
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Student Directory</h1>
        <div className="flex gap-2">
            <Button variant="destructive" onClick={handleDeleteAll} disabled={isSubmitting || students.length === 0} className="hidden md:flex">
                <Trash2 className="mr-2 h-4 w-4" />
                Delete All
            </Button>
            <div className="relative">
                <input 
                    type="file" 
                    id="excel-upload-student" 
                    accept=".xlsx, .xls" 
                    className="hidden" 
                    onChange={handleFileUpload}
                    disabled={importing}
                />
                <Button variant="outline" onClick={() => document.getElementById('excel-upload-student')?.click()} disabled={importing}>
                    {importing ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Upload className="mr-2 h-4 w-4" />}
                    {importing ? "Importing..." : "Import Excel"}
                </Button>
            </div>
            <Button variant="ghost" size="icon" onClick={downloadSample} title="Download Sample Format">
                <Download className="h-4 w-4" />
            </Button>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button onClick={() => setCurrentStudent({})}>
                <Plus className="mr-2 h-4 w-4" /> Add Student
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                <DialogTitle>{currentStudent.id ? "Edit Student" : "Add New Student"}</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                    id="name"
                    value={currentStudent.name || ""}
                    onChange={(e) => setCurrentStudent({ ...currentStudent, name: e.target.value })}
                    required
                    />
                </div>
                 <div className="grid gap-2">
                    <Label htmlFor="rollno">Roll No / ID</Label>
                    <Input
                    id="rollno"
                    value={currentStudent.rollNo || ""}
                    onChange={(e) => setCurrentStudent({ ...currentStudent, rollNo: e.target.value })}
                    required
                    />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="semester">Semester</Label>
                        <Input
                        id="semester"
                        value={currentStudent.semester || ""}
                        onChange={(e) => setCurrentStudent({ ...currentStudent, semester: e.target.value })}
                        placeholder="e.g. 1st Semester"
                        required
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="program">Program</Label>
                        <Input
                        id="program"
                        value={currentStudent.program || ""}
                        onChange={(e) => setCurrentStudent({ ...currentStudent, program: e.target.value })}
                        placeholder="e.g. B.Tech CSE"
                        required
                        />
                    </div>
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                    id="email"
                    type="email"
                    value={currentStudent.email || ""}
                    onChange={(e) => setCurrentStudent({ ...currentStudent, email: e.target.value })}
                    required
                    />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                    id="phone"
                    value={currentStudent.phone || ""}
                    onChange={(e) => setCurrentStudent({ ...currentStudent, phone: e.target.value })}
                    />
                </div>
                 <div className="grid gap-2">
                    <Label htmlFor="image">Profile Image URL</Label>
                    <Input
                    id="image"
                    type="url"
                    value={currentStudent.image || ""}
                    onChange={(e) => setCurrentStudent({ ...currentStudent, image: e.target.value })}
                    placeholder="https://..."
                    />
                </div>
                
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Save Record
                </Button>
                </form>
            </DialogContent>
            </Dialog>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {/* Total Students Card */}
        <div className="bg-primary/5 p-4 rounded-lg border border-primary/20 shadow-sm flex flex-col items-center justify-center text-center">
            <div className="text-2xl font-bold text-primary">{students.length}</div>
            <div className="text-xs text-primary font-semibold uppercase tracking-wide">Total Students</div>
        </div>
        {/* Semester Stats */}
        {Object.entries(semesterStats).sort().map(([key, count]) => (
            <div key={key} className="bg-white p-4 rounded-lg border shadow-sm flex flex-col items-center justify-center text-center">
                <div className="text-2xl font-bold text-primary">{count}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide px-2">{key}</div>
            </div>
        ))}
      </div>

     {/* Search Bar */}
     <div className="relative">
        <Input 
            placeholder="Search by Name, Roll No, or Email..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
        />
        {/* We can add a Search icon here if available, but Input placeholder is clear enough */}
     </div>


      <div className="rounded-md border bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Roll No</TableHead>
              <TableHead className="w-[60px]">Image</TableHead>
              <TableHead>Student Name</TableHead>
              <TableHead>Program</TableHead>
              <TableHead>Semester</TableHead>
               <TableHead>Email</TableHead>
               <TableHead>Mobile</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
             {loading ? (
              <TableRow>
                <TableCell colSpan={8} className="text-center py-8">
                  <Loader2 className="h-6 w-6 animate-spin mx-auto text-muted-foreground" />
                </TableCell>
              </TableRow>
            ) : filteredStudents.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">
                  No students found matching your search.
                </TableCell>
              </TableRow>
            ) : (
                filteredStudents.map((s) => (
                <TableRow key={s.id}>
                    <TableCell className="font-mono text-xs font-medium">{s.rollNo}</TableCell>
                    <TableCell>
                         {s.image ? (
                            <img src={s.image} alt={s.name} className="h-9 w-9 rounded-full object-cover border" />
                        ) : (
                            <div className="h-9 w-9 rounded-full bg-slate-100 flex items-center justify-center">
                                <User className="h-4 w-4 text-slate-400" />
                            </div>
                        )}
                    </TableCell>
                    <TableCell>
                        <div className="font-medium">{s.name}</div>
                    </TableCell>
                    <TableCell className="text-xs text-muted-foreground">{s.program}</TableCell>
                     <TableCell>
                        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                            {s.semester}
                        </div>
                     </TableCell>
                     <TableCell className="text-xs">{s.email}</TableCell>
                     <TableCell className="text-xs">{s.phone || "-"}</TableCell>
                    <TableCell className="text-right">
                    <div className="flex justify-end gap-1">
                        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => openEdit(s)}>
                        <Pencil className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive" onClick={() => s.id && handleDelete(s.id)}>
                        <Trash2 className="h-4 w-4" />
                        </Button>
                    </div>
                  </TableCell>
                </TableRow>
                ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
