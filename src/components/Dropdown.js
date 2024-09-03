import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Dropdown({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <h3 onClick={toggleDropdown}> {title} </h3>
      {/* <FontAwesomeIcon icon={faChevronUp} /> */}
      {isOpen && <p> {content} </p>}
    </div>
  );
}

export default Dropdown;
