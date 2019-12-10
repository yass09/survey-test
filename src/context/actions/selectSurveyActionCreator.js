import { SELECT_SURVEY } from "./actiontypes";

const selectSurvey = survey => ({
  type: SELECT_SURVEY,
  survey
});

export default selectSurvey;
