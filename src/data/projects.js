const projects = [
  {
    id: "spill-rx",
    title: "Spill Rx",
    image: "https://i.ibb.co/SwXQYtHP/Screenshot-2026-07-05-151316.png",
    description:
      "A full-stack healthcare community platform where users can anonymously share medication experiences, discuss treatments, and connect with others in a secure environment.",

    technologies: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
    ],

    live: "https://spill-rx.com",
    github: "https://github.com/zayedutsho",

    challenges: [
      "Building secure authentication and authorization",
      "Designing scalable PostgreSQL schemas",
      "Managing anonymous community interactions",
      "Optimizing application performance",
    ],

    improvements: [
      "AI-powered medication recommendations",
      "Push notifications",
      "Mobile application",
      "Advanced analytics dashboard",
    ],
  },

  {
    id: "gearup-backend",
    title: "GearUp Backend API",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1200&auto=format&fit=crop&q=80",
    description:
      "A production-ready REST API for a sports and outdoor rental platform with customer, provider, and admin roles, secure authentication, Stripe payments, and role-based authorization.",
    technologies: [
      "Node.js",
      "Express",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Stripe",
      "JWT",
      "Zod",
    ],
    live: "https://gearup-backend-sage.vercel.app/",
    github: "https://github.com/zayedutsho/gearup-backend.git",
    challenges: [
      "Designing multi-role access control",
      "Implementing Stripe checkout and webhook verification",
      "Managing rental lifecycle workflows",
      "Ensuring secure token-based authentication",
    ],
    improvements: [
      "Admin analytics dashboard",
      "Real-time notification system",
      "Mobile-friendly provider portal",
      "Expanded review moderation tools",
    ],
    features: [
      "JWT access and refresh token authentication",
      "Cookie and bearer token support",
      "Role-based authorization for customers, providers, and admins",
      "Stripe checkout and payment verification",
    ],
  },

  {
    id: "contest-arena",
    title: "Contest Arena",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200&auto=format&fit=crop&q=80",

    description:
      "A competitive programming contest platform where users can create, join, and manage coding contests with real-time updates.",

    technologies: ["React", "Firebase", "Tailwind CSS", "JavaScript"],

    live: "https://contest-arena-ih.web.app",
    github: "https://github.com/zayedutsho",

    challenges: [
      "Firebase authentication",
      "Contest registration workflow",
      "Responsive dashboard",
      "Real-time contest updates",
    ],

    improvements: [
      "Leaderboard analytics",
      "Online code editor",
      "Contest discussion forum",
      "Admin insights dashboard",
    ],
  },

  {
    id: "fresh-ness",
    title: "Fresh-Ness",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&auto=format&fit=crop&q=80",

    description:
      "A grocery and inventory management platform that helps users track products, monitor expiry dates, and reduce food waste.",

    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],

    live: "https://fresh-ness.vercel.app",
    github: "https://github.com/zayedutsho",

    challenges: [
      "Inventory management logic",
      "CRUD optimization",
      "MongoDB schema design",
      "Responsive user interface",
    ],

    improvements: [
      "Barcode scanner",
      "Shopping list generation",
      "AI expiry prediction",
      "Mobile app",
    ],
    features: [
      "JWT Authentication",
      "Role Based Dashboard",
      "Responsive Design",
      "Payment Integration",
    ],
  },
];

export default projects;
