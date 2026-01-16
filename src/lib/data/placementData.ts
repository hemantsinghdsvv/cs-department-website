
export interface PlacementStat {
    year: string;
    placedPercentage: number;
    averagePackage: number; // in LPA
    highestPackage: number; // in LPA
    totalOffers: number;
}

export interface Recruiter {
    id: string;
    name: string;
    logo: string;
    category: "MNC" | "Start-up" | "Core" | "Govt";
}

export interface Testimonial {
    id: string;
    name: string;
    batch: string;
    company: string;
    designation: string;
    image: string;
    quote: string;
}

export const placementStats: PlacementStat[] = [
    { year: "2020", placedPercentage: 85, averagePackage: 4.5, highestPackage: 12, totalOffers: 150 },
    { year: "2021", placedPercentage: 88, averagePackage: 5.0, highestPackage: 15, totalOffers: 180 },
    { year: "2022", placedPercentage: 92, averagePackage: 6.0, highestPackage: 24, totalOffers: 210 },
    { year: "2023", placedPercentage: 95, averagePackage: 7.5, highestPackage: 32, totalOffers: 250 },
    { year: "2024", placedPercentage: 98, averagePackage: 9.0, highestPackage: 45, totalOffers: 300 },
];

export const topRecruiters: Recruiter[] = [
    { id: "r1", name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", category: "MNC" },
    { id: "r2", name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", category: "MNC" },
    { id: "r3", name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", category: "MNC" },
    { id: "r4", name: "TCS", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg", category: "MNC" },
    { id: "r5", name: "Infosys", logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg", category: "MNC" },
    { id: "r6", name: "Wipro", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg", category: "MNC" },
    { id: "r7", name: "Swiggy", logo: "https://upload.wikimedia.org/wikipedia/en/1/12/Swiggy_logo.svg", category: "Start-up" },
    { id: "r8", name: "Zomato", logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Zomato_Logo.svg", category: "Start-up" },
    { id: "r9", name: "Paytm", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Paytm_Logo.svg", category: "Start-up" },
    { id: "r10", name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg", category: "MNC" },
];

export const testimonials: Testimonial[] = [
    {
        id: "t1",
        name: "Aditi Sharma",
        batch: "2023",
        company: "Google",
        designation: "Software Engineer",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
        quote: "The placement cell's rigorous training modules and mock interviews were instrumental in cracking the Google interview."
    },
    {
        id: "t2",
        name: "Rohan Das",
        batch: "2022",
        company: "Amazon",
        designation: "SDE II",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
        quote: "From resume building to negotiation skills, the guidance I received was top-notch. Grateful to the department."
    },
     {
        id: "t3",
        name: "Kavita Singh",
        batch: "2024",
        company: "Microsoft",
        designation: "Data Scientist",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
        quote: "The department's focus on emerging tech like AI/ML gave me a significant edge during placements."
    }
];
