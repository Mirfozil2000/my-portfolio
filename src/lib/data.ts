import { Link, ProjectInfo } from "./types";

export const links: Link[] = [
  {
    nameEng: "Home",
    hash: "#home",
  },
  {
    nameEng: "About",
    hash: "#about",
  },
  {
     nameEng: "Projects",
     hash: "#projects",
   },
  {
    nameEng: "Skills",
    hash: "#skills",
  },
  {
    nameEng: "Contact",
    hash: "#contact",
  },
];

export const projectsData: ProjectInfo[] = [
  {
    title: "La'Core Cosmetics",
    description:
      "Skin Care Shop Platform",
    tags: ["React", "Next.js", "PostgreSQL", "Tailwind", "NodeJS", "NestJS"],
    imageUrl: "/image1.png",
    link: "https://www.lacore.one",
  },
  {
    title: "Dcamp LMS",
    description: "Platform which connects schools and students.",
    tags: ["React", "MongoDB", "Tailwind", "NestJS"],
    imageUrl: "/image1.png",
    link: "https://www.dcamp.io",
  },
]

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux Toolkit",
  "Express",
  "Framer Motion",
  "NodeJS",
  "NestJS"
];
