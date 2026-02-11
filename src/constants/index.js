
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
  vibenova,
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
    title: "UI UX Designer",
    icon: mobile,
  },
  {
    title: "Data Analyst",
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
    title: "Data Analyst and Automation Intern",
    company_name: "Abhijay Global Solutions LLP.",
    icon: ags, // make sure this is imported
    iconBg: "#383E56",
    date: "July 2025 - December 2025",
    points: [
      "Developing and maintaining data analytics workflows using Python, SQL, and automation tools.",
      "Collaborating with cross-functional teams to translate business requirements into actionable insights.",
      "Building automated dashboards and data pipelines to improve efficiency.",
      "Analyzing performance metrics to support data-driven decision-making.",
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
      "Vikas is highly skilled in data analytics. He transforms raw data into meaningful insights that help drive better decisions and measurable results.",
    name: "Vijay Mishra",
    designation: "CEO",
    company: "Abhijay Global Solutions LLP.",
    image: firstTestimonial,
  },
  {
    testimonial:
      "Vikas has an exceptional eye for visuals. His ability to create stunning visual generations and creative designs truly sets his work apart.",
    name: "Pratham Batra",
    designation: "Co-Founder",
    company: "Geek Room",
    image: secondTestimonial,
  },
  {
    testimonial:
      "Vikas combines technical expertise with creative excellence. From development to visual execution, his work reflects precision, innovation and strong ownership mindset.",
    name: "Kartik Singh",
    designation: "Co-Founder",
    company: "CodeCap Community",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "WebForge Studio — Modern Website Builder",
    description:
      "WebForge Studio is a modern website creation and management platform focused on performance, scalability, and stunning UI. It enables businesses to launch fast, responsive, and SEO-optimized websites with a smooth admin experience.",
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
        name: "seo",
        color: "blue-text-gradient",
      },
      {
        name: "cms",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/",
  },
  {
    name: "VibeNova – AI Mood Based Experience Platform",
    description:
      "VibeNova is a next-gen web application that uses AI-powered mood detection to deliver personalized music, visuals, memes, and aesthetic content. It blends emotion-aware intelligence with a Gen-Z focused UI to create immersive, shareable digital experiences.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
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
    ],
    image: vibenova,
    source_code_link: "https://github.com/",
  },
  {
    name: "DataSight AI – Smart Data Analytics & Visualization Platform",
    description:
      "DataSight AI is a powerful analytics platform that transforms raw data into actionable insights through interactive dashboards, real-time charts, and intelligent data processing. Built for decision-makers who want clarity, speed, and precision.",
    tags: [
      {
        name: "dataanalytics",
        color: "blue-text-gradient",
      },
      {
        name: "charts",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "violet-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
