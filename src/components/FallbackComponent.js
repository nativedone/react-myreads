import React, { Fragment } from "react";
import PropTypes from "prop-types";

const CSS_THEME = {
  error: "message-error",
  light: "message-light"
};

const FallbackComponent = ({ message, children }) => (
  <Fragment>{children && children(CSS_THEME, message)}</Fragment>
);

FallbackComponent.propTypes = {
  message: PropTypes.string,
  children: PropTypes.func.isRequired
};

FallbackComponent.defaultProps = {
  message: "Something went wrong ¯\\_(ツ)_/¯"
};

export default FallbackComponent;
