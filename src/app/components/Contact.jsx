import React from "react";
import Button from "./Button";

function Contact() {
  return (
    <div className="flex flex-col justify-center text-center items-center bg-indigo-500 text-white p-10 md:p-20 gap-8">
      <div className="tracking-widest text-sm font-light uppercase">
        35,000+ already joined
      </div>
      <div className="text-2xl md:text-4xl">
        Stay up-to-date with what we’re doing
      </div>
      <div className="flex flex-col md:flex-row gap-3 m-auto justify-center w-full md:w-8/12 lg:w-6/12">
        <div className="basis-2/3 ">
          <input
            placeholder="Enter your email address"
            className="border rounded-lg p-2 text-left w-full"
          />
        </div>
        <div className="basis-1/3">
          <Button
            name={"Contact Us"}
            color="bg-red-500 w-full text-md md:text-sm lg:text-md"
            textColor={"text-white"}
            hover="hover:text-red-500 hover:bg-white hover:border hover:border-red-500"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
