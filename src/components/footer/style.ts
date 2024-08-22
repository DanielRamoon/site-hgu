import styled from "styled-components";
import { Link } from "react-router-dom";
import bgImage from "../../assets/bg-rodape.png";

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
`;

export const RedLine = styled.div`
  width: 100%;
  height: 10px;
  background-color: red;
`;

export const GrayContainer = styled.div`
  width: 100%;
  background-color: #d3d3d3;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 20%;
  margin: 0 10px;
  margin-left: 3rem;
  transition: transform 0.3s ease, opacity 0.3s ease;

  &:hover {
    transform: scale(1.05);
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    width: 50%;
    margin: 10px 0;
  }
`;

export const SocialIcon = styled.div`
  width: 80px;
  height: 80px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 -50px;
  gap: 10px;
  margin-left: 5rem;

  svg {
    color: #bf2b2b;
    width: 50px;
    height: 50px;
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    margin: 10px 0;

    svg {
      width: 35px;
      height: 35px;
    }
  }
`;

export const SocialIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    margin: 20px 0;
    gap: 20px;
  }
`;

export const BackgroundSection = styled.div`
  width: 100%;
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  padding: 40px 0;
  color: white;
`;

export const ColumnsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
  padding: 0 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Column = styled.div`
  flex: 1;
  margin: 0 10px;

  @media (max-width: 768px) {
    margin: 20px 0;
    width: 100%; /* Adicione esta linha */
    text-align: center; /* Adicione esta linha */
  }
`;

export const ColumnTitle = styled.h3`
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const LinkList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const LinkItem = styled.li`
  font-size: 1em;
  margin: 5px 0;
  font-weight: normal;

  a {
    color: white;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export const ContactButtonWrapper = styled.div`
  margin-left: 5rem;

  img {
    width: 90%;
    transition: transform 0.3s ease;

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  &:hover img {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    margin-left: 10px;
    margin-bottom: 0px;
  }
`;

export const ContactButton = styled(Link)`
  display: block;
  text-decoration: none;
  color: inherit;
`;

export const AddressContainer = styled.div`
  text-align: left;
  padding: 20px;
  color: #fafafa;

  p {
    margin: 0;
  }
`;
