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
import backgroundImage2 from "../../assets/bg-slide02.png";
import backgroundImage3 from "../../assets/bg-slide03.png";

const MainSlider: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [fade, setFade] = useState<boolean>(false);
  const navigate = useNavigate();

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

  const getDescription = () => {
    switch (currentImageIndex) {
      case 1:
        return "Venha conhecer nosso plano Empresarial";
      case 2:
        return "Telemedicina: Mais segurança e praticidade para você.";
      default:
        return "O Plano é sempre cuidar de você e sua família";
    }
  };

  const handleButtonClick = () => {
    const titles = [
      "Plano de Saúde Familiar",
      "Plano de Saúde Empresarial",
      "Telemedicina",
    ];
    const descriptions = [
      "O Plano de Saúde Familiar oferece uma cobertura completa e personalizada para atender às necessidades de saúde de sua família. Garantimos atendimento médico de qualidade em uma ampla rede de hospitais, clínicas e laboratórios credenciados. Além de consultas e exames, o plano inclui internações e procedimentos cirúrgicos, assegurando que você e seus entes queridos recebam o melhor tratamento possível. Com o Plano de Saúde Familiar, você tem acesso a programas de prevenção e promoção da saúde, como vacinas e check-ups periódicos, ajudando a manter todos saudáveis e protegidos. Aproveite ainda benefícios exclusivos como descontos em medicamentos e serviços de emergência 24 horas, tudo para oferecer tranquilidade e segurança para sua família em qualquer situação.",
      "O Plano de Saúde Empresarial é projetado para proporcionar segurança e bem-estar aos seus funcionários, aumentando a produtividade e a satisfação no trabalho. Oferecemos planos personalizados que se adequam às necessidades específicas de empresas de todos os portes, garantindo atendimento médico de qualidade. Além da cobertura médica completa, que inclui consultas, exames, internações e cirurgias, o plano oferece programas de saúde ocupacional, como exames periódicos e campanhas de vacinação, para manter a saúde dos colaboradores em dia. O Plano de Saúde Empresarial também inclui suporte especializado para a gestão de saúde dentro da empresa, ajudando a reduzir o absenteísmo e promover um ambiente de trabalho mais saudável. Com acesso a uma rede ampla e qualificada de prestadores de serviço, seus funcionários estarão sempre bem cuidados.",
      "A Telemedicina é a solução ideal para quem busca praticidade e segurança no atendimento médico, permitindo consultas a distância com profissionais de saúde altamente qualificados. Através de plataformas digitais seguras, você pode realizar consultas médicas, obter diagnósticos, receber prescrições eletrônicas e acompanhar tratamentos sem precisar sair de casa. Este serviço é especialmente útil para pessoas com mobilidade reduzida, residentes em áreas remotas ou com agendas muito ocupadas. A Telemedicina oferece rapidez no atendimento, com agendamentos flexíveis e redução no tempo de espera, além de garantir a continuidade do cuidado através de consultas de follow-up e monitoramento remoto de condições crônicas. Com a Telemedicina, você tem acesso a uma ampla gama de especialidades médicas, tudo no conforto e na segurança do seu lar, facilitando o cuidado com a sua saúde e de sua família.",
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
            <span>{getDescription()}</span>
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
