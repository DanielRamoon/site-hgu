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

export const SliderWrapper = styled.div`
  position: relative;
  width: 80%;
  max-width: 800px;
  overflow: hidden;
  margin: 0 auto;
`;

export const Slide = styled.div<{ active: boolean }>`
  display: ${({ active }) => (active ? "block" : "none")};
  width: 100%;
  transition: opacity 0.5s ease-in-out;
`;

export const SlideImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

export const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: #378ebb;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 2;
  border-radius: 50%;
  font-size: 1.5em;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }

  &:first-of-type {
    left: 10px;
  }

  &:last-of-type {
    right: 10px;
  }
`;
