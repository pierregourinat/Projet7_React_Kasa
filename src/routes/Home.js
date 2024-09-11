import "../styles/main.scss";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Banner from "../components/Banner";
import CardContainer from "../components/CardContainer";

function Home() {
  return (
    <>
      <Header />
      <Banner
        imageSrc="./homepage-img.svg"
        text="Chez vous, partout et ailleurs"
      />
      <CardContainer />
      <Footer />
    </>
  );
}

export default Home;
