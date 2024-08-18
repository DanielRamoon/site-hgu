import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
  color: #181818;
  height: 180px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    height: auto;
    padding: 1rem;
    margin: 1rem;
  }
`;

export const Logo = styled.div`
  img {
    height: 110px;
    margin-left: 5rem;
    margin-top: 20px;
  }

  @media (max-width: 768px) {
    margin-right: 20%;
  }
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 1.5rem;
  margin-right: 1rem;
  margin-top: 20px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 1rem;
    align-items: center;
  }
`;

export const NavLink = styled.a`
  color: #777;
  text-decoration: none;
  font-size: 1.2rem;

  &:hover {
    color: #bf2b2b;
    text-decoration: none;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f0f0f0;
  padding: 0.5rem;
  border-radius: 5px;
  margin-left: -300px;
  margin-top: -85px;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    margin-left: 1rem;
    margin-top: 0;
    margin-bottom: 1rem;
    margin-top: 20px;
  }
`;

export const SearchInput = styled.input`
  border: none;
  background: none;
  outline: none;
  padding: 0.5rem;
  font-size: 1rem;
`;

export const SearchIcon = styled.div`
  color: #777;
  margin-left: 0.5rem;
`;

export const WebMailLink = styled.a`
  color: #777;
  text-decoration: none;
  font-size: 1rem;
  margin-right: 1rem;

  &:hover {
    color: #bf2b2b;
    text-decoration: none;
  }
`;
export const ButtonGroup = styled.div`
  display: flex;
  gap: 0.6rem;
  margin-top: 20px;
  align-items: stretch; // Garante que todos os itens filhos tenham a mesma altura

  @media (max-width: 768px) {
    gap: 3px;
    margin-top: 1rem;
    padding: 5px;
    align-items: stretch; // Mantém a altura igual em dispositivos móveis
  }
`;

export const Button = styled.button`
  flex: 1; // Garante que todos os botões tenham a mesma largura
  padding: 10px 15px;
  background-color: ${(props) => props.color || "#000"};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  font-size: 1%.2;
  display: flex;
  align-items: center;
  justify-content: center; // Centraliza o texto verticalmente
  height: 100%; // Garante que o botão ocupe 100% da altura disponível

  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 0.9rem;
    height: 3rem; // Mantém a altura igual em dispositivos móveis
  }
`;

export const SubMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  min-width: 150px;

  ${NavLink} {
    margin: 10px 15px;
    color: #777;
    background-color: #fff;
    text-decoration: none;
    border: none;

    &:hover {
      color: #bf2b2a;
    }
  }
`;

export const Separator = styled.div`
  height: 20px;
  width: 1px;
  background-color: #777;
  margin: 0 1rem;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 90%;
  max-width: 500px;
`;

export const CloseButton = styled.button`
  background-color: #bf2b2a;
  font-size: 20px;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    margin-bottom: 20px;
  }

  label {
    margin-bottom: 5px;
  }

  input,
  textarea {
    margin-bottom: 15px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
  }

  buttonSend {
    padding: 10px;
    background-color: #bf2b2a;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;
