import Marquee from "../Marquee";
import { IoLayersOutline } from "react-icons/io5";
import { MdOutlineLocalPhone } from "react-icons/md";
import { HiOutlineMailOpen } from "react-icons/hi";
import { LuMapPin } from "react-icons/lu";
import { Accordion, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { AccordionContent } from "@radix-ui/react-accordion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ContactForm from "../ContactForm";
import { questions } from "@/lib/utils";
const Contact = () => {
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".contact-page",
          start: "top 60%",
        },
      })
      .from(".contact-page-title", {
        y: 50,
        opacity: 0,
        duration: 0.8,
      })
      .from(
        ".contact-page-subtitle",
        {
          y: 50,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.5"
      )
      .from(".contact-info", {
        x: -50,
        opacity: 0,
        duration: 0.8,
      })
      .from(
        ".contact-form",
        {
          x: 50,
          opacity: 0,
          duration: 0.8,
        },
        "<"
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".contact-faq-section",
          start: "top 60%",
        },
      })
      .from(".contact-faq-section", {
        y: 100,
        opacity: 0,
        duration: 0.8,
      });
  });
  return (
    <div className="flex flex-col relative contact-page h-full">
      <section className="min-h-[300px]  text-white bg-[#0d1e21] w-full flex flex-col items-center justify-center gap-4  z-20 overflow-hidden">
        <div className="relative w-full 2xl:container 2xl:mx-auto flex flex-col gap-4 items-center justify-center lg:px-20 ">
          <div className="max-sm:hidden absolute top-10 right-0  xl:right-28   z-0 -translate-y-44">
            <IoLayersOutline className="text-[400px] lg:text-[600px] text-[#f4f4f4]/10" />
          </div>
          <h2 className="bg-clip-text contact-page-title lg:text-center bg-gradient-to-r from-white from-50% to-white/30  text-transparent text-3xl lg:text-6xl  font-bold tracking-tight">
            Get in touch
          </h2>
          <p className="text-center px-2 contact-page-subtitle lg:text-lg md:max-w-xl">
            {/* Delivering reliable and high-quality solutions across multiple
      sectors. */}
            We’d love to hear from you. Whether you have a question, a project
            idea, or want to partner with us — drop us a message.
          </p>
        </div>
      </section>
      <section className="flex flex-col 2xl:container 2xl:mx-auto px-4 lg:px-20 gap-10 pb-20 mt-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:gap-20">
          <div className="flex flex-col contact-info gap-10 justify-between w-full lg:gap-3 ">
            <div className="flex flex-col gap-4">
              <h2 className="text-xl font-bold">Reach Out To Us</h2>
              <p className="text-lg">
                {" "}
                We’re here to answer your questions and discuss your project
                needs.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 px-4 border bg-[#fcfcfc] shadow-sm p-3 rounded-xl">
                <div className="bg-[#0d1e21] p-3 rounded-full">
                  <MdOutlineLocalPhone className="lg:text-2xl text-white" />
                </div>

                <span>+234 901 234 5678</span>
              </div>
              <div className="flex items-center gap-2 px-4 border bg-[#fcfcfc] shadow-sm p-3 rounded-xl">
                <div className="bg-[#0d1e21] p-3 rounded-full">
                  <HiOutlineMailOpen className="lg:text-2xl text-white" />
                </div>

                <span>ashkarsynergy@yahoo.com</span>
              </div>

              <div className="flex items-center gap-2 px-4 border bg-[#fcfcfc] shadow-sm p-3 rounded-xl">
                <div className="bg-[#0d1e21] p-3 rounded-full">
                  <LuMapPin className="lg:text-2xl text-white" />
                </div>

                <span>Abuja, Nigeria</span>
              </div>
            </div>
          </div>
          <div className="w-full contact-form">
            <ContactForm />
          </div>
        </div>
      </section>
      <section className="lg:px-20 px-4 contact-faq-section flex flex-col gap-10 items-center mt-10 lg:mt-20 2xl:container 2xl:mx-auto">
        <div className="border rounded-full bg-white/50 p-2 px-4 shadow-md">
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
      </section>

      <Marquee />
    </div>
  );
};

export default Contact;
