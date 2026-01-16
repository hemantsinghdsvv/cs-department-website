import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Alumni } from "@/types";
import { GraduationCap, Briefcase, MapPin, Quote } from "lucide-react";

interface AlumniCardProps {
  alumni: Alumni;
}

export function AlumniCard({ alumni }: AlumniCardProps) {
  return (
    <Card className="overflow-hidden group hover:shadow-xl transition-all duration-500 border-slate-200 bg-white">
      <div className="p-8">
        <div className="flex items-start gap-6">
          <div className="h-20 w-20 rounded-2xl overflow-hidden shrink-0 border-2 border-slate-100 shadow-sm ring-4 ring-slate-50 group-hover:ring-accent/20 transition-all duration-500">
            <img
              src={alumni.imageUrl || "/alumni-placeholder.jpg"}
              alt={alumni.name}
              className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>
          <div className="flex-1 space-y-1">
            <h3 className="text-xl font-bold text-primary leading-tight group-hover:text-accent transition-colors">
              {alumni.name}
            </h3>
            <p className="text-sm font-bold text-slate-700 uppercase tracking-wide">
              {alumni.currentRole}
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
              <Briefcase className="h-3.5 w-3.5 text-accent" />
              <span>{alumni.company}</span>
              <span className="mx-1">•</span>
              <MapPin className="h-3.5 w-3.5 text-accent" />
              <span>{alumni.location}</span>
            </div>
          </div>
        </div>

        <div className="mt-8 relative pt-4 italic">
          <Quote className="absolute -top-2 -left-3 h-8 w-8 text-primary/5 -z-10" />
          <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
            {alumni.testimonial}
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase">
            <GraduationCap className="h-4 w-4 text-accent" />
            <span>Class of {alumni.batch}</span>
          </div>
          <div className="flex gap-2">
            {alumni.linkedinUrl && (
              <a 
                href={alumni.linkedinUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-400 hover:text-[#0077b5]"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}
