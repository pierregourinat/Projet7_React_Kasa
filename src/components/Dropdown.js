import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

function Dropdown({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <div className="dropdownHeader" onClick={toggleDropdown}>
        <h3> {title} </h3>
        <div className={`chevron ${isOpen ? "rotate" : ""}`}>
          {!isOpen ? <ChevronUp /> : <ChevronUp />}
        </div>
      </div>
      <div className={`dropdownContent ${isOpen ? "open" : ""}`}>
        {Array.isArray(content) ? (
          <ul>
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{content}</p>
        )}
      </div>
    </div>
  );
}

export default Dropdown;
