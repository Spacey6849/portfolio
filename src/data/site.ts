export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },

];

export const rotatingRoles = [
  "Embedded Systems Developer",
  "IoT Engineer",
  "Full-Stack Developer",
] as const;

export const aboutHighlights = [
  {
    title: "Hardware + Software Integration",
    description:
      "I bridge physical systems with robust software, building reliable embedded products that connect sensors, firmware, and web interfaces.",
  },
  {
    title: "Problem Solving Mindset",
    description:
      "From debugging low-level microcontroller behavior to designing scalable APIs, I enjoy solving complex engineering challenges end-to-end.",
  },
  {
    title: "Hackathon-Driven Execution",
    description:
      "I thrive in fast-paced builds where I can prototype, validate, and deliver impactful solutions for real-world use cases.",
  },
];

export const skillGroups = [
  {
    title: "Electronics & Embedded",
    skills: [
      { name: "ESP32", level: 92 },
      { name: "Arduino", level: 90 },
      { name: "Sensors & Interfacing", level: 88 },
    ],
  },
  {
    title: "Programming",
    skills: [
      { name: "C", level: 90 },
      { name: "C++", level: 90 },
      { name: "Python", level: 87 },
      { name: "JavaScript", level: 86 },
      { name: "TypeScript", level: 86 },
    ],
  },
  {
    title: "Web & Backend",
    skills: [
      { name: "Next.js", level: 89 },
      { name: "Node.js", level: 84 },
      { name: "REST APIs", level: 86 },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", level: 82 },
      { name: "MongoDB", level: 80 },
    ],
  },
];

const projectsData = [
  // ─── Featured on homepage (first 3) ───
  {
    title: "Smart Well Management",
    stack: ["IoT", "ESP32", "Next.js", "Supabase", "AI"],
    summary:
      "Smart well management with EcoWell AI—real-time monitoring, secure access, and interactive maps for groundwater insights. Built with Next.js, Supabase, and modern web tech.",
    details:
      "Designed and deployed IoT sensor nodes for well water-level and quality monitoring, built interactive map-based dashboards, and integrated AI-driven alerts for predictive maintenance and resource allocation.",
    github: "https://github.com/Spacey6849/Smart-Well-Management",
    live: "https://ecowellai.vercel.app/maps",
    gradient: "from-cyan-500/20 via-blue-500/20 to-purple-500/20",
    icon: "💧",
    role: "Full-Stack & IoT Engineer",
    cardImage: "/projects/SmartWellManagement/Map&Dashboard.png",
    gallery: [
      "/projects/SmartWellManagement/Map&Dashboard.png",
      "/projects/SmartWellManagement/analytics.png",
    ],
    duration: "2025",
    highlights: [
      "Built IoT sensor network for real-time well water monitoring",
      "Developed map-based visualization dashboard with Next.js",
      "Integrated AI algorithms for predictive water analytics",
      "Deployed on Vercel with Supabase backend for scalability",
      "Enabled urban water resource optimization for city planners",
    ],
    features: [
      "Real-time monitoring",
      "Map visualization",
      "AI predictions",
      "Alert system",
    ],
  },
  {
    title: "CropGuard",
    stack: ["Python", "FastAPI", "Supabase", "React Native", "AI"],
    summary:
      "A web & mobile app that helps farmers identify crop diseases instantly using their phone camera — and tells them how to fix it in simple, farmer-friendly language.",
    details:
      "Built a cross-platform app with camera integration that sends leaf images to a FastAPI backend running a fine-tuned plant disease detection model. Results are stored in Supabase with treatment recommendations in accessible language.",
    github: "https://github.com/Spacey6849/CropGuard",
    live: "https://crop-guard-theta.vercel.app",
    gradient: "from-lime-500/20 via-green-500/20 to-emerald-500/20",
    icon: "🌾",
    role: "Full-Stack & ML Engineer",
    cardImage: "/projects/CropGuard/LandingPage.png",
    gallery: [
      "/projects/CropGuard/LandingPage.png",
      "/projects/CropGuard/Dashboard.png",
      "/projects/CropGuard/chat.png",
      "/projects/CropGuard/history.png",
      "/projects/CropGuard/Resources.png",
      "/projects/CropGuard/Help.png",
      "/projects/CropGuard/profile.png",
    ],
    duration: "2025",
    highlights: [
      "Fine-tuned image classification model for crop disease detection",
      "Built FastAPI backend with Supabase edge functions",
      "Designed treatment recommendations in farmer-friendly language",
      "Deployed web app on Vercel with camera capture support",
      "Unlike generic apps, provides actionable fix instructions",
    ],
    features: [
      "AI image diagnosis",
      "Treatment guidance",
      "Camera capture",
      "Scan history",
    ],
  },
  {
    title: "Smart Fingerprint Attendance",
    stack: ["ESP32", "PHP", "MySQL", "PHPMailer"],
    summary:
      "A complete dual biometric attendance system with hardware integration, web interface, and automated email reporting — supporting both local network and mobile access.",
    details:
      "Built a dual fingerprint scanner module connected to ESP32 for biometric capture, with a PHP web dashboard hosted via XAMPP for attendance management, MySQL storage, and PHPMailer integration for automated report emails.",
    github: "https://github.com/Spacey6849/Smart-Fingerprint-Attendance-system",
    gradient: "from-purple-500/20 via-pink-500/20 to-rose-500/20",
    icon: "🔐",
    role: "Embedded Systems & Full-Stack Developer",
    cardImage: "/projects/SmartDualFingerprintAttendanceSystem/SmartDualFingerprintAttendanceSystem.jpg",
    gallery: [
      "/projects/SmartDualFingerprintAttendanceSystem/SmartDualFingerprintAttendanceSystem.jpg",
      "/projects/SmartDualFingerprintAttendanceSystem/462628637-76c746f6-4fb3-4f1e-b5f1-9fcd44bbceb0.png",
      "/projects/SmartDualFingerprintAttendanceSystem/462628737-807684f2-7f34-41ca-bccb-cbc7dc85fb40.png",
      "/projects/SmartDualFingerprintAttendanceSystem/462628762-252ea740-a55b-4bb2-b64f-65e6ea208dbf.png",
    ],
    duration: "2024",
    highlights: [
      "Designed dual fingerprint scanner hardware module with ESP32",
      "Built PHP web dashboard with XAMPP for attendance management",
      "Integrated MySQL database for reliable attendance storage",
      "Automated email reports via PHPMailer for daily summaries",
      "Supports both local network and mobile-responsive access",
    ],
    features: [
      "Biometric capture",
      "Web dashboard",
      "Email reports",
      "Mobile access",
    ],
  },

  // ─── Additional projects ───
  {
    title: "Smart Waste Management",
    stack: ["8051", "ESP32", "Supabase", "Next.js"],
    summary:
      "An IoT-based smart waste management system using 8051 microcontroller and ESP32, with a web app dashboard, Supabase database, and email alerts for bin overflow.",
    details:
      "Engineered sensor-equipped waste bins using 8051 and ESP32 microcontrollers that report fill levels in real-time to a Supabase-backed web dashboard with map visualization and automated email overflow alerts.",
    github: "https://github.com/Spacey6849/Smart-Waste-Management",
    live: "https://binlinkai.netlify.app/maps",
    gradient: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
    icon: "♻️",
    role: "IoT & Full-Stack Developer",
    cardImage: "/projects/BinLinkAI/LandingPage.png",
    gallery: [
      "/projects/BinLinkAI/LandingPage.png",
      "/projects/BinLinkAI/Map&Dashboard.png",
      "/projects/BinLinkAI/Analytics.png",
      "/projects/BinLinkAI/Chatbot.png",
      "/projects/BinLinkAI/MarkerCard.png",
      "/projects/BinLinkAI/setup.png",
    ],
    duration: "2025",
    highlights: [
      "Programmed 8051 and ESP32 microcontrollers for waste bin sensors",
      "Built real-time fill-level monitoring with map visualization",
      "Integrated Supabase for cloud storage and real-time sync",
      "Automated email alerts for bin overflow notifications",
      "Deployed web dashboard on Netlify for city-wide monitoring",
    ],
    features: [
      "Fill-level monitoring",
      "Map dashboard",
      "Email alerts",
      "Real-time sync",
    ],
  },
  {
    title: "WellnessAI",
    stack: ["Next.js", "AI", "Google Meet API", "Supabase"],
    summary:
      "An AI-assisted mental wellness platform for curated resources, community support, and seamless virtual therapy session scheduling with Google Meet integration.",
    details:
      "Developed a full-stack mental health platform with role-aware interactions (admin/user modes), AI-powered resource curation, community chat, and Google Meet integration for scheduling and joining virtual therapy sessions.",
    github: "https://github.com/Spacey6849/WellnessAI",
    gradient: "from-violet-500/20 via-purple-500/20 to-fuchsia-500/20",
    icon: "🧠",
    role: "Full-Stack Developer",
    cardImage: "/projects/WellnessAI/LandingPage.png",
    gallery: [
      "/projects/WellnessAI/LandingPage.png",
      "/projects/WellnessAI/Dashboard1.png",
      "/projects/WellnessAI/Dashboard2.png",
      "/projects/WellnessAI/Dashboard3.png",
      "/projects/WellnessAI/Chatmode.png",
      "/projects/WellnessAI/Speechmode.png",
      "/projects/WellnessAI/Community.png",
      "/projects/WellnessAI/Resources.png",
      "/projects/WellnessAI/booking1.png",
      "/projects/WellnessAI/booking2.png",
    ],
    duration: "2025",
    highlights: [
      "Built AI-assisted resource curation for mental wellness",
      "Integrated Google Meet API for virtual therapy scheduling",
      "Implemented role-based access for admin and user modes",
      "Designed supportive community discussion features",
      "Deployed on Vercel with Supabase authentication",
    ],
    features: [
      "AI resource curation",
      "Therapy scheduling",
      "Community support",
      "Role-based access",
    ],
  },
  {
    title: "Exam Autograder",
    stack: ["PHP", "Python", "MySQL", "OCR", "HTML/CSS/JS"],
    summary:
      "An OCR-based examination auto-grading system that scans answer sheets and grades them automatically using image processing and text recognition.",
    details:
      "Built an end-to-end auto-grading pipeline: PHP web interface for uploading scanned answer sheets, Python OCR engine for text extraction and answer matching, and MySQL database for storing results and generating grade reports.",
    github: "https://github.com/Spacey6849/exam-autograder",
    gradient: "from-amber-500/20 via-orange-500/20 to-red-500/20",
    icon: "📝",
    role: "Full-Stack Developer",
    duration: "2025",
    highlights: [
      "Built OCR pipeline in Python for answer sheet text extraction",
      "Designed PHP web interface for bulk answer sheet uploads",
      "Implemented auto-matching algorithm for grading accuracy",
      "Stored results in MySQL with exportable grade reports",
      "Supported multiple answer sheet formats and layouts",
    ],
    features: [
      "OCR text extraction",
      "Auto grading",
      "Bulk uploads",
      "Grade reports",
    ],
  },
  {
    title: "LogExplain",
    stack: ["Python", "FastAPI", "AI", "REST API"],
    summary:
      "A human-readable log interpretation API that translates complex system logs into plain English explanations for faster debugging.",
    details:
      "Building an AI-powered API service that ingests raw server, application, or system logs and returns clear, human-readable explanations to help developers diagnose issues faster without deep log expertise.",
    github: "https://github.com/Spacey6849/LogExplain",
    gradient: "from-slate-500/20 via-zinc-500/20 to-neutral-500/20",
    icon: "📋",
    role: "Backend Developer",
    cardImage: "/projects/LogExplainAPI/LandingPage.png",
    gallery: [
      "/projects/LogExplainAPI/LandingPage.png",
    ],
    duration: "2026",
    wip: true,
    highlights: [
      "Designing AI pipeline for log-to-English translation",
      "Building FastAPI REST endpoints for log ingestion",
      "Supporting multiple log formats (syslog, JSON, plaintext)",
      "Creating context-aware explanations for error chains",
      "Planning SDK integrations for popular frameworks",
    ],
    features: [
      "Log interpretation",
      "REST API",
      "Multi-format support",
      "AI explanations",
    ],
  },
  {
    title: "Patient Monitoring System",
    stack: ["ESP8266", "React Native", "Next.js", "Supabase"],
    summary:
      "Real-time patient vitals monitoring with ESP8266 hardware, React Native mobile app, Next.js web dashboard, and Supabase backend with alerts and geo-tracking.",
    details:
      "Developing an end-to-end remote patient monitoring system: ESP8266-based wearable sensor nodes stream vitals to a Supabase backend, displayed on both a React Native mobile app and a Next.js web dashboard with geo-tracking and threshold-based alerts.",
    github: "https://github.com/",
    gradient: "from-red-500/20 via-rose-500/20 to-pink-500/20",
    icon: "🏥",
    role: "Full-Stack & IoT Engineer",
    cardImage: "/projects/PalliativeCare/LandingPage.png",
    gallery: [
      "/projects/PalliativeCare/LandingPage.png",
      "/projects/PalliativeCare/Map.png",
    ],
    duration: "2026",
    wip: true,
    highlights: [
      "Designing ESP8266 wearable sensor for heart rate & SpO2",
      "Building React Native mobile app for patient monitoring",
      "Creating Next.js dashboard for hospital staff views",
      "Integrating Supabase real-time for instant alert delivery",
      "Adding geo-tracking for emergency location sharing",
    ],
    features: [
      "Real-time vitals",
      "Mobile + web apps",
      "Alert system",
      "Geo-tracking",
    ],
  },
  {
    title: "Orion — Personal AI Assistant",
    stack: ["Python", "AI", "LLM", "Automation"],
    summary:
      "A personal AI assistant built for my own daily workflow — automating tasks, managing context, and providing intelligent responses.",
    details:
      "Developing a custom AI assistant tailored to my personal workflow, integrating LLM capabilities with task automation, context management, and intelligent decision support for everyday productivity.",
    github: "https://github.com/",
    gradient: "from-indigo-500/20 via-blue-500/20 to-sky-500/20",
    icon: "🤖",
    role: "AI Developer",
    duration: "2026",
    wip: true,
    highlights: [
      "Designing personal AI with custom personality and context",
      "Integrating LLM for natural language understanding",
      "Building task automation pipelines for daily workflows",
      "Creating memory system for persistent conversation context",
      "Planning voice interface and smart home integration",
    ],
    features: [
      "LLM integration",
      "Task automation",
      "Context memory",
      "Personal workflow",
    ],
  },
];

/** First 3 projects shown on the homepage */
export const featuredProjects = projectsData.slice(0, 3);

/** All projects shown on the /projects page */
export const allProjects = projectsData;

export const experiences = [
  {
    company: "PTWO Technologies",
    role: "Frontend Developer",
    duration: "Sep 2025 – Nov 2025",
    description: "Developed responsive, high-performance user interfaces by converting Figma designs into clean, component-based React code.",
  },
  {
    company: "Lenovo",
    role: "Artificial Intelligence Intern",
    duration: "Jun 2025 – Jul 2025",
    location: "Goa, India",
    description: "Built NLP pipelines and a functional chatbot using Botpress, applying machine learning techniques to real-world AI challenges.",
  },
];

export const education = [
  {
    institution: "Agnel Institute of Technology and Design",
    degree: "B.E. in Electronics & Computer Eng.",
    duration: "2023 – 2027",
  },
  {
    institution: "Don Bosco Higher Secondary School",
    degree: "Higher Secondary (Science)",
    duration: "2020 – 2022",
  },
];

export const socialLinks = {
  email: "mailto:moses.rodrigues.dev@gmail.com",
  github: "https://github.com/",
  linkedin: "https://linkedin.com/",
};
