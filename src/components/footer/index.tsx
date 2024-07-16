import {
  FooterWrapper,
  RedLine,
  GrayContainer,
  Image,
  SocialIcon,
  SocialIconsContainer,
  BackgroundSection,
  ColumnsContainer,
  Column,
  ColumnTitle,
  LinkList,
  LinkItem,
  HospitalAddress,
} from "./style";
import Image01 from "./../../assets/logo-hgusaude.png";
import Image02 from "./../../assets/bt-faleconosco.fw.png";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <FooterWrapper>
      <RedLine />
      <GrayContainer>
        <Image src={Image01} alt="Image 1" />
        <SocialIconsContainer>
          <SocialIcon>
            <FaFacebook />
          </SocialIcon>
          <SocialIcon>
            <FaInstagram />
          </SocialIcon>
          <SocialIcon>
            <FaWhatsapp />
          </SocialIcon>
        </SocialIconsContainer>
        <Image src={Image02} alt="Image 2" />
      </GrayContainer>
      <BackgroundSection>
        <ColumnsContainer>
          <Column>
            <ColumnTitle>O HGU SAUDE</ColumnTitle>
            <LinkList>
              <LinkItem>
                <a href="#">Sobre Nós</a>
              </LinkItem>
              <LinkItem>
                <a href="#">Nossa Missão</a>
              </LinkItem>
              <LinkItem>
                <a href="#">Visão e Valores</a>
              </LinkItem>
              <LinkItem>
                <a href="#">Equipe</a>
              </LinkItem>
              <LinkItem>
                <a href="#">História</a>
              </LinkItem>
              <LinkItem>
                <a href="#">Parceiros</a>
              </LinkItem>
              <LinkItem>
                <a href="#">Notícias</a>
              </LinkItem>
              <LinkItem>
                <a href="#">Blog</a>
              </LinkItem>
            </LinkList>
          </Column>
          <Column>
            <ColumnTitle>PLANOS</ColumnTitle>
            <LinkList>
              <LinkItem>
                <a href="#">Plano Básico</a>
              </LinkItem>
              <LinkItem>
                <a href="#">Plano Plus</a>
              </LinkItem>
              <LinkItem>
                <a href="#">Plano Premium</a>
              </LinkItem>
              <LinkItem>
                <a href="#">Plano Familiar</a>
              </LinkItem>
              <LinkItem>
                <a href="#">Plano Empresarial</a>
              </LinkItem>
              <LinkItem>
                <a href="#">Adesão</a>
              </LinkItem>
              <LinkItem>
                <a href="#">FAQ</a>
              </LinkItem>
            </LinkList>
          </Column>
          <Column>
            <ColumnTitle>SERVIÇOS</ColumnTitle>
            <LinkList>
              <LinkItem>
                <a href="#">Consultas</a>
              </LinkItem>
              <LinkItem>
                <a href="#">Exames</a>
              </LinkItem>
              <LinkItem>
                <a href="#">Telemedicina</a>
              </LinkItem>
              <LinkItem>
                <a href="#">Internações</a>
              </LinkItem>
              <LinkItem>
                <a href="#">Laboratório</a>
              </LinkItem>
              <LinkItem>
                <a href="#">Urgência e Emergência</a>
              </LinkItem>
            </LinkList>
          </Column>
          <Column>
            <ColumnTitle>FALE CONOSCO</ColumnTitle>
            <LinkList>
              <LinkItem>
                <a href="#">Contato</a>
              </LinkItem>
              <LinkItem>
                <a href="#">Ouvidoria</a>
              </LinkItem>
              <LinkItem>
                <a href="#">Trabalhe Conosco</a>
              </LinkItem>
            </LinkList>
          </Column>
        </ColumnsContainer>
        <HospitalAddress>
          Hospital HGU
          <br />
          Av. Cel. Antônio Hónorato Viana, 129 - Gercino Coelho, Petrolina - PE
          56308-000
        </HospitalAddress>
      </BackgroundSection>
    </FooterWrapper>
  );
}
