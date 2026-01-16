
import { ProgramEligibility } from "@/lib/data/admissionsData";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Users, IndianRupee, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface EligibilityCardProps {
    program: ProgramEligibility;
}

export default function EligibilityCard({ program }: EligibilityCardProps) {
    return (
        <Card className="flex flex-col h-full hover:shadow-lg transition-shadow border-t-4 border-t-primary/20">
            <CardHeader className="pb-2">
                <div className="flex justify-between items-start gap-2 mb-2">
                    <Badge variant="outline" className="font-normal text-slate-500">{program.degree}</Badge>
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none">
                        {program.intake} Seats
                    </Badge>
                </div>
                <h3 className="text-xl font-bold text-slate-900 leading-tight min-h-[3rem]">
                    {program.programName}
                </h3>
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
                <div className="flex items-center gap-2 text-sm text-slate-600 border-b border-slate-100 pb-3">
                    <Clock className="h-4 w-4 text-accent" />
                    <span>Duration: <span className="font-medium text-slate-900">{program.duration}</span></span>
                </div>
                
                <div className="space-y-2">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Eligibility Criteria</p>
                    <ul className="space-y-2">
                        {program.criteria.map((req, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                                <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                                <span className="leading-snug">{req}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {program.fees && (
                    <div className="flex items-center gap-2 text-sm bg-slate-50 p-3 rounded-lg text-slate-700">
                        <IndianRupee className="h-4 w-4 text-slate-400" />
                        <span>Est. Fees: <span className="font-semibold">{program.fees}</span></span>
                    </div>
                )}
            </CardContent>
            <CardFooter>
                <Button className="w-full" asChild>
                    <Link href="/contact">Enquire Now</Link>
                </Button>
            </CardFooter>
        </Card>
    );
}
