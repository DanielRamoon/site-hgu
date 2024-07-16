import { useState, useEffect } from "react";
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
import SideImage from "../../assets/foto-destaque01.fw.png";

const Plans = () => {
  const [isMobile, setIsMobile] = useState(false);

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

  return (
    <PlansContainer>
      <Title>
        Conheça os{" "}
        <strong style={{ color: "#000" }}>planos de saúde do HGU</strong>
      </Title>
      <Description>
        Para oferecer mais benefícios e<br /> cobertura diferenciada para
        <br />{" "}
        <strong style={{ color: "#000" }}>
          você, sua família e sua empresa.
        </strong>
      </Description>
      <CardsContainer>
        <Card>
          <img src={Image1} alt="Plano 1" />
        </Card>
        <Card
          style={{ position: "relative", right: isMobile ? "0px" : "184px" }}
        >
          <img src={Image3} alt="Plano 2" />
        </Card>
        <Card>
          <img src={Image2} alt="Plano 3" />
        </Card>
        <Card
          style={{ position: "relative", right: isMobile ? "0px" : "184px" }}
        >
          <img src={Image4} alt="Plano 4" />
        </Card>
      </CardsContainer>
      <SideImageContainer>
        <SideImageElement src={SideImage} alt="Imagem Lateral" />
      </SideImageContainer>
    </PlansContainer>
  );
};

export default Plans;
