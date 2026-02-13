export interface Project {
    title: string;
    description: string;
    technologies: string[];
    githubLink: string;
    demoLink: string;
    image: string;
}

export interface SkillItem {
    name: string;
    level: number;
}

export interface SkillCategory {
    category: string;
    iconName: "frontend" | "backend" | "devops";
    items: SkillItem[];
}

export interface Certification {
    title: string;
    issuer: string;
    image: string;
}

export interface Experience {
    title: string;
    company: string;
    period: string;
    description: string;
    isCurrent?: boolean;
    achievements: string[];
}

export interface Education {
    degree: string;
    institution: string;
    period: string;
    description: string;
}
