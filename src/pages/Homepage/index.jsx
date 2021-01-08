import React from "react";
import styled from "styled-components";

import Directory from "../../components/Directory";

const StyledMainSection = styled.section`
  height: calc(100vh - 6.5rem);
`;

export default function Homepage(props) {
  return (
    <StyledMainSection>
      <Directory />
    </StyledMainSection>
  );
}
