import styled from "styled-components";

export const SectionWrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-top: 40px;
`;

export const InnerWrapper = styled.div`
  background-color: #d3d3d3;
  width: 70%;
  height: 110px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 30px;
  border-radius: 25px;
  box-sizing: border-box;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 90%;
    height: auto;
  }
`;

export const CentralImage = styled.img`
  width: 30%;
  margin-bottom: 30px;
  margin-top: 40px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const BottomImageWrapper = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 90%;
  }
`;

export const BottomImage = styled.img`
  width: 30%;
  margin: 0 10px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 70%;
    margin: 10px 0;
  }
`;

export const Image = styled.img`
  width: 20%;
  margin: 0 10px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 70%;
    margin: 10px 0;
  }
`;

export const Button = styled.button`
  background-color: red;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  font-size: 16px;
  text-decoration: none;

  &:hover {
    background-color: darkred;
  }
`;
