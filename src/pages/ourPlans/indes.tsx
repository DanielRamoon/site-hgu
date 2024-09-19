import { useLocation } from "react-router-dom";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { BranchesWrapper, Title, LargeImage, TextContent } from "./styles";

interface LocationState {
  title: string;
  imageSrc: string;
}

const defaultTextContent = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt 
  est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere ligula 
  eget, pretium urna. Morbi at tincidunt arcu. Vestibulum ante ipsum primis in 
  faucibus orci luctus et ultrices posuere cubilia curae; Phasellus ultricies, 
  odio vitae rutrum vulputate, libero diam sollicitudin lorem, nec pretium 
  ligula urna eget sem. Nam volutpat erat at sem luctus, a condimentum turpis 
  fermentum. Integer elementum risus sit amet odio sagittis, ac volutpat augue 
  tincidunt. Morbi interdum facilisis risus et aliquet. Duis sit amet nisi sit 
  amet eros vestibulum lacinia. Curabitur auctor sagittis nunc, non tincidunt 
  eros fermentum quis. Curabitur sit amet turpis sem. Curabitur in lectus eu 
  velit porttitor ultrices. Aliquam erat volutpat. Vestibulum venenatis sed 
  odio vitae mollis. Duis scelerisque faucibus nisi id mattis. Mauris ut dolor 
  sit amet mauris accumsan placerat eu eu turpis. Fusce eget vehicula arcu, 
  eget aliquam dui. Nullam convallis, massa at vestibulum posuere, purus lectus 
  ultrices libero, sed volutpat risus risus a mi. Aenean euismod eget nisl nec 
  volutpat. Aenean eu velit in lectus laoreet facilisis et in ligula. Morbi 
  auctor tortor a ipsum condimentum, sit amet congue nunc ultrices.
`;

export default function OurPlans() {
  const location = useLocation();
  const { title, imageSrc } = (location.state || {}) as LocationState;

  return (
    <div>
      <Header />
      <BranchesWrapper>
        <Title>{title || "Nossos Planos"}</Title>
        {/* <LargeImage src={imageSrc || ""} alt={title || "Imagem"} /> */}
        <TextContent>{defaultTextContent}</TextContent>
      </BranchesWrapper>
      <Footer />
    </div>
  );
}
