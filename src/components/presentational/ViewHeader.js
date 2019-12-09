import styled from "styled-components";
import React from "react";

import NavigationLink from "../presentational/NavigationLink";
import ViewTitle from "./ViewTitle";

const ViewHeaderContainer = styled.div`
  box-sizing: border-box;
  align-items: center;
  display: flex;
  height: auto;
  padding: 2em;
  width: 100%;
`;

const ViewHeaderNav = styled.nav`
  width: 100%;
`;

const ViewHeader = ({ title, hasNav }) => (
  <ViewHeaderContainer>
    <ViewTitle>{title}</ViewTitle>
    {hasNav && (
      <ViewHeaderNav>
        <NavigationLink> Return </NavigationLink>
      </ViewHeaderNav>
    )}
  </ViewHeaderContainer>
);

export default ViewHeader;
