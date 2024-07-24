import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  PlansContainer,
  Title,
  Description,
  CardsContainer,
  Card,
  SideImageContainer,
  SideImageElement,
} from "./styles";
import Image1 from "../../assets/bt-plano01.png";
import Image2 from "../../assets/bt-plano02.png";
import Image3 from "../../assets/bt-plano03.png";
import Image4 from "../../assets/bt-plano04.png";
import SideImage1 from "../../assets/foto-destaque01.fw.png";
import SideImage2 from "../../assets/foto-plano02.fw.png";

const Plans = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const navigate = useNavigate();

  const sideImages = [SideImage1, SideImage2];
  const titles = [
    "Individual e/ou família referência",
    "Individual e/ou família executivo",
    "Coletivo empresarial 40%",
    "Coletivo empresarial Total",
  ];

  const handleCardClick = (index: number) => {
    navigate("/our-plans", {
      state: {
        title: titles[index],
        imageSrc: sideImages[index % sideImages.length], // ajusta o índice se for maior que o número de imagens
      },
    });
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % sideImages.length
        );
        setFade(true);
      }, 500);
    }, 10000);

    return () => clearInterval(interval);
  }, [sideImages.length]);

  return (
    <PlansContainer>
      <Title>
        Conheça os{" "}
        <strong style={{ color: "#378EBB" }}>planos de saúde do HGU</strong>
      </Title>
      <Description>
        Para oferecer mais benefícios e<br /> cobertura diferenciada para
        <br />{" "}
        <strong style={{ color: "#378EBB" }}>
          você, sua família e sua empresa.
        </strong>
      </Description>
      <CardsContainer>
        <Card onClick={() => handleCardClick(0)}>
          <img src={Image1} alt="Plano 1" />
        </Card>
        <Card
          style={{ position: "relative", right: isMobile ? "0px" : "184px" }}
          onClick={() => handleCardClick(2)}
        >
          <img src={Image3} alt="Plano 2" />
        </Card>
        <Card onClick={() => handleCardClick(1)}>
          <img src={Image2} alt="Plano 3" />
        </Card>
        <Card
          style={{ position: "relative", right: isMobile ? "0px" : "184px" }}
          onClick={() => handleCardClick(3)}
        >
          <img src={Image4} alt="Plano 4" />
        </Card>
      </CardsContainer>
      <SideImageContainer>
        <SideImageElement
          src={sideImages[currentImageIndex]}
          alt="Imagem Lateral"
          className={fade ? "fade-in" : "fade-out"}
        />
      </SideImageContainer>
    </PlansContainer>
  );
};

export default Plans;
