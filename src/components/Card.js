import { Link } from "react-router-dom";

function Card({ title, image, id }) {
  return (
    <Link to={`/logement/${id}`} className="cardLink">
      <div className="card">
        <img className="cardImg" src={image} alt={title} />
        <h3>{title}</h3>
      </div>
    </Link>
  );
}

export default Card;
