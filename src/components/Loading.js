import React from "react";
import Spinner from "react-spinner-material";

const Loading = ({ appState }) => (
  <div className="loading-wrapper">
    {appState === "loading" ? (
      <Spinner
        size={120}
        spinnerColor={"#F7BB41"}
        spinnerWidth={5}
        visible={true}
      />
    ) : (
      <div className="error-message">Something went wrong</div>
    )}
  </div>
);

export default Loading;
