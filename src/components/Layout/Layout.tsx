import React from "react";
import { StyledBorderContainer, StyledMainContainer } from "./styles";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <StyledMainContainer>
      <StyledBorderContainer>{children}</StyledBorderContainer>
    </StyledMainContainer>
  );
}
