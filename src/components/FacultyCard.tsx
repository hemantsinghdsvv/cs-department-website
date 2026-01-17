import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Faculty } from "@/types";
import { Mail, GraduationCap, Award } from "lucide-react";

interface FacultyCardProps {
  faculty: Faculty;
}

export function FacultyCard({ faculty }: FacultyCardProps) {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-slate-200">
      <div className="aspect-[4/5] relative overflow-hidden bg-slate-100">
        <img
          src={faculty.image || "/faculty-placeholder.jpg"}
          alt={faculty.name}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <p className="text-white text-sm italic line-clamp-2">
            "{faculty.specialization}"
          </p>
        </div>
      </div>
      <CardHeader className="p-5 pb-2">
        <h3 className="text-xl font-bold text-primary leading-tight group-hover:text-accent transition-colors">
          {faculty.name}
        </h3>
        <p className="text-sm font-semibold text-slate-600 uppercase tracking-wider">
          {faculty.designation}
        </p>
      </CardHeader>
      <CardContent className="p-5 pt-0 space-y-4">
        <div className="space-y-2">
          <div className="flex items-start gap-3 text-sm text-slate-600">
            <GraduationCap className="h-4 w-4 text-accent mt-0.5 shrink-0" />
            <span>{faculty.qualification}</span>
          </div>
          <div className="flex items-start gap-3 text-sm text-slate-600">
            <Mail className="h-4 w-4 text-accent mt-0.5 shrink-0" />
            <span className="truncate">{faculty.email}</span>
          </div>
        </div>
        
        <div className="pt-4 border-t border-slate-100">
            <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase">
                <Award className="h-3.3 w-3.5" />
                <span>Expertise</span>
            </div>
            <p className="text-xs text-slate-500 mt-1 line-clamp-1 italic">
                {faculty.specialization}
            </p>
        </div>
      </CardContent>
    </Card>
  );
}
