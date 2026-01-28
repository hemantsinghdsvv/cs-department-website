"use client";

import { Badge } from "@/components/ui/badge";

export default function PrivacyPolicyPage() {
    return (
        <div className="container max-w-4xl mx-auto px-4 py-12 space-y-8">
            <section className="space-y-4">
                <Badge className="bg-primary/5 text-primary border-none mb-2">Legal</Badge>
                <h1 className="text-4xl font-heading font-bold text-primary">Privacy Policy</h1>
                <p className="text-muted-foreground">Last Updated: {new Date().toLocaleDateString()}</p>
            </section>

            <div className="prose prose-slate max-w-none space-y-6 text-slate-700">
                <p>
                    Dev Sanskriti Vishwavidyalaya ("we," "our," or "us") is committed to protecting your privacy. 
                    This Privacy Policy explains how your personal information is collected, used, and disclosed by the Department of Computer Science.
                </p>
                
                <h3 className="text-xl font-bold text-slate-900">Information We Collect</h3>
                <p>
                    We collect information you provide directly to us, such as when you fill out a form, apply for admission, or communicate with us. 
                    This may include your name, email address, phone number, and academic records.
                </p>

                <h3 className="text-xl font-bold text-slate-900">How We Use Information</h3>
                <ul className="list-disc pl-5 space-y-2">
                    <li>To provide, maintain, and improve our educational services.</li>
                    <li>To process admissions and academic records.</li>
                    <li>To send you technical notices, updates, security alerts, and support messages.</li>
                    <li>To respond to your comments, questions, and requests.</li>
                </ul>

                <h3 className="text-xl font-bold text-slate-900">Contact Us</h3>
                <p>
                    If you have any questions about this Privacy Policy, please contact us at <a href="mailto:mca@dsvv.ac.in" className="text-primary hover:underline">mca@dsvv.ac.in</a>.
                </p>
            </div>
        </div>
    );
}
