
export interface Alumnus {
    id: string;
    name: string;
    batch: string;
    program: string;
    designation: string;
    company: string;
    location: string;
    image: string;
    linkedIn?: string;
    testimonial?: string;
    isDistinguished?: boolean;
}

export interface AlumniEvent {
    id: string;
    title: string;
    date: string;
    type: "Reunion" | "Webinar" | "Workshop" | "Networking";
    location: string;
    description: string;
    image: string;
}

export interface Job {
    id: string;
    role: string;
    company: string;
    location: string;
    postedBy: string; // Alumni Name
    postedDate: string;
    link: string;
    type: "Full-Time" | "Internship";
}

export interface MentorshipProgram {
    id: string;
    title: string;
    mentorName: string;
    mentorDesignation: string;
    expertise: string[];
    availableSlots: number;
}

// Scraped data from Sheet + Mock distinguished
export const alumniProfiles: Alumnus[] = [
    {
        id: "a1",
        name: "Upasana Saraswat",
        batch: "2010",
        program: "B.Sc (CS)",
        designation: "Administrative Officer",
        company: "LIC",
        location: "Rajasthan",
        image: "https://ui-avatars.com/api/?name=Upasana+Saraswat&background=random",
        isDistinguished: true
    },
    {
        id: "a2",
        name: "Sharddha",
        batch: "2010",
        program: "B.Sc (CS)",
        designation: "Educator",
        company: "AGSS",
        location: "Guwahati",
        image: "https://ui-avatars.com/api/?name=Sharddha&background=random"
    },
    {
        id: "a3",
        name: "Brijesh Prihar",
        batch: "2010",
        program: "B.Sc (CS)",
        designation: "Assistant Professor in Yogashashtra",
        company: "KJ Somaiya Institute",
        location: "Mumbai",
        image: "https://ui-avatars.com/api/?name=Brijesh+Prihar&background=random",
        isDistinguished: true
    },
    {
        id: "a4",
        name: "Priti Prashant Sahu",
        batch: "2010",
        program: "B.Sc (CS)",
        designation: "Teacher",
        company: "Kendriya Vidyalaya No.1 Raipur",
        location: "Chhattisgarh",
        image: "https://ui-avatars.com/api/?name=Priti+Sahu&background=random"
    },
    {
        id: "a5",
        name: "Gargi",
        batch: "2011",
        program: "B.Sc (CS)",
        designation: "Cloud Engineer",
        company: "Accenture",
        location: "Gurgaon",
        image: "https://ui-avatars.com/api/?name=Gargi&background=random",
        isDistinguished: true
    },
    {
        id: "a6",
        name: "KM Deepti Arora",
        batch: "2011",
        program: "M.Sc (CS)",
        designation: "Founder",
        company: "SD Web Solutions",
        location: "Bareilly",
        image: "https://ui-avatars.com/api/?name=Deepti+Arora&background=random",
        isDistinguished: true
    },
    {
        id: "a7",
        name: "Gopal Krishna Sharma",
        batch: "2011",
        program: "M.Sc (CS)",
        designation: "HOD",
        company: "CS Dept, DSVV",
        location: "Haridwar",
        image: "https://ui-avatars.com/api/?name=Gopal+Krishna&background=random"
    },
    {
        id: "a8",
        name: "Anil Sahu",
        batch: "2012",
        program: "B.Sc (CS)",
        designation: "Senior Consultant",
        company: "Infosys",
        location: "Pune",
        image: "https://ui-avatars.com/api/?name=Anil+Sahu&background=random"
    },
    {
        id: "a9",
        name: "Sudhansu Tiwari",
        batch: "2012",
        program: "B.Sc (CS)",
        designation: "Azure Data Engineer",
        company: "PepsiCo GBS",
        location: "Telangana",
        image: "https://ui-avatars.com/api/?name=Sudhansu+Tiwari&background=random"
    },
    {
        id: "a10",
        name: "Ravish Kumar Tiwary",
        batch: "2010-11",
        program: "M.Sc (CS)",
        designation: "Data Analyst",
        company: "Taggd",
        location: "Gurgaon",
        image: "https://ui-avatars.com/api/?name=Ravish+Tiwary&background=random"
    },
    {
        id: "a11",
        name: "Robins Dhakar",
        batch: "2010-11",
        program: "M.Sc (CS)",
        designation: "Informatics Assistant",
        company: "State Govt of Rajasthan",
        location: "Rajasthan",
        image: "https://ui-avatars.com/api/?name=Robins+Dhakar&background=random"
    },
    {
        id: "a12",
        name: "Apurva",
        batch: "2012",
        program: "B.Sc (CS)",
        designation: "Assistant Professor",
        company: "Mandsaur University",
        location: "Mandsaur, MP",
        image: "https://ui-avatars.com/api/?name=Apurva&background=random"
    },
    {
        id: "a13",
        name: "Ved Prakash Thawait",
        batch: "2011",
        program: "B.Sc (CS)",
        designation: "Freelancer Graphic Designer",
        company: "Makhija Test Tube Baby Centre",
        location: "India",
        image: "https://ui-avatars.com/api/?name=Ved+Prakash&background=random"
    },
    {
        id: "a14",
        name: "Arjun Tailor",
        batch: "2011",
        program: "M.Sc (CS)",
        designation: "Principal",
        company: "Shriram Gurukulam Pachpahar",
        location: "India",
        image: "https://ui-avatars.com/api/?name=Arjun+Tailor&background=random"
    },
     {
        id: "a15",
        name: "Sajal",
        batch: "2012",
        program: "B.Sc (CS)",
        designation: "Branch Manager",
        company: "Mutual Fund",
        location: "Bilaspur",
        image: "https://ui-avatars.com/api/?name=Sajal&background=random"
    },
    {
        id: "a16",
        name: "Pawan",
        batch: "2012",
        program: "B.Sc (CS)",
        designation: "Assistant Professor",
        company: "Nirwan University",
        location: "Jaipur",
        image: "https://ui-avatars.com/api/?name=Pawan&background=random"
    },
    {
        id: "a17",
        name: "Neha",
        batch: "2012",
        program: "B.Sc (CS)",
        designation: "Assistant Professor",
        company: "KIET Group",
        location: "Ghaziabad",
        image: "https://ui-avatars.com/api/?name=Neha&background=random"
    }

];

export const alumniEvents: AlumniEvent[] = [
    {
        id: "e1",
        title: "Annual Alumni Meet 2024",
        date: "November 14, 2024",
        type: "Reunion",
        location: "DSVV Campus, Haridwar",
        description: "Join us for a day of nostalgia, networking, and celebration as we welcome you back home.",
        image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: "e2",
        title: "Webinar: Exploring Careers in AI",
        date: "May 20, 2024",
        type: "Webinar",
        location: "Online (Zoom)",
        description: "An interactive session with alumni working in top AI labs.",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=400"
    }
];

export const jobs: Job[] = [
    {
        id: "j1",
        role: "Software Development Engineer - I",
        company: "Amazon",
        location: "Bangalore",
        postedBy: "Gargi",
        postedDate: "2 days ago",
        link: "#",
        type: "Full-Time"
    },
    {
        id: "j2",
        role: "React Native Intern",
        company: "SD Web Solutions",
        location: "Bareilly (Remote)",
        postedBy: "KM Deepti Arora",
        postedDate: "1 week ago",
        link: "#",
        type: "Internship"
    }
];

export const mentorships: MentorshipProgram[] = [
    {
        id: "m1",
        title: "Cloud Computing Career",
        mentorName: "Gargi",
        mentorDesignation: "Cloud Engineer, Accenture",
        expertise: ["AWS", "Azure", "Interview Prep"],
        availableSlots: 2
    },
    {
        id: "m2",
        title: "Data Science Guidance",
        mentorName: "Sudhansu Tiwari",
        mentorDesignation: "Azure Data Engineer, PepsiCo",
        expertise: ["Big Data", "SQL", "Python"],
        availableSlots: 4
    }
];
