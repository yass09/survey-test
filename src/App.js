import React from "react";

import Header from "./components/presentational/Header";
import MainWrapper from "./components/presentational/MainWrapper";
import AppWrapper from "./components/presentational/AppWrapper";

const App = () => (
  <AppWrapper className="App">
    <Header />
    <MainWrapper />
  </AppWrapper>
);

export default App;
