import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 60vh;
  background-color: #378ebb;

  @media (max-width: 768px) {
    height: auto;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  color: white;
  width: 80%;
  position: relative;
  flex: 1;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 90%;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding: 1rem;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

export const WelcomeText = styled.h2`
  margin: 0;
  text-align: start;
`;

export const InfoText = styled.p`
  margin: 1rem 0;
`;

export const Button = styled.button`
  background-color: #bf2b2b;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 4px;
`;

export const Divider = styled.div`
  width: 4px;
  height: 60%;
  background-color: white;
  margin: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContactText = styled.h2`
  margin: 0 0 1rem 0;
`;

export const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const Icon = styled.span`
  margin-right: 0.5rem;
  font-size: 1.5rem;
`;

export const CenteredTitle = styled.div`
  width: 100%;
  text-align: center;
  margin: 1rem 0;
  img {
    max-width: 55%;
    height: auto;
  }
`;
