
export interface AdmissionTimelineStep {
    id: string;
    title: string;
    description: string;
    date: string;
    status: "Upcoming" | "Active" | "Closed";
}

export interface ProgramEligibility {
    id: string;
    programName: string;
    degree: string;
    duration: string;
    intake: number;
    criteria: string[];
    fees?: string;
}

export interface FAQ {
    id: string;
    question: string;
    answer: string;
    category: "General" | "Fees" | "Hostel" | "Exam";
}

export const admissionTimeline: AdmissionTimelineStep[] = [
    {
        id: "step-1",
        title: "Application Opens",
        description: "Online application forms available on the university portal.",
        date: "April 1, 2024",
        status: "Active"
    },
    {
        id: "step-2",
        title: "Entrance Exam",
        description: "Departmental entrance test for PG programs and specialized UG courses.",
        date: "May 15, 2024",
        status: "Upcoming"
    },
    {
        id: "step-3",
        title: "Interview / Counseling",
        description: "Personal interview for shortlisted candidates.",
        date: "June 10, 2024",
        status: "Upcoming"
    },
    {
        id: "step-4",
        title: "Final Admission List",
        description: "Release of merit list and fee submission.",
        date: "June 25, 2024",
        status: "Upcoming"
    }
];

export const programsInfo: ProgramEligibility[] = [
    {
        id: "bsc-it",
        programName: "B.Sc. in Information Technology",
        degree: "Undergraduate",
        duration: "4 Years (NEP 2020)",
        intake: 60,
        criteria: [
            "10+2 with Mathematics/Computer Science from a recognized board.",
            "Minimum 50% aggregate marks.",
            "Maximum age limit: 21 years."
        ],
        fees: "₹ 35,000 per semester"
    },
    {
        id: "bca",
        programName: "Bachelor of Computer Applications (BCA)",
        degree: "Undergraduate",
        duration: "3 Years",
        intake: 60,
        criteria: [
            "10+2 in any stream with Mathematics as a subject.",
            "Minimum 50% aggregate marks.",
            "Basic proficiency in English."
        ],
        fees: "₹ 40,000 per semester"
    },
    {
        id: "mca",
        programName: "Master of Computer Applications (MCA)",
        degree: "Postgraduate",
        duration: "2 Years",
        intake: 45,
        criteria: [
            "BCA / B.Sc (CS/IT) / B.Tech or equivalent degree.",
            "Minimum 55% aggregate marks.",
            "Must have studied Mathematics at 10+2 or Graduation level."
        ],
        fees: "₹ 50,000 per semester"
    },
    {
        id: "phd",
        programName: "Ph.D. in Computer Science",
        degree: "Doctoral",
        duration: "3-5 Years",
        intake: 10,
        criteria: [
            "Master's degree in CS/IT/Applications with 55% marks.",
            "Valid score in GATE / UGC-NET / University Entrance Exam.",
            "Research proposal presentation."
        ],
        fees: "₹ 25,000 per semester"
    }
];

export const faqs: FAQ[] = [
    {
        id: "faq-1",
        category: "General",
        question: "Is the detailed syllabus available online?",
        answer: "Yes, you can download the detailed syllabus for all semesters from the 'Resources' section or the 'Academics' page."
    },
    {
        id: "faq-2",
        category: "Hostel",
        question: "Is hostel accommodation mandatory?",
        answer: "DSVV is a fully residential campus. Hostel accommodation is generally mandatory for regular students to ensure holistic development."
    },
    {
        id: "faq-3",
        category: "Fees",
        question: "Are there any scholarship options available?",
        answer: "Yes, the university offers merit-based scholarships and financial aid for economically weaker sections. Details are available in the admission brochure."
    },
    {
        id: "faq-4",
        category: "Exam",
        question: "What is the pattern of the Entrance Exam?",
        answer: "The entrance exam consists of multiple-choice questions covering General Aptitude, Mathematics, and Computer Science basics."
    }
];
