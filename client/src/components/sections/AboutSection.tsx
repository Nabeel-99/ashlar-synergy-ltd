import React from "react";

const AboutSection = () => {
  const aboutDetails = [
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
  return (
    <section className="flex flex-col gap-10 lg:gap-20  py-10 lg:py-20 px-4 lg:px-20">
      <div className="bg-black/20 h-0.5 mb-10 lg:mb-20"></div>
      <h2 className="font-bold text-3xl lg:text-5xl text-center tracking-tight">
        About our company
      </h2>
      <div className="flex flex-col  2xl:container 2xl:mx-auto lg:flex-row gap-10">
        <img
          src="about.jpg"
          alt="about"
          className="w-full lg:h-[600px] object-cover rounded-xl lg:w-2/5"
        />
        <div className="flex flex-col gap-10">
          <p className="lg:text-xl">
            Ashkar Synergy is a dynamic consulting and services firm providing
            innovative solutions across key industries with a focus on
            excellence, efficiency, and integrity.
          </p>
          {aboutDetails.map((item, index) => (
            <div className="border-t py-4" key={index}>
              <div className="flex gap-10">
                <span className="font-bold text-2xl text-black/40">
                  <span className="text-3xl">0</span>
                  {index + 1}.
                </span>
                <div className="flex flex-col gap-2">
                  <p className="lg:text-xl font-bold">{item.title}</p>
                  <p className="lg:text-lg">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
