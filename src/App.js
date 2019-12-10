import React, { useReducer } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import * as routes from "./routes";
import selectSurveyReducer from "./context/selectSurveyReducer";

import Header from "./components/presentational/Header";
import MainWrapper from "./components/presentational/MainWrapper";
import AppWrapper from "./components/presentational/AppWrapper";
import SurveyListView from "./components/views/SurveyListView";
import SurveyDetailsView from "./components/views/SurveyDetailsView";
import SurveysContext from "./context/SurveysContext";

const App = () => {
  const [state, dispatch] = useReducer(selectSurveyReducer, {});
  return (
    <SurveysContext.Provider value={{ state, dispatch }}>
      <Router>
        <AppWrapper>
          <Header />
          <MainWrapper>
            <Switch>
              <Route
                path={routes.SURVEYLIST}
                exact
                component={SurveyListView}
              />
              <Route
                path={routes.SURVEYDETAILS}
                exact
                component={SurveyDetailsView}
              />
            </Switch>
          </MainWrapper>
        </AppWrapper>
      </Router>
    </SurveysContext.Provider>
  );
};

export default App;
