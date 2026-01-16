"use client";

import { useEffect, useState } from "react";
import { FacultyService } from "@/services/facultyService";
import { Faculty } from "@/types";
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
import { 
    Select, 
    SelectContent, 
    SelectItem, 
    SelectTrigger, 
    SelectValue 
} from "@/components/ui/select";
// ... imports
import { Pencil, Trash2, Plus, Loader2, User, Upload, Download } from "lucide-react";
import * as XLSX from 'xlsx';

export default function FacultyAdminPage() {
  const [faculty, setFaculty] = useState<Faculty[]>([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [currentFaculty, setCurrentFaculty] = useState<Partial<Faculty>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [importing, setImporting] = useState(false);

  const fetchFaculty = async () => {
    setLoading(true);
    const data = await FacultyService.getAll();
    setFaculty(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchFaculty();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const facultyData = {
          ...currentFaculty,
          category: currentFaculty.category || 'Core'
      };

      if (currentFaculty.id) {
        await FacultyService.update(currentFaculty.id, facultyData);
      } else {
        await FacultyService.add(facultyData as Faculty);
      }
      setIsOpen(false);
      setCurrentFaculty({});
      fetchFaculty();
    } catch (error) {
      console.error("Error saving faculty", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this faculty member?")) {
      await FacultyService.delete(id);
      fetchFaculty();
    }
  };

  const openEdit = (f: Faculty) => {
    setCurrentFaculty(f);
    setIsOpen(true);
  };

  const handleDeleteAll = async () => {
    if (confirm("ARE YOU SURE? This will delete ALL faculty records permanently. This action cannot be undone.")) {
        if (confirm("Please confirm again to DELETE ALL DATA.")) {
            setIsSubmitting(true);
            try {
                await FacultyService.deleteAll();
                alert("All faculty records have been deleted.");
                fetchFaculty();
            } catch (error) {
                console.error("Delete all error:", error);
                alert("Failed to delete all records.");
            } finally {
                setIsSubmitting(false);
            }
        }
    }
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
                  if (row.Name && row.Designation) {
                      const newFaculty: Faculty = {
                          name: row.Name,
                          designation: row.Designation,
                          qualification: row.Qualification || "",
                          specialization: row.Specialization || "",
                          email: row.Email || "",
                          phone: row.Phone || "",
                          image: row.Image || "",
                          category: (row.Category as any) || "Core",
                          order: Number(row.Order) || 99
                      };
                      await FacultyService.add(newFaculty);
                      successCount++;
                  }
              }
              alert(`Successfully imported ${successCount} faculty members.`);
              fetchFaculty();
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
              Name: "Dr. Sample Name", 
              Designation: "Assistant Professor", 
              Qualification: "Ph.D", 
              Specialization: "AI/ML", 
              Email: "email@example.com", 
              Phone: "9876543210", 
              Category: "Core", 
              Order: 1, 
              Image: "https://..." 
          }
      ]);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Faculty");
      XLSX.writeFile(wb, "faculty_sample.xlsx");
  };


  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Faculty Management</h1>
        <div className="flex gap-2">
            <div className="relative">
                <input 
                    type="file" 
                    id="excel-upload-faculty" 
                    accept=".xlsx, .xls" 
                    className="hidden" 
                    onChange={handleFileUpload}
                    disabled={importing}
                />
                <Button variant="outline" onClick={() => document.getElementById('excel-upload-faculty')?.click()} disabled={importing}>
                    {importing ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Upload className="mr-2 h-4 w-4" />}
                    {importing ? "Importing..." : "Import Excel"}
                </Button>
            </div>
            <Button variant="destructive" onClick={handleDeleteAll} disabled={isSubmitting || faculty.length === 0} className="hidden md:flex">
                <Trash2 className="mr-2 h-4 w-4" />
                Delete All
            </Button>
            <Button variant="ghost" size="icon" onClick={downloadSample} title="Download Sample Format">
                <Download className="h-4 w-4" />
            </Button>

            <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button onClick={() => setCurrentFaculty({})}>
                <Plus className="mr-2 h-4 w-4" /> Add Faculty
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                <DialogTitle>{currentFaculty.id ? "Edit Faculty" : "Add New Faculty"}</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-2">
                    <Label htmlFor="category">Category</Label>
                    <Select 
                        value={currentFaculty.category || "Core"} 
                        onValueChange={(val: any) => setCurrentFaculty({ ...currentFaculty, category: val })}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Select Category" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Core">Core Faculty</SelectItem>
                            <SelectItem value="Visiting">Visiting Faculty</SelectItem>
                            <SelectItem value="Guest">Industry Expert / Guest</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                    id="name"
                    value={currentFaculty.name || ""}
                    onChange={(e) => setCurrentFaculty({ ...currentFaculty, name: e.target.value })}
                    placeholder="e.g. Dr. Pankaj Sharma"
                    required
                    />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="designation">Designation</Label>
                    <Input
                    id="designation"
                    value={currentFaculty.designation || ""}
                    onChange={(e) => setCurrentFaculty({ ...currentFaculty, designation: e.target.value })}
                    placeholder="e.g. Assistant Professor"
                    required
                    />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="qualification">Qualification</Label>
                    <Input
                    id="qualification"
                    value={currentFaculty.qualification || ""}
                    onChange={(e) => setCurrentFaculty({ ...currentFaculty, qualification: e.target.value })}
                    placeholder="e.g. Ph.D (Computer Science)"
                    required
                    />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="specialization">Specialization</Label>
                    <Input
                    id="specialization"
                    value={currentFaculty.specialization || ""}
                    onChange={(e) => setCurrentFaculty({ ...currentFaculty, specialization: e.target.value })}
                    placeholder="e.g. AI/ML, Data Science"
                    required
                    />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                    id="email"
                    type="email"
                    value={currentFaculty.email || ""}
                    onChange={(e) => setCurrentFaculty({ ...currentFaculty, email: e.target.value })}
                    placeholder="faculty@dsvv.ac.in"
                    required
                    />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="image">Profile Image URL</Label>
                    <Input
                    id="image"
                    type="url"
                    value={currentFaculty.image || ""}
                    onChange={(e) => setCurrentFaculty({ ...currentFaculty, image: e.target.value })}
                    placeholder="https://example.com/profile.jpg"
                    />
                    <p className="text-xs text-slate-500">Paste a direct link to a public image (e.g. from Google Drive or a hosting site).</p>
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="order">Display Order</Label>
                    <Input
                    id="order"
                    type="number"
                    value={currentFaculty.order || ""}
                    onChange={(e) => setCurrentFaculty({ ...currentFaculty, order: parseInt(e.target.value) })}
                    placeholder="1"
                    />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Save Details
                </Button>
                </form>
            </DialogContent>
            </Dialog>
        </div>
      </div>

      <div className="rounded-md border bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[80px]">Order</TableHead>
              <TableHead className="w-[80px]">Image</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Designation</TableHead>
              <TableHead>Qualification</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-8">
                  <Loader2 className="h-6 w-6 animate-spin mx-auto text-muted-foreground" />
                </TableCell>
              </TableRow>
            ) : faculty.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                  No faculty members found.
                </TableCell>
              </TableRow>
            ) : (
              faculty.map((f) => (
                <TableRow key={f.id}>
                  <TableCell>{f.order}</TableCell>
                   <TableCell>
                      {f.image ? (
                          <img src={f.image} alt={f.name} className="h-10 w-10 rounded-full object-cover border" />
                      ) : (
                          <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center">
                              <User className="h-5 w-5 text-slate-400" />
                          </div>
                      )}
                  </TableCell>
                  <TableCell>
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium 
                        ${f.category === 'Core' ? 'bg-blue-50 text-blue-700' : 
                          f.category === 'Visiting' ? 'bg-purple-50 text-purple-700' : 
                          'bg-amber-50 text-amber-700'}`}>
                          {f.category || 'Core'}
                      </span>
                  </TableCell>
                  <TableCell className="font-medium">{f.name}</TableCell>
                  <TableCell>{f.designation}</TableCell>
                  <TableCell>{f.qualification}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-1">
                        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => openEdit(f)}>
                        <Pencil className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive" onClick={() => f.id && handleDelete(f.id)}>
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

