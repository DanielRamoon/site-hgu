import React from "react";
import {
  HeaderContainer,
  Logo,
  NavLinks,
  NavLink,
  SearchContainer,
  SearchInput,
  SearchIcon,
  ButtonGroup,
  Button,
} from "./styles";
import logo from "../../assets/logo-hgusaude.png";
import { FaSearch } from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo>
        <img src={logo} alt="Logo" />
      </Logo>
      <NavLinks>
        <NavLink href="#operadora">Nossa Operadora</NavLink>
        <NavLink href="#planos">Planos</NavLink>
        <NavLink href="#servicos">Serviços</NavLink>
      </NavLinks>
      <ButtonGroup>
        <Button color="red">Beneficiários</Button>
        <Button color="#378EBB">Prestadores</Button>
        <Button color="red">Rede Credenciada</Button>
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
