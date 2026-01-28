
import { CheckCircle, Calendar, GraduationCap } from "lucide-react";

export interface ProgramInfo {
    id: string;
    title: string;
    description: string;
    degree: string;
    duration: string;
    intake: number;
    eligibilityCriteria: string[];
    highlights: string[];
    fees?: string;
}

export interface AdmissionTimelineStep {
    id: string;
    title: string;
    date: string;
    description: string;
    status: "completed" | "upcoming" | "Active" | "Closed";
}

export const admissionTimeline: AdmissionTimelineStep[] = [
    {
        id: "t1",
        title: "Application Availability",
        date: "March 1, 2024",
        description: "Online application forms available on the university portal.",
        status: "completed"
    },
    {
        id: "t2",
        title: "Last Date to Apply",
        date: "June 15, 2024",
        description: "Deadline for submission of online applications.",
        status: "upcoming"
    },
    {
        id: "t3",
        title: "Entrance Examination",
        date: "June 30, 2024",
        description: "DSVV Common Entrance Test (CET) at designated centers.",
        status: "upcoming"
    },
    {
        id: "t4",
        title: "Interview Rounds",
        date: "July 10-15, 2024",
        description: "Personal interviews for shortlisted candidates.",
        status: "upcoming"
    },
    {
        id: "t5",
        title: "Final Merit List",
        date: "July 20, 2024",
        description: "Declaration of results and admission offers.",
        status: "upcoming"
    }
];

export const programsInfo: ProgramInfo[] = [
    {
        id: "p1",
        title: "Master of Computer Applications (MCA)",
        degree: "Postgraduate",
        description: "A two-year advanced degree focusing on software development, cloud computing, and AI.",
        duration: "2 Years",
        intake: 60,
        eligibilityCriteria: [
            "BCA / B.Sc (CS/IT) or Bachelor Degree with Maths.",
            "Min 50% marks in graduation.",
            "Valid score in DSVV Entrance Test."
        ],
        highlights: ["Industry-aligned Curriculum", "AI & ML Specialization", "Research Projects"],
        fees: "₹ 60,000 / Year"
    },
    {
        id: "p2",
        title: "Bachelor of Computer Applications (BCA)",
        degree: "Undergraduate",
        description: "Foundation course in computer applications, programming, and software engineering.",
        duration: "3 Years",
        intake: 60,
        eligibilityCriteria: [
            "10+2 with Mathematics/Computer Science.",
            "Min 50% aggregate marks.",
            "Interview round qualification."
        ],
        highlights: ["Programming Foundation", "Web Development", "Soft Skills Training"],
        fees: "₹ 45,000 / Year"
    },
    {
        id: "p3",
        title: "B.Sc. in Information Technology",
        degree: "Undergraduate",
        description: "Focuses on IT infrastructure, networking, and system administration.",
        duration: "3 Years",
        intake: 60,
        eligibilityCriteria: [
            "10+2 with Science stream (PCM).",
            "Min 50% aggregate marks."
        ],
        highlights: ["Network Security", "Database Management", "Hardware Labs"],
        fees: "₹ 40,000 / Year"
    },
    {
        id: "p4",
        title: "Ph.D. in Computer Science",
        degree: "Doctoral",
        description: "Research program in domains like AI, IKS, Quantum Computing, and Data Science.",
        duration: "3-5 Years",
        intake: 10,
        eligibilityCriteria: [
            "MCA / M.Tech / M.Sc (CS).",
            "NET/GATE qualification preferred.",
            "Research proposal presentation."
        ],
        highlights: ["Advanced Research Labs", "Patent Support", "Publication Grants"]
    }
];

export const faqs = [
    {
        id: "f1",
        question: "What is the eligibility for BCA?",
        answer: "10+2 with Mathematics or Computer Science as a core subject with minimum 50% aggregate marks."
    },
    {
        id: "f2",
        question: "Is there an entrance exam?",
        answer: "Yes, candidates must clear the DSVV Common Entrance Test (CET) followed by an interview."
    },
    {
        id: "f3",
        question: "Are there scholarships available?",
        answer: "Yes, merit-based and need-based scholarships are available for deserving students."
    },
    {
        id: "f4",
        question: "What about International Admissions?",
        answer: "International students can apply directly through the International Relations Cell. A valid passport and student visa are mandatory. IELTS/TOEFL scores may be required for non-native English speakers."
    },
    {
        id: "f5",
        question: "Is hostel facility available?",
        answer: "Yes, DSVV is a fully residential campus. Hostel accommodation is mandatory and provided to all regular students."
    }
];

export const entranceExamDetails = {
    books: [
        {
            category: "General Knowledge & Current Affairs",
            items: ["Lucent's General Knowledge", "Yearbook 2023", "Daily Newspapers"]
        },
        {
            category: "English Proficiency",
            items: ["Wren & Martin Grammar", "Word Power Made Easy", "Reading Comprehension"]
        },
        {
            category: "Computer Science (For MCA)",
            items: ["Digital Logic", "C Programming", "Data Structures", "Operating System Basics"]
        },
        {
            category: "Mission & Culture (DSVV Specific)",
            items: ["Books by Pt. Shriram Sharma Acharya", "Indian Culture & Heritage Basics"]
        }
    ],
    patterns: {
         "Undergraduate (BCA/B.Sc IT)": {
            title: "Undergraduate Entrance Pattern",
            duration: "90 Minutes",
            interview: true,
            sections: ["General Knowledge (20%)", "English (20%)", "Mathematics/Logic (30%)", "Mission & Culture (30%)"]
        },
        "Postgraduate (MCA)": {
            title: "Postgraduate Entrance Pattern",
             duration: "120 Minutes",
             interview: true,
            sections: ["Computer Awareness (40%)", "Reasoning & Aptitude (20%)", "English (20%)", "Mission & Culture (20%)"]
        }
    },
    note: [
        "The entrance exam is conducted offline at the university campus and designated centers.",
        "Interview round is mandatory for final selection.",
        "Calculators and electronic devices are prohibited in the exam hall."
    ]
};
