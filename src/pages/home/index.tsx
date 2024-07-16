import Header from "../../components/header";
import MainSlider from "../../components/main-slider/indes";
import CardService from "../../components/cardService";
import News from "../../components/news";
import Plans from "../../components/sectionPlanos";
import Provaider from "../../components/provider";
import SectionInfo from "../../components/sectionInfo";
import Footer from "../../components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <MainSlider />
      <CardService />
      <News />
      <Plans />
      <Provaider />
      <SectionInfo />
      <Footer />
    </>
  );
}
