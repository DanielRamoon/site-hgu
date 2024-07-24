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
} from "./styles";
import logo from "../../assets/logo-hgusaude.png";
import { FaSearch } from "react-icons/fa";

const Header: React.FC = () => {
  const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);
  const [isSubMenuVisible2, setIsSubMenuVisible2] = useState(false);

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

  return (
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
                Individual
              </NavLink>
              <NavLink as={Link} to="/Planos/team">
                Familiar
              </NavLink>
              <NavLink as={Link} to="/Planos/contact">
                Coletivo Empresarial
              </NavLink>
              <NavLink as={Link} to="/Planos/contact">
                Corporativo 30%
              </NavLink>
            </SubMenu>
          )}
        </div>
        <NavLink href="#servicos">Serviços</NavLink>
      </NavLinks>
      <ButtonGroup>
        <Button color="#BF2B2B" onClick={handleBeneficiariosClick}>
          Beneficiários
        </Button>
        <Button color="#378EBB" onClick={handlePrestadoresClick}>
          Prestadores
        </Button>
        <Button color="#BF2B2B" onClick={handleBeneficiariosClick}>
          Rede Credenciada
        </Button>
      </ButtonGroup>
      <SearchContainer>
        <SearchInput type="text" placeholder="Pesquise" />
        <SearchIcon>
          <FaSearch />
        </SearchIcon>
      </SearchContainer>
    </HeaderContainer>
  );
};

export default Header;
