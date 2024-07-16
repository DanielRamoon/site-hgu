import {
  Container,
  ContentWrapper,
  Section,
  WelcomeText,
  InfoText,
  Button,
  Divider,
  ContactText,
  ContactInfo,
  Icon,
  CenteredTitle,
} from "./styles";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Img from "../../assets/titulo-prestador.fw.png";

export default function Provaider() {
  return (
    <Container>
      <CenteredTitle>
        <img src={Img} alt="Título Prestadores" />
      </CenteredTitle>
      <ContentWrapper>
        <Section>
          <WelcomeText>Seja bem-vindo</WelcomeText>
          <WelcomeText>
            <strong>Prestador Credenciado</strong>
          </WelcomeText>
          <InfoText>Tenha mais informações</InfoText>
          <Button>Clique aqui e fça seu caastro</Button>
        </Section>
        <Divider />
        <Section>
          <ContactText>Serviço de Atendimento ao Prestador</ContactText>
          <ContactInfo>
            <Icon>
              <FaPhoneAlt />
            </Icon>
            <span>4001-2058</span>
          </ContactInfo>
          <ContactInfo>
            <Icon>
              <FaEnvelope />
            </Icon>
            <span>prestador@hgusaude.com.br</span>
          </ContactInfo>
        </Section>
      </ContentWrapper>
    </Container>
  );
}
