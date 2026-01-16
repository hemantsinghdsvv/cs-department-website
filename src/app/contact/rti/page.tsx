
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function RTIPage() {
    return (
        <div className="container max-w-4xl mx-auto px-4 py-16 space-y-8">
            <h1 className="text-3xl font-bold font-heading text-slate-900 border-b pb-4">RTI & Compliance</h1>
            
            <div className="space-y-6 text-slate-700 leading-relaxed">
                <p>
                    Dev Sanskriti Vishwavidyalaya is committed to transparency and accountability in all its operations. 
                    In accordance with the Right to Information Act, 2005, citizens can request information regarding the department's activities.
                </p>

                <h2 className="text-xl font-bold text-slate-900 pt-4">Public Information Officers (PIO)</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">Appellate Authority</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="font-bold">Dr. Abhay Saxena</p>
                            <p className="text-sm text-slate-500">Head of Department</p>
                            <p className="mt-2 text-sm">Email: abhay.saxena@dsvv.ac.in</p>
                            <p className="text-sm">Phone: +91-925836xxxx</p>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">Public Information Officer</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="font-bold">Mr. Ravi Kumar</p>
                            <p className="text-sm text-slate-500">Administrative Officer</p>
                            <p className="mt-2 text-sm">Email: office.cs@dsvv.ac.in</p>
                            <p className="text-sm">Phone: +91-9876543210</p>
                        </CardContent>
                    </Card>
                </div>

                <h2 className="text-xl font-bold text-slate-900 pt-4">Process for Filing RTI</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Submit a written application specifying the particulars of the information sought.</li>
                    <li>Pay the prescribed fee of ₹10 via Demand Draft/Cash.</li>
                    <li>Applications can be submitted to the PIO via post or in person.</li>
                    <li>Response will be provided within 30 days as per the Act.</li>
                </ul>
            </div>
        </div>
    );
}
