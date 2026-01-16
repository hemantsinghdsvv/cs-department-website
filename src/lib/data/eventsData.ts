
export interface NewsItem {
    id: string;
    title: string;
    summary: string;
    date: string;
    category: "Academic" | "Research" | "Student Life" | "Achievement";
    image: string;
    content?: string; // Full content for detail view
}

export interface Event {
    id: string;
    title: string;
    date: string;
    time: string;
    location: string;
    type: "Seminar" | "Workshop" | "Conference" | "FDP" | "Cultural";
    description: string;
    isUpcoming: boolean;
    image: string;
    registerLink?: string;
}

export interface GalleryItem {
    id: string;
    title: string;
    category: "Convocation" | "Fest" | "Campus" | "Labs";
    type: "Photo" | "Video";
    url: string; // Image URL or Video Thumbnail
    date: string;
}

export const newsItems: NewsItem[] = [
    {
        id: "n1",
        title: "Department Secures ₹50L AI Research Grant",
        summary: "The Computer Science department has been awarded a significant grant by DST for research in Vedic Computing and AI.",
        date: "April 10, 2024",
        category: "Research",
        image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&q=80&w=600",
        content: "Full article content placeholder..."
    },
    {
        id: "n2",
        title: "MCA Students Win National Hackathon",
        summary: "Team 'VedicCoders' bagged the first prize at the Smart India Hackathon 2023 for their project on agriculture.",
        date: "March 25, 2024",
        category: "Achievement",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: "n3",
        title: "New Syllabus for B.Sc (IT) Launched",
        summary: "In alignment with NEP 2020, the department has introduced a new 4-year curriculum focusing on emerging technologies.",
        date: "March 15, 2024",
        category: "Academic",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600"
    }
];

export const events: Event[] = [
    {
        id: "e1",
        title: "International Conference on Ancient Science & Technology",
        date: "May 15, 2024",
        time: "10:00 AM",
        location: "Auditorium, DSVV",
        type: "Conference",
        description: "A 2-day conference bringing together experts to bridge the gap between ancient wisdom and modern tech.",
        isUpcoming: true,
        image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=600",
        registerLink: "#"
    },
    {
        id: "e2",
        title: "Workshop on Full Stack Development",
        date: "April 20, 2024",
        time: "11:00 AM",
        location: "Computer Lab 3",
        type: "Workshop",
        description: "Hands-on session on React and Node.js for final year students.",
        isUpcoming: true,
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600",
        registerLink: "#"
    },
    {
        id: "e3",
        title: "Alumni Meet 2023",
        date: "Nov 14, 2023",
        time: "5:00 PM",
        location: "Main Ground",
        type: "Cultural",
        description: "Annual gathering of the alumni network.",
        isUpcoming: false,
        image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=600"
    }
];

export const galleryItems: GalleryItem[] = [
    {
        id: "g1",
        title: "Convocation 2023",
        category: "Convocation",
        type: "Photo",
        url: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=600",
        date: "Dec 2023"
    },
    {
        id: "g2",
        title: "Tech Fest 2024",
        category: "Fest",
        type: "Photo",
        url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600",
        date: "Feb 2024"
    },
    {
        id: "g3",
        title: "AI Lab Inauguration",
        category: "Labs",
        type: "Photo",
        url: "https://images.unsplash.com/photo-1535378437346-6aa3b7e45147?auto=format&fit=crop&q=80&w=600",
        date: "Jan 2024"
    },
     {
        id: "g4",
        title: "Campus Greenery",
        category: "Campus",
        type: "Photo",
        url: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=600",
        date: "March 2024"
    }
];
