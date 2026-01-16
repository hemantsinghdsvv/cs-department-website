"use client";

import { useState } from "react";
import { SeedService } from "@/services/seedService";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Database, Loader2, CheckCircle2 } from "lucide-react";

export default function SeedPage() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSeed = async () => {
        setLoading(true);
        try {
            await SeedService.seedData();
            setSuccess(true);
        } catch (error) {
            console.error("Seeding failed", error);
            alert("Seeding failed. Check console.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-[50vh]">
            <Card className="w-[400px]">
                <CardHeader className="text-center">
                    <CardTitle className="flex justify-center gap-2 items-center">
                        <Database className="h-6 w-6 text-primary" />
                        Database Seeding
                    </CardTitle>
                    <CardDescription>
                        Populate database with sample content for Faculty, Notices, and Events.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {success ? (
                        <div className="text-center space-y-2 text-green-600">
                             <CheckCircle2 className="h-12 w-12 mx-auto" />
                             <p className="font-bold">Seeding Complete!</p>
                             <p className="text-sm text-slate-500">You can now view the content on the website.</p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                             <p className="text-sm text-muted-foreground text-center">
                                Warning: This might duplicate data if run multiple times.
                             </p>
                             <Button onClick={handleSeed} disabled={loading} className="w-full">
                                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                {loading ? "Seeding..." : "Inject Sample Data"}
                            </Button>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
