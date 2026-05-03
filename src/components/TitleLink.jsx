// src/components/TitleLink.jsx
import link from "../assets/link.svg";

const TitleLink = ({ children, as: Component = 'h3', ...props }) => {
  return (
    <button id="TitleLink" className="hover:underline" {...props}>
      <Component className="flex items-center gap-2.5 text-lg">
        <img src={link} alt="Link Icon" className="w-5 h-5" />
        {children}
      </Component>
    </button>
  );
};

export default TitleLink;