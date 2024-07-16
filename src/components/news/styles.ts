import styled from "styled-components";

export const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

export const NewsTitleImage = styled.img`
  width: auto;
  max-width: 100%;
  margin-bottom: 3rem;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 6rem;
  margin-bottom: 2rem;
`;

export const Card = styled.div`
  flex: 1 1 calc(33.33% - 2rem);
  max-width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    height: auto;
    display: block;
    border: 10px solid #999;
    border-radius: 8px 8px 0 0;
  }

  @media (max-width: 768px) {
    flex: 1 1 100%;
    max-width: none;
  }
`;

export const CardText = styled.p`
  text-align: start;
  padding: 1rem;
  color: gray;
`;

export const MoreNewsButton = styled.button`
  background-color: grey;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: darkgrey;
  }
`;
