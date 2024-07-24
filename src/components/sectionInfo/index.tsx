import { Link } from "react-router-dom";

import {
  SectionWrapper,
  InnerWrapper,
  Image,
  CentralImage,
  BottomImageWrapper,
  BottomImage,
  Button,
} from "./style";
import Image01 from "./../../assets/info001.png";
import Image02 from "./../../assets/info02.fw.png";
import Image03 from "./../../assets/info03.fw.png";
import CentralImageSrc from "./../../assets/titulo-unidades.fw.png";
import BottomImage01 from "./../../assets/unidade001.png";
import BottomImage02 from "./../../assets/unidade02.png";
import BottomImage03 from "./../../assets/unidade03.png";

export default function SectionInfo() {
  return (
    <SectionWrapper>
      <InnerWrapper>
        <Image src={Image01} alt="Image 1" />
        <Image src={Image02} alt="Image 2" />
        <Image src={Image03} alt="Image 3" />
      </InnerWrapper>
      <CentralImage src={CentralImageSrc} alt="Central Image" />
      <BottomImageWrapper>
        <BottomImage src={BottomImage01} alt="Bottom Image 1" />
        <BottomImage src={BottomImage02} alt="Bottom Image 2" />
        <BottomImage src={BottomImage03} alt="Bottom Image 3" />
      </BottomImageWrapper>
      <Button as={Link} to="/branches">
        Saiba Mais
      </Button>
    </SectionWrapper>
  );
}
