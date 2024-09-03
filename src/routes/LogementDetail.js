import { useParams } from "react-router-dom";
import logements from "../logements.json";
import ErrorPage from "./ErrorPage";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import Rating from "../components/Rating";
import Footer from "../components/Footer";
import Tags from "../components/Tags";
import Dropdown from "../components/Dropdown";

function LogementDetail() {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);

  if (!logement) {
    return <ErrorPage />;
  }

  return (
    <>
      <Header />
      <div className="logementDetail">
        <Carousel images={logement.pictures} />
        <div className="logementContainer">
          <div className="container1">
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
            </div>
          </div>
          <div className="container2">
            <Tags tags={logement.tags} />
            <Rating rating={parseInt(logement.rating)} />
          </div>
        </div>
        <div className="dropdownWrapper">
          <Dropdown title="Description" content={logement.description} />
          <Dropdown title="Equipements" content={logement.equipments} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LogementDetail;
