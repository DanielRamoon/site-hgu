import React, { useState } from "react";
import Header from "../../components/header";
import MainSlider from "../../components/main-slider/indes";
import CardService from "../../components/cardService";
import News from "../../components/news";
import Plans from "../../components/sectionPlanos";
import Provaider from "../../components/provider";
import SectionInfo from "../../components/sectionInfo";
import Footer from "../../components/footer";
import FixedButton from "../../components/FixedButton";
import ModalForm from "../../components/Modal/ModalForm";

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Header />
      <MainSlider />
      <CardService />
      <News />
      <Plans />
      <Provaider />
      <SectionInfo />
      <FixedButton onClick={handleButtonClick} />
      {isModalOpen && <ModalForm onClose={handleCloseModal} />}
      <Footer />
    </>
  );
};

export default Home;
