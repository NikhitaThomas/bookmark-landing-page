"use client";
import Image from "next/image";
import React, { useState } from "react";

const accordionData = [
  {
    title: "What is Bookmark?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt " +
      "justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
  },
  {
    title: "How can I request a new browser?",
    content:
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula." +
      "Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa," +
      "ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. " +
      "Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
  {
    title: "Is there a mobile app?",
    content:
      "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum " +
      "urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed " +
      "sollicitudin ex et ultricies bibendum.",
  },
  {
    title: "What about other Chromium browsers?",
    content:
      "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam " +
      "vitae neque eget nisl gravida pellentesque non ut velit.",
  },
];

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-lg mx-auto my-10">
      {accordionData.map((item, index) => (
        <AccordionItem
          key={index}
          index={index}
          activeIndex={activeIndex}
          title={item.title}
          content={item.content}
          toggleAccordion={toggleAccordion}
        />
      ))}
    </div>
  );
}

const AccordionItem = ({
  index,
  activeIndex,
  title,
  content,
  toggleAccordion,
}) => {
  const isActive = index === activeIndex;

  return (
    <div className="border-y border-gray-200">
      <div
        className="flex justify-between items-center p-4 cursor-pointer w-full"
        onClick={() => toggleAccordion(index)}
      >
        <h3 className="text-lg font-medium m-2">{title}</h3>
        <span>
          {isActive ? (
            "X"
          ) : (
            <Image
              src={"/images/icon-arrow.svg"}
              width="20"
              height="20"
              alt=""
            />
          )}
        </span>
      </div>
      {isActive && (
        <div className="">
          <p className="p-4">{content}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
