import React, { useState, useEffect, useContext } from "react";
import { getData } from "../../helpers";
import { getDetailsUrl } from "../../constants";
import SurveysContext from "../../context/SurveysContext";

import ViewHeader from "../presentational/ViewHeader";
import ViewContentWrapper from "../presentational/ViewContentWrapper";
import ViewSection from "../presentational/ViewSection";

const SurveyDetailsView = props => {
  const { state: { selectedSurvey: { code, name } = {} } = {} } = useContext(
    SurveysContext
  );
  const [surveyDetails, setSurveyDetails] = useState([]);
  const {
    match: { params: { code: codeParam, name: nameParam } = {} } = {}
  } = props;
  const cityCode = code || codeParam;
  const cityName = name || nameParam;

  const sortDates = (a, b) => new Date(a) - new Date(b);

  const detailsUrl = getDetailsUrl(cityCode);
  useEffect(() => {
    const formatData = data => {
      if (data.type === "qcm") {
        let arrayObject = [];
        const object = data.result;
        for (let prop in object) {
          const objectItem = {
            productName: prop,
            number: object[prop]
          };
          arrayObject.push(objectItem);
        }
        return {
          ...data,
          result: arrayObject
        };
      }
      if (data.type === "numeric") {
        return {
          ...data,
          result: Math.ceil(data.result)
        };
      }
      if (data.type === "date") {
        return {
          ...data,
          result: data.result.sort(sortDates)
        };
      }
    };
    const getSurveyDetails = async () => {
      await getData(detailsUrl)
        .then(response => {
          const formatedData = response.map(formatData);
          setSurveyDetails(formatedData);
        })
        .catch(e => console.log(e));
    };
    getSurveyDetails();
  }, [detailsUrl]);

  return (
    <ViewSection>
      <ViewHeader title={cityName} />
      <ViewContentWrapper></ViewContentWrapper>
    </ViewSection>
  );
};

export default SurveyDetailsView;
