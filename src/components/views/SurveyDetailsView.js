import React from "react";

import ViewHeader from "../presentational/ViewHeader";
import ViewContentWrapper from "../presentational/ViewContentWrapper";
import ViewSection from "../presentational/ViewSection";

const SurveyDetailsView = () => {
  return (
    <ViewSection>
      <ViewHeader title={"Product List"} />
      <ViewContentWrapper></ViewContentWrapper>
    </ViewSection>
  );
};

export default SurveyDetailsView;
