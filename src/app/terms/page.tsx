"use client";

import { Badge } from "@/components/ui/badge";

export default function TermsOfUsePage() {
    return (
        <div className="container max-w-4xl mx-auto px-4 py-12 space-y-8">
            <section className="space-y-4">
                <Badge className="bg-primary/5 text-primary border-none mb-2">Legal</Badge>
                <h1 className="text-4xl font-heading font-bold text-primary">Terms of Use</h1>
                <p className="text-muted-foreground">Last Updated: {new Date().toLocaleDateString()}</p>
            </section>

            <div className="prose prose-slate max-w-none space-y-6 text-slate-700">
                <p>
                    These Terms of Use ("Terms") govern your access to and use of the Department of Computer Science website at Dev Sanskriti Vishwavidyalaya.
                    By accessing or using our Service, you agree to be bound by these Terms.
                </p>
                
                <h3 className="text-xl font-bold text-slate-900">1. Use of Service</h3>
                <p>
                    You agree to use the website only for lawful purposes and in accordance with these Terms. You are responsible for all of your activity in connection with the Service.
                </p>

                <h3 className="text-xl font-bold text-slate-900">2. Intellectual Property</h3>
                <p>
                    The Service and its original content, features, and functionality are and will remain the exclusive property of Dev Sanskriti Vishwavidyalaya and its licensors.
                </p>

                <h3 className="text-xl font-bold text-slate-900">3. Links to Other Websites</h3>
                <p>
                    Our Service may contain links to third-party web sites or services that are not owned or controlled by us. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third party web sites or services.
                </p>

                <h3 className="text-xl font-bold text-slate-900">4. Changes</h3>
                <p>
                    We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
                </p>
            </div>
        </div>
    );
}
