import { useState } from "react";

function Dropdown({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <h3 onClick={toggleDropdown}> {title} </h3>
      {isOpen && <p> {content} </p>}
    </div>
  );
}

export default Dropdown;
