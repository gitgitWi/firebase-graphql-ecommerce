import React from "react";
import styled from "styled-components";

import Logo from "../../assets/corn.svg";

const StyledHeader = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 1);
`;

const StyledLogoWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding-left: 7rem;
  width: 100%;
  max-width: 1450px;
  height: 6.5rem;
`;

const StyledLogo = styled.img.attrs({
  src: Logo,
  alt: "Logo"
})`
  position: absolute;
  height: 5.5rem;
  left: 10px;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  transform: translateY(-50%);
  cursor: pointer;
`;

export default function Header(props) {
  return (
    <StyledHeader>
      <StyledLogoWrapper>
        <StyledLogo />
        Wiii-Commerce
      </StyledLogoWrapper>
    </StyledHeader>
  );
}
