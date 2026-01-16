import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Phone, ArrowRight } from "lucide-react";
import { Faculty } from "@/types";

interface FacultyCardProps {
    faculty: Faculty;
}

export default function FacultyCard({ faculty }: FacultyCardProps) {
    return (
        <Card className="overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow duration-300 border-primary/10 group">
            <div className="relative h-64 w-full overflow-hidden bg-slate-100">
                <img 
                    src={faculty.image || "https://ui-avatars.com/api/?name=Faculty&background=random"} 
                    alt={faculty.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                />
            </div>
            <CardHeader className="pb-2">
                <div className="space-y-1">
                    <Badge variant="secondary" className="mb-2 text-xs font-normal text-muted-foreground">{faculty.domain}</Badge>
                    <h3 className="text-xl font-bold text-primary line-clamp-1">{faculty.name}</h3>
                    <p className="text-sm font-medium text-accent">{faculty.designation}</p>
                    <p className="text-xs text-muted-foreground">{faculty.qualification}</p>
                </div>
            </CardHeader>
            <CardContent className="flex-grow">
                <div className="space-y-2">
                    {faculty.email && (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Mail className="h-3.5 w-3.5" />
                            <span className="truncate">{faculty.email}</span>
                        </div>
                    )}
                    {faculty.phone && (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Phone className="h-3.5 w-3.5" />
                            <span>{faculty.phone}</span>
                        </div>
                    )}
                </div>
            </CardContent>
            <CardFooter className="pt-0">
                <Button asChild className="w-full bg-primary/5 text-primary hover:bg-primary hover:text-white transition-colors gap-2 group/btn">
                    <Link href={`/people/faculty/${faculty.id}`}>
                        View Profile <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
}
