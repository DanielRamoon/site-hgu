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
  gap: 1.8rem;
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
  font-size: 1.3rem;

  &:hover {
    color: #bf2b2b; /* Muda a cor para #BF2B2B ao passar o mouse */
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
  margin-top: -80px;
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

export const ButtonGroup = styled.div`
  display: flex;
  gap: 0.6rem;
  margin-top: 20px;

  @media (max-width: 768px) {
    display: flex;
    gap: 3px;
    margin-top: 1rem;
    padding: 5px;
  }
`;

export const Button = styled.button<{ color: string }>`
  background-color: ${({ color }) => color};
  color: #fff;
  border: none;
  padding: 0.9rem 2rem;
  font-size: 1.2rem;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    padding: 0.4rem 0.8rem;
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
    text-decoration: none;

    &:hover {
      color: #bf2b2a;
    }
  }
`;
