import { useState } from "react";
import Card from "./Card";
import logements from "../logements.json";

function CardContainer() {
  const [logementsData] = useState(logements);

  const displayLogements = logementsData.slice(0, 6);

  return (
    <div className="cardContainer">
      {displayLogements.map((logement) => (
        <Card
          key={logement.id}
          title={logement.title}
          image={logement.cover}
          id={logement.id}
        />
      ))}
    </div>
  );
}

export default CardContainer;
