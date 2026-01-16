export interface NAACSubCriteria {
    id: string;
    title: string;
    description: string;
    documents: {
        title: string;
        url: string; // Link to PDF/Drive
    }[];
}

export interface NAACCriteria {
    id: string;
    title: string;
    description: string;
    weightage: number;
    subCriteria: NAACSubCriteria[];
}

export const naacData: NAACCriteria[] = [
    {
        id: "c1",
        title: "Criterion 1: Curricular Aspects",
        description: "Curriculum Design, Development, and Enrichment.",
        weightage: 150,
        subCriteria: [
            {
                id: "1.1",
                title: "1.1 Curricular Planning and Implementation",
                description: " The Institution ensures effective curriculum delivery through a well planned and documented process.",
                documents: [ { title: "Academic Calendar", url: "#" }, { title: "Lesson Plans", url: "#" } ]
            },
            {
                id: "1.2",
                title: "1.2 Academic Flexibility",
                description: "Number of Certificate/Value added courses offered and online courses of MOOCs, SWAYAM, NPTEL etc.",
                documents: [ { title: "List of New Courses", url: "#" } ]
            },
            {
                id: "1.3",
                title: "1.3 Curriculum Enrichment",
                description: "Institution integrates crosscutting issues relevant to Professional Ethics, Gender, Human Values, Environment and Sustainability in transacting the Curriculum.",
                documents: [ { title: "Course Content Details", url: "#" } ]
            },
            {
                id: "1.4",
                title: "1.4 Feedback System",
                description: "Institution obtains feedback on the academic performance and ambience of the institution from various stakeholders.",
                documents: [ { title: "Feedback Reports", url: "#" }, { title: "Action Taken Report", url: "#" } ]
            }
        ]
    },
    {
        id: "c2",
        title: "Criterion 2: Teaching-Learning and Evaluation",
        description: "Student Enrolment, Teacher Quality, and Evaluation Processes.",
        weightage: 200,
        subCriteria: [
            {
                id: "2.1",
                title: "2.1 Student Enrolment and Profile",
                description: "Enrolment percentage and seats filled against reserved categories.",
                documents: [ { title: "Enrolment Data", url: "#" } ]
            },
            {
                id: "2.2",
                title: "2.2 Student Teacher Ratio",
                description: "Student – Full time Teacher Ratio.",
                documents: [ { title: "Faculty List", url: "#" } ]
            },
            {
                id: "2.3",
                title: "2.3 Teaching-Learning Process",
                description: "Student centric methods, experiential learning, participative learning and problem solving methodologies are used for enhancing learning experiences.",
                documents: [ { title: "Methodology Report", url: "#" } ]
            },
            {
                id: "2.4",
                title: "2.4 Teacher Profile and Quality",
                description: "Percentage of full-time teachers against sanctioned posts.",
                documents: [ { title: "Sanction Letters", url: "#" } ]
            },
            {
                id: "2.5",
                title: "2.5 Evaluation Process and Reforms",
                description: "Mechanism of internal/external assessment is transparent and the grievance redressal system is time-bound and efficient.",
                documents: [ { title: "Wvaluation Guidelines", url: "#" } ]
            },
            {
                id: "2.6",
                title: "2.6 Student Performance and Learning Outcomes",
                description: "Programme Outcomes (POs) and Course Outcomes (COs) for all Programmes offered by the institution are stated and displayed on website.",
                documents: [ { title: "PO & CO Attainment", url: "#" } ]
            },
            {
                id: "2.7",
                title: "2.7 Student Satisfaction Survey",
                description: "Student Satisfaction Survey (SSS) on overall institutional performance.",
                documents: [ { title: "SSS Report", url: "#" } ]
            }
        ]
    },
    {
        id: "c3",
        title: "Criterion 3: Research, Innovations and Extension",
        description: "Promotion of Research, Innovation Ecosystem, and Extension Activities.",
        weightage: 120,
        subCriteria: [
            {
                id: "3.1",
                title: "3.1 Promotion of Research and Facilities",
                description: "The institution’s research facilities are frequently updated and there is a well defined research policy.",
                documents: [ { title: "Research Policy", url: "#" } ]
            },
            {
                id: "3.2",
                title: "3.2 Resource Mobilization for Research",
                description: "Grants received from Government and non-governmental agencies for research projects / endowments.",
                documents: [ { title: "Grant Letters", url: "#" } ]
            },
            {
                id: "3.3",
                title: "3.3 Innovation Ecosystem",
                description: "Institution has created an ecosystem for innovations, Indian Knowledge System (IKS), including awareness about IPR.",
                documents: [ { title: "Incubation Center Report", url: "#" } ]
            },
            {
                id: "3.4",
                title: "3.4 Research Publications and Awards",
                description: "Number of research papers published per teacher in the Journals notified on UGC care list.",
                documents: [ { title: "Publication List", url: "#" } ]
            },
            {
                id: "3.5",
                title: "3.5 Consultancy",
                description: "Revenue generated from consultancy and corporate training.",
                documents: []
            },
            {
                id: "3.6",
                title: "3.6 Extension Activities",
                description: "Extension activities are carried out in the neighborhood community, sensitizing students to social issues.",
                documents: [ { title: "Activity Reports", url: "#" } ]
            },
            {
                id: "3.7",
                title: "3.7 Collaboration",
                description: "Functional MoUs with institutions of national, international importance, other universities, industries etc.",
                documents: [ { title: "MoU Copies", url: "#" } ]
            }
        ]
    },
    {
        id: "c4",
        title: "Criterion 4: Infrastructure and Learning Resources",
        description: "Physical facilities, Library, and IT Infrastructure.",
        weightage: 100,
        subCriteria: [
            {
                id: "4.1",
                title: "4.1 Physical Facilities",
                description: "The Institution has adequate infrastructure and physical facilities for teaching- learning. viz., classrooms, laboratories, computing equipment.",
                documents: [ { title: "Geo-tagged Photos", url: "#" } ]
            },
            {
                id: "4.2",
                title: "4.2 Library as a Learning Resource",
                description: "Library is automated with digital facilities using Integrated Library Management System (ILMS).",
                documents: [ { title: "Library Audit", url: "#" } ]
            },
            {
                id: "4.3",
                title: "4.3 IT Infrastructure",
                description: "Institution frequently updates its IT facilities and provides sufficient bandwidth for internet connection.",
                documents: [ { title: "Hardware Invoice", url: "#" } ]
            },
            {
                id: "4.4",
                title: "4.4 Maintenance of Campus Infrastructure",
                description: "Systems and procedures for maintaining and utilizing physical, academic and support facilities.",
                documents: [ { title: "Maintenance Policy", url: "#" } ]
            }
        ]
    },
    {
        id: "c5",
        title: "Criterion 5: Student Support and Progression",
        description: "Scholarships, Capacity Building, and Placement.",
        weightage: 130,
        subCriteria: [
             {
                id: "5.1",
                title: "5.1 Student Support",
                description: "Percentage of students benefited by scholarships and free ships provided by the Government and non-government agencies.",
                documents: [ { title: "Scholarship Data", url: "#" } ]
            },
            {
                id: "5.2",
                title: "5.2 Student Progression",
                description: "Percentage of qualifying students for placements and higher education.",
                documents: [ { title: "Placement Records", url: "#" } ]
            },
            {
                id: "5.3",
                title: "5.3 Student Participation and Activities",
                description: "Number of awards/medals for outstanding performance in sports/cultural activities.",
                documents: [ { title: "Award Certificates", url: "#" } ]
            },
            {
                id: "5.4",
                title: "5.4 Alumni Engagement",
                description: "There is a registered Alumni Association that contributes significantly to the development of the institution.",
                documents: [ { title: "Alumni Meeting Minutes", url: "#" } ]
            }
        ]
    },
    {
        id: "c6",
        title: "Criterion 6: Governance, Leadership and Management",
        description: "Institutional Vision, Strategy, and Faculty Empowerment.",
        weightage: 100,
        subCriteria: [
            {
                id: "6.1",
                title: "6.1 Institutional Vision and Leadership",
                description: "The governance and leadership is in accordance with vision and mission of the institution.",
                documents: [ { title: "Vision Mission Doc", url: "#" } ]
            },
            {
                id: "6.2",
                title: "6.2 Strategy Development and Deployment",
                description: "The functioning of the institutional bodies is effective and efficient as visible from policies, administrative setup, appointment and service rules.",
                documents: [ { title: "Strategic Plan", url: "#" } ]
            },
            {
                id: "6.3",
                title: "6.3 Faculty Empowerment Strategies",
                description: "The institution has effective welfare measures and Performance Appraisal System for teaching and non-teaching staff.",
                documents: [ { title: "Appraisal Forms", url: "#" } ]
            },
            {
                id: "6.4",
                title: "6.4 Financial Management and Resource Mobilization",
                description: "Institution has strategies for mobilization and optimal utilization of resources and funds.",
                documents: [ { title: "Audited Statements", url: "#" } ]
            },
            {
                id: "6.5",
                title: "6.5 Internal Quality Assurance System",
                description: "Internal Quality Assurance Cell (IQAC) has contributed significantly for institutionalizing the quality assurance strategies and processes.",
                documents: [ { title: "IQAC Minutes", url: "#" } ]
            }
        ]
    },
    {
        id: "c7",
        title: "Criterion 7: Institutional Values and Best Practices",
        description: "Gender Equity, Environmental Consciousness, and Best Practices.",
        weightage: 100,
        subCriteria: [
            {
                id: "7.1",
                title: "7.1 Institutional Values and Social Responsibilities",
                description: "Measures initiated for the promotion of gender equity, environmental consciousness, and sustainability.",
                documents: [ { title: "Gender Audit", url: "#" }, { title: "Green Audit", url: "#" } ]
            },
            {
                id: "7.2",
                title: "7.2 Best Practices",
                description: "Describe two best practices successfully implemented by the Institution.",
                documents: [ { title: "Best Practices Doc", url: "#" } ]
            },
            {
                id: "7.3",
                title: "7.3 Institutional Distinctiveness",
                description: "Portray the performance of the Institution in one area distinct to its priority.",
                documents: [ { title: "Distinctiveness Report", url: "#" } ]
            }
        ]
    }
];
