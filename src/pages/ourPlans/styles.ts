import styled from "styled-components";

export const PlansWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Title = styled.h1`
  color: #4a4a4a;
  text-align: center;
  margin-bottom: 30px;
  font-size: 24px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const PlanContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  width: 100%;
  max-width: 800px;
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 90%;
  }
`;

export const PlanImage = styled.img`
  width: 350px;
  height: auto;
  border-radius: 10px;
  margin-right: 20px;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

export const PlanText = styled.div`
  flex: 1;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }

  h2 {
    color: #4a4a4a;
    margin-bottom: 10px;
    font-size: 20px;

    @media (max-width: 768px) {
      font-size: 18px;
    }
  }

  p {
    color: #7d7d7d;
    font-size: 16px;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
`;
