import {
  MainSliderContainer,
  SliderContent,
  SliderText,
  SliderImage,
  SliderDescription,
  ActionButton,
} from "./styles";
import FtSlider1 from "../../assets/ft-alide01.fw.png";
import backgroundImage from "../../assets/bg-slide01.png";

const MainSlider = () => {
  return (
    <MainSliderContainer style={{ backgroundImage: `url(${backgroundImage})` }}>
      <SliderContent>
        <SliderImage src={FtSlider1} alt="Imagem do Slider" />
        <SliderText>
          <SliderDescription>
            <span>O Plano é sempre</span>
            <br />
            <strong>cuidar de você </strong> e sua
            <br />
            <strong>família</strong>
          </SliderDescription>
          <ActionButton>Clique aqui</ActionButton>
        </SliderText>
      </SliderContent>
    </MainSliderContainer>
  );
};

export default MainSlider;
