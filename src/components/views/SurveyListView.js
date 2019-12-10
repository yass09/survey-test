import React, { useState, useEffect } from "react";
import { getData } from "../../helpers";
import { LIST_URL } from "../../constants";

import SurveyList from "../presentational/SurveyList";
import ViewHeader from "../presentational/ViewHeader";
import ViewContentWrapper from "../presentational/ViewContentWrapper";
import ViewSection from "../presentational/ViewSection";

const SurveyListView = () => {
  const [surveys, setSurveys] = useState([]);
  useEffect(() => {
    const getSurveys = async () => {
      await getData(LIST_URL)
        .then(data => setSurveys(data))
        .catch(e => console.log(e));
    };
    getSurveys();
  }, []);
  return (
    <ViewSection>
      <ViewHeader title={"City List"} />
      <ViewContentWrapper>
        {surveys && <SurveyList surveys={surveys} />}
      </ViewContentWrapper>
    </ViewSection>
  );
};

export default SurveyListView;
