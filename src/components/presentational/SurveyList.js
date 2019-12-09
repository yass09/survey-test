import styled from "styled-components";
import React from "react";

import SurveyItem from "./SurveyItem";
import { SurveyItemElement, SurveyItemElementText } from "./SurveyItemElements";

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  font-size: 2em;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
`;

const Header = styled.div`
  align-items: center;
  background-color: lightgray;
  border: 0.05em solid black;
  border-radius: 0.15em;
  display: flex;
  font-size: 2em;
  justify-content: space-around;
  padding: 0.5em 0;
  width: 100%;
`;

const SurveyList = ({ surveys }) => (
  <ListContainer>
    <Header>
      <SurveyItemElement>
        <SurveyItemElementText>Name</SurveyItemElementText>
      </SurveyItemElement>
      <SurveyItemElement>
        <SurveyItemElementText>Code</SurveyItemElementText>
      </SurveyItemElement>
    </Header>
    <List>
      {surveys.map(survey => (
        <SurveyItem key={survey.code} survey={survey} />
      ))}
    </List>
  </ListContainer>
);

export default SurveyList;
