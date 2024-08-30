import "../styles/main.scss";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Banner from "../components/Banner";
import CardContainer from "../components/CardContainer";

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <CardContainer />
      <Footer />
    </>
  );
}

export default Home;
