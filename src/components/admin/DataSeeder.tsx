
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Loader2, Database, CheckCircle, AlertTriangle } from "lucide-react";

// Import data
import { events } from "@/lib/data/eventsData";
// Check if other data files exist and export what we need. 
// Assuming facultyData, notices might be in different files.
// For now, let's seed Events as a proof of concept.
import { EventService } from "@/services/eventService";

export function DataSeeder() {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
    const [message, setMessage] = useState("");

    const handleSeedEvents = async () => {
        setLoading(true);
        setStatus("idle");
        try {
            let count = 0;
            for (const event of events) {
                // Ensure dates are converted if needed, but mock data uses strings usually
                // Service handles adding.
                // We might need to adapt the object structure if the Service expects something specific
                // Activity: Check EventService.add implementation vs dummy data
                // For this demo, we assume compatibility or perform minimal transform
                await EventService.add({
                     ...event,
                     title: event.title,
                     date: event.date,
                     category: "General", // Default
                     description: event.description || ""
                     // Add other fields as per Event interface
                } as any); 
                count++;
            }
            setStatus("success");
            setMessage(`Successfully seeded ${count} events.`);
        } catch (error: any) {
            console.error(error);
            setStatus("error");
            setMessage(error.message || "Failed to seed data.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-amber-800">
                    <Database className="h-5 w-5" /> Database Seeder
                </CardTitle>
                <CardDescription className="text-amber-700">
                    Use this to populate the Firestore database with initial mock data.
                    Only use this if the database is empty.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex items-center gap-4">
                    <Button 
                        onClick={handleSeedEvents} 
                        disabled={loading}
                        variant="outline"
                        className="bg-white border-amber-300 text-amber-900 hover:bg-amber-100"
                    >
                        {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Seed Events"}
                    </Button>
                    
                    {status === "success" && (
                        <div className="text-green-600 flex items-center text-sm font-medium">
                            <CheckCircle className="h-4 w-4 mr-1" /> {message}
                        </div>
                    )}
                    {status === "error" && (
                        <div className="text-red-600 flex items-center text-sm font-medium">
                            <AlertTriangle className="h-4 w-4 mr-1" /> {message}
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
