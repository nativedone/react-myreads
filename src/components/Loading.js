import React from "react";
import Spinner from "react-spinner-material";

import ShowError from "./ShowError";

const Loading = ({ appStatus }) => (
  <div className="loading-wrapper">
    {appStatus.value === "loading" ? (
      <Spinner
        size={120}
        spinnerColor={"#F7BB41"}
        spinnerWidth={5}
        visible={true}
      />
    ) : (
      <ShowError message={appStatus.message} />
    )}
  </div>
);

export default Loading;
