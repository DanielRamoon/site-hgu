import { useState, useEffect } from "react";
import {
  Container,
  TextContainerAbout,
  TitleHistoric,
  SliderWrapper,
  Slide,
  SlideImage,
  ArrowButton,
} from "./styles";

import Header from "../../components/header";
import Footer from "../../components/footer";

// Import images for the slider
import slide1 from "../../assets/ft04_hgu.jpg";
import slide2 from "../../assets/ft05_hgu.jpg";
import slide3 from "../../assets/ft06_hgu.jpg";

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [slide1, slide2, slide3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div>
      <Header />
      <Container>
        <TextContainerAbout>Histórico</TextContainerAbout>

        {/* Slider section */}
        <SliderWrapper>
          <ArrowButton onClick={prevSlide}>{"<"}</ArrowButton>
          {slides.map((slide, index) => (
            <Slide key={index} active={index === currentSlide}>
              <SlideImage src={slide} alt={`Slide ${index + 1}`} />
            </Slide>
          ))}
          <ArrowButton onClick={nextSlide}>{">"}</ArrowButton>
        </SliderWrapper>

        {/* Historic content */}
        <TitleHistoric>
          <p>
            Qualidade, profissionalismo e tecnologia são as vertentes que
            norteiam as atividades do Hospital Geral e Urgência desde 20 de
            junho de 1984. Este conceito surgiu da iniciativa de um grupo de
            médicos que desejavam exercer suas atividades, prestando um
            atendimento de qualidade aos seus pacientes em Petrolina...
          </p>
          <p>
            Após nove anos da sua fundação, com o crescimento impulsionado pela
            agricultura irrigada no Vale do São Francisco...
          </p>
          <p>
            Investimentos em tecnologia e ampliações de serviços são feitos a
            todo tempo. O HGU é completo. O hospital é o único que possui Centro
            Diagnóstico próprio e foi o pioneiro na implantação de um serviço de
            urgência voltado às crianças...
          </p>
        </TitleHistoric>
      </Container>
      <Footer />
    </div>
  );
}
