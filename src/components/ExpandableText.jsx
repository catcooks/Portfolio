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
          className="expand-btn"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Read less" : "Read more"}
        </button>
      </p>
    </div>
  );
};

export default ExpandableText;