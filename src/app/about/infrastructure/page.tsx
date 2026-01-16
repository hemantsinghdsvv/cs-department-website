import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Wifi, Monitor, Book, Coffee, Presentation } from "lucide-react";

export const metadata = {
  title: "Infrastructure | Department of Computer Science",
  description: "Explore our state-of-the-art laboratories and facilities.",
};

const facilities = [
  {
    title: "IoT & Robotics Lab",
    description: "A specialized lab for embedded systems, IoT prototyping, and robotics research. Students work with Arduino, Raspberry Pi, and various sensors to build smart solutions.",
    equipment: ["30+ IoT Kits", "Arduino & Raspberry Pi Units", "3D Printer", "Drone Simulator"],
    icon: Wifi,
    image: "https://www.dsvv.ac.in/wp-content/uploads/2022/01/dsvv1-1-1.jpg?q=80&w=1920&auto=format&fit=crop" // Placeholder
  },
  {
    title: "High Performance Computing Centre",
    description: "Powered by a cluster of high-end servers, this centre facilitates research in Big Data Analytics, Cloud Computing, and Artificial Intelligence model training.",
    equipment: ["NVIDIA DGX Station", "Hadoop Cluster", "Cloud Infrastructure (OpenStack)", "Gibabit Networking"],
    icon: Monitor,
    image: "https://www.dsvv.ac.in/wp-content/uploads/2022/01/dsvv1-1-1.jpg?q=80&w=1920&auto=format&fit=crop"
  },
  {
    title: "Central Digital Library",
    description: "A quiet space for study and research with access to global digital repositories. Fully air-conditioned and Wi-Fi enabled.",
    equipment: ["Kindle E-Readers", "Access to IEEE Xplore", "NPTEL Video Archive", "10,000+ Phsyical Volumes"],
    icon: Book,
    image: "https://www.dsvv.ac.in/wp-content/uploads/2022/01/dsvv1-1-1.jpg?q=80&w=1920&auto=format&fit=crop"
  },
  {
    title: "Smart Classrooms",
    description: "All lecture halls are ICT enabled with smart boards, projectors, and audio systems to facilitate interactive learning and hybrid lectures.",
    equipment: ["Interactive Whiteboards", "Projectors", "Audio Systems", "Lecture Capture"],
    icon: Presentation,
    image: "https://www.dsvv.ac.in/wp-content/uploads/2022/01/dsvv1-1-1.jpg?q=80&w=1920&auto=format&fit=crop"
  }
];

export default function InfrastructurePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
           <div className="mb-6">
                <Button variant="ghost" className="pl-0 hover:pl-2 transition-all text-slate-500" asChild>
                    <Link href="/about"><ArrowLeft className="mr-2 h-4 w-4" /> Back to About</Link>
                </Button>
           </div>
           <h1 className="text-4xl font-heading font-bold text-slate-900">Infrastructure & Facilities</h1>
           <p className="text-xl text-slate-600 mt-2 max-w-3xl">
                We believe that a conducive environment is essential for learning. Our campus boasts world-class infrastructure to support academic and research pursuits.
           </p>
        </div>
      </div>

      {/* Content */}
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {facilities.map((facility, index) => (
            <div key={index} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                {/* Image */}
                <div className="w-full md:w-1/2">
                    <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                         <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10"></div>
                         <img 
                            src={facility.image} 
                            alt={facility.title} 
                            className="w-full aspect-video object-cover transform group-hover:scale-105 transition-transform duration-700" 
                         />
                    </div>
                </div>

                {/* Details */}
                <div className="w-full md:w-1/2 space-y-6">
                    <div className="h-12 w-12 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center text-primary">
                        <facility.icon className="h-6 w-6" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900">{facility.title}</h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        {facility.description}
                    </p>
                    
                    <div>
                        <h4 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wider">Key Highlights</h4>
                        <div className="flex flex-wrap gap-2">
                            {facility.equipment.map((item, i) => (
                                <Badge key={i} variant="secondary" className="px-3 py-1 bg-white border-slate-200 text-slate-700">
                                    {item}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        ))}

        {/* Call to Action */}
        <div className="bg-primary rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold font-heading mb-4">Visit Our Campus</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8 text-lg">
                Experience our facilities primarily. We welcome prospective students and parents for campus tours.
            </p>
            <Button size="lg" className="bg-accent text-primary hover:bg-white font-bold" asChild>
                <Link href="/contact">Schedule a Visit</Link>
            </Button>
        </div>

      </div>
    </div>
  );
}
