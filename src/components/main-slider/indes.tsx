import React, { useState, useEffect } from "react";
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
import backgroundImage2 from "../../assets/bg-slide02.png";
import backgroundImage3 from "../../assets/bg-slide03.png";

const MainSlider: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [fade, setFade] = useState<boolean>(false);

  const images = [FtSlider1, FtSlider2, FtSlider3];
  const backgrounds = [backgroundImage1, backgroundImage2, backgroundImage3];

  const handleIndicatorClick = (index: number) => {
    setFade(true);
    setTimeout(() => {
      setCurrentImageIndex(index);
      setFade(false);
    }, 100);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(false);
      }, 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <MainSliderContainer
      style={{ backgroundImage: `url(${backgrounds[currentImageIndex]})` }}
    >
      <SliderContent>
        <SliderImageWrapper>
          <SliderImage
            src={images[currentImageIndex]}
            alt="Imagem do Slider"
            className={fade ? "fade" : ""}
          />
        </SliderImageWrapper>
        <SliderText>
          <SliderDescription>
            <span>O Plano é sempre</span>
            <br />
            <strong>cuidar de você </strong> e sua
            <br />
            <strong>família</strong>
          </SliderDescription>
          <ActionButton>Clique aqui</ActionButton>
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
