
export interface IQACMember {
    id: string;
    name: string;
    designation: string;
    role: string;
    image: string;
}

export interface FeedbackStat {
    category: "Students" | "Faculty" | "Alumni" | "Employers";
    score: number; // Out of 5
    responses: number;
    year: string;
}

export interface BestPractice {
    id: string;
    title: string;
    objectives: string[];
    context: string;
    practice: string;
    evidence: string;
    outcome: string;
}

export const iqacMembers: IQACMember[] = [
    {
        id: "m1",
        name: "Dr. Anjali Sharma",
        designation: "Associate Professor",
        role: "Coordinator",
        image: "https://ui-avatars.com/api/?name=Anjali+Sharma&background=0D8ABC&color=fff"
    },
    {
        id: "m2",
        name: "Prof. Abhay Saxena",
        designation: "Head of Department",
        role: "Chairperson",
        image: "https://ui-avatars.com/api/?name=Abhay+Saxena&background=1c4c94&color=fff"
    },
    {
        id: "m3",
        name: "Dr. Sankalp Mishra",
        designation: "Assistant Professor",
        role: "Member",
        image: "https://ui-avatars.com/api/?name=Sankalp+Mishra&background=1c4c94&color=fff"
    }
];

export const feedbackStats: FeedbackStat[] = [
    { category: "Students", score: 4.5, responses: 450, year: "2023-24" },
    { category: "Faculty", score: 4.8, responses: 25, year: "2023-24" },
    { category: "Alumni", score: 4.6, responses: 120, year: "2023-24" },
    { category: "Employers", score: 4.4, responses: 15, year: "2023-24" }
];

export const bestPractices: BestPractice[] = [
    {
        id: "bp-01",
        title: "Integration of Indian Knowledge System (IKS) with Technology",
        objectives: [
            "To bridge the gap between ancient wisdom and modern science.",
            "To foster ethical values in technological development."
        ],
        context: "In an era of rapid technological advancement, there is a growing need for ethical grounding. DSVV's unique curriculum integrates IKS to address this.",
        practice: "Every technical course includes a module on 'Ethical Implications'. Students undertake projects like 'AI for Sanskirt' or 'Vedic Math Algorithms'. Regular workshops on consciousness studies are conducted.",
        evidence: "Publication of 5+ papers on Vedic Informatics. Development of 'Vedic Math App'.",
        outcome: "Students demonstrate higher emotional intelligence and ethical decision-making in professional placements."
    },
    {
        id: "bp-02",
        title: "Community Connect & Digital Literacy Abhiyaan",
        objectives: [
            "To provide digital literacy to rural areas surrounding the university.",
            "To instill social responsibility in computer science students."
        ],
        context: "Uttarakhand has remote villages with limited digital access. As a CS department, it is our duty to bridge this digital divide.",
        practice: "Weekend visits by student volunteers to local schools. Conducting 'Digital Safety' workshops for women and elderly. Upcycling old lab computers for village centers.",
        evidence: "Trainings conducted in 15+ villages. 500+ rural citizens certified in basic computer skills.",
        outcome: "Improved digital adoption in local communities. Students gain real-world teaching and leadership experience."
    }
];
