import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  MainSliderContainer,
  SliderContent,
  SliderText,
  SliderImageWrapper,
  SliderImage,
  SliderDescription,
  ActionButton,
  SliderIndicators,
  Indicator,
} from "./styles";
import FtSlider1 from "../../assets/ft-alide01.fw.png";
import FtSlider2 from "../../assets/foto-slide02.fw.png";
import FtSlider3 from "../../assets/foto-slide03.fw.png";
import backgroundImage1 from "../../assets/bg-slide01.png";

const MainSlider: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);
  const isMobile = window.innerWidth <= 768;
  const navigate = useNavigate();

  const images = [FtSlider1, FtSlider2, FtSlider3];

  // Mantém apenas uma imagem de fundo fixa
  const backgroundImage = backgroundImage1;

  const descriptions = [
    "O Plano é sempre cuidar de você e sua família",
    "Venha conhecer nosso plano Empresarial",
    "Telemedicina: Mais segurança e praticidade para você.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsImageLoaded(false); // Marcar imagem como não carregada
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const image = new Image();
    image.src = backgroundImage;
    image.onload = () => setIsImageLoaded(true);
  }, [backgroundImage]);

  const handleIndicatorClick = (index: number) => {
    setIsImageLoaded(false); // Marcar imagem como não carregada
    setCurrentImageIndex(index);
  };

  const handleButtonClick = () => {
    const titles = [
      "Plano de Saúde Familiar",
      "Plano de Saúde Empresarial",
      "Telemedicina",
    ];
    const descriptions = [
      "O Plano de Saúde Familiar oferece uma cobertura completa e personalizada para atender às necessidades de saúde de sua família...",
      "O Plano de Saúde Empresarial é projetado para proporcionar segurança e bem-estar aos seus funcionários...",
      "A Telemedicina é a solução ideal para quem busca praticidade e segurança no atendimento médico...",
    ];
    navigate("/description-slide", {
      state: {
        title: titles[currentImageIndex],
        description: descriptions[currentImageIndex],
      },
    });
  };

  return (
    <MainSliderContainer
      style={{
        backgroundImage: `url(${backgroundImage})`, // Apenas uma imagem de fundo
        opacity: isImageLoaded ? 1 : 1, // Aplicar opacidade baseada no carregamento
        transition: "background-image 1s ease-in-out, opacity 0.5s ease-in-out", // Transição suave
      }}
    >
      <SliderContent>
        <SliderImageWrapper>
          {images.map((image, index) => (
            <SliderImage
              key={index}
              src={image}
              alt="Imagem do Slider"
              style={
                index === 1
                  ? isMobile
                    ? { width: "90%", top: "-120px" } // Estilos para mobile
                    : { width: "80%", top: "-160px" } // Estilos para desktop
                  : {}
              }
              className={currentImageIndex === index ? "active" : ""}
            />
          ))}
        </SliderImageWrapper>
        <SliderText>
          <SliderDescription>
            <span>{descriptions[currentImageIndex]}</span>
          </SliderDescription>
          <ActionButton onClick={handleButtonClick}>Clique aqui</ActionButton>
        </SliderText>
      </SliderContent>
      <SliderIndicators>
        {images.map((_, index) => (
          <Indicator
            key={index}
            className={currentImageIndex === index ? "active" : ""}
            onClick={() => handleIndicatorClick(index)}
          />
        ))}
      </SliderIndicators>
    </MainSliderContainer>
  );
};

export default MainSlider;
