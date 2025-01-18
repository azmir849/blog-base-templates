import React from "react";
import ChooseArea from "../../common/choose-area";

const About = ({ pageTitle, settingData }) => {
  return (
    <ChooseArea
      style_about={true}
      pageTitle={pageTitle}
      settingData={settingData}
    />
  );
};

export default About;
