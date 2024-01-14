import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  java,
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
  codecool,
  carrent,
  customtshirt,
  jobit,
  tripguide,
  threejs,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
    name: "Java",
    icon: java,
  },
  {
    name: "React JS",
    icon: reactjs,
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
    title: "Full stack Developer",
    company_name: "CodeCool",
    icon: codecool,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Completed comprehensive training at CodeCool, a coding academy, where I gained expertise in JavaScript, Java, MERN stack development, and honed essential hard skills in coding.", 
      "Additionally, developed soft skills such as collaboration, problem-solving, and effective communication.",
      "Ready to apply this well-rounded education to contribute effectively to web development projects."
    ],
  },
];

const testimonials = [
  {
    testimonial:
    "He is a good father",
   name: "MELLO",
    designation: "Dog",
    company: "FluffyPaws",
    image: "https://randomuser.me/api/portraits/dog/4.jpg",
  },
  {
    testimonial:
    "I love him.",
    name: "Angi",
    designation: "CEO",
    company: "FluffyPaws",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
  },
];

const projects = [
  {
    name: "3D Shirt Customization Platform",
    description: "Embark on a creative journey with our web-based 3D Shirt Customization platform. This innovative project enables users to dynamically change shirt colors and upload image files to personalize their shirts. Whether you want to showcase a logo on the shirt or apply a full design, our user-friendly interface allows for seamless customization. Elevate your style effortlessly with this cutting-edge platform, providing an interactive and engaging experience for shirt personalization.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: customtshirt,
    source_code_link: "https://github.com/",
  }, 
];

export { services, technologies, experiences, testimonials, projects };
