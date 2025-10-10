import React from "react";
import { Button } from "./ui/button";

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="border p-6 rounded-lg flex flex-col gap-6 w-full"
    >
      <div className="grid lg:grid-cols-2 items-center gap-2 w-full">
        <div className="flex flex-col gap-2">
          <label htmlFor="fullname" className="text-sm">
            FULL NAME
          </label>
          <input
            id="fullname"
            type="text"
            placeholder=""
            className="border rounded-lg w-full p-2 "
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm">
            EMAIL
          </label>
          <input
            id="email"
            type="email"
            placeholder=""
            className="border w-full rounded-lg p-2 "
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="phone" className="text-sm">
          PHONE
        </label>
        <input
          id="phone"
          type="text"
          placeholder=""
          className="border rounded-lg p-2 "
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm">
          MESSAGE
        </label>
        <textarea
          id="message"
          placeholder="Let us know how we can help."
          className="border rounded-lg p-2  min-h-44 max-h-44"
          data-lenis-prevent
        />
      </div>
      <Button className="cursor-pointer bg-[#0d1e21] hover:bg-[#0d1e21]/90 text-white font-bold  w-full text-center border-[#0d1e21] p-6">
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;
