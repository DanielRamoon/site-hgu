import styled from "styled-components";

export const MainSliderContainer = styled.div`
  background-size: cover;
  background-position: left center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64vh;
  padding: 0 2rem;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 0 1rem;
    height: 60vh;
  }
`;

export const SliderContent = styled.div`
  display: flex;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

export const SliderImageWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 0;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SliderImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  position: absolute;
  top: -118px;
  left: 0;
  z-index: 1;
  opacity: 0;
  transition: opacity 1s ease-in-out;

  &.active {
    opacity: 1;
  }

  &.fade-out {
    opacity: 0;
    z-index: 0;
  }

  @media (min-width: 769px) {
    width: 70%;
  }
`;

export const SliderIndicators = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-right: 2rem;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 768px) {
    margin-right: 0;
    display: none;
  }
`;

export const Indicator = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: white;
  cursor: pointer;

  &.active {
    background-color: #378ebb;
    display: none;
  }
`;

export const SliderText = styled.div`
  text-align: center;
  color: white;
  flex: 1;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 1rem;
    font-size: 1.2rem;
    position: relative;
    top: -150px;
  }
`;

export const SliderDescription = styled.p`
  font-size: 3.2rem;
  text-align: start;
  margin-bottom: 1rem;

  strong {
    font-weight: bold;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
    text-align: center;
  }
`;

export const ActionButton = styled.button`
  background-color: #378ebb;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  margin-right: 450px;
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
