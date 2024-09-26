import { useLocation } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import {
  BranchesWrapper,
  Title,
  TextContent,
  SliderWrapper,
  Slide,
  SlideImage,
  ArrowButton,
} from "./styles";

import slide1 from "../../assets/ft01_hgu.jpg";
import slide2 from "../../assets/ft02_hgu.jpg";
import slide3 from "../../assets/ft03_hgu.jpg";
import slide4 from "../../assets/ft04_hgu.jpg";
import slide5 from "../../assets/unidade001.png";
import slide6 from "../../assets/unidade02.png";
import slide7 from "../../assets/unidade03.png";

interface LocationState {
  title: string;
  imageSrc: string;
}

const defaultTextContent = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est 
  vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere ligula eget, pretium urna. 
  Nulla facilisi. Vivamus tristique euismod nisi, sed faucibus libero ultricies eget. Phasellus 
  bibendum, quam at congue vestibulum, felis eros fermentum lectus, vel ultricies justo erat 
  a metus. Duis in magna ut urna volutpat interdum. Nam accumsan neque sed velit facilisis, 
  non interdum nunc cursus. Pellentesque habitant morbi tristique senectus et netus et malesuada 
  fames ac turpis egestas. Ut aliquet nisl in enim consequat, nec consectetur lorem malesuada.
  
  Sed in volutpat elit, in pharetra libero. Proin lacinia pulvinar nulla, et laoreet est dignissim
  nec. Cras gravida nunc sed lorem interdum, ac bibendum libero ultrices. Fusce eu mauris ac 
  magna fermentum tincidunt a et mauris. Ut a lectus at lacus vehicula lacinia. Integer dapibus 
  mauris eget sem aliquam, ac efficitur risus iaculis. Sed aliquam, erat a tincidunt sodales, 
  purus mi facilisis eros, at bibendum sapien ex vitae libero. Ut sit amet orci neque. Integer 
  quis bibendum nibh. Donec malesuada, turpis vel scelerisque cursus, felis purus fermentum nisl, 
  a cursus enim turpis eu augue.
  
  Integer laoreet orci nec lorem posuere fermentum. Curabitur et consectetur libero. Etiam quis 
  lorem lacinia, porttitor lectus sit amet, lacinia turpis. Aliquam erat volutpat. Etiam scelerisque 
  mi eget nibh lacinia, nec venenatis turpis venenatis. Mauris vehicula libero at erat pulvinar, 
  ac cursus ligula sollicitudin. Duis sit amet lacus non lorem suscipit aliquet. Donec sodales 
  varius risus vel feugiat. Nulla vestibulum lobortis ex, ac rhoncus magna sodales sit amet. 
  Praesent eu suscipit dui, in sollicitudin magna.
`;

export default function Branches() {
  const location = useLocation();
  const { title } = (location.state || {}) as LocationState;

  const [currentSlide, setCurrentSlide] = useState(0);
  const [, setCurrentImageSlider] = useState(0);

  const slides = useMemo(() => {
    return title === "Espaço Girasol"
      ? [slide1, slide2]
      : title === "CENPRE - Centro de Prevenção e Reabilitação do HGU"
      ? [slide3, slide4]
      : title === "Hospital HGU Saúde"
      ? [slide1, slide2]
      : [];
  }, [title]);

  // Slides para o novo slider
  const imageSlides = [slide5, slide6, slide7];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageSlider((prev) => (prev + 1) % imageSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [imageSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // const nextImageSlide = () => {
  //   setCurrentImageSlider((prev) => (prev + 1) % imageSlides.length);
  // };

  // const prevImageSlide = () => {
  //   setCurrentImageSlider(
  //     (prev) => (prev - 1 + imageSlides.length) % imageSlides.length
  //   );
  // };

  // Adicionando scroll para o topo ao carregar o componente
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <BranchesWrapper>
        <Title>{title || "Nossas Filiais"}</Title>

        {/* Slider Principal */}
        {slides.length > 0 ? (
          <SliderWrapper>
            <ArrowButton onClick={prevSlide}>{"<"}</ArrowButton>
            {slides.map((slide, index) => (
              <Slide key={index} active={index === currentSlide}>
                <SlideImage src={slide} alt={`Slide ${index + 1}`} />
              </Slide>
            ))}
            <ArrowButton onClick={nextSlide}>{">"}</ArrowButton>
          </SliderWrapper>
        ) : (
          <p></p>
        )}

        {/* Novo Slider com 3 imagens */}
        {/* <SliderWrapper>
          <ArrowButton onClick={prevImageSlide}>{"<"}</ArrowButton>
          {imageSlides.map((slide, index) => (
            <Slide key={index} active={index === currentImageSlider}>
              <SlideImage src={slide} alt={`Image Slide ${index + 1}`} />
            </Slide>
          ))}
          <ArrowButton onClick={nextImageSlide}>{">"}</ArrowButton>
        </SliderWrapper> */}

        <TextContent>{defaultTextContent}</TextContent>
      </BranchesWrapper>
      <Footer />
    </div>
  );
}
