import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

function Dropdown({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <div className="dropdownHeader" onClick={toggleDropdown}>
        <h3> {title} </h3>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </div>
      {isOpen &&
        (Array.isArray(content) ? (
          <ul>
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{content}</p>
        ))}
    </div>
  );
}

export default Dropdown;
