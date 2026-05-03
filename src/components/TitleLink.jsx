// src/components/TitleLink.jsx

const TitleLink = ({ children, ...props }) => {
  return (
    <button className="premium-link" {...props}>
      <span className="link-text">{children}</span>
      <svg className="link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
      </svg>
    </button>
  );
};

export default TitleLink;