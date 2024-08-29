import React, { useState } from "react";

function Description({ description }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDescription = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="description">
      <h3 onClick={toggleDescription}>Description</h3>
      {isOpen && <p> {description} </p>}
    </div>
  );
}

export default Description;
