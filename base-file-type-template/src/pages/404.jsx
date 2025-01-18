import React from "react";
import SEO from "../common/seo";
import ErrorPage from "../components/error";
import WrapperTwo from "../layout/wrapper";

const Error = () => {
  return (
    <WrapperTwo>
      <SEO pageTitle={"Page Not Found"} />
      <ErrorPage />
    </WrapperTwo>
  );
};

export default Error;
