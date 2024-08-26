function Card({ title, image }) {
  return (
    <div className="card">
      <img className="cardImg" src={image} alt={title} />
      <h3>{title}</h3>
    </div>
  );
}

export default Card;
