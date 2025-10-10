import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import Marquee from "../Marquee";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";
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
const FaqsSection = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  useGSAP(() => {
    gsap.from("#faqs", {
      scrollTrigger: {
        trigger: "#faqs",
        start: isMobile ? "top 60%" : "top 80%",
      },
      opacity: 0,
      y: 100,
      duration: 0.8,
    });
  });
  return (
    <section
      id="faqs"
      className="flex flex-col gap-6 pb-10 lg:pb-40 items-center bg-[#f4f4f4] justify-center  lg:mt-20 lg:pt-30 h-full py-10 px-4 lg:px-20"
    >
      <div className="border rounded-full bg-white/40 p-2 px-4 shadow-md">
        <p className="text-sm">FAQs</p>
      </div>
      <p className="text-2xl lg:text-4xl font-bold">
        Frequently Asked Questions
      </p>
      <Accordion
        type="single"
        collapsible
        className="w-full max-w-5xl 2xl:container 2xl:mx-auto"
        defaultValue="item-1"
      >
        {questions.map((question, index) => (
          <AccordionItem
            value={`item-${index + 1}`}
            key={index}
            className="px-4 rounded-lg bg-white/40"
          >
            <AccordionTrigger className="lg:text-xl font-bold">
              {question.question}
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p className="text-sm lg:text-lg">{question.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <Marquee />
    </section>
  );
};

export default FaqsSection;
