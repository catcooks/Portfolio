// src/components/BaseCard.jsx

const BaseCard = ({ children }) => {
  return (
    <div className="bg-card-bg shadow-card rounded-card pt-2.5 pb-2.5 pr-7.5 pl-5 m-3.75">
      {children}
    </div>
  );
};

export default BaseCard;