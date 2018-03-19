import React from "react";

import FallbackComponent from "./FallbackComponent";

const NoBook = () => (
  <FallbackComponent
    className="fallback-book"
    message="Verify if you're logged in"
  >
    {() => <h1>No book to show!</h1>}
  </FallbackComponent>
);

export default NoBook;
