"use client";

import { useEffect, useState } from "react";
import { NoticeService } from "@/services/noticeService";
import { Notice } from "@/types";
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
import { 
    Select, 
    SelectContent, 
    SelectItem, 
    SelectTrigger, 
    SelectValue 
} from "@/components/ui/select";
// ... imports
import { Pencil, Trash2, Plus, Loader2, Pin, PinOff, FileText, Upload, Download } from "lucide-react";
import { format } from "date-fns";
import { Timestamp } from "firebase/firestore";
import * as XLSX from 'xlsx';

export default function NoticesAdminPage() {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [currentNotice, setCurrentNotice] = useState<Partial<Notice>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [importing, setImporting] = useState(false);

  const fetchNotices = async () => {
    setLoading(true);
    const data = await NoticeService.getAll();
    setNotices(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchNotices();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const noticeData = {
          ...currentNotice,
          // No file upload
      };

      if (currentNotice.id) {
        await NoticeService.update(currentNotice.id, noticeData);
      } else {
        const newNotice = {
            ...noticeData,
            date: Timestamp.now(), // Auto-set date on creation
            isPinned: currentNotice.isPinned || false
        };
        await NoticeService.add(newNotice as Notice);
      }
      setIsOpen(false);
      setCurrentNotice({});
      fetchNotices();
    } catch (error) {
      console.error("Error saving notice", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this notice?")) {
      await NoticeService.delete(id);
      fetchNotices();
    }
  };
  
  const togglePin = async (notice: Notice) => {
      if(notice.id) {
          await NoticeService.update(notice.id, { isPinned: !notice.isPinned });
          fetchNotices();
      }
  }

  const openEdit = (n: Notice) => {
    setCurrentNotice(n);
    setIsOpen(true);
  };

  const handleDeleteAll = async () => {
    if (confirm("ARE YOU SURE? This will delete ALL notices permanently. This action cannot be undone.")) {
        if (confirm("Please confirm again to DELETE ALL DATA.")) {
            setIsSubmitting(true);
            try {
                await NoticeService.deleteAll();
                alert("All notices have been deleted.");
                fetchNotices();
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
                  if (row.Title && row.Content) {
                      const newNotice: any = {
                          title: row.Title,
                          content: row.Content,
                          type: (row.Category?.toLowerCase() as any) || 'general',
                          isPinned: row.IsPinned === 'true' || row.IsPinned === true,
                          date: Timestamp.now()
                      };
                      await NoticeService.add(newNotice);
                      successCount++;
                  }
              }
              alert(`Successfully imported ${successCount} notices.`);
              fetchNotices();
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
              Title: "Sample Notice Title", 
              Content: "Detailed content of the notice...", 
              Category: "general", 
              IsPinned: false 
          }
      ]);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Notices");
      XLSX.writeFile(wb, "notices_sample.xlsx");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Notice Board</h1>
        <div className="flex gap-2">
            <div className="relative">
                <input 
                    type="file" 
                    id="excel-upload-notice" 
                    accept=".xlsx, .xls" 
                    className="hidden" 
                    onChange={handleFileUpload}
                    disabled={importing}
                />
                <Button variant="outline" onClick={() => document.getElementById('excel-upload-notice')?.click()} disabled={importing}>
                    {importing ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Upload className="mr-2 h-4 w-4" />}
                    {importing ? "Importing..." : "Import Excel"}
                </Button>
            </div>
            <Button variant="destructive" onClick={handleDeleteAll} disabled={isSubmitting || notices.length === 0} className="hidden md:flex">
                <Trash2 className="mr-2 h-4 w-4" />
                Delete All
            </Button>
            <Button variant="ghost" size="icon" onClick={downloadSample} title="Download Sample Format">
                <Download className="h-4 w-4" />
            </Button>
            <Dialog open={isOpen} onOpenChange={(open) => {
                setIsOpen(open);
                if(!open) {
                    setCurrentNotice({});
                }
            }}>
            <DialogTrigger asChild>
                <Button onClick={() => setCurrentNotice({})}>
                <Plus className="mr-2 h-4 w-4" /> Post Notice
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                <DialogTitle>{currentNotice.id ? "Edit Notice" : "Create New Notice"}</DialogTitle>
                <p className="text-sm text-slate-500">Fill in the details below to publish a notice.</p>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-2">
                    <Label htmlFor="title">Title</Label>
                    <Input
                    id="title"
                    value={currentNotice.title || ""}
                    onChange={(e) => setCurrentNotice({ ...currentNotice, title: e.target.value })}
                    placeholder="e.g. End Semester Examination Schedule 2025"
                    required
                    />
                </div>
                
                <div className="grid gap-2">
                    <Label htmlFor="type">Category</Label>
                    <Select 
                        value={currentNotice.type || "general"} 
                        onValueChange={(val: any) => setCurrentNotice({ ...currentNotice, type: val })}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="general">General</SelectItem>
                            <SelectItem value="exam">Examination</SelectItem>
                            <SelectItem value="admission">Admission</SelectItem>
                            <SelectItem value="placement">Placement</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="content">Content</Label>
                    <Textarea
                    id="content"
                    value={currentNotice.content || ""}
                    onChange={(e) => setCurrentNotice({ ...currentNotice, content: e.target.value })}
                    className="min-h-[120px]"
                    placeholder="Write the details of the notice here..."
                    required
                    />
                </div>

                <div className="flex items-center gap-2 pt-2 border-t mt-4">
                    <input 
                        type="checkbox" 
                        id="pinned" 
                        checked={currentNotice.isPinned || false}
                        onChange={(e) => setCurrentNotice({...currentNotice, isPinned: e.target.checked})}
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <Label htmlFor="pinned" className="cursor-pointer text-sm font-medium">Pin this notice to top</Label>
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                        <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Publishing...</>
                    ) : (
                        "Publish Notice"
                    )}
                </Button>
                </form>
            </DialogContent>
            </Dialog>
        </div>
      </div>

      <div className="rounded-md border bg-white shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="bg-slate-50">
              <TableHead className="w-[120px]">Date</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center py-12">
                  <Loader2 className="h-8 w-8 animate-spin mx-auto text-primary/50" />
                  <p className="text-xs text-muted-foreground mt-2">Loading Notices...</p>
                </TableCell>
              </TableRow>
            ) : notices.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center py-12 text-muted-foreground">
                  <div className="flex flex-col items-center gap-2">
                      <FileText className="h-10 w-10 opacity-20" />
                      <p>No notices found.</p>
                      <Button variant="outline" size="sm" onClick={() => setIsOpen(true)}>Create First Notice</Button>
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              notices.map((n) => (
                <TableRow key={n.id} className={n.isPinned ? "bg-blue-50/50" : "hover:bg-slate-50"}>
                   <TableCell className="font-medium text-xs text-muted-foreground whitespace-nowrap">
                    {n.date ? format(n.date.toDate(), "dd MMM, yyyy") : "-"}
                  </TableCell>
                  <TableCell>
                      <div className="flex items-start gap-2">
                        {n.isPinned && <Pin className="shrink-0 h-3.5 w-3.5 text-blue-600 fill-blue-600/20 rotate-45 mt-0.5" />}
                        <span className="font-medium text-slate-800 line-clamp-1">{n.title}</span>
                      </div>
                  </TableCell>
                  <TableCell>
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium capitalize
                        ${n.type === 'exam' ? 'bg-red-50 text-red-700' : 
                          n.type === 'admission' ? 'bg-green-50 text-green-700' : 
                          'bg-slate-100 text-slate-700'}`}>
                          {n.type}
                      </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-1">
                        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => togglePin(n)} title={n.isPinned ? "Unpin" : "Pin"}>
                            {n.isPinned ? <PinOff className="h-4 w-4 text-slate-500" /> : <Pin className="h-4 w-4 text-slate-400" />}
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => openEdit(n)}>
                        <Pencil className="h-4 w-4 text-slate-500" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50" onClick={() => n.id && handleDelete(n.id)}>
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
