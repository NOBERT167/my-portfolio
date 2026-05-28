export const SITE = {
  name: "Nobert Langat",
  title: "Full-Stack Developer",
  description:
    "I craft performant web experiences with clean code and sharp design. Based in Nairobi, Kenya.",
  email: "nobertlangat@gmail.com",
  location: "Nairobi, Kenya",
  resumeUrl: "#",
  socials: {
    github: "https://github.com/NOBERT167",
    linkedin: "https://www.linkedin.com/in/langat-kipkoech-nobert-ab44661ba/",
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
    title: "Portfolio",
    description:
      "This portfolio — built with Next.js, Tailwind CSS, and Framer Motion. Features a dark-themed design system, smooth scroll animations, a categorized skills grid, and a timeline-based experience section.",
    tech: ["TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/NOBERT167/my-portfolio",
    live: "https://nobertdev.vercel.app",
    featured: true,
  },
  {
    title: "Devpulse",
    description:
      "Full-stack developer community platform where engineers can read and publish technical posts. Includes AI-assisted post generation via OpenAI GPT, role-based access with Clerk Auth, Cloudinary image handling, and a Docker-containerized backend deployed via Google Cloud Build CI/CD.",
    tech: [
      "TypeScript",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "OpenAI GPT",
      "Clerk Auth",
      "Cloudinary",
      "Docker",
      "Google Cloud Build",
      "CI/CD",
    ],
    github: "https://github.com/NOBERT167/devpulse",
    live: "https://dev-pulse-blond.vercel.app/",
    featured: true,
  },
  {
    title: "CodeGenius",
    description:
      "AI-powered scaffolding tool that reads Microsoft Business Central OData schemas and generates production-ready ASP.NET MVC code — reducing manual scaffolding time by 85%. Used internally at Greencom Enterprise Solutions.",
    tech: ["TypeScript", "Next.js", "Tailwind CSS", "ShadCN", "Framer Motion"],
    github: "",
    live: "https://mvcgenerator.vercel.app",
    featured: true,
  },
  {
    title: "react-spotlight-search",
    description:
      "Accessible command palette for React apps. Supports Cmd+K / Ctrl+K keyboard shortcuts, fuzzy search, and fully custom action handlers. Zero config to get started. Published on npm.",
    tech: ["TypeScript", "React", "npm"],
    github: "https://github.com/NOBERT167/react-spotlight-search",
    live: "https://www.npmjs.com/package/react-spotlight-search",
    featured: true,
  },
  {
    title: "react-confirm-dialog",
    description:
      "Drop-in replacement for window.confirm() that renders beautiful async modals instead. Fully customizable via a hook API, zero dependencies, and works with any React UI library.",
    tech: ["TypeScript", "React", "npm"],
    github: "https://github.com/NOBERT167/react-confirm-dialog",
    live: "https://www.npmjs.com/package/react-confirm-dialog",
    featured: true,
  },
  {
    title: "Audispot",
    description:
      "Car marketplace with full search, filtering, and responsive listing pages. Built with Next.js and Tailwind CSS, with a clean UI focused on fast browsing and easy navigation.",
    tech: ["TypeScript", "Next.js", "Tailwind CSS"],
    github: "https://github.com/NOBERT167/audispot",
    featured: true,
  },
  {
    title: "Seminar Management",
    description:
      "Enterprise frontend for managing seminar registrations and logistics, integrated with Microsoft Dynamics 365 Business Central via a custom ASP.NET Core API.",
    tech: ["TypeScript", "React", "C#", "ASP.NET Core"],
    github: "https://github.com/NOBERT167/Seminar-Management",
    featured: true,
  },
  {
    title: "EazySell",
    description:
      "Full-stack e-commerce platform for listing, browsing, and managing products. Built on the MERN stack with JWT authentication, product CRUD, and a responsive storefront.",
    tech: ["JavaScript", "MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/NOBERT167/EazySell",
    featured: true,
  },
  {
    title: "Seminar Management API",
    description:
      "RESTful API backend for the Seminar Management system. Handles registration logic and syncs data bidirectionally with Microsoft Dynamics 365 Business Central.",
    tech: ["C#", "ASP.NET Core", "Business Central"],
    github: "https://github.com/NOBERT167/Seminar-Management-API",
  },
  {
    title: "ShopYangu",
    description:
      "Shop and product management app with full CRUD, search, and shop-to-product association. Built with Next.js and React as a frontend-focused project.",
    tech: ["TypeScript", "Next.js", "React"],
    github: "https://github.com/NOBERT167/ShopYangu",
  },
  {
    title: "Hotel Booking API",
    description:
      "RESTful API for hotel room reservations. Covers room availability, booking creation, and cancellation, built with C# and ASP.NET Core following REST conventions.",
    tech: ["C#", "ASP.NET Core", "REST API"],
    github: "https://github.com/NOBERT167/HotelBookingAPI",
  },
  {
    title: "react-3d-icon",
    description:
      "Lightweight React component for rendering 3D-style icons inside web UIs. Configurable size, color, and depth. Published on npm.",
    tech: ["JavaScript", "React", "npm"],
    github: "https://github.com/NOBERT167/react-3d-icon",
    live: "https://www.npmjs.com/package/react-3d-icon",
  },
  {
    title: "Devpulse Blog",
    description:
      "Full-stack blogging app built on the MERN stack with user authentication, rich text posts, and a comment system. Served as the foundation for the more advanced Devpulse platform.",
    tech: ["JavaScript", "MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/NOBERT167/Blog-app",
  },
  {
    title: "ASP.NET Core + React Auth",
    description:
      "Full-stack authentication starter with user registration, login, JWT session handling, and protected routes. Frontend built with React, Vite, and Tailwind CSS.",
    tech: ["C#", "ASP.NET Core", "React", "Vite", "Tailwind CSS"],
    github: "https://github.com/NOBERT167/aaspnetcore-react-auth-app",
  },
  {
    title: "CodeGenius Backend",
    description:
      "Python service powering CodeGenius. Parses Business Central OData metadata and uses Jinja templating to generate structured ASP.NET MVC scaffolding on demand.",
    tech: ["Python", "Jinja", "Backend"],
    github: "",
  },
  {
    title: "Postly",
    description:
      "Social feed app where users can sign up, create posts, and comment on others. Demonstrates full-stack CRUD with React and Node.js.",
    tech: ["JavaScript", "React", "Node.js"],
    github: "https://github.com/NOBERT167/Postly",
  },
  {
    title: "REST API in C#",
    description:
      "Minimal REST API covering user registration and login with ASP.NET Core. A clean reference implementation of authentication endpoints in C#.",
    tech: ["C#", "ASP.NET Core", "REST API"],
    github: "https://github.com/NOBERT167/Rest-API-in-C-",
  },
  {
    title: "Fitness Zone",
    description:
      "A modern gym website landinga page with a sleek UI, modern UI/UX, animations and responsive design.",
    tech: ["React", "Framer Motion", "styled-components"],
    github: "https://github.com/NOBERT167/gym-website",
    live: "https://fitness-zone.netlify.app/",
  },
  {
    title: "Jokes App",
    description:
      "CRUD web app built with ASP.NET Core MVC where users can browse, add, edit, and delete jokes. A clean demonstration of the MVC pattern in C#.",
    tech: ["C#", "ASP.NET Core", "MVC"],
    github: "https://github.com/NOBERT167/Jokes-App",
  },
  {
    title: "Text Editor",
    description:
      "Desktop text editor built with C# and .NET. Supports file open, save, and basic text formatting — a practical Windows Forms project.",
    tech: ["C#", ".NET", "Desktop"],
    github: "https://github.com/NOBERT167/text-editor",
  },
  {
    title: "TenderSite",
    description:
      "Multi-page tender portal UI with a landing page, login flow, and a searchable tenders listing. Built with vanilla HTML, CSS, and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/NOBERT167/TenderSite",
    live: "https://nobert167.github.io/TenderSite/",
  },
  {
    title: "Afrinova",
    description:
      "Web project celebrating African innovation, built with clean HTML and CSS. Focuses on typography, layout, and visual storytelling.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/NOBERT167/Afrinova",
  },
  {
    title: "SAYS",
    description:
      "Website for the Saint Anthony Youth Service (Kericho Diocese). Covers events, announcements, and community information for the diocese's youth wing.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/NOBERT167/SAYS",
  },
  {
    title: "ShopYangu DB",
    description:
      "Mock REST backend for the ShopYangu project, powered by JSON Server. Lets frontend developers prototype and test shop management UIs without a real backend.",
    tech: ["JavaScript", "Node.js", "JSON Server"],
    github: "https://github.com/NOBERT167/shop-yanguDB",
  },
];

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
  link?: string;
}

export const EXPERIENCES: Experience[] = [
  {
    role: "Full-Stack Developer",
    company: "Greencom Enterprise Solutions",
    location: "Nairobi, Kenya",
    period: "June 2024 — Present",
    highlights: [
      "Modernized legacy ASP.NET Framework MVC applications by migrating to ASP.NET Core + React.js (TypeScript, Tailwind CSS, ShadCN), improving maintainability, performance, and user experience.",
      "Designed and built secure, scalable RESTful APIs using ASP.NET Core and Node.js, enforcing OWASP security standards across all endpoints.",
      "Built an AI-powered OData MVC code generator that automates production-ready ASP.NET MVC scaffolding from Business Central schemas — cutting development time by 85%.",
      "Maintained legacy ASP.NET MVC portals and jQuery-based frontends, resolving bugs and shipping incremental feature improvements.",
      "Collaborated in cross-functional teams using Git/GitHub workflows, conducting code reviews and managing CI/CD pipelines via Jenkins and GitHub Actions.",
      "Developed and integrated enterprise web portals — Employee Self-Service, E-Recruitment, E-Procurement, and CRM — with Microsoft Dynamics 365 Business Central ERP, serving hundreds of end-users across multiple client organizations.",
    ],
  },
  {
    role: "ICT Technician",
    company: "Holy Trinity Kimatisio Parish",
    location: "Bomet, Kenya",
    period: "May 2023 — June 2024",
    highlights: [
      "Developed a document management database system to digitize records, improving retrieval efficiency and reducing paper-based processes.",
      "Designed digital assets for parish events; provided day-to-day ICT support including hardware troubleshooting and software configuration.",
    ],
  },
  {
    role: "Web Developer & Designer",
    company: "Saint Anthony Youth Service (SAYS)",
    location: "Kericho, Kenya",
    period: "Oct 2023 — June 2024",
    highlights: [
      "Developed a responsive website for the diocese's youth department.",
      "Designed event posters and flyers for various initiatives.",
    ],
    link: "https://alphadev13-cdkstanthonyyouthservice.mdbgo.io/",
  },
  {
    role: "ICT Intern",
    company: "Bomet University College",
    location: "Bomet, Kenya",
    period: "Sept 2022 — Dec 2022",
    highlights: [
      "Contributed to an open-source GitHub project, gaining hands-on collaborative version control experience.",
      "Supported web development, network optimization, and server management across the university's IT environment.",
    ],
  },
];

export const SKILLS = [
  // Languages
  { name: "TypeScript", category: "language" },
  { name: "JavaScript", category: "language" },
  { name: "C#", category: "language" },
  { name: "Python", category: "language" },

  // Frontend
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "ShadCN", category: "frontend" },
  { name: "Framer Motion", category: "frontend" },
  { name: "TanStack Query", category: "frontend" },
  { name: "Redux", category: "frontend" },
  { name: "RTK Query", category: "frontend" },
  { name: "Zustand", category: "frontend" },
  { name: "jQuery", category: "frontend" },
  { name: "Bootstrap", category: "frontend" },

  // Backend
  { name: "Node.js", category: "backend" },
  { name: "ASP.NET Core", category: "backend" },
  { name: "ASP.NET MVC", category: "backend" },
  { name: "Express", category: "backend" },
  { name: "REST APIs", category: "backend" },
  { name: "GraphQL", category: "backend" },
  { name: "OData", category: "backend" },

  // Databases
  { name: "SQL Server", category: "database" },
  { name: "PostgreSQL", category: "database" },
  { name: "MySQL", category: "database" },
  { name: "MongoDB", category: "database" },
  { name: "SQLite", category: "database" },

  // Tools
  { name: "Git", category: "tools" },
  { name: "Figma", category: "tools" },
  { name: "Vite", category: "tools" },
  { name: "VS Code", category: "tools" },
  { name: "Visual Studio", category: "tools" },

  // DevOps & Cloud
  { name: "GitHub Actions", category: "devops" },
  { name: "Jenkins", category: "devops" },
  { name: "Docker", category: "devops" },
  { name: "Vercel", category: "devops" },
  { name: "AWS", category: "devops" },
  { name: "Azure", category: "devops" },

  // Testing
  { name: "Vitest", category: "testing" },
  { name: "Jest", category: "testing" },
];

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
