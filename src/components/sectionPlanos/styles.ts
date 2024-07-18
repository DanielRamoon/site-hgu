import styled from "styled-components";

export const PlansContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: 123vh;
  }
`;

export const Title = styled.h2`
  color: #a52a2a;
  text-align: center;
  margin-bottom: 1rem;
  padding-right: 30rem;
  font-size: 2rem;

  @media (max-width: 768px) {
    padding-right: 0;
  }
`;

export const Description = styled.h2`
  text-align: start;
  margin-bottom: 0rem;
  padding-right: 34rem;
  margin-top: -0.9rem;
  color: #a52a2a;
  font-size: 2rem;

  @media (max-width: 768px) {
    text-align: center;
    padding-right: 0;
  }
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 0;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  width: calc(50% - -5rem);
  margin: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  margin: 0;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
    border-radius: 8px 0 0 8px;
    z-index: -1;
  }

  .card-content {
    flex: 1;
    padding: 1rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: none;
  }
`;

export const SideImageContainer = styled.div`
  position: absolute;
  top: 114rem;
  left: 50rem;
  z-index: -1;

  @media (max-width: 768px) {
    position: relative;
    top: 0rem;
    left: 2rem;
    z-index: -1;
    text-align: center;
  }
`;

export const SideImageElement = styled.img`
  width: 80%;
  height: auto;
  display: block;
  opacity: 1;
  transition: opacity 1s ease-in-out;

  &.fade-out {
    opacity: 0;
  }

  @media (max-width: 768px) {
    margin: 5rem 0;
  }
`;
