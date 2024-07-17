import styled from "styled-components";
import bgImage from "../../assets/bg-rodape.png";

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
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
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 90%;
  }
`;

export const Image = styled.img`
  width: 20%;
  margin: 0 10px;

  @media (max-width: 768px) {
    width: 70%;
    margin: 10px 0;
  }
`;

export const SocialIcon = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    margin: 10px 0;
  }

  svg {
    color: red;
    width: 30px;
    height: 30px;

    @media (max-width: 768px) {
      width: 25px;
      height: 25px;
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

export const HospitalAddress = styled.div`
  color: white;
  text-align: left;
  margin-top: 10px;
  margin-bottom: 20px;
  line-height: 1.3;
  font-size: 0.9em;
  margin-left: 27px;

  @media (max-width: 768px) {
    font-size: 0.8em;
  }
`;
