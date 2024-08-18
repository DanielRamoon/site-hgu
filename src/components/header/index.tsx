import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HeaderContainer,
  Logo,
  NavLinks,
  NavLink,
  SubMenu,
  SearchContainer,
  SearchInput,
  SearchIcon,
  ButtonGroup,
  Button,
  Separator,
  ModalOverlay,
  ModalContent,
  CloseButton,
  FormContainer,
} from "./styles";
import logo from "../../assets/logo-hgusaude.png";
import { FaSearch } from "react-icons/fa";

const Header: React.FC = () => {
  const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);
  const [isSubMenuVisible2, setIsSubMenuVisible2] = useState(false);
  const [isSubMenuBeneficiariosVisible, setIsSubMenuBeneficiariosVisible] =
    useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState<"fisica" | "juridica">();

  const handleBeneficiariosMouseEnter = () => {
    setIsSubMenuBeneficiariosVisible(true);
  };

  const handleBeneficiariosMouseLeave = () => {
    setIsSubMenuBeneficiariosVisible(false);
  };

  const handleMouseEnter = () => {
    setIsSubMenuVisible(true);
  };

  const handleMouseLeave = () => {
    setIsSubMenuVisible(false);
  };

  const handleMouseEnter2 = () => {
    setIsSubMenuVisible2(true);
  };

  const handleMouseLeave2 = () => {
    setIsSubMenuVisible2(false);
  };

  const handleBeneficiariosClick = () => {
    window.open(
      "http://sistemas.hgusaude.com.br:88/solusweb/usuario/",
      "_blank"
    );
  };

  const handlePrestadoresClick = () => {
    window.open(
      "http://sistemas.hgusaude.com.br:88/solusweb/prestador/",
      "_blank"
    );
  };

  const handleWebMailClick = () => {
    window.open("https://webmail.hgusaude.com.br", "_blank");
  };

  const openModal = (content: "fisica" | "juridica") => {
    setModalContent(content);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <HeaderContainer>
        <Logo as={Link} to="/">
          <img src={logo} alt="Logo" />
        </Logo>
        <NavLinks>
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ position: "relative" }}
          >
            <NavLink as={Link} to="">
              Nossa Operadora
            </NavLink>
            {isSubMenuVisible && (
              <SubMenu>
                <NavLink as={Link} to="/about">
                  História
                </NavLink>
                <NavLink as={Link} to="/about/team">
                  Nossas Unidades
                </NavLink>
                <NavLink as={Link} to="/about/contact">
                  Proteção de Dados
                </NavLink>
                <NavLink as={Link} to="/about/contact">
                  Ouvidoria
                </NavLink>
              </SubMenu>
            )}
          </div>

          <div
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}
            style={{ position: "relative" }}
          >
            <NavLink as={Link} to="Planos">
              Planos
            </NavLink>
            {isSubMenuVisible2 && (
              <SubMenu>
                <NavLink as={Link} to="/Planos">
                  Individual e/ou família referência
                </NavLink>
                <NavLink as={Link} to="/Planos/team">
                  Individual e/ou família executivo
                </NavLink>
                <NavLink as={Link} to="/Planos/contact">
                  Coletivo empresarial 40%
                </NavLink>
                <NavLink as={Link} to="/Planos/contact">
                  Coletivo empresarial Total
                </NavLink>
              </SubMenu>
            )}
          </div>
          <NavLink href="#servicos">Serviços</NavLink>
        </NavLinks>
        <ButtonGroup>
          <div
            onMouseEnter={handleBeneficiariosMouseEnter}
            onMouseLeave={handleBeneficiariosMouseLeave}
            style={{ position: "relative" }}
          >
            <Button color="#BF2B2B">Beneficiários</Button>
            {isSubMenuBeneficiariosVisible && (
              <SubMenu style={{ position: "absolute", top: "100%", left: 0 }}>
                <NavLink as="button" onClick={() => openModal("fisica")}>
                  Pessoa Física
                </NavLink>
                <NavLink as="button" onClick={() => openModal("juridica")}>
                  Pessoa Jurídica
                </NavLink>
              </SubMenu>
            )}
          </div>
          <Button color="#378EBB" onClick={handlePrestadoresClick}>
            Prestadores
          </Button>
          <Button color="#BF2B2B" onClick={handleBeneficiariosClick}>
            Rede Credenciada
          </Button>
        </ButtonGroup>

        <SearchContainer>
          <span
            onClick={handleWebMailClick}
            style={{
              cursor: "pointer",
              color: "#BF2B2B",
              textDecoration: "none",
            }}
          >
            WebMail
          </span>
          <Separator />
          <SearchInput type="text" placeholder="Pesquise" />
          <SearchIcon>
            <FaSearch />
          </SearchIcon>
        </SearchContainer>
      </HeaderContainer>

      {isModalVisible && (
        <ModalOverlay>
          <CloseButton onClick={closeModal}>X</CloseButton>
          <ModalContent>
            {modalContent === "fisica" && (
              <FormContainer>
                <h2>Pessoa Física</h2>
                <form>
                  <label>Nome:</label>
                  <input type="text" placeholder="Nome" />
                  <label>Endereço:</label>
                  <input type="text" placeholder="Endereço" />
                  <label>Telefone/ WhatsApp:</label>
                  <input type="text" placeholder="Telefone/ WhatsApp" />
                  <label>Data de nascimento:</label>
                  <input type="date" />
                  <label>Mensagem:</label>
                  <textarea placeholder="Sua mensagem" />
                  <button type="submit">Enviar</button>
                </form>
              </FormContainer>
            )}
            {modalContent === "juridica" && (
              <FormContainer>
                <h2>Pessoa Jurídica</h2>
                <form>
                  <label>Nome da empresa:</label>
                  <input type="text" placeholder="Nome da empresa" />
                  <label>Endereço:</label>
                  <input type="text" placeholder="Endereço" />
                  <label>Telefone/ WhatsApp:</label>
                  <input type="text" placeholder="Telefone/ WhatsApp" />
                  <label>Quantidade de funcionários:</label>
                  <input
                    type="number"
                    placeholder="Quantidade de funcionários"
                  />
                  <label>Mensagem:</label>
                  <textarea placeholder="Sua mensagem" />
                  <button type="submit">Enviar</button>
                </form>
              </FormContainer>
            )}
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default Header;
