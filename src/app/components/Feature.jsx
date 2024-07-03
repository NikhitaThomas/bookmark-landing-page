import React from "react";

function Feature({ name, setFeature, isSelected }) {
  const buttonStyle = isSelected ? "border-b-4 border-red-200" : "";
  return (
    <button className={`${buttonStyle} p-2`} onClick={() => setFeature(name)}>
      {name}
    </button>
  );
}

export default Feature;
