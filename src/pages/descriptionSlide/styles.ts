import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  justify-content: center;
  margin-top: 80px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 2rem;
    margin-top: 40px;
  }
`;

export const TextContainerAbout = styled.h1`
  color: #378ebb;
  margin-bottom: 1rem;
  position: relative;
  top: -2rem;
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
    top: -1rem;
  }
`;

export const TitleHistoric = styled.p`
  color: #737373;
  line-height: 1.6;
  font-size: 1.1rem;
  max-width: 800px;
  text-align: justify;
  margin-top: 1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0 1rem;
  }
`;
