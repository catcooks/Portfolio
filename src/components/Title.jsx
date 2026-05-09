// src/components/Title.jsx
const Title = ({ children, style }) => {
  return (
    <div className="section-title-container" style={{...style}}>
      <div className="section-title">{children}</div>
      <div className="title-underline"></div>
    </div>
  );
};

export default Title;