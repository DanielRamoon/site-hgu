import styled from "styled-components";

export const MainSliderContainer = styled.div`
  background-size: cover;
  background-position: left center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 92vh;
  padding: 0 2rem;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 0 1rem;
    height: 56vh;
  }
`;

export const SliderContent = styled.div`
  display: flex;
  align-items: center;
  max-width: 1200px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const SliderIndicators = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-right: 2rem;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

export const Indicator = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: white;
  cursor: pointer;

  &.active {
    background-color: blue;
  }
`;

export const SliderText = styled.div`
  text-align: center;
  color: white;
  flex: 1;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 1rem;
  }
`;

export const SliderImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 1.1rem;
  z-index: 0;

  @media (max-width: 768px) {
    max-width: 47vh;
    margin-bottom: 1rem;
  }
`;

export const SliderDescription = styled.p`
  font-size: 2.6rem;
  text-align: start;
  margin-bottom: 1rem;

  strong {
    font-weight: bold;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
    text-align: center;
  }
`;

export const ActionButton = styled.button`
  background-color: blue;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  margin-right: 250px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: darkblue;
  }

  @media (max-width: 768px) {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    margin-right: 0;
  }
`;
