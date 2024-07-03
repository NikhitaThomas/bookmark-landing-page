import React from "react";
import Accordion from "./Accordion";
import Button from "./Button";

function FAQSection() {
  return (
    <div className="flex flex-col items-center gap-8 text-center my-20">
      <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
      <p className="font-extralight w-6/12 m-auto ">
        Here are some of our FAQs. If you have any other questions you’d like
        answered please feel free to email us.
      </p>
      <div className="w-11/12">
        <Accordion />
      </div>
      <Button
        name={"More Info"}
        color="bg-indigo-500"
        textColor={"text-white"}
        hover="hover:text-indigo-500 hover:bg-white hover:border hover:border-indigo-500"
      />
    </div>
  );
}

export default FAQSection;
