import { CardsContainer, Card } from "./styles";
import img1 from "../../assets/destaque01.png";
import img2 from "../../assets/destaque02.png";
import img3 from "../../assets/destaque03.png";
import img4 from "../../assets/destaque04.png";
import img5 from "../../assets/destaque05.png";
import img6 from "../../assets/destaque06.png";
import img7 from "../../assets/destaque07.png";
import img8 from "../../assets/destaque08.png";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

export default function CardService() {
  return (
    <CardsContainer>
      {images.map((image, index) => (
        <Card key={index} onClick={() => alert(`Clicked on card ${index + 1}`)}>
          <img src={image} alt={`Card ${index + 1}`} />
        </Card>
      ))}
    </CardsContainer>
  );
}
