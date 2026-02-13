export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
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
  {
    title: "Smart Campus Energy Monitor",
    stack: ["ESP32", "MQTT", "Node.js", "Next.js"],
    summary:
      "IoT platform for real-time building power usage, anomaly detection, and predictive consumption alerts.",
    details:
      "Built embedded firmware for multi-sensor sampling, designed MQTT pipelines, and developed a web dashboard with role-based analytics for operations teams.",
    github: "https://github.com/",
    gradient: "from-cyan-500/20 via-blue-500/20 to-purple-500/20",
    icon: "⚡",
    role: "Full-Stack & Embedded Engineer",
    duration: "Aug 2025 – Dec 2025",
    highlights: [
      "Designed custom PCB with multi-channel ADC for power monitoring",
      "Implemented MQTT broker with TLS encryption for secure data transit",
      "Built real-time Next.js dashboard with role-based access control",
      "Developed anomaly detection using rolling-window statistics",
      "Reduced campus energy waste by 18% in pilot deployment",
    ],
    features: [
      "Real-time power monitoring",
      "Anomaly detection alerts",
      "Predictive analytics",
      "Role-based dashboards",
    ],
  },
  {
    title: "AI-Assisted Irrigation Controller",
    stack: ["Arduino", "Python", "FastAPI", "MongoDB"],
    summary:
      "Precision irrigation system that uses soil and climate data to automate water schedules.",
    details:
      "Implemented edge sensor processing, model-assisted decision logic, and cloud telemetry to reduce water waste while improving crop health consistency.",
    github: "https://github.com/",
    gradient: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
    icon: "🌿",
    role: "IoT & ML Engineer",
    duration: "Mar 2025 – Jul 2025",
    highlights: [
      "Integrated capacitive soil moisture sensors with Arduino Mega",
      "Built ML pipeline in Python for weather-based irrigation prediction",
      "Designed FastAPI backend with real-time WebSocket telemetry",
      "Stored time-series data in MongoDB for historical analysis",
      "Reduced water usage by 32% compared to manual scheduling",
    ],
    features: [
      "Soil moisture sensing",
      "Weather-based scheduling",
      "Cloud telemetry",
      "Historical analytics",
    ],
  },
  {
    title: "Embedded Device Fleet Manager",
    stack: ["Next.js", "Node.js", "WebSockets", "MySQL"],
    summary:
      "Web platform for monitoring firmware versions, diagnostics, and remote command execution across deployed devices.",
    details:
      "Designed a scalable full-stack architecture with secure command queues, real-time status feeds, and operational audit history.",
    github: "https://github.com/",
    gradient: "from-purple-500/20 via-pink-500/20 to-rose-500/20",
    icon: "📡",
    role: "Full-Stack Developer",
    duration: "Jan 2025 – Apr 2025",
    highlights: [
      "Built WebSocket-based real-time device status monitoring",
      "Implemented OTA firmware update system with rollback support",
      "Created command queue system with RBAC authentication",
      "Designed responsive dashboard with device health metrics",
      "Managed fleet of 50+ ESP32 and Raspberry Pi devices",
    ],
    features: [
      "Device health monitoring",
      "OTA firmware updates",
      "Remote command execution",
      "Audit trail logging",
    ],
  },
  {
    title: "CropGuard — Plant Disease Detection",
    stack: ["Python", "FastAPI", "Supabase", "React Native"],
    summary:
      "Mobile-first crop disease diagnosis app using AI image recognition to help farmers identify and treat plant health issues.",
    details:
      "Built a cross-platform mobile app with React Native that captures leaf images, sends them to a FastAPI backend running a fine-tuned plant disease detection model, and stores results in Supabase for tracking.",
    github: "https://github.com/",
    gradient: "from-lime-500/20 via-green-500/20 to-emerald-500/20",
    icon: "🔬",
    role: "Full-Stack & ML Engineer",
    duration: "Oct 2024 – Jan 2025",
    highlights: [
      "Fine-tuned image classification model on 38 plant disease classes",
      "Built FastAPI backend with Supabase edge functions for detection",
      "Designed React Native mobile app with camera integration",
      "Implemented scan history and treatment recommendations",
      "Achieved 94% accuracy on test dataset",
    ],
    features: [
      "AI image diagnosis",
      "Scan history tracking",
      "Treatment suggestions",
      "Offline capture mode",
    ],
  },
  {
    title: "Bluetooth Attendance System",
    stack: ["ESP32", "BLE", "Python", "MySQL"],
    summary:
      "Automated attendance tracking using Bluetooth Low Energy beacons for hands-free student check-in across campus.",
    details:
      "Developed an ESP32-based BLE beacon system that automatically detects registered student devices within range and logs attendance to a centralized MySQL database via a Python middleware service.",
    github: "https://github.com/",
    gradient: "from-blue-500/20 via-indigo-500/20 to-violet-500/20",
    icon: "📶",
    role: "Embedded Systems Engineer",
    duration: "Jun 2024 – Sep 2024",
    highlights: [
      "Programmed ESP32 BLE scanner with MAC address filtering",
      "Built Python middleware for RSSI-based proximity detection",
      "Designed MySQL schema for multi-classroom attendance logs",
      "Created admin dashboard for attendance reports and analytics",
      "Reduced manual attendance time by 90% in pilot classrooms",
    ],
    features: [
      "BLE proximity detection",
      "Auto attendance logging",
      "Admin analytics dashboard",
      "Multi-room support",
    ],
  },
  {
    title: "Smart Home Automation Hub",
    stack: ["ESP32", "MQTT", "React", "Node.js"],
    summary:
      "Centralized IoT hub for controlling lights, fans, and appliances with voice commands and scheduled automation routines.",
    details:
      "Engineered a multi-node ESP32 mesh network with MQTT communication, paired with a React web dashboard and Node.js backend for scheduling, voice control integration, and energy usage tracking.",
    github: "https://github.com/",
    gradient: "from-amber-500/20 via-orange-500/20 to-red-500/20",
    icon: "🏠",
    role: "IoT Developer",
    duration: "Feb 2024 – May 2024",
    highlights: [
      "Built ESP32 mesh network for multi-room appliance control",
      "Integrated Google Assistant via IFTTT for voice commands",
      "Designed scheduling engine with cron-based automation rules",
      "Created React dashboard with real-time device state visualization",
      "Tracked energy consumption per device with daily/weekly reports",
    ],
    features: [
      "Voice control integration",
      "Scheduled automation",
      "Energy tracking",
      "Multi-room mesh network",
    ],
  },
];

/** First 3 projects shown on the homepage */
export const featuredProjects = projectsData.slice(0, 3);

/** All projects shown on the /projects page */
export const allProjects = projectsData;

export const experiences = [
  {
    title: "National-Level Hackathon Finalist",
    subtitle: "Built an end-to-end IoT prototype under 24-hour constraints",
    year: "2025",
  },
  {
    title: "Embedded Systems Internship",
    subtitle: "Worked on microcontroller firmware optimization and sensor calibration",
    year: "2024",
  },
  {
    title: "AI & IoT Certification",
    subtitle: "Completed applied learning in ML integration for connected systems",
    year: "2024",
  },
];

export const socialLinks = {
  email: "mailto:moses.rodrigues.dev@gmail.com",
  github: "https://github.com/",
  linkedin: "https://linkedin.com/",
};
