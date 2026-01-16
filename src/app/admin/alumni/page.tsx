"use client";

import { useEffect, useState } from "react";
import { AlumniService } from "@/services/alumniService";
import { Alumni } from "@/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
// ...imports
import { Pencil, Trash2, Plus, Loader2, Upload, Download } from "lucide-react";
import * as XLSX from 'xlsx';

export default function AlumniAdminPage() {
  const [alumniList, setAlumniList] = useState<Alumni[]>([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [currentAlumni, setCurrentAlumni] = useState<Partial<Alumni>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [importing, setImporting] = useState(false);

  const fetchAlumni = async () => {
    setLoading(true);
    const data = await AlumniService.getAll();
    setAlumniList(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchAlumni();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      if (currentAlumni.id) {
        await AlumniService.update(currentAlumni.id, currentAlumni);
      } else {
        await AlumniService.add(currentAlumni as Alumni);
      }
      setIsOpen(false);
      setCurrentAlumni({});
      fetchAlumni();
    } catch (error) {
      console.error("Error saving alumni", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this alumni profile?")) {
      await AlumniService.delete(id);
      fetchAlumni();
    }
  };

  const openEdit = (a: Alumni) => {
    setCurrentAlumni(a);
    setIsOpen(true);
  };

  const handleDeleteAll = async () => {
    if (confirm("ARE YOU SURE? This will delete ALL alumni profiles permanently. This action cannot be undone.")) {
        if (confirm("Please confirm again to DELETE ALL DATA.")) {
            setIsSubmitting(true);
            try {
                await AlumniService.deleteAll();
                alert("All alumni profiles have been deleted.");
                fetchAlumni();
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
                  if (row.Name && row.Company) {
                      const newAlumni: Alumni = {
                          name: row.Name,
                          batch: row.Batch ? String(row.Batch) : "Unknown",
                          company: row.Company,
                          designation: row.Designation || row.Role || "Employee",
                          location: row.Location || "",
                          linkedin: row.LinkedIn || "",
                          image: row.Image || "",
                          testimonial: row.Testimonial || "", 
                      };
                      await AlumniService.add(newAlumni);
                      successCount++;
                  }
              }
              alert(`Successfully imported ${successCount} alumni profiles.`);
              fetchAlumni();
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
              Name: "Jane Doe", 
              Batch: "2018-2022", 
              Company: "Google", 
              Role: "Software Engineer", 
              Location: "Bangalore", 
              LinkedIn: "https://linkedin.com/in/...", 
              Image: "https://...",
              Testimonial: "Great college!" 
          }
      ]);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Alumni");
      XLSX.writeFile(wb, "alumni_sample.xlsx");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Alumni Network</h1>
        <div className="flex gap-2">
            <div className="relative">
                <input 
                    type="file" 
                    id="excel-upload-alumni" 
                    accept=".xlsx, .xls" 
                    className="hidden" 
                    onChange={handleFileUpload}
                    disabled={importing}
                />
                <Button variant="outline" onClick={() => document.getElementById('excel-upload-alumni')?.click()} disabled={importing}>
                    {importing ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Upload className="mr-2 h-4 w-4" />}
                    {importing ? "Importing..." : "Import Excel"}
                </Button>
            </div>
            <Button variant="destructive" onClick={handleDeleteAll} disabled={isSubmitting || alumniList.length === 0} className="hidden md:flex">
                <Trash2 className="mr-2 h-4 w-4" />
                Delete All
            </Button>
            <Button variant="ghost" size="icon" onClick={downloadSample} title="Download Sample Format">
                <Download className="h-4 w-4" />
            </Button>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button onClick={() => setCurrentAlumni({})}>
                <Plus className="mr-2 h-4 w-4" /> Add Alumni
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                <DialogTitle>{currentAlumni.id ? "Edit Profile" : "Add New Alumni"}</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                    id="name"
                    value={currentAlumni.name || ""}
                    onChange={(e) => setCurrentAlumni({ ...currentAlumni, name: e.target.value })}
                    required
                    />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="batch">Batch (Year)</Label>
                        <Input
                        id="batch"
                        type="tex" 
                        value={currentAlumni.batch || ""}
                        onChange={(e) => setCurrentAlumni({ ...currentAlumni, batch: e.target.value })}
                        placeholder="e.g. 2018-2022"
                        required
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="role">Current Role</Label>
                        <Input
                        id="role"
                        value={currentAlumni.designation || ""}
                        onChange={(e) => setCurrentAlumni({ ...currentAlumni, designation: e.target.value })}
                        required
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="company">Company</Label>
                        <Input
                        id="company"
                        value={currentAlumni.company || ""}
                        onChange={(e) => setCurrentAlumni({ ...currentAlumni, company: e.target.value })}
                        required
                        />
                    </div>
                    {/* Location removed as it wasn't in interface, or keep if user insists, but I will map to nothing or add to type if essential. I'll omit for safety to match type. */}
                </div>
                
                <div className="grid gap-2">
                    <Label htmlFor="linkedin">LinkedIn URL</Label>
                    <Input
                    id="linkedin"
                    type="url"
                    value={currentAlumni.linkedin || ""}
                    onChange={(e) => setCurrentAlumni({ ...currentAlumni, linkedin: e.target.value })}
                    placeholder="https://linkedin.com/in/..."
                    />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="image">Profile Image URL</Label>
                    <Input
                    id="image"
                    type="url"
                    value={currentAlumni.image || ""}
                    onChange={(e) => setCurrentAlumni({ ...currentAlumni, image: e.target.value })}
                    placeholder="https://..."
                    />
                </div>
                
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Save Profile
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
              <TableHead>Name</TableHead>
              <TableHead>Batch</TableHead>
              <TableHead>Role @ Company</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center py-8">
                  <Loader2 className="h-6 w-6 animate-spin mx-auto text-muted-foreground" />
                </TableCell>
              </TableRow>
            ) : alumniList.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center py-8 text-muted-foreground">
                  No alumni records found.
                </TableCell>
              </TableRow>
            ) : (
              alumniList.map((a) => (
                <TableRow key={a.id}>
                  <TableCell className="font-medium">{a.name}</TableCell>
                   <TableCell>{a.batch}</TableCell>
                  <TableCell>
                      <span className="font-semibold">{a.designation}</span>
                      <span className="text-muted-foreground"> @ {a.company}</span>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" onClick={() => openEdit(a)}>
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-destructive" onClick={() => a.id && handleDelete(a.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
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
