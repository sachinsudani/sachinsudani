import { Certification, Education, Experience, SkillCategory } from "@/types";

export const skills: SkillCategory[] = [
    {
        category: "Frontend",
        iconName: "frontend",
        items: [
            { name: "React.js & Next.js", level: 95 },
            { name: "TypeScript", level: 90 },
            { name: "Tailwind CSS", level: 90 },
            { name: "HTML5 & CSS3", level: 95 },
        ],
    },
    {
        category: "Backend",
        iconName: "backend",
        items: [
            { name: "Node.js & Express.js", level: 95 },
            { name: "MongoDB & Mongoose", level: 90 },
            { name: "PostgreSQL", level: 80 },
            { name: "REST APIs & GraphQL", level: 90 },
        ],
    },
    {
        category: "DevOps & Tools",
        iconName: "devops",
        items: [
            { name: "Docker & AWS", level: 85 },
            { name: "Git & GitHub", level: 95 },
            { name: "CI/CD Pipelines", level: 80 },
            { name: "AI Tools & RAG", level: 85 },
        ],
    },
];

export const certifications: Certification[] = [
    {
        title: "Full Stack Developer",
        issuer: "Udemy",
        image: "/certifications/full-stack.png",
    },
    {
        title: "AWS Summit 2025 Participant",
        issuer: "Amazon Web Services",
        image: "/certifications/aws-summit.png",
    },
    {
        title: "AWS Foundations: Cloud Practitioner Essentials",
        issuer: "Gujarat Technological University",
        image: "/certifications/aws-foundations.png",
    },
];

export const experience: Experience[] = [
    {
        title: "Mid Senior Full Stack Developer",
        company: "Xenett",
        period: "2024 - Present",
        description: "Practice management software for accounting workflow automation",
        isCurrent: true,
        achievements: [
            "Handled Moniflo smoothly in Production and managed full Sprint delivery",
            "Implemented Google and Microsoft OAuth Flow using AI - the only team member capable of building full features with AI",
            "Delivered 3 Critical CRM Integrations within a single week",
            "Designed and implemented Inter Company feature (Model & APIs)",
            "Built Complex Entries Check List and Trend Feature under tight deadline",
            "Implemented Clearing Account feature from scratch (Model & APIs)",
            "Fixed critical Accounting upload issue as a Problem Solver",
            "Updated NPM Packages to latest versions across Xenett, Central, CP without breaking changes",
            "Added nodemon configuration for improved development workflow in Central and CP Service",
            "Solved Production Issue: P&L and BS SDK to REST migration",
            "Resolved Production Memory Leak Issue",
            "Set up Test Case Infrastructure and implemented Test Driven Development",
            "Fixed critical Production Payroll Issue",
        ],
    },
    {
        title: "Junior Full Stack Developer",
        company: "BKSoftech",
        period: "2022 - 2024",
        description: "IT Services & Software Development Company",
        isCurrent: false,
        achievements: [
            "Built real-world backend services with focus on modular architecture, database relationships, and performance tuning",
            "Contributed to production features in live projects using REST API design and data flow management best practices",
            "Led development of features for businesses and reputed individuals, implementing dynamic business feeds",
        ],
    },
];

export const education: Education = {
    degree: "Bachelor of Computer Application",
    institution: "Saurashtra University",
    period: "2019 - 2022",
    description: "Graduated with honors. Focused on software engineering, web development, and database management systems.",
};
