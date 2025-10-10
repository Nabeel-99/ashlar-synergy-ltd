import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { PiTractorLight } from "react-icons/pi";
import { PiBuildingOfficeLight } from "react-icons/pi";
import { AiOutlineGlobal } from "react-icons/ai";
import { BsBoxSeam } from "react-icons/bs";
import { MdOutlineEngineering } from "react-icons/md";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const questions = [
  {
    question: "What services does Ashkar Synergy Limited provide?",
    answer:
      "We specialize in Construction & Engineering, Agro-Allied, Property Development, Import & Export, and General Supplies.",
  },
  {
    question: "How does Ashkar Synergy ensure quality across multiple sectors?",
    answer:
      "We implement strict project management practices, industry-standard quality checks, and continuously train our teams to maintain excellence in every sector we operate.",
  },
  {
    question: "Can Ashkar Synergy handle large-scale projects?",
    answer:
      "Yes, we have the expertise, resources, and partnerships to manage projects of any scale, from small local contracts to large national developments.",
  },
  {
    question: "How does Ashkar Synergy support sustainable growth?",
    answer:
      "We prioritize eco-friendly methods, responsible sourcing, and community engagement to ensure that our projects not only succeed commercially but also positively impact the environment and society.",
  },
];

export const chooseDetails = [
  {
    title: "Sustainable Impact",
    description:
      "Delivering solutions that create long-term value for businesses and communities.",
    image: "/impact.jpg",
  },
  {
    title: "Tailored Solutions",
    description:
      "Specialized approaches designed to fit each client’s unique needs and goals.",
    image: "/solution.jpg",
  },
  {
    title: "Commitment to Quality",
    description:
      "We uphold the highest standards in service delivery and project execution.",
    image: "/inspection.jpg",
  },
];

export const aboutDetails = [
  {
    title: "Expertise Across Sectors",
    description:
      "From construction to agriculture and trade, we deliver tailored solutions that adapt to your unique needs.",
  },
  {
    title: "	Client-Focused Approach",
    description:
      "Every project is built on collaboration, transparency, and measurable results.",
  },
  {
    title: "Commitment to Quality",
    description:
      "We uphold the highest standards in service delivery and project execution.",
  },
];

export const servicesData = [
  {
    icon: MdOutlineEngineering,
    title: "Construction & Engineering",
    description:
      "Delivering quality infrastructure with expert design and planning.",
    servicesProvided: [
      "Planning and Design",
      "Project Management",
      "Site Supervision",
      "Material & Resource Management",
    ],
    image: "/construction.jpg",
    link: "/services",
  },
  {
    icon: PiTractorLight,
    title: " Agro-Allied Services",
    description:
      "Supporting modern agriculture with machinery and innovative solutions.",
    servicesProvided: [
      "Agrochemicals",
      "Agricultural Machinery",
      "Food Processing",
      "Farm input Supply",
    ],
    image: "/agro.jpg",
    link: "/services",
  },
  {
    icon: BsBoxSeam,
    title: "General Supplies",
    description:
      "Providing diverse, high-quality materials and equipment for every industry.",
    servicesProvided: [
      "Project Planning and Feasibility",
      "Design and Permitting",
      "Construction Management",
      "Property Management",
    ],
    image: "/supplies.jpg",
    link: "/services",
  },

  {
    icon: AiOutlineGlobal,
    title: "Import & Export",
    description:
      "Connecting markets globally with reliable trade and logistics services.",
    servicesProvided: [
      "Trade Barriers",
      "Trade Balance",
      "Net Exports",
      "Providing Security",
    ],
    image: "/exports.jpg",
    link: "/services",
  },
  {
    icon: PiBuildingOfficeLight,
    title: "Property Development & Management",
    description:
      "From planning to maintenance — we build and manage properties efficiently.",
    servicesProvided: [
      "Broad Product Range",
      "Office & Business Supplies",
      "Procurement & Logistics",
      "Construction and Building Supplies",
    ],
    image: "/property.jpg",
    link: "/services",
  },
];
