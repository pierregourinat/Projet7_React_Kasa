function Rating({ rating }) {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <span key={i} className={i < rating ? "star filler" : "star"}>
        ★
      </span>
    );
  }

  return <div className="rating"> {stars} </div>;
}

export default Rating;
