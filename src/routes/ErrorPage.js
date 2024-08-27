import { useRouteError } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <Header />
      <div className="errorContainer">
        <img src="../404.svg" alt="logo 404"></img>
        <div className="errorText">
          <h1>Oups! La page que vous demandez n'existe pas.</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ErrorPage;
