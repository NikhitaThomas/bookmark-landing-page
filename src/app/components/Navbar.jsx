"use client";
import Image from "next/image";
import React, { useState } from "react";
import Button from "./Button";

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  const handleToggle = () => {
    setNavOpen(!navOpen);
  };
  return (
    <div className="flex justify-between p-8 lg:px-20 md:py-12">
      <div className="p-2">
        <Image
          src="/images/logo-bookmark.svg"
          alt=""
          width={150}
          height={150}
        />
      </div>
      <div className="hidden md:flex md:block">
        <Button
          name="FEATURES"
          textColor="text-gray-400"
          hover={"hover:text-red-500"}
        ></Button>
        <Button
          name="PRICING"
          textColor="text-gray-400"
          hover={"hover:text-red-500"}
        ></Button>
        <Button
          name="CONTACT"
          textColor="text-gray-400"
          hover={"hover:text-red-500"}
        ></Button>
        <Button
          name="LOGIN"
          color="bg-red-400"
          textColor="text-white"
          hover="hover:text-red-400 hover:bg-white hover:border hover:border-red-400"
        ></Button>
      </div>
      <div className="md:hidden">
        <button onClick={handleToggle} className="text-xl">
          {navOpen ? (
            <div className="font-semibold">X</div>
          ) : (
            <Image
              className="mt-3"
              src="/images/icon-hamburger.svg"
              height={20}
              width="20"
              alt=""
            />
          )}
        </button>
        {navOpen && (
          <div className="absolute right-0 w-full text-white text-right p-10 flex bg-gray-400 opacity-90 flex-col gap-2 z-40 mt-2">
            <div>FEATURES</div>
            <div>PRICING</div>
            <div>CONTACT</div>
            <div>LOGIN</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
