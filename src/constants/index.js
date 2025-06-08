import {
  c,
  cpp,
  python,
  mysql,
  django,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  git,
  cod,
  ver,
} from "../assets";

// Navigation
export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "skills" },
  { id: "ss", title: "Work" },
  { id: "contact", title: "Contact" },
  { id: "My Resume", title: "My Resume" },
];

// Services Offered
const services = [
  { title: "Django Developer", icon: web },
  { title: "Frontend Developer", icon: mobile },
  { title: "Backend Developer", icon: backend },
  { title: "API Integrator", icon: creator },
];

// Tech Stack
const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "C", icon: c },
  { name: "C++", icon: cpp },
  { name: "React JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "MySQL", icon: mysql },
  { name: "Python", icon: python },
  { name: "Django", icon: django },
  { name: "Git", icon: git },
  { name: "VS Code", icon: cod },
  { name: "Vercel", icon: ver },
];

// Work Experience
const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web apps using React.js and related technologies.",
      "Working with designers and other devs to create high-quality products.",
      "Ensuring responsive design and cross-browser compatibility.",
      "Conducting code reviews and sharing feedback.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Building cross-platform mobile applications.",
      "Collaborating with cross-functional teams.",
      "Implementing mobile UI/UX with performance in mind.",
      "Handling real-time data and updates in the app.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Creating and maintaining e-commerce websites.",
      "Integrating third-party APIs and plugins.",
      "Working on SEO and performance optimization.",
      "Ensuring pixel-perfect design implementation.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "End-to-end development of web applications.",
      "Leading architecture decisions on the stack.",
      "Implementing RESTful APIs with Django backend.",
      "Collaborating with product teams for scalable features.",
    ],
  },
];

// Testimonials
const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

// Projects
const projects = [
  {
    name: "ChatBox",
    description:
      "A modern, responsive frontend for a real-time messaging application. Features user registration, JWT login, chat UI, search, and auto-refreshing messages.",
    tags: [
      { name: "python(django)", color: "blue-text-gradient" },
      { name: "react", color: "blue-text-gradient" },
      { name: "supabase", color: "green-text-gradient" },
      { name: "bootstrap-5", color: "pink-text-gradient" },
    ],
    image: carrent,
    source_code_link: "https://github.com/mjtowfik04/Chat-fonent",
    backend_source_code_link: "https://github.com/mjtowfik04/Chat-backend",
  },
  // {
  //   name: "Job IT",
  //   description:
  //     "Web app that allows users to search for jobs, view salary estimates, and find listings near their location.",
  //   tags: [
  //     { name: "react", color: "blue-text-gradient" },
  //     { name: "restapi", color: "green-text-gradient" },
  //     { name: "scss", color: "pink-text-gradient" },
  //   ],
  //   image: jobit,
  //   source_code_link: "https://github.com/",
  // },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A travel booking platform with flights, hotels, and car rentals, plus destination recommendations.",
  //   tags: [
  //     { name: "nextjs", color: "blue-text-gradient" },
  //     { name: "supabase", color: "green-text-gradient" },
  //     { name: "css", color: "pink-text-gradient" },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
