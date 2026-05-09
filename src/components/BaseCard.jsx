// src/components/BaseCard.jsx
import "./loading.css"
const BaseCard = ({ children, className = "", isLoading = false }) => {
  return (
    <div className={`glass-card ${isLoading ? "is-loading" : ""} ${className}`}>
      {isLoading ? (
        <div className="card-loader">
          <div className="spinner"></div>
        </div>
      ) : (
        children
      )}
    </div>
  );
};

export default BaseCard;