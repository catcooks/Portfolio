// src/components/Title.jsx
const Title = ({ children }) => {
  const newLocal = "h-8.75 w-0.75 bg-(--primary-color)";
  return (
    <div className="flex justify-start items-center gap-2.5">
      <div className={newLocal}></div>
      <h1 className="text-[24px] font-bold text-(--text-color) font-(family-name:--heading)">
        {children}
      </h1>
    </div>
  );
};

export default Title;