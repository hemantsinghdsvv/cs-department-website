
export interface ResearchArea {
    id: string;
    title: string;
    description: string;
    icon: string; // Lucide icon name or image URL
    stats?: { label: string; value: string }[];
}

export interface ResearchLab {
    id: string;
    name: string;
    description: string;
    coordinator: string;
    image: string;
    equipment: string[];
    projects: string[]; // IDs of linked projects
}

export interface Project {
    id: string;
    title: string;
    domain: string;
    principalInvestigator: string;
    fundingAgency: string;
    amount: string;
    status: "Ongoing" | "Completed";
    year: string;
}

export interface Publication {
    id: string;
    title: string;
    authors: string[];
    venue: string; // Journal or Conference Name
    type: "Journal" | "Conference" | "Book Chapter" | "Patent";
    year: number;
    link?: string;
    doi?: string;
}

export interface Startup {
    id: string;
    name: string;
    description: string;
    founders: string[];
    incubatedYear: string;
    status: "Ideation" | "Incubated" | "Graduated";
    logo: string;
}

export const researchAreas: ResearchArea[] = [
    {
        id: "ai-vedic",
        title: "AI & Vedic Computing",
        description: "Exploring the intersection of ancient Vedic wisdom and modern Artificial Intelligence to create ethical and consciousness-aware systems.",
        icon: "BrainCircuit",
        stats: [{ label: "Papers", value: "25+" }, { label: "Projects", value: "4" }]
    },
    {
        id: "cyber-security",
        title: "Cyber Security & Blockchain",
        description: "Advanced research in cryptography, secure multi-party computation, and blockchain for social impact.",
        icon: "ShieldCheck",
        stats: [{ label: "Patents", value: "2" }, { label: "Consultancy", value: "3" }]
    },
    {
        id: "data-science",
        title: "Data Science & Bioinformatics",
        description: "Leveraging Big Data to solve complex problems in healthcare, agriculture, and computational biology.",
        icon: "Database",
        stats: [{ label: "Publications", value: "40+" }]
    },
    {
        id: "iot-robotics",
        title: "IoT & Robotics",
        description: "Developing smart sensing systems and autonomous robots for agricultural and industrial automation.",
        icon: "Cpu"
    }
];

export const labs: ResearchLab[] = [
    {
        id: "lab-ai",
        name: "Center for AI & Consciousness",
        description: "A state-of-the-art facility dedicated to research in Artificial General Intelligence and modeling human consciousness.",
        coordinator: "Dr. Arun Mishra",
        image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=600",
        equipment: ["NVIDIA DGX Station", "EEG Headsets", "High-Performance Workstations"],
        projects: ["proj-1"]
    },
    {
        id: "lab-cyber",
        name: "Cyber Security Research Lab",
        description: "Focused on malware analysis, network forensics, and developing secure communication protocols.",
        coordinator: "Dr. Priya Sharma",
        image: "https://images.unsplash.com/photo-1563206767-5b1d972d9fb9?auto=format&fit=crop&q=80&w=600",
        equipment: ["Forensic Workstations", "Network Simulators", "Hardware Security Modules"],
        projects: ["proj-2"]
    }
];

export const projects: Project[] = [
    {
        id: "proj-1",
        title: "Vedic Mathematical Algorithms for Neural Networks",
        domain: "AI & Vedic Computing",
        principalInvestigator: "Dr. Arun Mishra",
        fundingAgency: "DST (Department of Science & Technology)",
        amount: "₹ 25 Lakhs",
        status: "Ongoing",
        year: "2023-2025"
    },
    {
        id: "proj-2",
        title: "Blockchain-based Academic Credential Verification",
        domain: "Blockchain",
        principalInvestigator: "Dr. Priya Sharma",
        fundingAgency: "UGC",
        amount: "₹ 12 Lakhs",
        status: "Completed",
        year: "2022-2024"
    },
    {
        id: "proj-3",
        title: "Smart Agriculture Monitoring System using IoT",
        domain: "IoT",
        principalInvestigator: "Mr. Rajesh Gupta",
        fundingAgency: "Internal Seed Grant",
        amount: "₹ 2 Lakhs",
        status: "Ongoing",
        year: "2024-2025"
    }
];

export const publications: Publication[] = [
    {
        id: "pub-1",
        title: "Optimizing Neural Networks using Vedic Multiplication Sutras",
        authors: ["Arun Mishra", "Ritu Singh"],
        venue: "IEEE Transactions on Neural Networks",
        type: "Journal",
        year: 2024,
        doi: "10.1109/TNNLS.2024.123456"
    },
    {
        id: "pub-2",
        title: "A Survey on Consciousness Models in AI",
        authors: ["Elena Petrova", "Arun Mishra"],
        venue: "Journal of Artificial Intelligence Research",
        type: "Journal",
        year: 2023
    },
    {
        id: "pub-3",
        title: "Secure Voting System using Ethereum Smart Contracts",
        authors: ["Priya Sharma", "Vikram Patel"],
        venue: "International Conference on Cyber Security (ICCS)",
        type: "Conference",
        year: 2023
    },
    {
        id: "pat-1",
        title: "System and Method for Hardware-based Random Number Generation using Vedic Principles",
        authors: ["Arun Mishra"],
        venue: "Indian Patent Office",
        type: "Patent",
        year: 2022,
        link: "#"
    }
];

export const startups: Startup[] = [
    {
        id: "start-1",
        name: "VedaTech Solutions",
        description: "Ed-tech startup providing Vedic Mathematics learning tools powered by AI.",
        founders: ["Raman Kumar (MCA)", "Sita Verma (BCA)"],
        incubatedYear: "2023",
        status: "Incubated",
        logo: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?auto=format&fit=crop&q=80&w=200"
    },
    {
        id: "start-2",
        name: "AgroSense",
        description: "IoT-based affordable soil monitoring devices for farmers.",
        founders: ["Amit Singh (B.Sc IT)"],
        incubatedYear: "2022",
        status: "Graduated",
        logo: "https://images.unsplash.com/photo-1542601906990-24bd0827f8d2?auto=format&fit=crop&q=80&w=200"
    }
];
