/**
 * Add/edit projects here only — the Projects grid and detail pages
 * read from this file, so you never touch component code to update content.
 *
 * screenshots: put image files in /public/projects/<slug>/ and reference
 * them as "/projects/<slug>/1.png" etc. Placeholder paths are set below —
 * swap them once you export real screenshots from your repos.
 */
export const projects = [
  {
    slug: "finai",
    name: "FinAI",
    badge: "Django",
    tagline: "Finance Management System",
    description:
      "A finance management platform for individual users and companies to manage budgets, expenses, transactions, and financial records.",
    longDescription:
      "FinAI is a full-stack finance management system designed to help individuals and businesses manage their money, including income, expenses, transactions, budgets, and financial activities. It supports individual users and multi-tenant companies with role-based access and company-wise data isolation. The system also includes an AI service for financial analysis, spending insights, and smart transaction category suggestions using embeddings, semantic search, and ChromaDB.",
    tech: ["React.js", "Django", "DRF", "PostgreSQL", "FastAPI", "JWT", "Celery", "Redis", "ChromaDB", "Docker", "AWS EC2", "Nginx"],
    repo: "https://github.com/Faheem-Shan/FinAI",
    demo: "",
    screenshots: [
      "/projects/finai/1.png",
      "/projects/finai/2.jpeg",
      "/projects/finai/3.jpeg",
    ],
  },
  {
    slug: "talent-tracking",
    name: "Talent Tracking",
    badge: "Python",
    tagline: "AI/ML Web Application",
    description:
      "A recruitment platform supporting resume uploads, candidate screening, and job matching workflows.",
    longDescription:
      "Talent Tracking is a recruitment platform that connects candidates and companies through job applications, aptitude assessments, resume management, and interview tracking. It uses NLP-based resume analysis, skill extraction, and TF-IDF with Cosine Similarity to match candidate resumes with job requirements, while admins manage company verification and platform management.",
   tech: ["React.js", "FastAPI", "PostgreSQL", "JWT", "NLP", "TF-IDF", "Cosine Similarity", "WebSocket"],
    repo: "https://github.com/Faheem-Shan/Talent_Tracking_V2",
    demo: "",
    screenshots: [
      "/projects/talent-tracking/1.png",
      "/projects/talent-tracking/2.png",
      "/projects/talent-tracking/3.png",
      "/projects/talent-tracking/4.png",
      "/projects/talent-tracking/5.png",
    ],
  },
  {
    slug: "bookstore",
    name: "Bookstore",
    badge: "React",
    tagline: "E-commerce Web Application",
    description:
      "A responsive React.js interface for browsing, searching, and ordering books, with a full admin dashboard.",
    longDescription:
      "A full-stack e-commerce platform for purchasing books online, allowing customers to browse and search books, manage their cart and wishlist, place orders, and make secure online payments through Razorpay. The platform also includes an admin panel for managing books, categories, inventory, users, and orders, with JWT authentication and email-based password recovery.",
    tech: ["React.js", "Django", "DRF", "PostgreSQL", "JWT", "Axios", "Razorpay"],
    repo: "https://github.com/Faheem-Shan/BOOKSTORE-1",
    demo: "",
    screenshots: [
      "/projects/bookstore/1.png",
      "/projects/bookstore/2.png",
      "/projects/bookstore/3.png",
    ],
  },
  {
    slug: "scrapcycle",
    name: "ScrapCycle Platform",
    badge: "React",
    tagline: "Recycling & Reuse Platform",
    description:
      "A platform promoting responsible scrap recycling and reuse.",
    longDescription:
      "ScrapCycle is a full-stack scrap recycling platform that connects users with scrap collection agencies to browse scrap materials and prices, submit pickup requests, and track their collections. Agencies manage scrap listings and pickup requests, while admins manage users, agencies, categories, complaints, and platform activities. The platform also includes JWT-based role-based access and an AI-powered ScrapBot using Google Gemini for scrap price information, price estimation, pickup status, and recycling guidance.",
    tech: ["React.js", "Django", "DRF", "PostgreSQL", "JWT", "Google Gemini", "Celery", "Redis"],
    repo: "https://github.com/Faheem-Shan/Scrap_Cycle",
    demo: "",
    screenshots: ["/projects/scrapcycle/1.png",
      "/projects/scrapcycle/2.png",
      "/projects/scrapcycle/3.png",
      "/projects/scrapcycle/4.png",
      "/projects/scrapcycle/5.png"
    ],
  },
  {
    slug: "voxintel",
    name: "VoxIntel",
    badge: "Python",
    tagline: "AI-Powered Competitive Marketing Intelligence Platform",
    description:
      "A multi-tenant competitive intelligence platform that helps businesses discover competitors and analyze their digital marketing presence across web, social, and advertising channels.",
    longDescription:
      "VOXINTEL is a multi-tenant AI-powered marketing intelligence platform that helps businesses discover and analyze competitors, websites, Instagram activity, and Google Ads to understand their market presence. It uses web crawling and ETL pipelines to collect and process data, then generates competitor comparisons, marketing insights, and recommendations using AI-powered analysis.",
    tech: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "Redis",
      "BeautifulSoup",
      "ETL",
      "Google Ads",
      "SerpApi",
      "AI Agents",
      "REST API",
      "Multi-Tenant SaaS",
    ],
    frontendRepo: "https://github.com/Adil-Aadhi/Group-project-frontent-",
    backendRepo: "https://github.com/Aiman-xo/Group-project",
    demo: "",
    screenshots: [
      "/projects/voxintel/1.png",
      "/projects/voxintel/2.png",
      "/projects/voxintel/3.png",
      "/projects/voxintel/4.png",
    ],
  },
  // {
  //   slug: "portfolio-v1",
  //   name: "Personal Portfolio (v1)",
  //   badge: "React",
  //   tagline: "Responsive Portfolio Site",
  //   description:
  //     "An earlier portfolio site built with HTML, CSS, JavaScript & Bootstrap.",
  //   longDescription:
  //     "The previous version of this portfolio — kept here as a project entry to show iteration and growth.",
  //   tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  //   repo: "https://github.com/Faheem-Shan/portfolio-v1",
  //   demo: "",
  //   screenshots: ["/projects/portfolio-v1/1.png"],
  // },
];
