// src/components/ModalForm/ModalForm.tsx
import React, { useState } from "react";
import {
  ModalOverlay,
  ModalContent,
  CloseButton,
  FormGroup,
  SubmitButton,
  Label,
  Input,
  TextArea,
} from "./styles";

interface ModalFormProps {
  onClose: () => void;
}

const ModalForm: React.FC<ModalFormProps> = ({ onClose }) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [celular, setCelular] = useState("");
  const [classificacao, setClassificacao] = useState("Pessoa Física");
  const [mensagem, setMensagem] = useState("");

  // Função para formatar o telefone/celular
  const formatPhoneNumber = (value: string) => {
    value = value.replace(/\D/g, ""); // Remove tudo o que não é dígito
    if (value.length <= 10) {
      // Formata para (99) 9999-9999
      return value.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
    } else {
      // Formata para (99) 99999-9999
      return value.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTelefone(formatPhoneNumber(e.target.value));
  };

  const handleCelularChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCelular(formatPhoneNumber(e.target.value));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica para enviar o formulário
    onClose();
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Nome:</Label>
            <Input value={nome} onChange={(e) => setNome(e.target.value)} />
          </FormGroup>
          <FormGroup>
            <Label>Email:</Label>
            <Input value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormGroup>
          <FormGroup>
            <Label>Telefone:</Label>
            <Input value={telefone} onChange={handlePhoneChange} />
          </FormGroup>
          <FormGroup>
            <Label>Celular:</Label>
            <Input value={celular} onChange={handleCelularChange} />
          </FormGroup>
          <FormGroup>
            <Label>Classificação:</Label>
            <select
              value={classificacao}
              onChange={(e) => setClassificacao(e.target.value)}
            >
              <option value="Pessoa Física">Pessoa Física</option>
              <option value="Pessoa Jurídica">Pessoa Jurídica</option>
              <option value="Credenciado">Credenciado</option>
              <option value="Colaborador">Colaborador</option>
              <option value="Prestador de Serviços">
                Prestador de Serviços
              </option>
            </select>
          </FormGroup>
          <FormGroup>
            <Label>Mensagem:</Label>
            <TextArea
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
            />
          </FormGroup>
          <SubmitButton type="submit">Enviar</SubmitButton>
        </form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ModalForm;
