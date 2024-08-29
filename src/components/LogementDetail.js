import { useParams } from "react-router-dom";
import logements from "../logements.json";
import ErrorPage from "../routes/ErrorPage";
import Header from "./Header";
import Carousel from "./Carousel";
import Rating from "./Rating";
import Description from "./Description";
import Equipements from "./Equipement";
import Footer from "./Footer";
import Tags from "./Tags";

function LogementDetail() {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);

  if (!logement) {
    return <ErrorPage />;
  }

  return (
    <div className="logementDetail">
      <Header />
      <Carousel images={logement.pictures} />
      <div className="logementContainer">
        <div className="logementText">
          <h2> {logement.title} </h2>
          <h3> {logement.location} </h3>
        </div>
        <div className="hostInfo">
          <p>{logement.host.name}</p>
          <img
            src={logement.host.picture}
            alt={logement.host.name}
            className="hostPicture"
          />
          <Rating rating={parseInt(logement.rating)} />
        </div>
      </div>
      <div className="logementInfo">
        <Tags tags={logement.tags} />
        <Description description={logement.description} />
        <Equipements equipments={logement.equipments} />
      </div>
      <Footer />
    </div>
  );
}

export default LogementDetail;
