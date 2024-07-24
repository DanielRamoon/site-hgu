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
import Image01 from "./../../assets/logo002.fw.png";
import Image02 from "./../../assets/bt-faleconosco.fw.png";
import { FaFacebook, FaInstagram, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <FooterWrapper>
      <RedLine />
      <GrayContainer>
        <Image src={Image01} alt="Image 1" />
        <SocialIconsContainer>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcon>
              <FaFacebook />
            </SocialIcon>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcon>
              <FaInstagram />
            </SocialIcon>
          </a>
          <a
            href="tel:+5511999999999" // Substitua pelo número de telefone real
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcon>
              <FaPhone />
            </SocialIcon>
          </a>
          <a
            href="https://www.seusite.com/faleconosco"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginLeft: "5rem" }}
          >
            <Image src={Image02} alt="Image 2" style={{ width: "70%" }} />
          </a>
        </SocialIconsContainer>
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
                <a href="#">Individual e/ou família referência </a>
              </LinkItem>
              <LinkItem>
                <a href="#">Individual e/ou família executivo </a>
              </LinkItem>
              <LinkItem>
                <a href="#">Coletivo empresarial 40%</a>
              </LinkItem>
              <LinkItem>
                <a href="#">Coletivo empresarial Total</a>
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
          Av. Fernando Goes, 1076, centro, Petrolina-PE.
        </HospitalAddress>
      </BackgroundSection>
    </FooterWrapper>
  );
}
