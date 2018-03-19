import React from "react";
import PropTypes from "prop-types";

const FallbackComponent = ({ message, className, children }) => (
  <div className={`fallback-component ${className}`}>
    {children && children()}
    {message && <h2>{message}</h2>}
  </div>
);

FallbackComponent.propTypes = {
  message: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.func
};

FallbackComponent.defaultProps = {
  message: "Something went wrong ¯\\_(ツ)_/¯"
};

export default FallbackComponent;
