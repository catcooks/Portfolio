// src/components/Title.jsx
const Title = ({ children }) => {
  return (
    <div className="section-title-container">
      <h3 className="section-title">{children}</h3>
      <div className="title-underline"></div>
    </div>
  );
};

export default Title;