import { Container, TextContainerAbout, TitleHistoric } from "./styles";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { useLocation } from "react-router-dom";

interface LocationState {
  title: string;
  description: string;
}

const About: React.FC = () => {
  const location = useLocation();
  const { title, description } = location.state as LocationState;

  return (
    <div>
      <Header />
      <Container>
        <TextContainerAbout>{title}</TextContainerAbout>
        <TitleHistoric>
          <TitleHistoric>{description}</TitleHistoric>
        </TitleHistoric>
      </Container>
      <Footer />
    </div>
  );
};

export default About;
