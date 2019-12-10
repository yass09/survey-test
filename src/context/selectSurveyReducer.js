const selectSurveyReducer = (state = {}, action) => {
  switch (action.type) {
    case "SELECT_SURVEY":
      return { ...state, selectedSurvey: action.survey };
    default:
      return state;
  }
};

export default selectSurveyReducer;
