import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledWrapper = styled.div`
  height: 100%;
`;

const StyledItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  float: left;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${({ imgUrl }) => imgUrl});
`;

const StyledItemLink = styled(Link)`
  padding: 15px 20px;
  z-index: 2;
  background-color: rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.6);
  text-decoration: none;
  color: black;
  font-size: 2rem;
  line-height: 1;
`;

export default function Directory(props) {
  return (
    <StyledWrapper>
      <StyledItem imgUrl="https://i.imgur.com/xoIXXG0.gif">
        <StyledItemLink to="#">Shop Men</StyledItemLink>
      </StyledItem>
      <StyledItem imgUrl="https://media.giphy.com/media/ZCKh7knqLpc4M/giphy.gif">
        <StyledItemLink to="#">Shop Women</StyledItemLink>
      </StyledItem>
    </StyledWrapper>
  );
}
