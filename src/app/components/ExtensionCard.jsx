import Image from "next/image";
import React from "react";
import Button from "./Button";

function ExtensionCard({ title, version, icon }) {
  return (
    <div className="border border-gray-200 px-3 py-8 rounded-lg shadow-lg flex flex-col gap-4 items-center">
      <Image src={icon} width="100" height="100" alt="" />
      <div className="font-bold pt-4">{title}</div>
      <div className="font-thin">Minimum version {version}</div>
      <Image
        alt=""
        src="/images/bg-dots.svg"
        width={"400"}
        height="200"
        className="py-6"
      />
      <Button
        name="Add & Install Extension"
        textColor="text-white text-xs lg:text-md w-full"
        color="bg-indigo-500"
        hover="hover:text-indigo-500 hover:bg-white hover:border hover:border-indigo-500"
      />
    </div>
  );
}

export default ExtensionCard;
