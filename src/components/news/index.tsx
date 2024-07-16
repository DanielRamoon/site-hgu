import {
  NewsContainer,
  NewsTitleImage,
  CardsContainer,
  Card,
  CardText,
  MoreNewsButton,
} from "./styles";
import Image1 from "../../assets/ft.news02.png";
import Image2 from "../../assets/ft.news02.png";
import Image3 from "../../assets/ft.news02.png";
import TitleImage from "../../assets/titulo-noticias.png";

const newsData = [
  {
    id: 1,
    imgSrc: Image1,
    text: "A nptícia do blog do Hospital HGU, vai aparecer aqui;",
    link: "#!",
  },
  {
    id: 2,
    imgSrc: Image2,
    text: "A nptícia do blog do Hospital HGU, vai aparecer aqui;",
    link: "#!",
  },
  {
    id: 3,
    imgSrc: Image3,
    text: "A nptícia do blog do Hospital HGU, vai aparecer aqui;",
    link: "#!",
  },
];

export default function News() {
  return (
    <NewsContainer>
      <NewsTitleImage src={TitleImage} alt="Título das Notícias" />
      <CardsContainer>
        {newsData.map((news) => (
          <Card key={news.id}>
            <a href={news.link}>
              <img src={news.imgSrc} alt={`Notícia ${news.id}`} />
            </a>
            <CardText>{news.text}</CardText>
          </Card>
        ))}
      </CardsContainer>
      <MoreNewsButton>Mais Notícias</MoreNewsButton>
    </NewsContainer>
  );
}
