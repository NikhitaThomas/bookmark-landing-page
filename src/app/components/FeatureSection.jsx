"use client";
import Image from "next/image";
import React, { useState } from "react";
import Button from "./Button";
import Feature from "./Feature";

const FeatureData = [
  {
    title: "Simple Bookmarking",
    heading: "Bookmark in one click",
    description:
      "Organize your bookmarks however you like. Our simple drag-and-drop interface" +
      "gives you complete control over how you manage your favourite sites.",
    image: "/images/illustration-features-tab-1.svg",
  },
  {
    title: "Speedy Searching",
    heading: "Intelligent search",
    description:
      "Our powerful search feature will help you find saved sites in no time at all." +
      "No need to trawl through all of your bookmarks.",
    image: "/images/illustration-features-tab-2.svg",
  },
  {
    title: "Easy Sharing",
    heading: "Share your bookmarks",
    description:
      "Easily share your bookmarks and collections with others. Create a shareable" +
      "link that you can send at the click of a button.",
    image: "/images/illustration-features-tab-3.svg",
  },
];

const singleFeature = (FeatureData, feature) => {
  const featureObj = FeatureData.find((obj) => obj.title === feature);
  return featureObj
    ? featureObj
    : { description: "Feature not found", image: "" };
};

function FeatureSection() {
  const [feature, setFeature] = useState("Simple Bookmarking");
  const featureDetails = singleFeature(FeatureData, feature);

  return (
    <div className="flex flex-col items-center text-center gap-8 mb-[200px]">
      <div className="w-9/12 md:w-1/2 mx-auto flex flex-col gap-8">
        <div className="text-2xl font-semibold">Features</div>
        <div className="font-thin">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </div>
        <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
          {FeatureData.map((f) => (
            <Feature
              key={f.title}
              name={f.title}
              setFeature={setFeature}
              isSelected={feature === f.title}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-12 w-10/12 mx-auto">
        <div className="basis-1/2">
          <div className="absolute right-2/3 transform translate-x-6 translate-y-20 bg-indigo-500 w-full h-1/4 rounded-full z-0"></div>
          <Image
            className="relative"
            src={featureDetails.image}
            width={500}
            height={500}
            alt=""
          />
        </div>
        <div className="flex flex-col basis-1/2 md:text-left gap-10 my-10">
          <div className="text-2xl md:text-4xl font-semibold">
            {featureDetails.heading}
          </div>
          <div className="font-light text-gray-500">
            {featureDetails.description}
          </div>
          <div>
            <Button
              name={"More Info"}
              color="bg-indigo-500"
              textColor="text-white"
              hover="hover:text-indigo-500 hover:bg-white hover:border hover:border-indigo-500"
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;
