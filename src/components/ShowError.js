import React from "react";
import PropTypes from "prop-types";

import FallbackComponent from "./FallbackComponent";

const ShowError = ({ message }) => (
  <FallbackComponent className="error-message" message={message}>
    {() => <h1>Verify your connection or try again later</h1>}
  </FallbackComponent>
);

ShowError.propTypes = {
  message: PropTypes.string
};

ShowError.defaultProps = {
  message: "Something went wrong ¯\\_(ツ)_/¯"
};

export default ShowError;
