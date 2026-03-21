
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  emora,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
  project4,
  project5,
  project6,
} from '../assets'


// Import ags separately
import ags from "../assets/company/ags.png";
import geekroom from "../assets/company/geekroom.png";
import codecap from "../assets/company/codecap.png";
import fft from "../assets/company/fft.png";

export const navLinks = [


  {
    id: "about",
    title: "About",
    
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "MERN Stack Developer",
    icon: web,
  },
  {
    title: "UI/UX Designer",
    icon: mobile,
  },
  {
    title: "Creative Technologist",
    icon: backend,
  },
  {
    title: "AI Enthusiast",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "gsap",
    icon: gsap,
  },
  {
    name: "framer",
    icon: framer,
  },

 
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
 

];

const experiences = [
  {
    title: "Full Stack (MERN) Developer Intern",
    company_name: "Abhijay Global Solutions LLP.",
    icon: ags, // make sure this is imported
    iconBg: "#383E56",
    date: "July 2025 - December 2025",
    points: [
      "Developing and maintaining full-stack web applications using MongoDB, Express.js, React, and Node.js.",
      "Designing responsive user interfaces and implementing RESTful APIs for seamless frontend-backend integration.",
      "Building scalable data models and optimizing application performance for real-world logistics operations.",
      "Collaborating with teams to deliver reliable features, automation tools, and efficient workflow solutions.",
    ],
  },

  {
    title: "UI/UX Designer",
    company_name: "Geek Room",
    icon: geekroom, 
    iconBg: "#0F172A",
    date: "August 2025 - Present",
    points: [
      "Designed intuitive and visually engaging interfaces for community-driven tech platforms.",
      "Created wireframes, interactive prototypes, and scalable design systems using Figma.",
      "Improved user experience by applying usability principles and iterative design feedback.",
      "Collaborated with developers to ensure pixel-perfect implementation of UI designs.",
      "Maintained consistent branding and visual identity across multiple projects and events.",
    ],
  },

  {
    title: "Creative Technologist",
    company_name: "CodeCap Community",
    icon: codecap, 
    iconBg: "#1E1B4B",
    date: "January 2025 - January 2026",
    points: [
      "Produced high-quality tech content, promotional videos, and educational media.",
      "Designed thumbnails, branding assets, and social media creatives to boost engagement.",
      "Strategized content distribution to grow audience reach and community presence.",
      "Collaborated with tech mentors and contributors to present technical topics creatively.",
      "Enhanced brand visibility through consistent visual storytelling and digital campaigns.",
    ],
  },

  {
  title: "Graphic Designer & Video Editor Intern",
  company_name: "15FORTEEN",
  icon: fft,
  iconBg: "#FBBF24",
  date: "Feb 2025 - Jul 2025",
  points: [
    "Created high-quality video content, motion graphics, and visually engaging designs for brand storytelling.",
    "Edited and enhanced videos using Adobe Premiere Pro and After Effects.",
    "Designed marketing creatives, social media graphics, thumbnails, and banners.",
    "Collaborated with the creative team to produce impactful content aligned with brand strategy.",
    "Improved audience engagement through visually compelling and trend-driven content.",
  ],
},
];


const testimonials = [
  {
    testimonial:
      "Vikas is highly skilled in full-stack web development. He builds scalable, high-performance applications that deliver seamless user experiences and solve real-world problems through clean architecture and modern technologies.",
    name: "Vijay Mishra",
    designation: "CEO",
    company: "Abhijay Global Solutions LLP.",
    image: firstTestimonial,
  },
  {
    testimonial:
      "Vikas has an exceptional eye for design and visual storytelling. He creates stunning visuals and creative assets that enhance user engagement and elevate overall project quality through thoughtful design and attention to detail.",
    name: "Pratham Batra",
    designation: "Co-Founder",
    company: "Geek Room",
    image: secondTestimonial,
  },
  {
    testimonial:
      "Vikas delivers high-quality creative and technical work with strong design sense and development expertise. He approaches every project professionally, ensuring reliable execution, polished results, and meaningful impact.",
    name: "Kartik Singh",
    designation: "Co-Founder",
    company: "CodeCap Community",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "Sentience - Advanced AI Consciousness Interface",
    description:
      "Sentience is a high-performance AI-powered interface built to simulate a digital consciousness system. It delivers real-time conversational intelligence, file and image understanding, and context-aware assistance through a futuristic terminal-style UI. Designed with a scalable full-stack architecture, it combines speed, reliability, and immersive design for next-generation AI experiences.",
    tags: [
      {
      name: "nextjs",
      color: "blue-text-gradient",
    },
    {
      name: "tailwind",
      color: "white-text-gradient",
    },
    {
      name: "node",
      color: "pink-text-gradient",
    },
    {
      name: "express",
      color: "green-text-gradient",
    },
    {
      name: "groq-ai",
      color: "orange-text-gradient",
    },
    ],
    image: project3,
    source_code_link: "https://github.com/VikasCodesDev/sentience",
  },
  {
    name: "Emora – Futuristic GenZ AI Social Platform",
    description:
      "Emora is a high-performance AI-powered GenZ social platform built to deliver personalized content based on mood, trends, and user interactions. It integrates multiple entertainment and utility modules into a unified immersive experience, featuring real-time engagement, intelligent recommendations, and a futuristic interface. Designed with a scalable full-stack architecture.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "white-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "ai",
        color: "orange-text-gradient",
      },
    ],
    image: emora,
    source_code_link: "https://github.com/VikasCodesDev/emora",
  },
  {
    name: "CineVerse – AI Powered Web Series Recommendation Platform",
    description:
      "CineVerse is an AI-powered web series recommendation platform designed to deliver personalized viewing suggestions through intelligent algorithms and TMDB integration. It features a cinematic retro-inspired interface combined with real-time data, fast performance, and scalable architecture.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/VikasCodesDev/cineverse",
  },
  {
    name: "PersonaX - AI Personality Simulator",
    description:
      "PersonaX is an AI-powered personality simulation platform that allows users to interact with dynamic virtual personas in real time. It leverages advanced language models to mimic human-like behavior, emotions, and conversation styles. The platform features an immersive futuristic interface, customizable characters, persistent memory, and fast, scalable performance for engaging AI-driven interactions.",

    tags: [
  {
    name: "react",
    color: "blue-text-gradient",
  },
  {
    name: "tailwind",
    color: "white-text-gradient",
  },
  {
    name: "node",
    color: "pink-text-gradient",
  },
  {
    name: "mongodb",
    color: "green-text-gradient",
  },
  {
    name: "ai",
    color: "orange-text-gradient",
  },
],
      image: project4,
      source_code_link: "https://github.com/VikasCodesDev/personax",
  },
  {
  name: "Nexus – The Next Gen Gaming OS",

  description:
    "Nexus is a futuristic full-stack gaming OS platform that brings together your entire gaming ecosystem in one place seamlessly. It features a personalized game library, real-time gaming news, an AI-powered copilot, and a sleek OS-like interface. Designed with a Gen-Z aesthetic, Nexus delivers a smooth, immersive experience with fast performance and scalable architecture in one place with seamless integration.",

  tags: [
    {
      name: "next.js",
      color: "blue-text-gradient",
    },
    {
      name: "tailwind",
      color: "white-text-gradient",
    },
    {
      name: "node",
      color: "pink-text-gradient",
    },
    {
      name: "mongodb",
      color: "green-text-gradient",
    },
    {
      name: "ai",
      color: "orange-text-gradient",
    },
  ],

      image: project5,
      source_code_link: "https://github.com/VikasCodesDev/nexus",
  },
  {
  name: "DecideAI - AI Powered Decision Engine",

  description:
    "DecideAI is an AI-powered full-stack decision-making platform that helps users analyze real-life situations with clarity and confidence. It provides probability-based insights, structured outcomes (best, worst, most likely), and smart recommendations through a clean and minimal interface. Designed for practical use, DecideAI transforms complex choices into simple, actionable decisions.",

  tags: [
    {
      name: "next.js",
      color: "blue-text-gradient",
    },
    {
      name: "tailwind",
      color: "white-text-gradient",
    },
    {
      name: "node",
      color: "pink-text-gradient",
    },
    {
      name: "groq-ai",
      color: "orange-text-gradient",
    },
  ],

  image: project6,
  source_code_link: "https://github.com/VikasCodesDev/decideai",
}
];

export { services, technologies, experiences, testimonials, projects };
