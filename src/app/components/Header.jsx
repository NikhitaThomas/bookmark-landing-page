import Image from "next/image";
import React from "react";
import Button from "./Button";

function Header() {
  return (
    <div
      className="flex flex-col md:flex-row w-11/12 mx-auto items-center gap-10 my-28"
      // style={{ height: "calc(100vh)", maxHeight: "auto" }}
    >
      <div className="basis-1/2 order-2 md:order-1">
        <div className="flex flex-col gap-10 p-2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-semibold">
            A Simple Bookmark Manager
          </h2>
          <p className="font-extralight leading-7">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className="flex gap-2 justify-center md:justify-start">
            <Button
              name="Get it on Chrome"
              color={"bg-indigo-500"}
              textColor="text-white"
              hover="hover:text-indigo-500 hover:bg-white hover:border hover:border-indigo-500"
            />
            <Button
              name="Get it on Firefox"
              color={"bg-gray-100"}
              textColor="text-black"
              hover="hover:text-black hover:bg-white hover:border hover:border-black"
            />
          </div>
        </div>
      </div>
      <div className="basis-1/2 order-1 md:order-2 relative w-full h-auto">
        <Image
          className="relative object-cover z-10 w-full h-auto"
          src="/images/illustration-hero.svg"
          alt=""
          // layout="fill"
          width={500}
          height={500}
        />{" "}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/4 translate-y-16 bg-indigo-500 w-full h-5/6 rounded-full z-0"></div>
      </div>
    </div>
  );
}

export default Header;
