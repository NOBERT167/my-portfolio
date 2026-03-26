export const SITE = {
  name: "Nobert Langat",
  title: "Full-Stack Developer & UI/UX Designer",
  description:
    "I craft performant web experiences with clean code and sharp design. Based in Nairobi, Kenya.",
  email: "nobertlangat@gmail.com",
  location: "Nairobi, Kenya",
  resumeUrl: "#",
  socials: {
    github: "https://github.com/NOBERT167",
    linkedin:
      "https://www.linkedin.com/in/langat-kipkoech-nobert-ab44661ba/",
    twitter: "https://twitter.com/darkcode1999",
    instagram: "https://www.instagram.com/nobert.dev/",
  },
};

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    title: "react-spotlight-search",
    description:
      "A beautiful, accessible command palette / spotlight search for React apps. Cmd+K ready. Published on npm with 2+ stars.",
    tech: ["TypeScript", "React", "npm"],
    github: "https://github.com/NOBERT167/react-spotlight-search",
    live: "https://www.npmjs.com/package/react-spotlight-search",
    featured: true,
  },
  {
    title: "react-confirm-dialog",
    description:
      "Lightweight, fully customizable confirmation dialog hook that replaces window.confirm() with beautiful async modals. Zero dependencies.",
    tech: ["TypeScript", "React", "npm"],
    github: "https://github.com/NOBERT167/react-confirm-dialog",
    live: "https://www.npmjs.com/package/react-confirm-dialog",
    featured: true,
  },
  {
    title: "Audispot",
    description:
      "Full-stack car marketplace website built with TypeScript. Features listings, search, and a modern responsive UI.",
    tech: ["TypeScript", "Next.js", "Tailwind CSS"],
    github: "https://github.com/NOBERT167/audispot",
    featured: true,
  },
  {
    title: "Seminar Management",
    description:
      "Frontend + ASP.NET Core Web API for managing seminars, integrating with Microsoft Dynamics 365 Business Central.",
    tech: ["TypeScript", "React", "C#", "ASP.NET Core"],
    github: "https://github.com/NOBERT167/Seminar-Management",
    featured: true,
  },
  {
    title: "ShopYangu",
    description:
      "Product & shop management web app built with React and Next.js. Features product listing, CRUD forms, and shop association.",
    tech: ["TypeScript", "Next.js", "React"],
    github: "https://github.com/NOBERT167/ShopYangu",
  },
  {
    title: "Hotel Booking API",
    description:
      "A RESTful API for booking hotel rooms, built with C# and ASP.NET Core.",
    tech: ["C#", "ASP.NET Core", "REST API"],
    github: "https://github.com/NOBERT167/HotelBookingAPI",
  },
  {
    title: "react-3d-icon",
    description:
      "3D icon component for React applications. Published as an npm package.",
    tech: ["JavaScript", "React", "npm"],
    github: "https://github.com/NOBERT167/react-3d-icon",
  },
  {
    title: "Blog App",
    description:
      "Full-stack blog application built with the MERN stack — MongoDB, Express, React, and Node.js.",
    tech: ["JavaScript", "MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/NOBERT167/Blog-app",
  },
  {
    title: "Seminar Management API",
    description:
      "REST API for seminar management that integrates with Microsoft Dynamics 365 Business Central.",
    tech: ["C#", "ASP.NET Core", "Business Central"],
    github: "https://github.com/NOBERT167/Seminar-Management-API",
  },
  {
    title: "ASP.NET Core + React Auth",
    description:
      "Full-stack authentication app with user registration, login, and protected routes. Frontend powered by React, Vite, and Tailwind CSS.",
    tech: ["C#", "ASP.NET Core", "React", "Vite", "Tailwind CSS"],
    github: "https://github.com/NOBERT167/aaspnetcore-react-auth-app",
  },
  {
    title: "BC ASP.NET Core API",
    description:
      "ASP.NET Core Web API for managing instructor records within Microsoft Dynamics 365 Business Central via RESTful CRUD operations.",
    tech: ["C#", "ASP.NET Core", "Business Central"],
    github: "https://github.com/NOBERT167/BC-ASP.NET-CORE",
  },
  {
    title: "CodeGenius Backend",
    description:
      "Backend service for CodeGenius, built with Python.",
    tech: ["Python", "Jinja", "Backend"],
    github: "https://github.com/NOBERT167/CodeGenius_Backend",
  },
  {
    title: "Blogista",
    description:
      "Full-stack blog built with Next.js, Sanity CMS, Tailwind CSS, and TypeScript.",
    tech: ["TypeScript", "Next.js", "Sanity", "Tailwind CSS"],
    github: "https://github.com/NOBERT167/Blogista",
    live: "https://blogista.netlify.app/",
  },
  {
    title: "EnatonTest",
    description:
      "Social media application where users can login, post, and comment on other posts.",
    tech: ["JavaScript", "React", "Node.js"],
    github: "https://github.com/NOBERT167/EnatonTest",
  },
  {
    title: "E-Marketing App",
    description:
      "Full-stack e-marketing MERN application for product marketing and management.",
    tech: ["JavaScript", "MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/NOBERT167/emarketing-web-application",
  },
  {
    title: "REST API in C#",
    description:
      "A simple REST API for user registration and login built with C# and ASP.NET Core.",
    tech: ["C#", "ASP.NET Core", "REST API"],
    github: "https://github.com/NOBERT167/Rest-API-in-C-",
  },
  {
    title: "Jokes App",
    description:
      "Web application built using C# and ASP.NET Core MVC where users can create, edit, delete, and view jokes.",
    tech: ["C#", "ASP.NET Core", "MVC"],
    github: "https://github.com/NOBERT167/Jokes-App",
  },
  {
    title: "Text Editor",
    description:
      "Desktop text editor application built with C#.",
    tech: ["C#", ".NET", "Desktop"],
    github: "https://github.com/NOBERT167/text-editor",
  },
  {
    title: "TenderSite",
    description:
      "UI for tenders featuring a landing page, login page, and tenders listing page.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/NOBERT167/TenderSite",
  },
  {
    title: "Afrinova",
    description:
      "Web project showcasing African innovation and design.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/NOBERT167/Afrinova",
  },
  {
    title: "SAYS",
    description:
      "Website for the Kericho Diocese Youth community.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/NOBERT167/SAYS",
  },
  {
    title: "AL Code Snippets",
    description:
      "Code snippets for basic AL programming language in Business Central 24.",
    tech: ["AL", "Business Central"],
    github: "https://github.com/NOBERT167/Al-Code-snippets",
  },
  {
    title: "E-Commerce Landing Page",
    description:
      "E-commerce landing page built using Next.js 13 and Tailwind CSS.",
    tech: ["Next.js", "Tailwind CSS"],
    github: "https://github.com/NOBERT167/ecommerce-landing-page",
  },
  {
    title: "ShopYangu DB",
    description:
      "Backend database service for the ShopYangu product management platform.",
    tech: ["JavaScript", "Node.js", "Database"],
    github: "https://github.com/NOBERT167/shop-yanguDB",
  },
];

export const SKILLS = [
  { name: "TypeScript", category: "language" },
  { name: "JavaScript", category: "language" },
  { name: "C#", category: "language" },
  { name: "Python", category: "language" },
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Framer Motion", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "ASP.NET Core", category: "backend" },
  { name: "Express", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "REST APIs", category: "backend" },
  { name: "Git", category: "tools" },
  { name: "Figma", category: "tools" },
  { name: "Docker", category: "tools" },
  { name: "Vercel", category: "tools" },
];

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
