import React from "react";
import { Button } from "./ui/button";

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleWheel = (e: React.WheelEvent<HTMLTextAreaElement>) => {
    const target = e.currentTarget;
    const isScrollable = target.scrollHeight > target.clientHeight;
    const isAtTop = target.scrollTop === 0 && e.deltaY < 0;
    const isAtBottom =
      target.scrollTop + target.clientHeight >= target.scrollHeight &&
      e.deltaY > 0;

    if (isScrollable && !isAtTop && !isAtBottom) {
      e.stopPropagation();
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="border p-6 rounded-lg shadow-sm bg-[#fcfcfc] flex flex-col gap-6 w-full"
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
            className="border rounded-lg bg-white w-full p-2 "
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
            className="border w-full rounded-lg bg-white p-2 "
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
          className="border rounded-lg bg-white p-2 "
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm">
          MESSAGE
        </label>
        <textarea
          id="message"
          placeholder="Let us know how we can help."
          className="border rounded-lg bg-white p-2 min-h-44 max-h-44 overflow-auto [overscroll-behavior:contain]"
          onWheel={handleWheel}
        />
      </div>
      <Button className="cursor-pointer bg-[#0d1e21] hover:bg-[#0d1e21]/90 text-white font-bold  w-full text-center border-[#0d1e21] p-6">
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;
