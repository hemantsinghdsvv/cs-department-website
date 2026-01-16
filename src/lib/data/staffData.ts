
export interface Staff {
    id: string;
    name: string;
    designation: string;
    qualification: string;
    image: string;
    email?: string;
    phone?: string;
    role: "Technical" | "Administrative";
}

export interface VisitingFaculty {
    id: string;
    name: string;
    designation: string; // e.g. "Visiting Professor", "Adjunct Professor"
    affiliation: string; // e.g. "IIT Delhi", "Microsoft Research"
    specialization: string;
    image: string;
    email?: string;
}

export const technicalStaff: Staff[] = [
    {
        id: "tech-1",
        name: "Mr. Suresh Kumar",
        designation: "Senior Lab Assistant",
        qualification: "B.Sc (CS), Diploma in Hardware",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
        email: "suresh.kumar@dsvv.ac.in",
        role: "Technical"
    },
    {
        id: "tech-2",
        name: "Ms. Anita Singh",
        designation: "Lab Instructor",
        qualification: "MCA",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
        email: "anita.singh@dsvv.ac.in",
        role: "Technical"
    },
    {
        id: "tech-3",
        name: "Mr. Ramesh Yadav",
        designation: "Network Administrator",
        qualification: "B.Tech (IT), CCNA",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
        email: "ramesh.yadav@dsvv.ac.in",
        role: "Technical"
    }
];

export const adminStaff: Staff[] = [
    {
        id: "admin-1",
        name: "Mr. Vinod Sharma",
        designation: "Office Superintendent",
        qualification: "M.Com",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
        email: "vinod.office@dsvv.ac.in",
        phone: "01334-261367 (Ext. 405)",
        role: "Administrative"
    },
    {
        id: "admin-2",
        name: "Ms. Geeta Rani",
        designation: "Junior Assistant",
        qualification: "B.A, PGDCA",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
        email: "geeta.rani@dsvv.ac.in",
        role: "Administrative"
    }
];

export const visitingFaculty: VisitingFaculty[] = [
    {
        id: "vf-1",
        name: "Prof. S.K. Gupta",
        designation: "Adjunct Professor",
        affiliation: "Ex-Professor, IIT Delhi",
        specialization: "Computer Networks & Security",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
        email: "skgupta@iitd.ac.in"
    },
    {
        id: "vf-2",
        name: "Dr. Elena Petrova",
        designation: "Visiting Faculty",
        affiliation: "University of Moscow",
        specialization: "Artificial Intelligence in Consciousness",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: "vf-3",
        name: "Mr. Amit Trivedi",
        designation: "Industry Expert",
        affiliation: "Microsoft India",
        specialization: "Cloud Computing & Azure",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
    }
];
