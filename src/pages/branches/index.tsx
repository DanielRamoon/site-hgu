import Header from "../../components/header";
import Footer from "../../components/footer";
import {
  BranchesWrapper,
  TitleImage,
  BranchContainer,
  BranchImage,
  BranchText,
} from "./styles";
import BranchImage1 from "./../../assets/unidade02.png";
import BranchImage2 from "./../../assets/unidade03.png";
import TitleImgSrc from "./../../assets/titulo-unidades.fw.png"; // Substitua pelo caminho correto da sua imagem

export default function Branches() {
  return (
    <div>
      <Header />
      <BranchesWrapper>
        <TitleImage src={TitleImgSrc} alt="Nossas Filiais" />
        <BranchContainer>
          <BranchImage src={BranchImage1} alt="Filial 1" />
          <BranchText>
            <h2>CENPRE </h2>
            <p>
              Descrição da Filial 1. Esta filial está localizada em um ponto
              estratégico, proporcionando facilidade de acesso e conveniência
              para nossos clientes.
            </p>
          </BranchText>
        </BranchContainer>
        <BranchContainer>
          <BranchImage src={BranchImage2} alt="Filial 2" />
          <BranchText>
            <h2>Hospital HGU</h2>
            <p>
              Descrição da Filial 2. Esta filial é conhecida por seu excelente
              atendimento ao cliente e ampla variedade de produtos e serviços.
            </p>
          </BranchText>
        </BranchContainer>
      </BranchesWrapper>
      <Footer />
    </div>
  );
}
