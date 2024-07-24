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
  ContactButtonWrapper,
  ContactButton, // Certifique-se de que esta importação está correta
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
          <ContactButtonWrapper>
            <ContactButton to="/ouvidoria">
              <Image src={Image02} alt="Image 2" />
            </ContactButton>
          </ContactButtonWrapper>
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
                <a href="#">Internações</a>
              </LinkItem>
              <LinkItem>
                <a href="#">Urgências e emergências</a>
              </LinkItem>
              <LinkItem>
                <a href="#">Cirurgias</a>
              </LinkItem>
              <LinkItem>
                <a href="#">Vacinas</a>
              </LinkItem>
              <LinkItem>
                <a href="#">Odontologia</a>
              </LinkItem>
            </LinkList>
          </Column>
          <Column>
            <ColumnTitle>CONTATO</ColumnTitle>
          </Column>
        </ColumnsContainer>
      </BackgroundSection>
    </FooterWrapper>
  );
}
