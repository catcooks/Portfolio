// src/components/Tag.jsx
const Tag = ({ children }) => {
  return (
    <div className="
      group
      inline-flex justify-center items-center 
      bg-primary-light border border-[#4f46e533] 
      rounded-md m-0.5 max-w-fit 
      cursor-pointer transition-all duration-200 
      hover:bg-primary hover:border-primary
    ">
      <span className="
        font-heading font-medium text-[calc(var(--text-font-size)-2px)]
        text-primary px-2 py-0.5
        transition-colors duration-200
        group-hover:text-text-on-dark
      ">
        {children}
      </span>
    </div>
  );
};

export default Tag;