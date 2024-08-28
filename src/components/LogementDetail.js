import { useParams } from "react-router-dom";
import logements from "../logements.json";
import ErrorPage from "../routes/ErrorPage";
import Header from "./Header";
import Carousel from "./Carousel";

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
    </div>
  );
}

export default LogementDetail;
