
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
    type?: "Research Lab" | "Development Cell";
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

export interface Copyright {
    id: string;
    title: string;
    applicant: string;
    rocNo: string;
    rocDate: string;
    year: string;
    link?: string;
}

export interface Patent {
    id: string;
    title: string;
    faculty: string;
    year: string;
    status: string;
    link?: string;
}

export interface Book {
    id: string;
    title: string;
    author: string;
    year: string;
    publisher: string;
    isbn: string;
    link?: string;
}

export const researchAreas: ResearchArea[] = [
    {
        id: "ai",
        title: "Artificial Intelligence",
        description: "Advanced research in machine learning, natural language processing, and computer vision to build intelligent systems.",
        icon: "BrainCircuit",
        stats: [{ label: "Projects", value: "8+" }]
    },
    {
        id: "ann",
        title: "Artificial Neural Network",
        description: "Modeling complex patterns and prediction systems using deep learning and bio-inspired neural architectures.",
        icon: "Cpu",
        stats: [{ label: "Papers", value: "12+" }]
    },
    {
        id: "quantum-consciousness",
        title: "Artificial Quantum Consciousness",
        description: "Exploring the theoretical and practical intersections of quantum computing principles and artificial consciousness.",
        icon: "Lightbulb",
        stats: [{ label: "Research", value: "Ongoing" }]
    },
    {
        id: "cloud-computing",
        title: "Cloud Computing",
        description: "Scalable distributed computing, cloud security, and edge computing solutions for modern infrastructure.",
        icon: "Database",
        stats: [{ label: "Implementations", value: "5+" }]
    }
];

export const labs: ResearchLab[] = [
    {
        id: "center-ai",
        name: "Center for Artificial Intelligence",
        type: "Research Lab",
        description: "Engages in research and development of artificial intelligence applications geared for IKS. Established in 2021, this 2000 Sq. ft. facility features high-end computation resources.",
        coordinator: "Dr. Neel Mani",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=600",
        equipment: ["High-end Computation Facility", "IKS Research Tools"],
        projects: ["proj-001", "proj-002", "proj-003", "proj-004"]
    },
    {
        id: "sdc",
        name: "Software Development Cell",
        type: "Development Cell",
        description: "A dedicated cell for developing in-house software solutions and fostering practical development skills among students.",
        coordinator: "Faculty Coordinator",
        image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&q=80&w=600",
        equipment: ["Development Servers", "Testing Environments"],
        projects: []
    }
];

export const projects: Project[] = [
    {
        id: "proj-001",
        title: "Market AI-based Net-zero Transition for PhD Research",
        domain: "AI & Sustainability",
        principalInvestigator: "",
        fundingAgency: "Climate Connect, Gurgaon",
        amount: "₹ 30 Lakhs",
        status: "Ongoing",
        year: "2024-2026"
    },
    {
        id: "proj-002",
        title: "AI-based Automation Process of Parameters Optimization for Quantum Sensors on Atom Interferometry",
        domain: "Quantum AI",
        principalInvestigator: "",
        fundingAgency: "Atomionics Pte Ltd, Singapore",
        amount: "₹ 25.84 Lakhs",
        status: "Ongoing",
        year: "2024-2026"
    },
    {
        id: "proj-003",
        title: "AI-enabled Smart Device for Alternate Nostril Breathing Pranayama Control through Mobile App",
        domain: "AI & Healthcare",
        principalInvestigator: "",
        fundingAgency: "KJ Spółka Z O.O., Poland",
        amount: "₹ 18.87 Lakhs",
        status: "Ongoing",
        year: "2023-2025"
    },
    {
        id: "proj-004",
        title: "InnoPat AI: A Generative AI for Advancing Innovation through LLM Approach",
        domain: "Generative AI",
        principalInvestigator: "",
        fundingAgency: "Arctic Innovation Consulting, Noida",
        amount: "₹ 12.42 Lakhs",
        status: "Ongoing",
        year: "2023-2025"
    },
    {
        id: "proj-005",
        title: "Futuristic Agri Tech for AI-enable Electric Tiller",
        domain: "AgriTech",
        principalInvestigator: "",
        fundingAgency: "Krishigati Pvt. Ltd., Pune",
        amount: "₹ 12 Lakhs",
        status: "Ongoing",
        year: "2023-2025"
    },
    {
        id: "proj-006",
        title: "Wiki Article Project",
        domain: "Knowledge Systems",
        principalInvestigator: "",
        fundingAgency: "IKS Division, Ministry of Education, GoI",
        amount: "₹ 5.5 Lakhs",
        status: "Completed",
        year: "2023-2024"
    },
    {
        id: "proj-007",
        title: "An IOT-based Foot Health Care System for Diabetic Patients with Health Analytics",
        domain: "IoT & Healthcare",
        principalInvestigator: "",
        fundingAgency: "NIDHI PRAYAS 2023, DST, GoI",
        amount: "₹ 5.65 Lakhs",
        status: "Ongoing",
        year: "2023-2024"
    },
    {
        id: "proj-008",
        title: "Blockchain Literacy Program & Nirmal Ganga Abhiyan",
        domain: "Blockchain & Social",
        principalInvestigator: "",
        fundingAgency: "USERC, Dehradun",
        amount: "₹ 3.08 Lakhs",
        status: "Completed",
        year: "2022-2023"
    }
];

export const copyrights: Copyright[] = [
    { id: "c-01", applicant: "Dr. Neel Mani", year: "2024-2025", rocNo: "L-151619/2024", rocDate: "23 July 2024", title: "Green Supply Chain management step-by-step phases for supply chain decarbonization with artificial intelligence" },
    { id: "c-02", applicant: "Dr. Neel Mani", year: "2023-2024", rocNo: "L-137433/2023", rocDate: "08 Dec 2023", title: "Machine Learning Model and required data sets to predict the behaviour of the country special reference to climate change" },
    { id: "c-03", applicant: "Prof Abhay Saxena", year: "2021-2022", rocNo: "L-116136/2022", rocDate: "30 May 2022", title: "Digital Speech Generator (Speech Synthesis Device)" },
    { id: "c-04", applicant: "Prof Abhay Saxena", year: "2021-2022", rocNo: "L-116133/2022", rocDate: "30 May 2022", title: "Smart Stick for Blind People" },
    { id: "c-05", applicant: "Prof Abhay Saxena", year: "2021-2022", rocNo: "L-110300/2022", rocDate: "10 Jan 2022", title: "Akshay Urja" },
    { id: "c-06", applicant: "Prof Abhay Saxena", year: "2021-2022", rocNo: "L-107751/2021", rocDate: "22 Sep 2021", title: "VEDIC INFORMATICS VED EVAM SUCHNA PRODHYOGIKI KA ANUTHA SAMAGAM" },
    { id: "c-07", applicant: "Prof Abhay Saxena", year: "2021-2022", rocNo: "L-107758/2021", rocDate: "22 Sep 2021", title: "Mathematical formula for Law of Karma" },
    { id: "c-08", applicant: "Prof Abhay Saxena", year: "2021-2022", rocNo: "L-107757/2021", rocDate: "22 Sep 2021", title: "Knowledge Derivation Formulae" },
    { id: "c-09", applicant: "Prof Abhay Saxena", year: "2021-2022", rocNo: "L-107755/2021", rocDate: "22 Sep 2021", title: "MERI (Mobile Education for Rural India) - Pathshala" },
    { id: "c-10", applicant: "Prof Abhay Saxena", year: "2021-2022", rocNo: "L-107754/2021", rocDate: "22 Sep 2021", title: "Smart Water Vending Machine" },
    { id: "c-11", applicant: "Prof Abhay Saxena", year: "2021-2022", rocNo: "L-107752/2021", rocDate: "22 Sep 2021", title: "IoT and Thought Control Gadget" },
    { id: "c-12", applicant: "Dev Sanskriti Vishwavidyalaya", year: "2017-2018", rocNo: "SW-10035/2018", rocDate: "15 Jan 2018", title: "Medicinal Knowledge Portal" }
];

export const patents: Patent[] = [
    { id: "p-01", faculty: "Ms. Soni", year: "2024-2025", title: "Interactive display for wearable technologies", status: "In Process" },
    { id: "p-02", faculty: "Dr. Neel Mani", year: "2024-2025", title: "A Smartwatch System With Real-Time Physiological Monitoring And Adaptive Feedback", status: "Published" },
    { id: "p-03", faculty: "Dr. Neel Mani", year: "2024-2025", title: "Ai-Assisted Drone For Emergency Response", status: "Published" },
    { id: "p-04", faculty: "Swapnil Gaidhani", year: "2024-2025", title: "Blockchain Enabled Device For Check-In And Check-Out In Hotels", status: "Published" },
    { id: "p-05", faculty: "Dr. Naveen Pandey", year: "2023-2024", title: "Machine Learning-Based Personalized Medicine Recommender System", status: "Published" },
    { id: "p-06", faculty: "Dr. Neel Mani", year: "2023-2024", title: "An Iot Based Foot Health Care System And Method For Diabetic Patients Using Real-Time Sensor Data", status: "Published" },
    { id: "p-07", faculty: "Dr. Neel Mani", year: "2023-2024", title: "Ai-Driven Precision Agriculture Computer System For Optimal Resource", status: "Published" },
    { id: "p-08", faculty: "Dr. Neel Mani", year: "2023-2024", title: "Data Processing Device For Enhancing Creativity In Generative Ai Through Reinforcement Learning Techniques", status: "Published" },
    { id: "p-09", faculty: "Dr. Neel Mani", year: "2023-2024", title: "Smart Drone Using 5g Technology For Smart Cities", status: "Published" },
    { id: "p-10", faculty: "Dr. Neel Mani", year: "2023-2024", title: "Network Security Hub", status: "Published" },
    { id: "p-11", faculty: "Dr. Neel Mani", year: "2023-2024", title: "MI/AI Based Cardiac Monitor", status: "Published" },
    { id: "p-12", faculty: "Dr. Naveen Pandey", year: "2022-2023", title: "A Cnn-Based System For Security Assured Image Watermarking Generation And Method Thereof", status: "Published" },
    { id: "p-13", faculty: "Dr. Naveen Pandey", year: "2022-2023", title: "A System Based On Cnn For Automated Pulmonary Tuberculosis Classification In Chest Radiography", status: "Published" },
    { id: "p-14", faculty: "Dr. Neel Mani", year: "2022-2023", title: "A System For Providing Local Area Awareness Among Users And Method Thereof", status: "Published" },
    { id: "p-15", faculty: "Dr. Naveen Pandey", year: "2021-2022", title: "A System And Method Of Digitalization Of The Challan Generation In The Traffic Management", status: "Published" },
    { id: "p-16", faculty: "Prof. Abhay Saxena", year: "2021-2022", title: "Yagya Fumes Inhalation Device", status: "Published" },
    { id: "p-17", faculty: "Prof. Abhay Saxena", year: "2019-2020", title: "Automated Iot Based Smart Water Quality Assessment System", status: "Published" },
    { id: "p-18", faculty: "Prof. Abhay Saxena", year: "2019-2020", title: "Itdm-System: Intelligent Traffic Control And Traffic Duty Management System", status: "Published" },
    { id: "p-19", faculty: "Prof. Abhay Saxena", year: "2019-2020", title: "Device For Locating Vehicle And Method Thereof", status: "Granted" }
];

export const books: Book[] = [
    { id: "b-01", title: "Harmony of Wisdom", author: "Prof. Abhay Saxena", year: "2025", publisher: "Bishen Singh Mahendra Pal Singh", isbn: "978-93-6028952-2" },
    { id: "b-02", title: "Algorithms: Big data, Optimization Techniques, Cyber Security", author: "Prof. Abhay Saxena", year: "2024", publisher: "De Gruyter", isbn: "978-3-11-122800-6" },
    { id: "b-03", title: "Software Engineering (Agile Development, System Modeling & Testing)", author: "Dr. Naveen Kumar Pandey", year: "2023", publisher: "Jec Publication", isbn: "935749698X" },
    { id: "b-04", title: "Role of Yoga, Yagya and Ayurved for women's Health", author: "Dr. Naveen Kumar Pandey", year: "2023", publisher: "Shriram Yog Training & Research Society", isbn: "978-1-63754-889-9" },
    { id: "b-05", title: "Artificial Intelligence for Societal Development and Global Well-Being", author: "Prof. Abhay Saxena", year: "2022", publisher: "IGI Global", isbn: "1668424436" },
    { id: "b-06", title: "Yoga, Yagya & Ayurveda", author: "Dr. Naveen Kumar Pandey", year: "2022", publisher: "Shriram Yog Training & Research Society", isbn: "978-1-63754-563-8" },
    { id: "b-07", title: "Blockchain : A Beginner's Manual", author: "Prof. Abhay Saxena, Mr. Swapnil Gaidhani", year: "2021", publisher: "Jagdamba Publishing Company", isbn: "9385437313" },
    { id: "b-08", title: "Health For All: Role Of Yoga, Ayurveda And Social Work", author: "Dr. Naveen Kumar Pandey", year: "2021", publisher: "Shriram Yog Training & Research Society", isbn: "978-1-63754-349-8" },
    { id: "b-09", title: "Vedic Informatics", author: "Prof. Abhay Saxena", year: "2019", publisher: "Dev Sanskriti Vishwavidyalaya", isbn: "819339168-3" },
    { id: "b-10", title: "Internet Of Things", author: "Prof. Abhay Saxena", year: "2018", publisher: "USERC, Book World Publication", isbn: "978-1498761284" },
    { id: "b-11", title: "Java Programming", author: "Prof. Abhay Saxena", year: "2011", publisher: "Navyug Prakashan", isbn: "8189720007" },
    { id: "b-12", title: "Internet & Web Technology", author: "Prof. Abhay Saxena", year: "2011", publisher: "Navyug Prakashan", isbn: "8499721468" },
    { id: "b-13", title: "Human Values And Professional Ethics", author: "Prof. Abhay Saxena", year: "2010", publisher: "Vayu Education of India", isbn: "978-9380712-43-7" },
    { id: "b-14", title: "Computer Networks", author: "Prof. Abhay Saxena", year: "2010", publisher: "Nav Distributors", isbn: "9789355324900" },
    { id: "b-15", title: "Database Management System", author: "Prof. Abhay Saxena", year: "2010", publisher: "Vayu Publication, New Delhi", isbn: "9789380097381" }
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
