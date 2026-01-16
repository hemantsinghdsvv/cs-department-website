
import { AdmissionTimelineStep } from "@/lib/data/admissionsData";
import { CheckCircle2, Circle, Clock } from "lucide-react";

interface TimelineProps {
    steps: AdmissionTimelineStep[];
}

export default function Timeline({ steps }: TimelineProps) {
    return (
        <div className="relative border-l-2 border-slate-200 ml-4 md:ml-6 space-y-12 my-8">
            {steps.map((step, index) => {
                let Icon = Circle;
                let colorClass = "text-slate-300 border-slate-300";
                
                if (step.status === "Active") {
                    Icon = Clock;
                    colorClass = "text-accent border-accent bg-accent/10";
                } else if (step.status === "Closed") {
                    Icon = CheckCircle2;
                    colorClass = "text-green-500 border-green-500 bg-green-50";
                }

                return (
                    <div key={step.id} className="relative pl-8 md:pl-12 group">
                        {/* Dot / Icon */}
                        <div className={`
                            absolute -left-[9px] md:-left-[11px] top-0 h-5 w-5 md:h-6 md:w-6 rounded-full border-2 bg-white flex items-center justify-center
                            ${colorClass} transition-colors
                        `}>
                            <div className={`h-2 w-2 rounded-full ${step.status === "Active" ? "bg-accent animate-pulse" : ""}`}></div>
                        </div>

                        {/* Content */}
                        <div className="space-y-1">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                                <h3 className={`text-lg font-bold ${step.status === "Active" ? "text-primary" : "text-slate-700"}`}>
                                    {step.title}
                                </h3>
                                <div className={`
                                    text-xs font-mono font-semibold px-2 py-1 rounded inline-block w-fit
                                    ${step.status === "Active" ? "bg-accent/10 text-accent" : "bg-slate-100 text-slate-500"}
                                `}>
                                    {step.date}
                                </div>
                            </div>
                            <p className="text-slate-600 text-sm leading-relaxed max-w-xl">
                                {step.description}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
