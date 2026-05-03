// src/components/BaseCard.jsx

const BaseCard = ({ children, className = "" }) => {
  return (
    <div className={`glass-card ${className}`}>
      {children}
    </div>
  );
};

export default BaseCard;