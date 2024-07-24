import styled from "styled-components";

export const BranchesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const TitleImage = styled.img`
  width: 100%;
  max-width: 380px;
  margin: 20px 0;
`;

export const BranchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  width: 80%;
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    width: 90%;
  }
`;

export const BranchImage = styled.img`
  width: 250px;
  height: auto;
  border-radius: 10px;
  margin-right: 20px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

export const BranchText = styled.div`
  flex: 1;
  text-align: left;
  color: #777;

  @media (max-width: 768px) {
    text-align: center;
  }
`;
