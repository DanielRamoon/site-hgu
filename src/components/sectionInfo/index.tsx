import { useNavigate } from "react-router-dom";
import {
  SectionWrapper,
  InnerWrapper,
  Image,
  CentralImage,
  BottomImageWrapper,
  BottomImage,
} from "./style";
import Image02 from "./../../assets/info02.fw.png";
import Image03 from "./../../assets/info03.fw.png";
import CentralImageSrc from "./../../assets/titulo-unidades.fw.png";
import BottomImage02 from "./../../assets/unidade02.png";
import BottomImage03 from "./../../assets/unidade03.png";
import BottomImage01 from "./../../assets/unidade001.png";

interface HandleImageClickParams {
  title: string;
  imageSrc: string;
}

export default function SectionInfo() {
  const navigate = useNavigate();

  const handleImageClick = ({ title, imageSrc }: HandleImageClickParams) => {
    navigate("/branches", {
      state: { title, imageSrc },
    });
  };

  const handleAnsClick = () => {
    window.open("https://www.gov.br/ans/pt-br", "_blank");
  };

  const handleLgpdClick = () => {
    window.open("https://www.hgusaude.com.br/lgpd.php", "_blank");
  };

  return (
    <SectionWrapper>
      <InnerWrapper>
        <Image src={Image02} alt="Image 2" onClick={handleAnsClick} />
        <Image src={Image03} alt="Image 3" onClick={handleLgpdClick} />
      </InnerWrapper>
      <CentralImage src={CentralImageSrc} alt="Central Image" />
      <BottomImageWrapper>
        <BottomImage
          src={BottomImage01}
          alt="Bottom Image 2"
          onClick={() =>
            handleImageClick({
              title: "Espaço Girasol",
              imageSrc: BottomImage01,
            })
          }
        />
        <BottomImage
          src={BottomImage02}
          alt="Bottom Image 1"
          onClick={() =>
            handleImageClick({
              title: "CENPRE - Centro de Prevenção e Reabilitação do HGU",
              imageSrc: BottomImage02,
            })
          }
        />
        <BottomImage
          src={BottomImage03}
          alt="Bottom Image 3"
          onClick={() =>
            handleImageClick({
              title: "Hospital HGU Saúde",
              imageSrc: BottomImage03,
            })
          }
        />
      </BottomImageWrapper>
    </SectionWrapper>
  );
}
