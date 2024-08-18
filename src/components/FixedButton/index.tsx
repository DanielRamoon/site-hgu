import React from "react";
import { Button } from "./styles";
import buttonImage from "../../assets/bt-faleconosco.fw.png"; // ajuste o caminho conforme necessário

interface FixedButtonProps {
  onClick: () => void;
}

const FixedButton: React.FC<FixedButtonProps> = ({ onClick }) => {
  return <Button src={buttonImage} onClick={onClick} alt="Fixed Button" />;
};

export default FixedButton;
