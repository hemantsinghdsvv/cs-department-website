
export interface ContactPerson {
    id: string;
    role: string;
    name: string;
    email: string;
    phone: string;
    image?: string;
}

export interface OfficeHour {
    day: string;
    time: string;
}

export const contactDetails = {
    address: "Department of Computer Science, Dev Sanskriti Vishwavidyalaya, Gayatrikunj - Shantikunj, Haridwar, Uttarakhand - 249411",
    email: "cs.dept@dsvv.ac.in",
    phone: "+91-9258369724",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.402447957905!2d78.16924831511674!3d29.96788498190989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909470eb820138d%3A0x2e8677c707831f28!2sDev%20Sanskriti%20Vishwavidyalaya!5e0!3m2!1sen!2sin!4v1648057983652!5m2!1sen!2sin"
};

export const keyContacts: ContactPerson[] = [
    {
        id: "c1",
        role: "Head of Department",
        name: "Dr. Abhay Saxena",
        email: "abhay.saxena@dsvv.ac.in",
        phone: "+91-925836xxxx",
        image: "https://ui-avatars.com/api/?name=Abhay+Saxena&background=random"
    },
    {
        id: "c2",
        role: "Administrative Office",
        name: "Mr. Ravi Kumar",
        email: "office.cs@dsvv.ac.in",
        phone: "+91-9876543210",
        image: "https://ui-avatars.com/api/?name=Ravi+Kumar&background=random"
    },
    {
        id: "c3",
        role: "Lab In-Charge",
        name: "Mr. Suresh Singh",
        email: "lab.cs@dsvv.ac.in",
        phone: "+91-8765432109",
        image: "https://ui-avatars.com/api/?name=Suresh+Singh&background=random"
    }
];

export const officeHours: OfficeHour[] = [
    { day: "Monday - Friday", time: "9:00 AM - 5:00 PM" },
    { day: "Saturday", time: "9:00 AM - 1:00 PM" },
    { day: "Sunday", time: "Closed" }
];
