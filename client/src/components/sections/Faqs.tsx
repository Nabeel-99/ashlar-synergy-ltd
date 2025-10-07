import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const Faqs = () => {
  const questions = [
    {
      question: "What services does Ashkar Synergy Limited provide?",
      answer:
        "We specialize in Construction & Engineering, Agro-Allied, Property Development, Import & Export, and General Supplies.",
    },
    {
      question: "Where is your company located?",
      answer:
        "Our head office is based in Abuja, Nigeria, with operations extending nationwide.",
    },
    {
      question: "How can I contact Ashkar Synergy Limited?",
      answer:
        "You can reach us through our website’s contact form or by email at ashkarsynergy@yahoo.com.",
    },
    {
      question: "How long has Ashkar Synergy Limited been in operation?",
      answer:
        "Ashkar Synergy Limited has built a solid reputation over several years, founded on trust, quality, and a commitment to excellence across industries.",
    },
    {
      question: "What makes Ashkar Synergy stand out?",
      answer:
        "Our strength lies in combining professionalism, innovation, and reliability across multiple sectors.",
    },
  ];
  return (
    <section className="flex flex-col gap-6 pb-10 items-center bg-[#f4f4f4] justify-center  h-full py-10 px-4 lg:px-20">
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
              <p className="lg:text-lg">{question.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div>
        <p className="text-6xl font-bold"> We Build. We Develop. We Deliver.</p>
      </div>
    </section>
  );
};

export default Faqs;
