import React from "react";
import ExtensionCard from "./ExtensionCard";

function ExtensionSection() {
  return (
    <div className="flex flex-col text-center gap-10 mb-32">
      <div className="font-bold text-2xl">Download the extension</div>
      <div className="w-11/12 md:w-6/12 m-auto font-thin">
        We’ve got more browsers in the pipeline. Please do let us know if you’ve
        got a favourite you’d like us to prioritize.
      </div>
      <div
        className="flex flex-col md:flex-row w-11/12 lg:w-9/12 m-auto gap-10 items-center md:items-stretch"
        style={{ maxHeight: "auto" }}
      >
        <div className="flex items-start">
          <ExtensionCard
            icon={"/images/logo-chrome.svg"}
            title="Add to Chrome"
            version="6.2"
          />
        </div>
        <div className="flex items-center transform translate-y-8">
          <ExtensionCard
            icon={"/images/logo-firefox.svg"}
            title="Add to Firefox"
            version="5.5"
          />
        </div>
        <div className="flex items-end transform translate-y-16">
          <ExtensionCard
            icon={"/images/logo-opera.svg"}
            title="Add to Opera"
            version="4.6"
          />
        </div>
      </div>
    </div>
  );
}

export default ExtensionSection;
