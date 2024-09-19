import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/header";
import Footer from "../../components/footer";

// Definindo o tipo de chave de `pageContent`
type PageKeys =
  | "nossa-operadora"
  | "historia"
  | "unidades"
  | "protecao-dados"
  | "ouvidoria"
  | "planos-individual-referencia"
  | "planos-individual-executivo"
  | "planos-coletivo-empresarial-40"
  | "planos-coletivo-empresarial-total";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background-color: #f5f5f5;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #333;
  max-width: 100%;
  line-height: 1.2;
`;

const Content = styled.p`
  font-size: 1.25rem;
  color: #555;
  max-width: 800px;
  line-height: 1.6;
  margin: 0 auto;
  padding: 0 10px;
`;

// Tipagem do conteúdo de cada página
const pageContent: Record<PageKeys, { title: string; text: string }> = {
  "nossa-operadora": {
    title: "Nossa Operadora",
    text: "Aqui você encontra informações detalhadas sobre a história e as operações da nossa empresa.",
  },
  historia: {
    title: "História",
    text: "Nossa história começou há mais de 30 anos, com um compromisso de fornecer saúde de qualidade.",
  },
  unidades: {
    title: "Nossas Unidades",
    text: "Temos unidades em diversas cidades, prontas para atender a você com o melhor atendimento.",
  },
  "protecao-dados": {
    title: "Proteção de Dados",
    text: "Estamos comprometidos com a segurança e privacidade dos seus dados pessoais.",
  },
  ouvidoria: {
    title: "Ouvidoria",
    text: "Entre em contato com nossa ouvidoria para qualquer dúvida ou problema que possa ter.",
  },
  "planos-individual-referencia": {
    title: "Plano Individual e/ou Família Referência",
    text: "Conheça o nosso plano referência, ideal para indivíduos e famílias que buscam excelência em saúde.",
  },
  "planos-individual-executivo": {
    title: "Plano Individual e/ou Família Executivo",
    text: "Este plano oferece um nível superior de cobertura e benefícios, perfeito para quem busca serviços executivos.",
  },
  "planos-coletivo-empresarial-40": {
    title: "Plano Coletivo Empresarial 40%",
    text: "Um plano ideal para empresas, oferecendo 40% de cobertura para colaboradores.",
  },
  "planos-coletivo-empresarial-total": {
    title: "Plano Coletivo Empresarial Total",
    text: "Este plano oferece cobertura total para empresas e seus colaboradores, garantindo saúde completa.",
  },
};

const Page: React.FC = () => {
  const { pageTitle } = useParams<{ pageTitle: string }>();

  // Garantindo que `pageTitle` seja uma chave válida de `pageContent`
  const content = pageContent[pageTitle as PageKeys] || {
    title: "Página Não Encontrada",
    text: "A página solicitada não existe.",
  };

  return (
    <>
      <Header />
      <PageContainer>
        <Title>{content.title}</Title>
        <Content>{content.text}</Content>
      </PageContainer>
      <Footer />
    </>
  );
};

export default Page;
