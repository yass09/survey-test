import styled from "styled-components";
import React from "react";

import NavigationLink from "./NavigationLink";
import { SurveyItemElement, SurveyItemElementText } from "./SurveyItemElements";

const Item = styled.li`
  margin: 0.7em 0 0 0;
  width: 100%;
`;

const SurveyLink = styled(NavigationLink)`
  align-items: center;
  border: 0.05em solid black;
  border-radius: 0.15em;
  display: flex;
  justify-content: space-around;
  padding: 0.5em;
  width: 100%;
`;

const SurveyItem = ({ survey }) => {
  const { name, code } = survey;
  return (
    <Item>
      <SurveyLink to={`/survey/${name}`}>
        <SurveyItemElement>
          <SurveyItemElementText>{name}</SurveyItemElementText>
        </SurveyItemElement>
        <SurveyItemElement>
          <SurveyItemElementText>{code}</SurveyItemElementText>
        </SurveyItemElement>
      </SurveyLink>
    </Item>
  );
};

export default SurveyItem;
