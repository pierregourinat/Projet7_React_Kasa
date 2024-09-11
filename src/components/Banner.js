function Banner({ imageSrc, text }) {
  return (
    <div id="Banner">
      {text && <h1> {text} </h1>}
      <img src={imageSrc} alt="Un paysage"></img>
    </div>
  );
}

export default Banner;
