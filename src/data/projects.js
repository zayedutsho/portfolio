const projects = [
  {
    id: "spill-rx",
    title: "Spill Rx",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&auto=format&fit=crop&q=80",

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
