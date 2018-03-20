import React from "react";
import PropTypes from "prop-types";

import FallbackComponent from "./FallbackComponent";

const ShowError = ({ message }) => (
  <FallbackComponent message={message}>
    {(theme, message) => (
      <div className={theme.error}>
        <h1>{message}</h1>
        <h2>Verify your connection or try again later</h2>
      </div>
    )}
  </FallbackComponent>
);

ShowError.propTypes = {
  message: PropTypes.string
};

export default ShowError;
