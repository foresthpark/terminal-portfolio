import React from "react";
import { StyledBorderContainer, StyledMainContainer } from "./styles";

interface Props {
  children: React.ReactNode;
  onClick: () => void;
}

export default function Layout({ children, onClick }: Props) {
  return (
    <StyledMainContainer onClick={onClick}>
      <StyledBorderContainer>{children}</StyledBorderContainer>
    </StyledMainContainer>
  );
}
