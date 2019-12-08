import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import * as routes from "./routes";

import Header from "./components/presentational/Header";
import MainWrapper from "./components/presentational/MainWrapper";
import AppWrapper from "./components/presentational/AppWrapper";
import SurveyListView from "./components/views/SurveyListView";
import SurveyDetailsView from "./components/views/SurveyDetailsView";

const App = () => (
  <Router>
    <AppWrapper>
      <Header />
      <MainWrapper>
        <Switch>
          <Route path={routes.SURVEYLIST} exact component={SurveyListView} />
          <Route
            path={routes.SURVEYDETAILS}
            exact
            component={SurveyDetailsView}
          />
        </Switch>
      </MainWrapper>
    </AppWrapper>
  </Router>
);

export default App;
