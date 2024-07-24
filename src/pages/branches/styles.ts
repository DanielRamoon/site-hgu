import styled from "styled-components";

export const BranchesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 2.5em;
  margin: 20px 0;
  color: #378ebb;
`;

export const LargeImage = styled.img`
  width: 100%;
  max-width: 600px;
  margin: 20px 0;
  border-radius: 10px;
`;

export const TextContent = styled.p`
  width: 80%;
  max-width: 800px;
  text-align: justify;
  line-height: 1.6;
  color: #555;
  margin-top: 20px;

  @media (max-width: 768px) {
    width: 90%;
  }
`;
