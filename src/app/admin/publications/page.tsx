"use client";

import { useEffect, useState } from "react";
import { PublicationService } from "@/services/publicationService";
import { Publication } from "@/types";
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
import { Pencil, Trash2, Plus, Loader2, Upload, Download, FileSpreadsheet } from "lucide-react";
import * as XLSX from 'xlsx';

export default function PublicationsAdminPage() {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [currentPub, setCurrentPub] = useState<Partial<Publication>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [importing, setImporting] = useState(false);

  const fetchPublications = async () => {
    setLoading(true);
    const data = await PublicationService.getAll();
    setPublications(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchPublications();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const pubData = {
          ...currentPub,
          year: Number(currentPub.year) // Ensure year is number
      };

      if (currentPub.id) {
        await PublicationService.update(currentPub.id, pubData);
      } else {
        await PublicationService.add(pubData as Publication);
      }
      setIsOpen(false);
      setCurrentPub({});
      fetchPublications();
    } catch (error) {
      console.error("Error saving publication", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this publication?")) {
      await PublicationService.delete(id);
      fetchPublications();
    }
  };

  const openEdit = (p: Publication) => {
    setCurrentPub(p);
    setIsOpen(true);
  };

  const handleDeleteAll = async () => {
    if (confirm("ARE YOU SURE? This will delete ALL publications permanently. This action cannot be undone.")) {
        if (confirm("Please confirm again to DELETE ALL DATA.")) {
            setIsSubmitting(true);
            try {
                await PublicationService.deleteAll();
                alert("All publications have been deleted.");
                fetchPublications();
            } catch (error) {
                console.error("Delete all error:", error);
                alert("Failed to delete all records.");
            } finally {
                setIsSubmitting(false);
            }
        }
    }
  };

  // Excel Import Handler
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
                  // Map Excel columns to Publication type
                  // Expecting columns: Title, Authors, Journal, Year, Type, Link
                  if (row.Title && row.Authors && row.Year) {
                      const newPub: Publication = {
                          title: row.Title,
                          authors: row.Authors, // Assuming database expects string, not array based on earlier view_file, but better to check if it needs array. 
                          // Wait, my view_file of src/types/index.ts showed authors: string, but existing code had split(",").
                          // I'll stick to string for now or adapt based on type.
                          // Actually type says authors: string. OK.
                          journal: row.Journal || "Unknown Journal",
                          year: Number(row.Year),
                          type: (row.Type?.toLowerCase() as any) || 'journal',
                          link: row.Link || ""
                      };
                      await PublicationService.add(newPub);
                      successCount++;
                  }
              }
              alert(`Successfully imported ${successCount} publications.`);
              fetchPublications();
          } catch (error) {
              console.error("Import error:", error);
              alert("Failed to import data. Please check the file format.");
          } finally {
              setImporting(false);
              // reset input
              e.target.value = "";
          }
      };
      reader.readAsBinaryString(file);
  };

  const downloadSample = () => {
      const ws = XLSX.utils.json_to_sheet([
          { 
              Title: "Sample Paper Title", 
              Authors: "Dr. A. Gupta, Mr. B. Singh", 
              Journal: "IEEE Transactions", 
              Year: 2024, 
              Type: "journal", 
              Link: "https://doi.org/..." 
          }
      ]);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Publications");
      XLSX.writeFile(wb, "publications_sample.xlsx");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Publications</h1>
        <div className="flex gap-2">
             <div className="relative">
                <input 
                    type="file" 
                    id="excel-upload" 
                    accept=".xlsx, .xls" 
                    className="hidden" 
                    onChange={handleFileUpload}
                    disabled={importing}
                />
                <Button variant="outline" onClick={() => document.getElementById('excel-upload')?.click()} disabled={importing}>
                    {importing ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Upload className="mr-2 h-4 w-4" />}
                    {importing ? "Importing..." : "Import Excel"}
                </Button>
            </div>
            <Button variant="destructive" onClick={handleDeleteAll} disabled={isSubmitting || publications.length === 0} className="hidden md:flex">
                <Trash2 className="mr-2 h-4 w-4" />
                Delete All
            </Button>
            <Button variant="ghost" size="icon" onClick={downloadSample} title="Download Sample Format">
                <Download className="h-4 w-4" />
            </Button>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button onClick={() => setCurrentPub({})}>
                <Plus className="mr-2 h-4 w-4" /> Add Publication
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                <DialogTitle>{currentPub.id ? "Edit Publication" : "Add New Publication"}</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-2">
                    <Label htmlFor="title">Title</Label>
                    <Input
                    id="title"
                    value={currentPub.title || ""}
                    onChange={(e) => setCurrentPub({ ...currentPub, title: e.target.value })}
                    required
                    />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="authors">Authors</Label>
                    <Input
                    id="authors"
                    value={currentPub.authors || ""}
                    onChange={(e) => setCurrentPub({ ...currentPub, authors: e.target.value })}
                    placeholder="e.g. Dr. A. Mishra, S. Gupta"
                    required
                    />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="journal">Journal / Conference Name</Label>
                    <Input
                    id="journal"
                    value={currentPub.journal || ""}
                    onChange={(e) => setCurrentPub({ ...currentPub, journal: e.target.value })}
                    required
                    />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="year">Year</Label>
                        <Input
                        id="year"
                        type="number"
                        value={currentPub.year || ""}
                        onChange={(e) => setCurrentPub({ ...currentPub, year: parseInt(e.target.value) })}
                        required
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="type">Type</Label>
                        <Select 
                            value={currentPub.type || "journal"} 
                            onValueChange={(val: any) => setCurrentPub({ ...currentPub, type: val })}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="journal">Journal</SelectItem>
                                <SelectItem value="conference">Conference</SelectItem>
                                <SelectItem value="book_chapter">Book Chapter</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="link">DOI / Link (Optional)</Label>
                    <Input
                    id="link"
                    type="url"
                    value={currentPub.link || ""}
                    onChange={(e) => setCurrentPub({ ...currentPub, link: e.target.value })}
                    placeholder="https://doi.org/..."
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
              <TableHead className="w-[80px]">Year</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Authors</TableHead>
              <TableHead>Journal/Conference</TableHead>
              <TableHead>Type</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-8">
                  <Loader2 className="h-6 w-6 animate-spin mx-auto text-muted-foreground" />
                </TableCell>
              </TableRow>
            ) : publications.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                  No publications found. Import from Excel to get started!
                </TableCell>
              </TableRow>
            ) : (
              publications.map((p) => (
                <TableRow key={p.id}>
                  <TableCell>{p.year}</TableCell>
                  <TableCell className="font-medium max-w-[300px] truncate" title={p.title}>{p.title}</TableCell>
                  <TableCell className="max-w-[200px] truncate" title={p.authors}>{p.authors}</TableCell>
                  <TableCell className="max-w-[200px] truncate" title={p.journal}>{p.journal}</TableCell>
                  <TableCell>
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium capitalize
                        ${p.type === 'journal' ? 'bg-blue-50 text-blue-700' : 
                          p.type === 'conference' ? 'bg-purple-50 text-purple-700' : 
                          'bg-amber-50 text-amber-700'}`}>
                          {p.type?.replace('_', ' ') || 'Journal'}
                      </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-1">
                        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => openEdit(p)}>
                        <Pencil className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive" onClick={() => p.id && handleDelete(p.id)}>
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
