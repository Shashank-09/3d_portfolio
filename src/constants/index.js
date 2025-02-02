import {
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
  git,
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
  cozmotec,
  vortexweb ,
  quintustech,
  campusconnect,
  careplus,
  krypt
} from "../assets";

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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React  Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Cozmotec",
    icon: cozmotec,
    iconBg: "#383E56",
    date: "Feb 2024 - Jul 2024",
    points: [
      "Developed a comprehensive SaaS recruitment platform designed to streamline candidate and client onboarding, compliance management,contract management, timesheet processing, and expense reimbursement.",
      "Implemented features such as automated communication, contract generation, and seamless integration with accounting software via an openAPI. Contributed to a user-friendly interface and automated workflows, enhancing efficiency and accuracy in recruitment processes.",
      "Cypress - Implemented automated tests using Cypress to ensure the reliability and functionality of the platform",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "VortexWeb",
    icon: vortexweb,
    iconBg: "#383E56",
    date: "Nov 2024 - Dec 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Quintus Tech",
    icon: quintustech,
    iconBg: "#E6DEDD",
    date: "Oct 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

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

const projects = [
  {
    name: "Campus Connect",
    description:
      "A social media platform designed specifically for campus communities, enhancing communication and engagement among students and faculty. The platform serves as a dynamic hub for campus related activities and personal interactions, fostering a vibrant online community and facilitating meaningful connections both inside and outside the classroom.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "appwrite",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: campusconnect,
    source_code_link: "https://github.com/Shashank-09/campusconnect",
  },
  {
    name: "Care Plus",
    description:
      "A healthcare management system with real-time SMS notification to streamline the tedious checkup process. This platform includes the authentication process, registration process, filling out personal information & medical history with your preferred doctor. It also includes a comprehensive admin panel for scheduling or cancelling appointments of any kind with SMS notifications.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: careplus,
    source_code_link: "https://github.com/Shashank-09/carePlus",
  },
  {
    name: "Krypt",
    description:
      "Created Krypt, a decentralized Web 3.0 platform with ReactJs and Solidity that enables safe and transparent Ethereum transfer for users.Created intuitive and connected with Metamask to facilitate smooth blockchain transactions. The platform uses smart contract to deliver a safe, decentralized experience and guarantees that every transaction is irreversible.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "blockchain",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: krypt,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
