import {
  PlansWrapper,
  Title,
  PlanContainer,
  PlanImage,
  PlanText,
} from "./styles";
import PlanImage1 from "./../../assets/bt-plano01.png";
import PlanImage2 from "./../../assets/bt-plano02.png";
import PlanImage3 from "./../../assets/bt-plano03.png";
import PlanImage4 from "./../../assets/bt-plano04.png";
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function OurPlans() {
  return (
    <>
      <Header />
      <PlansWrapper>
        <Title>Nossos Planos</Title>
        <PlanContainer>
          <PlanImage src={PlanImage1} alt="Plano 1" />
          <PlanText>
            <h2>Plano 1</h2>
            <p>
              Descrição do Plano 1. Oferece uma série de benefícios e
              características que atendem às suas necessidades.
            </p>
          </PlanText>
        </PlanContainer>
        <PlanContainer>
          <PlanImage src={PlanImage2} alt="Plano 2" />
          <PlanText>
            <h2>Plano 2</h2>
            <p>
              Descrição do Plano 2. Inclui uma variedade de opções e serviços
              para atender a diferentes preferências.
            </p>
          </PlanText>
        </PlanContainer>
        <PlanContainer>
          <PlanImage src={PlanImage3} alt="Plano 3" />
          <PlanText>
            <h2>Plano 3</h2>
            <p>
              Descrição do Plano 3. Ideal para quem busca flexibilidade e
              abrangência em seus serviços.
            </p>
          </PlanText>
        </PlanContainer>
        <PlanContainer>
          <PlanImage src={PlanImage4} alt="Plano 4" />
          <PlanText>
            <h2>Plano 4</h2>
            <p>
              Descrição do Plano 4. Oferece uma cobertura completa com diversas
              opções adicionais.
            </p>
          </PlanText>
        </PlanContainer>
      </PlansWrapper>
      <Footer />
    </>
  );
}
