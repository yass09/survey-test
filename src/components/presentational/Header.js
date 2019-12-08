import styled from "styled-components";
import React from "react";

const HeaderContainer = styled.header`
  background-color: lightgray;
  box-sizing: border-box;
  color: white;
  height: 14vh;
  padding: 3em 2em 0 2em;
  width: 100%;

  @media (max-width: 815px) {
    padding: 2em 1.5em 0 1.5em;
  }
  @media (max-width: 375px) {
    padding: 2.5em 1em 0 1em;
    height: 12vh;
  }
`;

const HeaderTitle = styled.h1`
  font-family: "Open Sans";
  font-size: 6vh;
  margin: 0;
  display: inline-block;
  @media (max-width: 815px) {
    font-size: 5vh;
  }
  @media (max-width: 375px) {
    font-size: 5vh;
  }
`;

const Header = () => (
  <HeaderContainer>
    <HeaderTitle>Surveys</HeaderTitle>
  </HeaderContainer>
);

export default Header;
