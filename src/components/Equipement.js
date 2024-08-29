import React, { useState } from "react";

function Equipements({ equipments }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleEquipements = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="equipements">
      <h3 onClick={toggleEquipements}>Équipements</h3>
      {isOpen && (
        <ul>
          {equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Equipements;
