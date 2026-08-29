export const SITE = {
  name: "Nobert Langat",
  title: "Full-Stack Developer",
  description:
    "I craft performant web experiences with clean code and sharp design. Based in Nairobi, Kenya.",
  email: "nobertlangat@gmail.com",
  location: "Nairobi, Kenya",
  resumeUrl: "/resume.pdf",
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
  docs?: string;
  featured?: boolean;
  image?: string;
}

export const PROJECTS: Project[] = [
 {
    title: "Judiciary of Kenya Supplier Portal",
    description:
      "A production e-procurement platform that enables suppliers to discover tenders, submit bids, upload documents, provide financial responses, manage tender security, and track procurement activities.",
    tech: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "RTK Query",
      "Tailwind CSS",
      "ASP.NET Core",
      "C#",
      "REST API",
      
      "OData",
      "SOAP",
    ],
    github: "",
    live: "https://supplier.judiciary.go.ke/",
    featured: true,
    image: "/projects/supplier-new.png",
  },
  {
    title: "Judiciary of Kenya Contractors Portal",
    description:
      "A contract management platform for approved contractors and suppliers to manage active contracts, payment requests, instructions, amendments, extensions, approvals, practical completion, and defect workflows.",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "ASP.NET Core",
      "C#",
      "REST API",
      "SQL Server",
      
      "OData",
      "SOAP",
    ],
    github: "",
    live: "https://contractors.judiciary.go.ke/",
    featured: true,
    image: "/projects/contractor-new.png",
  },
  {
    title: "NUPEA Supplier Portal",
    description:
      "A supplier management and procurement portal supporting supplier registration, profile management, document submission, procurement opportunities, and enterprise system integration.",
    tech: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "ASP.NET Core",
      "C#",
      "REST API",
      
      "OData",
      "SOAP",
    ],
    github: "",
    live: "https://suppliers.nuclear.co.ke:8086/",
    featured: true,
    image: "/projects/nupea-supplier-new.png",
  },
  {
    title: "PPRA E-Recruitment Portal",
    description:
      "A responsive recruitment platform for publishing vacancies and managing candidate applications, including job search, filtering, pagination, validation, and applicant workflows.",
    tech: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "ASP.NET Core",
      "REST API",
      "SQL Server",
    ],
    github: "",
    live: "https://erp.ppra.go.ke/",
    featured: true,
    image: "/projects/ppra-recruitment.png",
  },
  {
    title: "DevPulse",
    description:
      "An AI-powered developer community platform for publishing articles, discussions, comments, search, media management, and intelligent content creation.",
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Clerk",
      "OpenAI API",
      "Cloudinary",
      "Docker",
      "Google Cloud Build",
    ],
    github: "",
    live: "https://devpulse.blog/",
    featured: true,
    image: "/projects/devpulse-new.png",
  },
  {
    title: "AI-Powered OData MVC Code Generator",
    description:
      "An AI-powered development tool that generates ASP.NET MVC, API, frontend, and backend code from Microsoft Dynamics 365 Business Central OData schemas, reducing repetitive development work by approximately 85%.",
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "OpenAI API",
      "OData",   
      "ASP.NET MVC",
      "C#",
    ],
    github: "",
    live: "https://mvcgenerator.vercel.app/",
    featured: true,
    image: "/projects/mvc-generator-new.png",
  },
  {
    title: "Employee Self-Service Platform",
    description:
      "An enterprise employee self-service platform supporting leave, claims, imprest, training, payment requests, salary advances, and other internal HR and finance workflows.",
    tech: [
      "React",
      "TypeScript",
      "ASP.NET Core",
      "C#",
      "SQL Server",
      "REST API",     
      "OData",
      "SOAP",
      "M-Pesa Daraja API",
    ],
    github: "",
    live: "",
    featured: false,
    image: "",
  },
  {
    title: "AudiSpot254",
    description:
      "An e-commerce and automotive platform for browsing Audi vehicle parts, accessories, merchandise, and blog content with integrated digital payment workflows.",
    tech: [
      "React",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Paystack",
      "REST API",
    ],
    github: "",
    live: "",
    featured: false,
    image: "",
  },
  {
    title: "React Spotlight Search",
    description:
      "A reusable React package for implementing fast and customizable spotlight-style search experiences in web applications.",
    tech: ["React", "TypeScript", "NPM", "JavaScript"],
    github: "",
    live: "https://www.npmjs.com/package/@nobertdev/react-spotlight-search",
    docs: "https://github.com/NOBERT167/react-spotlight#readme",
    featured: false,
    image: "/projects/react-spotlight-search-new.png",
  },
  {
    title: "React Confirm Dialog",
    description:
      "A reusable and customizable React confirmation dialog package designed for confirmation workflows and destructive user actions.",
    tech: ["React", "TypeScript", "NPM", "JavaScript"],
    github: "",
    live: "https://www.npmjs.com/package/@nobertdev/react-confirm-dialog",
    docs: "https://github.com/NOBERT167/react-confirm-dialog#readme",
    featured: false,
    image: "/projects/react-confirm-new.png",
  },
  {
    title: "React 3D Icons",
    description:
      "A reusable React component library providing 3D-style icons for modern web interfaces and interactive applications.",
    tech: ["React", "TypeScript", "NPM", "JavaScript"],
    github: "",
    live: "https://www.npmjs.com/package/@nobertdev/react-3d-icons",
    docs: "https://github.com/NOBERT167/react-3d-icons#readme",
    featured: false,
    image: "/projects/react-3d-new.png",
  },
  {
    title: "Portfolio",
    description:
      "This portfolio is built with Next.js, Tailwind CSS, and Framer Motion. It features an editorial design system, an interactive product architecture visual, a project archive, and accessible light and dark themes.",
    tech: ["TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/NOBERT167/my-portfolio",
    live: "https://nobertdev.vercel.app",
    featured: true,
    image: "",
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
    title: "ShopYangu",
    description:
      "Shop and product management app with full CRUD, search, and shop-to-product association. Built with Next.js and React as a frontend-focused project.",
    tech: ["TypeScript", "Next.js", "React"],
    github: "https://github.com/NOBERT167/ShopYangu",
    image: "/projects/shop-yangu.png",
    live: "https://shop-yangu-phi.vercel.app",
    featured: false,
  },
  {
    title: "Fitness Zone",
    description:
      "A modern gym landing page with a sleek interface, purposeful motion, and a responsive experience across devices.",
    tech: ["React", "Framer Motion", "styled-components"],
    github: "https://github.com/NOBERT167/gym-website",
    live: "https://fitness-zone.netlify.app/",
    image: "/projects/fitness-new.png",
    featured: false,
  },
  {
    title: "Afrinova",
    description:
      "Web project celebrating African innovation, built with clean HTML and CSS. Focuses on typography, layout, and visual storytelling.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "",
    live: "https://nobert167.github.io/Afrinova",
    image: "/projects/afrinova-new.png",
    featured: false,
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
    period: "June 2024 - Present",
    highlights: [
      "Modernized legacy ASP.NET Framework MVC applications by migrating to ASP.NET Core + React.js (TypeScript, Tailwind CSS, ShadCN), improving maintainability, performance, and user experience.",
      "Designed and built secure, scalable RESTful APIs using ASP.NET Core and Node.js, enforcing OWASP security standards across all endpoints.",
      "Built an AI-powered OData MVC code generator that automates production-ready ASP.NET MVC scaffolding from Business Central schemas, cutting development time by 85%.",
      "Maintained legacy ASP.NET MVC portals and jQuery-based frontends, resolving bugs and shipping incremental feature improvements.",
      "Collaborated in cross-functional teams using Git/GitHub workflows, conducting code reviews and managing CI/CD pipelines via Jenkins and GitHub Actions.",
      "Developed and integrated enterprise web portals, including Employee Self-Service, E-Recruitment, E-Procurement, and CRM, with Microsoft Dynamics 365 Business Central ERP, serving hundreds of end-users across multiple client organizations.",
    ],
  },
  {
    role: "ICT Technician",
    company: "Holy Trinity Kimatisio Parish",
    location: "Bomet, Kenya",
    period: "May 2023 - June 2024",
    highlights: [
      "Developed a document management database system to digitize records, improving retrieval efficiency and reducing paper-based processes.",
      "Designed digital assets for parish events; provided day-to-day ICT support including hardware troubleshooting and software configuration.",
    ],
  },
  {
    role: "Web Developer & Designer",
    company: "Saint Anthony Youth Service (SAYS)",
    location: "Kericho, Kenya",
    period: "Oct 2023 - June 2024",
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
    period: "Sept 2022 - Dec 2022",
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
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Proof", href: "/#testimonials" },
  { label: "Experience", href: "/#experience" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];
