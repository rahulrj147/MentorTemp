import React from "react";

const HighlightText = ({text}) => {
  return (
    <span className="bg-gradient-to-b from-[#0fe5f8] to-[#5bb87a] text-transparent bg-clip-text font-bold">
      {"  "}
    {text}
  </span>
  
  );
};

export default HighlightText;