import { Container, TextContainerAbout, TitleHistoric } from "./styles";

import Header from "../../components/header";
import Footer from "../../components/footer";

export default function About() {
  return (
    <div>
      <Header />
      <Container>
        <TextContainerAbout>Histórico</TextContainerAbout>
        <TitleHistoric>
          <TitleHistoric>
            Qualidade, profissionalismo e tecnologia são as vertentes que
            norteiam as atividades do Hospital Geral e Urgência desde 20 de
            junho de 1984. Este conceito surgiu da iniciativa de um grupo de
            médicos que desejavam exercer suas atividades, prestando um
            atendimento de qualidade aos seus pacientes em Petrolina. O primeiro
            prédio do HGU estava localizado na Rua Porto Calvo, próximo ao
            Estádio da Associação Rural. Naquela época, o hospital contava com
            cinco leitos e trinta colaboradores. Internamentos, consultas,
            partos e cirurgias de médio porte, como cirurgias ortopédicas e
            urológicas eram os serviços oferecidos à população.
          </TitleHistoric>
          <TitleHistoric>
            Após nove anos da sua fundação, com o crescimento impulsionado pela
            agricultura irrigada no Vale do São Francisco e a instalação de
            novas empresas no Distrito Industrial de Petrolina, surge a
            motivação dentro da instituição para a ampliação de suas instalações
            visando, agora, também oferecer serviços a essas empresas. Assim, em
            1993 surge o Plano HGU Saúde com o intuito de ajudar financeiramente
            a construção do segundo prédio do hospital. Deste modo, começa a se
            edificar o prédio localizado na Av Honorato Viana, em Petrolina. O
            HGU que conhecemos hoje ocupa 2880,97 m² e foi inaugurado em 29 de
            maio de 1997. Mais de 90 atendimentos são feitos em média por dia no
            HGU. Por mês, esse número ultrapassa os 2500. São 164 funcionários
            entre profissionais de saúde, atendimento e hotelaria. Cursos de
            capacitação são realizados periodicamente, promovendo contínua
            atualização dos profissionais e eventos comemorativos e de educação
            em saúde integram a comunidade médica com os pacientes.
          </TitleHistoric>
          <TitleHistoric>
            Investimentos em tecnologia e ampliações de serviços são feitos a
            todo tempo. O HGU é completo. O hospital é o único que possui Centro
            Diagnóstico próprio e foi o pioneiro na implantação de um serviço de
            urgência voltado às crianças e jovens e unidade de tratamento
            intensivo (UTI) neonatal. Tomografia, raio X e um centro cirúrgico
            com três salas para realização de procedimentos de alta
            complexidade, também são oferecidos aos pacientes encaminhados à
            instituição.
          </TitleHistoric>
        </TitleHistoric>
      </Container>
      <Footer />
    </div>
  );
}
