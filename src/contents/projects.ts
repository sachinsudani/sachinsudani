import { Project } from "@/types";

export const projects: Project[] = [
    {
        title: "Xenett",
        description:
            "A practice management software to automate accounting workflow and reviews.",
        technologies: ["NodeJS", "ExpressJS", "MongoDB", "TypeScript", "MicroServices", "AWS Lambda", "SQS", "GCP Pub/Sub", "S3", "SES"],
        githubLink: "",
        demoLink: "https://www.xenett.com",
        image: "/projects/xenett.png",
    },
    {
        title: "Moniflo",
        description:
            "A cloud-based accounting platform for small businesses to manage their finances effectively.",
        technologies: ["Docker", "MongoDB", "Stripe", "Deposyt", "ECS", "ECR", "AppRunner", "Lambda"],
        githubLink: "",
        demoLink: "https://en.moniflo.com",
        image: "/projects/moniflo.png",
    },
    {
        title: "Portfolio Website",
        description:
            "A portfolio website for developers to showcase their projects and skills.",
        technologies: ["React", "Vite", "Next.js", "Tailwind CSS", "Framer Motion", "TypeScript", "Vercel"],
        githubLink: "https://github.com/sachinsudani/sachin-portfolio",
        demoLink: "https://sachinsudani.vercel.app",
        image: "/projects/portfolio.png",
    },
    {
        title: "The Patidars",
        description:
            "This is world's first and largest online platform for the patidars community.",
        technologies: ["Neo4j Graph Database", "Slack API", "Pusher", "OneSignal API", "SmartWave API"],
        githubLink: "",
        demoLink: "https://thepatidars.org",
        image: "/projects/the-patidars.png",
    },
    {
        title: "Student Management System",
        description:
            "A student management system that allows teachers to manage their students effectively.",
        technologies: ["MongoDB", "ExpressJS", "React", "NodeJS", "MUI", "JWT", "Bcrypt", "Zod", "Mongoose"],
        githubLink: "https://github.com/sachinsudani/student-management-mern",
        demoLink: "",
        image: "/projects/student.png",
    },
    {
        title: "E-commerce Website",
        description: "A responsive e-commerce website for buying and selling products.",
        technologies: ["HTML", "CSS", "JavaScript", "NodeJS", "ExpressJS", "MongoDB", "Stripe"],
        githubLink: "",
        demoLink: "",
        image: "/projects/e-commerce.png",
    }
];
