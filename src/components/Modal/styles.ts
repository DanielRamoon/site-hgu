// src/components/ModalForm/ModalFormStyles.ts
import styled from "styled-components";

export const ModalOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6); /* Fundo escurecido */
  transition: opacity 0.3s ease; /* Transição suave */
`;

export const ModalContent = styled.div`
  background-color: #fff;
  padding: 15px; /* Padding reduzido */
  border: 1px solid #ddd;
  width: 90%;
  max-width: 500px; /* Reduzido para compactar o layout */
  border-radius: 10px;
  position: relative;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); /* Sombra mais leve */
  transition: transform 0.3s ease; /* Transição suave */
  transform: scale(1.02); /* Animação de escala menor */

  @media (max-width: 768px) {
    width: 95%; /* Ajuste para telas menores */
    padding: 10px; /* Menos padding em telas menores */
  }

  @media (max-width: 480px) {
    width: 100%; /* Ajuste para telas muito pequenas */
    padding: 8px; /* Menos padding em telas muito pequenas */
  }
`;

export const CloseButton = styled.span`
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 20px; /* Font-size reduzido */
  color: #bf2b2b; /* Cor do botão de fechar */
  cursor: pointer;
  transition: color 0.3s ease; /* Transição suave */

  &:hover {
    color: #a92020; /* Cor de destaque ao passar o mouse */
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 10px; /* Margem inferior reduzida */
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px; /* Margem inferior reduzida */
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px; /* Padding reduzido */
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px; /* Font-size ligeiramente reduzido */
  transition: border-color 0.3s ease; /* Transição suave */

  &:focus {
    border-color: #bf2b2b; /* Cor de borda ao focar */
    outline: none;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px; /* Padding reduzido */
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px; /* Font-size ligeiramente reduzido */
  height: 150px; /* Altura bem reduzida */
  resize: vertical; /* Permite redimensionar verticalmente */
  transition: border-color 0.3s ease; /* Transição suave */

  &:focus {
    border-color: #bf2b2b; /* Cor de borda ao focar */
    outline: none;
  }

  @media (max-width: 768px) {
    height: 120px; /* Ajuste para telas menores */
  }

  @media (max-width: 480px) {
    height: 100px; /* Ajuste para telas muito pequenas */
  }
`;

export const ButtonGroup = styled.div`
  margin-top: 10px; /* Margem superior reduzida */
  display: flex;
  gap: 8px; /* Espaço entre os botões reduzido */
`;

export const FormatButton = styled.button`
  padding: 8px 12px; /* Padding reduzido */
  border: none;
  border-radius: 8px;
  background-color: #f8f8f8;
  color: #333;
  cursor: pointer;
  font-size: 14px; /* Font-size ligeiramente reduzido */
  transition: background-color 0.3s ease; /* Transição suave */

  &:hover {
    background-color: #e0e0e0; /* Cor de fundo ao passar o mouse */
  }
`;

export const SubmitButton = styled.button`
  padding: 10px 18px; /* Padding reduzido */
  background-color: #bf2b2b; /* Cor do botão de envio */
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 15px; /* Font-size ligeiramente reduzido */
  transition: background-color 0.3s ease; /* Transição suave */

  &:hover {
    background-color: #a92020; /* Cor de fundo ao passar o mouse */
  }
`;
