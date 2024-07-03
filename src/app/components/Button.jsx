import React from "react";

function Button({ name, color, textColor, hover }) {
  return (
    <button className={`px-8 py-3 rounded-lg ${color} ${textColor} ${hover}`}>
      {name}
    </button>
  );
}

export default Button;
