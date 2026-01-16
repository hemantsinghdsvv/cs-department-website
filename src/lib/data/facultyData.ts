
export interface Publication {
    title: string;
    journal: string;
    year: number;
    link?: string;
}

export interface Project {
    title: string;
    role: "PI" | "Co-PI";
    fundingAgency: string;
    grantAmount: string;
    duration: string;
}

export type FacultyCategory = "Core" | "Visiting" | "Guest";

export interface Faculty {
    id: string;
    category: FacultyCategory;
    name: string;
    designation: string;
    qualification: string; // Used for affiliation for visiting
    domain: string; // Used for specialization for visiting
    email?: string;
    phone?: string;
    image: string;
    bio?: string;
    researchInterests: string[];
    publications: Publication[];
    projects: Project[];
    courses: string[];
    experience?: string;
    googleScholar?: string;
    linkedin?: string;
}

export const facultyData: Faculty[] = [
    // --- Core Faculty ---
    {
        id: "dr-arun-mishra",
        category: "Core",
        name: "Dr. Arun Mishra",
        designation: "Professor & Head",
        qualification: "Ph.D. (Computer Science), M.Tech",
        domain: "Artificial Intelligence",
        email: "arun.mishra@dsvv.ac.in",
        phone: "+91-9876543210",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
        bio: "Dr. Arun Mishra is a distinguished academician with over 20 years of experience in teaching and research. His primary research interests lie in Artificial Intelligence, Machine Learning, and Vedic Computing. He has published over 50 research papers in reputed international journals and conferences.",
        experience: "20+ Years",
        researchInterests: ["Artificial Intelligence", "Machine Learning", "Vedic Computing", "Natural Language Processing"],
        courses: ["Artificial Intelligence", "Machine Learning", "Research Methodology"],
        publications: [
            { title: "Vedic Mathematics Algorithms for High-Speed Computing", journal: "International Journal of Computer Applications", year: 2023, link: "#" },
            { title: "AI-driven Consciousness Studies: A Perspective", journal: "Journal of Scientific Spirituality", year: 2022, link: "#" }
        ],
        projects: [
            { title: "AI in Vedic Studies", role: "PI", fundingAgency: "DST", grantAmount: "25 Lakhs", duration: "2023-2025" }
        ],
        googleScholar: "#",
        linkedin: "#"
    },
    {
        id: "dr-priya-sharma",
        category: "Core",
        name: "Dr. Priya Sharma",
        designation: "Associate Professor",
        qualification: "Ph.D. (Information Security), MCA",
        domain: "Cyber Security",
        email: "priya.sharma@dsvv.ac.in",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
        bio: "Dr. Priya Sharma specializes in Cryptography and Network Security. She advocates for ethical hacking and cyber awareness. She coordinates the University's Cyber Security Cell.",
        experience: "15 Years",
        researchInterests: ["Cryptography", "Network Security", "Blockchain"],
        courses: ["Information Security", "Cryptography", "Computer Networks"],
        publications: [
            { title: "Secure Blockchain Framework for Academic Credentials", journal: "IEEE Access", year: 2024, link: "#" }
        ],
        projects: [],
        linkedin: "#"
    },
    {
        id: "mr-rajesh-gupta",
        category: "Core",
        name: "Mr. Rajesh Gupta",
        designation: "Assistant Professor",
        qualification: "M.Tech (CSE), B.Tech",
        domain: "Web Technologies",
        email: "rajesh.gupta@dsvv.ac.in",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
        bio: "Mr. Rajesh Gupta is passionate about Full Stack Development and Cloud Computing. He mentors student projects and hackathons.",
        experience: "8 Years",
        researchInterests: ["Web Development", "Cloud Computing", "IoT"],
        courses: ["Web Technologies", "Java Programming", "Cloud Computing"],
        publications: [],
        projects: [],
        linkedin: "#"
    },
    {
        id: "dr-kavita-verma",
        category: "Core",
        name: "Dr. Kavita Verma",
        designation: "Assistant Professor",
        qualification: "Ph.D. (Data Science), M.Sc",
        domain: "Data Science",
        email: "kavita.verma@dsvv.ac.in",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
        bio: "Dr. Kavita Verma works on Big Data Analytics and Bioinformatics. Her research aims to bridge the gap between biological data and computational models.",
        experience: "6 Years",
        researchInterests: ["Data Mining", "Bioinformatics", "Big Data"],
        courses: ["Data Science", "DBMS", "Data Structures"],
        publications: [
             { title: "Predictive Modeling in Healthcare using Big Data", journal: "Springer Nature", year: 2023 }
        ],
        projects: [],
        googleScholar: "#"
    },

    // --- Visiting Faculty ---
    {
        id: "vf-1",
        category: "Visiting",
        name: "Prof. S.K. Gupta",
        designation: "Adjunct Professor",
        qualification: "Ex-Professor, IIT Delhi", // Affiliation
        domain: "Computer Networks & Security",
        email: "skgupta@iitd.ac.in",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
        researchInterests: ["Network Security", "Algorithms"],
        publications: [],
        projects: [],
        courses: []
    },
    {
        id: "vf-2",
        category: "Visiting",
        name: "Dr. Elena Petrova",
        designation: "Visiting Faculty",
        qualification: "University of Moscow",
        domain: "AI in Consciousness",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
        researchInterests: ["Consciousness Studies", "AI"],
        publications: [],
        projects: [],
        courses: []
    },

    // --- Guest Lectures ---
    {
        id: "vf-3",
        category: "Guest",
        name: "Mr. Amit Trivedi",
        designation: "Industry Expert",
        qualification: "Microsoft India",
        domain: "Cloud Computing & Azure",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
        researchInterests: ["Cloud Computing", "DevOps"],
        publications: [],
        projects: [],
        courses: []
    }
];
