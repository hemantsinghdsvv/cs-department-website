"use client";

import { useEffect, useState } from "react";
import { EventService } from "@/services/eventService";
import { Event } from "@/types";
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
import { Pencil, Trash2, Plus, Loader2, Upload, Download, Calendar as CalendarIcon } from "lucide-react";
import * as XLSX from 'xlsx';
import { Timestamp } from "firebase/firestore";
import { format } from "date-fns";

export default function EventsAdminPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [currentEvent, setCurrentEvent] = useState<Partial<Event>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [importing, setImporting] = useState(false);

  const fetchEvents = async () => {
    setLoading(true);
    const data = await EventService.getAll();
    setEvents(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Ensure dates are Firestore Timestamps if they come from Date input (string)
      const eventData: any = { ...currentEvent };
      if (typeof currentEvent.startDate === 'string') {
          eventData.startDate = Timestamp.fromDate(new Date(currentEvent.startDate));
      }
      if (typeof currentEvent.endDate === 'string') {
          eventData.endDate = Timestamp.fromDate(new Date(currentEvent.endDate));
      }

      if (currentEvent.id) {
        await EventService.update(currentEvent.id, eventData);
      } else {
        await EventService.add(eventData as Event);
      }
      setIsOpen(false);
      setCurrentEvent({});
      fetchEvents();
    } catch (error) {
      console.error("Error saving event", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this event?")) {
      await EventService.delete(id);
      fetchEvents();
    }
  };

  const openEdit = (ev: Event) => {
    // Convert Timestamps to YYYY-MM-DD strings for input
    const editData = { ...ev };
    if (ev.startDate && ev.startDate.toDate) {
        editData.startDate = ev.startDate.toDate().toISOString().split('T')[0] as any;
    }
    if (ev.endDate && ev.endDate.toDate) {
        editData.endDate = ev.endDate.toDate().toISOString().split('T')[0] as any;
    }
    setCurrentEvent(editData);
    setIsOpen(true);
  };

  const handleDeleteAll = async () => {
    if (confirm("ARE YOU SURE? This will delete ALL events permanently. This action cannot be undone.")) {
        if (confirm("Please confirm again to DELETE ALL DATA.")) {
            setIsSubmitting(true);
            try {
                await EventService.deleteAll();
                alert("All events have been deleted.");
                fetchEvents();
            } catch (error) {
                console.error("Delete all error:", error);
                alert("Failed to delete all records.");
            } finally {
                setIsSubmitting(false);
            }
        }
    }
  };

  // Excel Handle
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
                  if (row.Title && row.StartDate) {
                      const newEvent: any = {
                          title: row.Title,
                          description: row.Description || "",
                          location: row.Location || "TBD",
                          image: row.Image || "",
                          startDate: Timestamp.fromDate(new Date(row.StartDate)),
                          endDate: row.EndDate ? Timestamp.fromDate(new Date(row.EndDate)) : Timestamp.fromDate(new Date(row.StartDate))
                      };
                      await EventService.add(newEvent);
                      successCount++;
                  }
              }
              alert(`Successfully imported ${successCount} events.`);
              fetchEvents();
          } catch (error) {
              console.error("Import error:", error);
              alert("Failed to import data. Please check dates format (YYYY-MM-DD recommended).");
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
              Title: "International Conference on AI", 
              Description: "A gathering of AI experts...", 
              StartDate: "2025-03-15", 
              EndDate: "2025-03-17", 
              Location: "Auditorium", 
              Image: "https://example.com/banner.jpg" 
          }
      ]);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Events");
      XLSX.writeFile(wb, "events_sample.xlsx");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Events Management</h1>
        <div className="flex gap-2">
             <div className="relative">
                <input 
                    type="file" 
                    id="excel-upload-event" 
                    accept=".xlsx, .xls" 
                    className="hidden" 
                    onChange={handleFileUpload}
                    disabled={importing}
                />
                <Button variant="outline" onClick={() => document.getElementById('excel-upload-event')?.click()} disabled={importing}>
                    {importing ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Upload className="mr-2 h-4 w-4" />}
                    {importing ? "Importing..." : "Import Excel"}
                </Button>
            </div>
            <Button variant="destructive" onClick={handleDeleteAll} disabled={isSubmitting || events.length === 0} className="hidden md:flex">
                <Trash2 className="mr-2 h-4 w-4" />
                Delete All
            </Button>
            <Button variant="ghost" size="icon" onClick={downloadSample} title="Download Sample Format">
                <Download className="h-4 w-4" />
            </Button>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button onClick={() => setCurrentEvent({})}>
                <Plus className="mr-2 h-4 w-4" /> Add Event
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                <DialogTitle>{currentEvent.id ? "Edit Event" : "Create New Event"}</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-2">
                    <Label htmlFor="title">Title</Label>
                    <Input
                    id="title"
                    value={currentEvent.title || ""}
                    onChange={(e) => setCurrentEvent({ ...currentEvent, title: e.target.value })}
                    required
                    />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="desc">Description</Label>
                    <Textarea
                    id="desc"
                    value={currentEvent.description || ""}
                    onChange={(e) => setCurrentEvent({ ...currentEvent, description: e.target.value })}
                    className="min-h-[100px]"
                    required
                    />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="start">Start Date</Label>
                        <Input
                        id="start"
                        type="date"
                        value={currentEvent.startDate as any || ""}
                        onChange={(e) => setCurrentEvent({ ...currentEvent, startDate: e.target.value as any })}
                        required
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="end">End Date</Label>
                        <Input
                        id="end"
                        type="date"
                        value={currentEvent.endDate as any || ""}
                        onChange={(e) => setCurrentEvent({ ...currentEvent, endDate: e.target.value as any })}
                        />
                    </div>
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                    id="location"
                    value={currentEvent.location || ""}
                    onChange={(e) => setCurrentEvent({ ...currentEvent, location: e.target.value })}
                    placeholder="e.g. Auditorium"
                    required
                    />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="img">Image URL</Label>
                    <Input
                    id="img"
                    type="url"
                    value={currentEvent.image || ""}
                    onChange={(e) => setCurrentEvent({ ...currentEvent, image: e.target.value })}
                    placeholder="https://..."
                    />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Save Event
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
              <TableHead className="w-[120px]">Date</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Location</TableHead>
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
            ) : events.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center py-8 text-muted-foreground">
                  No events found. Import from Excel to get started!
                </TableCell>
              </TableRow>
            ) : (
              events.map((ev) => (
                <TableRow key={ev.id}>
                  <TableCell>
                      {ev.startDate && ev.startDate.toDate ? format(ev.startDate.toDate(), "dd MMM yyyy") : "-"}
                  </TableCell>
                  <TableCell className="font-medium">{ev.title}</TableCell>
                  <TableCell>{ev.location}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-1">
                        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => openEdit(ev)}>
                        <Pencil className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive" onClick={() => ev.id && handleDelete(ev.id)}>
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
