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
  color: white;
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
