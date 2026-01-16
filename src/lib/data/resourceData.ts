
export interface ResourceCategory {
    id: string;
    name: string;
    description: string;
}

export interface ResourceItem {
    id: string;
    title: string;
    categoryId: string;
    type: "PDF" | "DOC" | "Link";
    size?: string;
    date: string;
    url: string;
    tags?: string[];
}

export const resourceCategories: ResourceCategory[] = [
    { id: "forms", name: "Academic Forms", description: "Applications, registration forms, and scholarships." },
    { id: "papers", name: "Question Papers", description: "Previous year semester examination papers." },
    { id: "manuals", name: "Lab Manuals", description: "Practical guides and experiment details." },
    { id: "policies", name: "Policies & Guidelines", description: "University rules, anti-ragging, and grading policies." },
    { id: "learning", name: "Learning Material", description: "E-books, MOOC links, and lecture notes." },
];

export const resources: ResourceItem[] = [
    // Forms
    {
        id: "f1",
        title: "Semester Exam Registration Form - May 2024",
        categoryId: "forms",
        type: "PDF",
        size: "1.2 MB",
        date: "April 1, 2024",
        url: "#",
        tags: ["exam", "registration"]
    },
    {
        id: "f2",
        title: "Student Leave Application",
        categoryId: "forms",
        type: "DOC",
        size: "500 KB",
        date: "Jan 10, 2024",
        url: "#",
        tags: ["leave", "application"]
    },
    {
        id: "f3",
        title: "Scholarship Application Form",
        categoryId: "forms",
        type: "PDF",
        size: "2 MB",
        date: "Feb 15, 2024",
        url: "#",
        tags: ["scholarship", "financial aid"]
    },

    // Papers
    {
        id: "p1",
        title: "MCA 1st Sem - Programming in C (2023)",
        categoryId: "papers",
        type: "PDF",
        size: "3 MB",
        date: "Dec 2023",
        url: "#",
        tags: ["mca", "c programming"]
    },
    {
        id: "p2",
        title: "BCA 3rd Sem - Database Management Systems (2023)",
        categoryId: "papers",
        type: "PDF",
        size: "2.5 MB",
        date: "Dec 2023",
        url: "#",
        tags: ["bca", "dbms"]
    },
    {
        id: "p3",
        title: "M.Sc (DS) - Machine Learning (2022)",
        categoryId: "papers",
        type: "PDF",
        size: "4 MB",
        date: "June 2022",
        url: "#",
        tags: ["msc", "ml", "ai"]
    },

    // Manuals
    {
        id: "m1",
        title: "Data Structures Lab Manual (C++)",
        categoryId: "manuals",
        type: "PDF",
        size: "15 MB",
        date: "July 2023",
        url: "#",
        tags: ["lab", "dsa", "cpp"]
    },
    {
        id: "m2",
        title: "Python for Data Science - Practical Guide",
        categoryId: "manuals",
        type: "PDF",
        size: "12 MB",
        date: "Aug 2023",
        url: "#",
        tags: ["lab", "python", "data science"]
    },

    // Policies
    {
        id: "pol1",
        title: "Anti-Ragging Affidavits & Guidelines",
        categoryId: "policies",
        type: "PDF",
        size: "1 MB",
        date: "July 2023",
        url: "#",
        tags: ["ragging", "rules"]
    },
    {
        id: "pol2",
        title: "Attendance & Grading Policy 2024",
        categoryId: "policies",
        type: "PDF",
        size: "800 KB",
        date: "Jan 2024",
        url: "#",
        tags: ["attendance", "grading"]
    },

    // Learning
    {
        id: "l1",
        title: "NPTEL - Introduction to IoT",
        categoryId: "learning",
        type: "Link",
        date: "Ongoing",
        url: "https://nptel.ac.in",
        tags: ["iot", "nptel"]
    },
    {
        id: "l2",
        title: "Coursera - Deep Learning Specialization",
        categoryId: "learning",
        type: "Link",
        date: "Self Paced",
        url: "https://coursera.org",
        tags: ["ai", "deep learning"]
    }
];
