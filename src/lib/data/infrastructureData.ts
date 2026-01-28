export interface Facility {
    id: string;
    title: string;
    description: string;
    image: string;
    features: string[];
}

export const facilities: Facility[] = [
    {
        id: "mca-lab",
        title: "MCA Lab",
        description: "Advanced computing lab dedicated to Master of Computer Applications students, featuring high-performance terminals for software development and research.",
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800",
        features: ["High-End Workstations", "Software Development Suite", "High-Speed Internet"]
    },
    {
        id: "bca-lab",
        title: "BCA Lab",
        description: "A comprehensive lab environment for Bachelor of Computer Applications students to learn programming, database management, and web technologies.",
        image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&q=80&w=800",
        features: ["Modern Desktops", "Programming Compilers", "Collaborative Workspace"]
    },
    {
        id: "bsc-it-lab",
        title: "B.Sc. IT Lab",
        description: "Specialized lab for B.Sc. IT students focusing on fundamental computing skills, networking basics, and information technology applications.",
        image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&q=80&w=800",
        features: ["Network Simulators", "IT Infrastructure Access", "Digital Learning Tools"]
    },
    {
        id: "ai-lab",
        title: "AI Lab",
        description: "Dedicated facility for Artificial Intelligence and Machine Learning research, equipped with GPU-accelerated systems for deep learning tasks.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
        features: ["GPU Servers", "AI/ML Frameworks", "Research Datasets"]
    },
    {
        id: "ict-classrooms",
        title: "ICT Classrooms",
        description: "Smart classrooms integrated with Information and Communication Technology to enhance the teaching and learning experience through digital media.",
        image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800",
        features: ["Smart Boards", "Audio-Visual Systems", "Video Conferencing"]
    }
];
