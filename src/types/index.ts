export interface Faculty {
  id?: string;
  name: string;
  designation: string;
  qualification: string;
  specialization: string;
  email: string;
  phone?: string;
  image?: string;
  order?: number;
  domain?: string; // e.g., "AI/ML", "Cybersecurity"
  category?: 'Core' | 'Visiting' | 'Guest';
  researchInterests?: string[];
  publications?: string[];
  projects?: string[];
  courses?: string[];
}

export interface Notice {
  id?: string;
  title: string;
  content: string; // Rich text HTML
  date: any; // Firestore Timestamp
  type: 'general' | 'exam' | 'admission';
  fileUrl?: string;
  isPinned?: boolean;
}

export interface Event {
  id?: string;
  title: string;
  description: string;
  startDate: any;
  endDate?: any;
  location: string;
  image?: string;
}

export interface Publication {
    id?: string;
    title: string;
    authors: string;
    journal: string;
    year: number;
    link?: string;
    type: 'journal' | 'conference' | 'book_chapter';
}

export interface Alumni {
    id?: string;
    name: string;
    batch: string; // e.g. "2018-2022"
    company: string;
    designation: string;
    image?: string;
    linkedin?: string;
    location?: string;
    testimonial?: string;
}

export interface UserProfile {
    uid: string;
    email: string;
    role: 'admin' | 'editor' | 'viewer';
    displayName?: string;
}

export interface Student {
    id?: string;
    name: string;
    rollNo: string;
    semester: string; // e.g. "1st Semester"
    program: string; // e.g. "B.Tech CSE"
    email: string;
    phone?: string;
    image?: string;
}
