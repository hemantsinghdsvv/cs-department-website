
export interface Notice {
    id: string;
    title: string;
    date: string;
    category: "Exam" | "Academic" | "Event" | "Placement";
    isNew?: boolean;
    link?: string;
}

export interface Club {
    id: string;
    name: string;
    description: string;
    coordinator: string;
    image: string;
    activities: string[];
}

export interface Achievement {
    id: string;
    title: string;
    studentName: string;
    program: string;
    description: string;
    image: string;
    date: string;
}

export interface Timetable {
    id: string;
    program: "BCA" | "MCA" | "B.Sc (IT)";
    semester: string;
    link: string; // Placeholder for PDF download
}

export const notices: Notice[] = [
    {
        id: "n1",
        title: "End Semester Examination Schedule - May 2024",
        date: "April 15, 2024",
        category: "Exam",
        isNew: true
    },
    {
        id: "n2",
        title: "Registration for 'Techno-Utsav' Hackathon",
        date: "April 10, 2024",
        category: "Event",
        isNew: true
    },
    {
        id: "n3",
        title: "Placement Drive: TCS & Infosys (Final Year)",
        date: "April 05, 2024",
        category: "Placement"
    },
    {
        id: "n4",
        title: "Summer Internship Guidelines 2024",
        date: "March 28, 2024",
        category: "Academic"
    },
    {
        id: "n5",
        title: "Holiday List: Ram Navami",
        date: "March 20, 2024",
        category: "Academic"
    }
];

export const clubs: Club[] = [
    {
        id: "c1",
        name: "CodeWarriors",
        description: "The official coding club of DSVV. We organize competitive coding contests, hackathons, and workshops.",
        coordinator: "Mr. Rajesh Gupta",
        image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&q=80&w=400",
        activities: ["Weekly Contests", "Algorithm Workshops", "Hackathons"]
    },
    {
        id: "c2",
        name: "RoboTech Society",
        description: "A community for robotics enthusiasts interested in IoT, Arduino, and automation.",
        coordinator: "Dr. Kavita Verma",
        image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80&w=400",
        activities: ["Robot Building", "Drone Workshops", "Tech Fest"]
    },
    {
        id: "c3",
        name: "Cultural Forum",
        description: "Celebrating art, music, and dance. We ensure a vibrant campus life beyond academics.",
        coordinator: "Dr. Priya Sharma",
        image: "https://images.unsplash.com/photo-1514525253440-b393452e8d26?auto=format&fit=crop&q=80&w=400",
        activities: ["Annual Fest", "Music Nights", "Drama"]
    }
];

export const achievements: Achievement[] = [
    {
        id: "a1",
        title: "Winner - Smart India Hackathon 2023",
        studentName: "Team 'VedicCoders' (MCA)",
        program: "MCA",
        description: "Developed an AI-based solution for crop disease detection.",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=400",
        date: "Dec 2023"
    },
    {
        id: "a2",
        title: "Research Paper Accepted in IEEE",
        studentName: "Ritu Singh (Ph.D)",
        program: "Ph.D",
        description: "Paper on 'Vedic Mathematics in Neural Networks' accepted for publication.",
        image: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&q=80&w=400",
        date: "Jan 2024"
    }
];

export const timetables: Timetable[] = [
    { id: "t1", program: "MCA", semester: "2nd Semester", link: "#" },
    { id: "t2", program: "MCA", semester: "4th Semester", link: "#" },
    { id: "t3", program: "BCA", semester: "2nd Semester", link: "#" },
    { id: "t4", program: "BCA", semester: "4th Semester", link: "#" },
    { id: "t5", program: "BCA", semester: "6th Semester", link: "#" },
    { id: "t6", program: "B.Sc (IT)", semester: "2nd Semester", link: "#" },
    { id: "t7", program: "B.Sc (IT)", semester: "4th Semester", link: "#" },
];
