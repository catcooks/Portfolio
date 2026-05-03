import React, { useState } from "react";
const ExpandableText = ({ children, maxLength = 150 }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const text = typeof children === 'string' ? children : "";
  if (text.length <= maxLength) {
    return (
      <div className="mb-2">
        <p>{text}</p>
      </div>
    );
  }

  return (
    <div className="mb-2">
      <p className="inline transition-all duration-300 ease-in-out">
        {isExpanded ? text : `${text.substring(0, maxLength)}... `}
        <button
          className="inline ml-1 p-0 border-none bg-transparent text-(--primary-color) text-sm font-semibold cursor-pointer hover:underline"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "See less" : "See more"}
        </button>
      </p>
    </div>
  );
};

export default ExpandableText;