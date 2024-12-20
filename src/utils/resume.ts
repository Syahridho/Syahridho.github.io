import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiPhp,
  SiLaravel,
  SiMysql,
  SiFirebase,
  SiVite,
  SiNextdotjs,
  SiFigma,
  SiGithub,
  SiGit,
  SiVisualstudiocode,
  SiAlpinedotjs,
  SiShadcnui,
  SiPython,
} from "react-icons/si";

import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaTelegram,
  FaRegEnvelope,
} from "react-icons/fa";

export const socialMedia: any = [
  {
    name: "Email",
    href: "mailto:syahridhosyahputra@gmail.com",
    icon: FaRegEnvelope,
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/syahridho/",
    icon: FaLinkedin,
  },
  {
    name: "Github",
    href: "https://github.com/Syahridho",
    icon: FaGithub,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/syahridhoa_/",
    icon: FaInstagram,
  },
  {
    name: "Telegram",
    href: "https://t.me/syahridhoo",
    icon: FaTelegram,
  },
];

export const home = {
  name: "Syahridho Arjuna Syahputra",
  location: "Pekanbaru, Riau, Indonesia",
  role: "Front End Developer",
  description:
    "I am a Frontend Developer with a focus on creating aesthetic and responsive user interfaces. With skills in HTML, CSS, JavaScript,Tailwind, React JS and others, I have developed a variety of projects,ranging from business websites to interactive web applications.",
  cv: "https://firebasestorage.googleapis.com/v0/b/next-app-study.appspot.com/o/assets%2Fcv%2FCVSyahridhoArjunaSyahputra.pdf?alt=media&token=ae16c803-5722-4478-a3b4-a1d933c87cdb",
  tech: {
    iconsUp: [
      { icon: SiHtml5, title: "HTML 5", color: "#E34F26" },
      { icon: SiCss3, title: "CSS 3", color: "#1572B6" },
      { icon: SiJavascript, title: "JavaScript", color: "#F7DF1E" },
      { icon: SiTailwindcss, title: "Tailwind CSS", color: "#06B6D4" },
      { icon: SiShadcnui, title: "Shadcn UI", color: "#000000" },
      { icon: SiTypescript, title: "TypeScript", color: "#3178C6" },
      { icon: SiReact, title: "React.Js", color: "#61DAFB" },
      { icon: SiNextdotjs, title: "Next.js", color: "#000000" },
      { icon: SiNodedotjs, title: "Node.js", color: "#339933" },
      { icon: SiPython, title: "Python", color: "#4B8BBE" },
    ],

    iconsDown: [
      { icon: SiAlpinedotjs, title: "Alpine.Js", color: "#8BC0D0" },
      { icon: SiPhp, title: "PHP", color: "#777BB4" },
      { icon: SiLaravel, title: "Laravel", color: "#FF2D20" },
      { icon: SiMysql, title: "MySQL", color: "#4479A1" },
      { icon: SiFirebase, title: "Firebase", color: "#FFCA28" },
      { icon: SiVite, title: "Vite", color: "#646CFF" },
      { icon: SiFigma, title: "Figma", color: "#F24E1E" },
      { icon: SiGithub, title: "GitHub", color: "#181717" },
      { icon: SiGit, title: "Git", color: "#F05032" },
      { icon: SiVisualstudiocode, title: "VS Code", color: "#007ACC" },
    ],
  },
  career: [
    {
      title: "Cakaplah.com",
      dates: "November 2024 - Now",
      location: "Indonesia, Riau",
      description: "Internship.",
      image:
        "https://www.cakaplah.com/assets/news/15112017/cakaplah_rgc2z_13388.png",
      links: [],
    },
    {
      title: "Lancang Kuning University",
      dates: "July 2022 - Now",
      location: "Indonesia, Riau",
      description: "Informatics Engineering.",
      image: "https://assets.siakadcloud.com/public/unilak-favicon.png",
      mlh: "",
      links: [],
    },
    {
      title: "Dashnet ISP",
      dates: "November 2021 - Desember 2021",
      location: "Indonesia, Riau",
      description: "Internship.",
      image:
        "https://dash.net.id/wp-content/uploads/2017/10/cropped-dash-32x32.png",
      mlh: "",
      links: [],
    },
    {
      title: "SMK N 5 Pekanbaru",
      dates: "July 2019 - July 2022",
      location: "Indonesia, Riau",
      description: "Computer and network engineering.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS0GEkrE04jgi8eHfy8Y21hCwRJEkW0NHN5g&s",
      mlh: "",
      links: [],
    },
  ],
};

export const projects = [
  {
    title: "Chat Collect",
    href: "/project/asd",
    dates: "Jan 2024 - Feb 2024",
    active: true,
    description:
      "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
    technologies: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Stripe",
      "Shadcn UI",
      "Magic UI",
    ],
    links: [
      {
        type: "Website",
        href: "/project/asd",
        icon: "",
      },
    ],
    image:
      "https://firebasestorage.googleapis.com/v0/b/next-app-study.appspot.com/o/assets%2Fprojects%2Ffilm.webp?alt=media&token=d7b6469c-a5de-48ea-a220-8013e8c5df25",
  },
  {
    title: "Chat Collect",
    href: "/project/asd",
    dates: "Jan 2024 - Feb 2024",
    active: true,
    description:
      "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
    technologies: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Stripe",
      "Shadcn UI",
      "Magic UI",
    ],
    links: [
      {
        type: "Website",
        href: "/project/asd",
        icon: "",
      },
    ],
    image:
      "https://firebasestorage.googleapis.com/v0/b/next-app-study.appspot.com/o/assets%2Fprojects%2Ffilm.webp?alt=media&token=d7b6469c-a5de-48ea-a220-8013e8c5df25",
  },
  {
    title: "Chat Collect",
    href: "/project/asd",
    dates: "Jan 2024 - Feb 2024",
    active: true,
    description:
      "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
    technologies: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Stripe",
      "Shadcn UI",
      "Magic UI",
    ],
    links: [
      {
        type: "Website",
        href: "/project/asd",
        icon: "",
      },
    ],
    image:
      "https://firebasestorage.googleapis.com/v0/b/next-app-study.appspot.com/o/assets%2Fprojects%2Ffilm.webp?alt=media&token=d7b6469c-a5de-48ea-a220-8013e8c5df25",
  },
  {
    title: "Chat Collect",
    href: "/project/asd",
    dates: "Jan 2024 - Feb 2024",
    active: true,
    description:
      "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
    technologies: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Stripe",
      "Shadcn UI",
      "Magic UI",
    ],
    links: [
      {
        type: "Website",
        href: "/project/asd",
        icon: "",
      },
    ],
    image:
      "https://firebasestorage.googleapis.com/v0/b/next-app-study.appspot.com/o/assets%2Fprojects%2Ffilm.webp?alt=media&token=d7b6469c-a5de-48ea-a220-8013e8c5df25",
  },
  {
    title: "Chat Collect",
    href: "/project/asd",
    dates: "Jan 2024 - Feb 2024",
    active: true,
    description:
      "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
    technologies: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Stripe",
      "Shadcn UI",
      "Magic UI",
    ],
    links: [
      {
        type: "Website",
        href: "/project/asd",
        icon: "",
      },
    ],
    image:
      "https://firebasestorage.googleapis.com/v0/b/next-app-study.appspot.com/o/assets%2Fprojects%2Ffilm.webp?alt=media&token=d7b6469c-a5de-48ea-a220-8013e8c5df25",
  },
  {
    title: "Chat Collect",
    href: "/project/asd",
    dates: "Jan 2024 - Feb 2024",
    active: true,
    description:
      "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
    technologies: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Stripe",
      "Shadcn UI",
      "Magic UI",
    ],
    links: [
      {
        type: "Website",
        href: "/project/asd",
        icon: "",
      },
    ],
    image:
      "https://firebasestorage.googleapis.com/v0/b/next-app-study.appspot.com/o/assets%2Fprojects%2Ffilm.webp?alt=media&token=d7b6469c-a5de-48ea-a220-8013e8c5df25",
  },
  {
    title: "Chat Collect",
    href: "/project/asd",
    dates: "Jan 2024 - Feb 2024",
    active: true,
    description:
      "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
    technologies: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Stripe",
      "Shadcn UI",
      "Magic UI",
    ],
    links: [
      {
        type: "Website",
        href: "/project/asd",
        icon: "",
      },
    ],
    image:
      "https://firebasestorage.googleapis.com/v0/b/next-app-study.appspot.com/o/assets%2Fprojects%2Ffilm.webp?alt=media&token=d7b6469c-a5de-48ea-a220-8013e8c5df25",
  },
  {
    title: "Chat Collect",
    href: "/project/asd",
    dates: "Jan 2024 - Feb 2024",
    active: true,
    description:
      "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
    technologies: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Stripe",
      "Shadcn UI",
      "Magic UI",
    ],
    links: [
      {
        type: "Website",
        href: "/project/asd",
        icon: "",
      },
    ],
    image:
      "https://firebasestorage.googleapis.com/v0/b/next-app-study.appspot.com/o/assets%2Fprojects%2Ffilm.webp?alt=media&token=d7b6469c-a5de-48ea-a220-8013e8c5df25",
  },
  {
    title: "Chat Collect",
    href: "/project/asd",
    dates: "Jan 2024 - Feb 2024",
    active: true,
    description:
      "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
    technologies: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Stripe",
      "Shadcn UI",
      "Magic UI",
    ],
    links: [
      {
        type: "Website",
        href: "/project/asd",
        icon: "",
      },
    ],
    image:
      "https://firebasestorage.googleapis.com/v0/b/next-app-study.appspot.com/o/assets%2Fprojects%2Ffilm.webp?alt=media&token=d7b6469c-a5de-48ea-a220-8013e8c5df25",
  },
  {
    title: "Chat Collect",
    href: "/project/asd",
    dates: "Jan 2024 - Feb 2024",
    active: true,
    description:
      "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
    technologies: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Stripe",
      "Shadcn UI",
      "Magic UI",
    ],
    links: [
      {
        type: "Website",
        href: "/project/asd",
        icon: "",
      },
    ],
    image:
      "https://firebasestorage.googleapis.com/v0/b/next-app-study.appspot.com/o/assets%2Fprojects%2Ffilm.webp?alt=media&token=d7b6469c-a5de-48ea-a220-8013e8c5df25",
  },
  {
    title: "Chat Collect",
    href: "/project/asd",
    dates: "Jan 2024 - Feb 2024",
    active: true,
    description:
      "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
    technologies: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Stripe",
      "Shadcn UI",
      "Magic UI",
    ],
    links: [
      {
        type: "Website",
        href: "/project/asd",
        icon: "",
      },
    ],
    image:
      "https://firebasestorage.googleapis.com/v0/b/next-app-study.appspot.com/o/assets%2Fprojects%2Ffilm.webp?alt=media&token=d7b6469c-a5de-48ea-a220-8013e8c5df25",
  },
  {
    title: "Chat Collect",
    href: "/project/asd",
    dates: "Jan 2024 - Feb 2024",
    active: true,
    description:
      "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
    technologies: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Stripe",
      "Shadcn UI",
      "Magic UI",
    ],
    links: [
      {
        type: "Website",
        href: "/project/asd",
        icon: "",
      },
    ],
    image:
      "https://firebasestorage.googleapis.com/v0/b/next-app-study.appspot.com/o/assets%2Fprojects%2Ffilm.webp?alt=media&token=d7b6469c-a5de-48ea-a220-8013e8c5df25",
  },
  {
    title: "Chat Collect",
    href: "/project/asd",
    dates: "Jan 2024 - Feb 2024",
    active: true,
    description:
      "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
    technologies: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Stripe",
      "Shadcn UI",
      "Magic UI",
    ],
    links: [
      {
        type: "Website",
        href: "/project/asd",
        icon: "",
      },
    ],
    image:
      "https://firebasestorage.googleapis.com/v0/b/next-app-study.appspot.com/o/assets%2Fprojects%2Ffilm.webp?alt=media&token=d7b6469c-a5de-48ea-a220-8013e8c5df25",
  },
  {
    title: "Chat Collect",
    href: "/project/asd",
    dates: "Jan 2024 - Feb 2024",
    active: true,
    description:
      "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
    technologies: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Stripe",
      "Shadcn UI",
      "Magic UI",
    ],
    links: [
      {
        type: "Website",
        href: "/project/asd",
        icon: "",
      },
    ],
    image:
      "https://firebasestorage.googleapis.com/v0/b/next-app-study.appspot.com/o/assets%2Fprojects%2Ffilm.webp?alt=media&token=d7b6469c-a5de-48ea-a220-8013e8c5df25",
  },
  {
    title: "Chat Collect",
    href: "/project/asd",
    dates: "Jan 2024 - Feb 2024",
    active: true,
    description:
      "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
    technologies: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Stripe",
      "Shadcn UI",
      "Magic UI",
    ],
    links: [
      {
        type: "Website",
        href: "/project/asd",
        icon: "",
      },
    ],
    image:
      "https://firebasestorage.googleapis.com/v0/b/next-app-study.appspot.com/o/assets%2Fprojects%2Ffilm.webp?alt=media&token=d7b6469c-a5de-48ea-a220-8013e8c5df25",
  },
  {
    title: "Chat Collect",
    href: "/project/asd",
    dates: "Jan 2024 - Feb 2024",
    active: true,
    description:
      "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
    technologies: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Stripe",
      "Shadcn UI",
      "Magic UI",
    ],
    links: [
      {
        type: "Website",
        href: "/project/asd",
        icon: "",
      },
    ],
    image:
      "https://firebasestorage.googleapis.com/v0/b/next-app-study.appspot.com/o/assets%2Fprojects%2Ffilm.webp?alt=media&token=d7b6469c-a5de-48ea-a220-8013e8c5df25",
  },
  {
    title: "Chat Collect",
    href: "/project/asd",
    dates: "Jan 2024 - Feb 2024",
    active: true,
    description:
      "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
    technologies: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Stripe",
      "Shadcn UI",
      "Magic UI",
    ],
    links: [
      {
        type: "Website",
        href: "/project/asd",
        icon: "",
      },
    ],
    image:
      "https://firebasestorage.googleapis.com/v0/b/next-app-study.appspot.com/o/assets%2Fprojects%2Ffilm.webp?alt=media&token=d7b6469c-a5de-48ea-a220-8013e8c5df25",
  },
  {
    title: "Chat Collect",
    href: "/project/asd",
    dates: "Jan 2024 - Feb 2024",
    active: true,
    description:
      "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
    technologies: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Stripe",
      "Shadcn UI",
      "Magic UI",
    ],
    links: [
      {
        type: "Website",
        href: "/project/asd",
        icon: "",
      },
    ],
    image:
      "https://firebasestorage.googleapis.com/v0/b/next-app-study.appspot.com/o/assets%2Fprojects%2Ffilm.webp?alt=media&token=d7b6469c-a5de-48ea-a220-8013e8c5df25",
  },
  {
    title: "Chat Collect",
    href: "/project/asd",
    dates: "Jan 2024 - Feb 2024",
    active: true,
    description:
      "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
    technologies: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Stripe",
      "Shadcn UI",
      "Magic UI",
    ],
    links: [
      {
        type: "Website",
        href: "/project/asd",
        icon: "",
      },
    ],
    image:
      "https://firebasestorage.googleapis.com/v0/b/next-app-study.appspot.com/o/assets%2Fprojects%2Ffilm.webp?alt=media&token=d7b6469c-a5de-48ea-a220-8013e8c5df25",
  },
  {
    title: "Chat Collect",
    href: "/project/asd",
    dates: "Jan 2024 - Feb 2024",
    active: true,
    description:
      "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
    technologies: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Stripe",
      "Shadcn UI",
      "Magic UI",
    ],
    links: [
      {
        type: "Website",
        href: "/project/asd",
        icon: "",
      },
    ],
    image:
      "https://firebasestorage.googleapis.com/v0/b/next-app-study.appspot.com/o/assets%2Fprojects%2Ffilm.webp?alt=media&token=d7b6469c-a5de-48ea-a220-8013e8c5df25",
  },
  {
    title: "Chat Collect",
    href: "/project/asd",
    dates: "Jan 2024 - Feb 2024",
    active: true,
    description:
      "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
    technologies: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Stripe",
      "Shadcn UI",
      "Magic UI",
    ],
    links: [
      {
        type: "Website",
        href: "/project/asd",
        icon: "",
      },
    ],
    image:
      "https://firebasestorage.googleapis.com/v0/b/next-app-study.appspot.com/o/assets%2Fprojects%2Ffilm.webp?alt=media&token=d7b6469c-a5de-48ea-a220-8013e8c5df25",
  },
  {
    title: "Chat Collect",
    href: "/project/asd",
    dates: "Jan 2024 - Feb 2024",
    active: true,
    description:
      "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
    technologies: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Stripe",
      "Shadcn UI",
      "Magic UI",
    ],
    links: [
      {
        type: "Website",
        href: "/project/asd",
        icon: "",
      },
    ],
    image:
      "https://firebasestorage.googleapis.com/v0/b/next-app-study.appspot.com/o/assets%2Fprojects%2Ffilm.webp?alt=media&token=d7b6469c-a5de-48ea-a220-8013e8c5df25",
  },
  {
    title: "Chat Collect",
    href: "/project/asd",
    dates: "Jan 2024 - Feb 2024",
    active: true,
    description:
      "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
    technologies: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Stripe",
      "Shadcn UI",
      "Magic UI",
    ],
    links: [
      {
        type: "Website",
        href: "/project/asd",
        icon: "",
      },
    ],
    image:
      "https://firebasestorage.googleapis.com/v0/b/next-app-study.appspot.com/o/assets%2Fprojects%2Ffilm.webp?alt=media&token=d7b6469c-a5de-48ea-a220-8013e8c5df25",
  },
  {
    title: "Chat Collect",
    href: "/project/asd",
    dates: "Jan 2024 - Feb 2024",
    active: true,
    description:
      "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
    technologies: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Stripe",
      "Shadcn UI",
      "Magic UI",
    ],
    links: [
      {
        type: "Website",
        href: "/project/asd",
        icon: "",
      },
    ],
    image:
      "https://firebasestorage.googleapis.com/v0/b/next-app-study.appspot.com/o/assets%2Fprojects%2Ffilm.webp?alt=media&token=d7b6469c-a5de-48ea-a220-8013e8c5df25",
  },
  {
    title: "Chat Collect",
    href: "/project/asd",
    dates: "Jan 2024 - Feb 2024",
    active: true,
    description:
      "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
    technologies: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Stripe",
      "Shadcn UI",
      "Magic UI",
    ],
    links: [
      {
        type: "Website",
        href: "/project/asd",
        icon: "",
      },
    ],
    image:
      "https://firebasestorage.googleapis.com/v0/b/next-app-study.appspot.com/o/assets%2Fprojects%2Ffilm.webp?alt=media&token=d7b6469c-a5de-48ea-a220-8013e8c5df25",
  },
  {
    title: "Chat Collect",
    href: "/project/asd",
    dates: "Jan 2024 - Feb 2024",
    active: true,
    description:
      "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
    technologies: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Stripe",
      "Shadcn UI",
      "Magic UI",
    ],
    links: [
      {
        type: "Website",
        href: "/project/asd",
        icon: "",
      },
    ],
    image:
      "https://firebasestorage.googleapis.com/v0/b/next-app-study.appspot.com/o/assets%2Fprojects%2Ffilm.webp?alt=media&token=d7b6469c-a5de-48ea-a220-8013e8c5df25",
  },
  {
    title: "Chat Collect",
    href: "/project/asd",
    dates: "Jan 2024 - Feb 2024",
    active: true,
    description:
      "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
    technologies: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Stripe",
      "Shadcn UI",
      "Magic UI",
    ],
    links: [
      {
        type: "Website",
        href: "/project/asd",
        icon: "",
      },
    ],
    image:
      "https://firebasestorage.googleapis.com/v0/b/next-app-study.appspot.com/o/assets%2Fprojects%2Ffilm.webp?alt=media&token=d7b6469c-a5de-48ea-a220-8013e8c5df25",
  },
  {
    title: "Chat Collect",
    href: "/project/asd",
    dates: "Jan 2024 - Feb 2024",
    active: true,
    description:
      "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
    technologies: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Stripe",
      "Shadcn UI",
      "Magic UI",
    ],
    links: [
      {
        type: "Website",
        href: "/project/asd",
        icon: "",
      },
    ],
    image:
      "https://firebasestorage.googleapis.com/v0/b/next-app-study.appspot.com/o/assets%2Fprojects%2Ffilm.webp?alt=media&token=d7b6469c-a5de-48ea-a220-8013e8c5df25",
  },
];

export const detailProject: any = {
  title: "Chat Collect",
  href: "/project/asd",
  dates: "Jan 2024 - Feb 2024",
  active: true,
  description:
    "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
  technologies: [
    "Next.js",
    "Typescript",
    "PostgreSQL",
    "Prisma",
    "TailwindCSS",
    "Stripe",
    "Shadcn UI",
    "Magic UI",
  ],
  links: [
    {
      type: "Demo",
      href: "https://www.google.com",
      icon: "",
    },
    {
      type: "Github",
      href: "https://www.github.com",
      icon: "",
    },
  ],
  github: [
    {
      title: "Clone Github",
      code: "git clone https://syahridho.github.io",
    },
    {
      title: "Masuk derctory",
      code: "code .",
    },
    {
      title: "run project",
      code: "npm run dev",
    },
    {
      title: "Open http://localhost:3000 with your browser to see the result.",
    },
  ],
  image:
    "https://firebasestorage.googleapis.com/v0/b/next-app-study.appspot.com/o/assets%2Fprojects%2Ffilm.webp?alt=media&token=d7b6469c-a5de-48ea-a220-8013e8c5df25",
};

const url: string =
  "https://firebasestorage.googleapis.com/v0/b/next-app-study.appspot.com/o/assets%2Fcertificates%2Ffrondend%2Fdicoding-belajar-membuat-front-end-web-untuk-pemula.webp?alt=media&token=4d1827af-69d3-4352-b8d7-e28a425b72bf";

export const certificates = {
  main: [
    {
      url: url,
      role: "fronend",
    },
    {
      url: url,
      role: "backend",
    },
    {
      url: url,
      role: "devops",
    },
    {
      url: url,
      role: "ui/ux",
    },
    {
      url: url,
      role: "ai",
    },
    {
      url: url,
      role: "flutter",
    },
  ],
  all: [
    {
      url: url,
      role: "frondend",
    },
    {
      url: url,
      role: "backend",
    },
    {
      url: url,
      role: "backend",
    },
    {
      url: url,
      role: "devops",
    },
    {
      url: url,
      role: "devops",
    },
    {
      url: url,
      role: "devops",
    },
    {
      url: url,
      role: "mobile",
    },
    {
      url: url,
      role: "mobile",
    },
    {
      url: url,
      role: "mobile",
    },
    {
      url: url,
      role: "mobile",
    },
    {
      url: url,
      role: "mechine",
    },
    {
      url: url,
      role: "mechine",
    },
    {
      url: url,
      role: "mechine",
    },
    {
      url: url,
      role: "mechine",
    },
    {
      url: url,
      role: "mechine",
    },
    {
      url: url,
      role: "other",
    },
    {
      url: url,
      role: "other",
    },
    {
      url: url,
      role: "other",
    },
    {
      url: url,
      role: "other",
    },
    {
      url: url,
      role: "other",
    },
    {
      url: url,
      role: "other",
    },
    {
      url: url,
      role: "other",
    },
  ],
};
