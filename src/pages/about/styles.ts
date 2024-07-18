import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  justify-content: center;
  align-items: center;
  margin-top: 80px;

  @media (max-width: 768px) {
    height: 123vh;
  }
`;

export const TextContainerAbout = styled.h1`
  color: #378ebb;
  margin-bottom: 0.2;
  position: relative;
  top: -4rem;
`;
export const TitleHistoric = styled.p`
  display: flex;
  color: #737373;
`;
