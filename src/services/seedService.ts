"use client";

import { db } from "@/lib/firebase";
import { collection, writeBatch, doc } from "firebase/firestore";

const sampleFaculty = [
    {
        name: "Dr. Gopal Krishna Sharma",
        designation: "Head of Department",
        qualification: "Ph.D (CS), MCA",
        specialization: "Scientific Spirituality, Vedic Computing",
        email: "gopal.sharma@dsvv.ac.in",
        order: 1
    },
    {
        name: "Dr. Abhay Saxena",
        designation: "Professor",
        qualification: "Ph.D, M.Tech",
        specialization: "Computer Networks, IoT",
        email: "abhay.saxena@dsvv.ac.in",
        order: 2
    },
    {
        name: "Mr. Chandrashekhar Patel",
        designation: "Assistant Professor",
        qualification: "MCA",
        specialization: "Web Technologies, Java",
        email: "cs.patel@dsvv.ac.in",
        order: 3
    }
];

const sampleNotices = [
     {
        title: "End Semester Examination Schedule Released",
        content: "The examination schedule for B.Tech and MCA programs for the session 2024-25 has been released. Download the PDF for details.",
        date: new Date(),
        type: "exam",
        isPinned: true
    },
    {
        title: "Guest Lecture on 'Generative AI' by Industry Expert",
        content: "A special guest lecture is organizing on coming Saturday at Chanakya Bhawan Seminar Hall. All students are requested to attend.",
        date: new Date(),
        type: "general",
        isPinned: false
    }
];

const sampleEvents = [
    {
        title: "Code-Spirit 2025: Annual Hackathon",
        description: "Join us for 24-hours of coding marathon. exciting prizes tailored for innovation.",
        startDate: new Date(),
        location: "Software Development Centre"
    },
    {
        title: "National Conference on Scientific Spirituality",
        description: "Call for papers is now open. Submit your research work before deadline.",
        startDate: new Date(),
        location: "Mahamritunjaya Hall"
    }
];

export const SeedService = {
    seedData: async () => {
        const batch = writeBatch(db);

        // Seed Faculty
        sampleFaculty.forEach((f) => {
            const docRef = doc(collection(db, "faculty"));
            batch.set(docRef, f);
        });

        // Seed Notices
        sampleNotices.forEach((n) => {
             const docRef = doc(collection(db, "notices"));
             batch.set(docRef, n);
        });
        
        // Seed Events
        sampleEvents.forEach((e) => {
             const docRef = doc(collection(db, "events"));
             batch.set(docRef, e);
        });

        await batch.commit();
    }
};
