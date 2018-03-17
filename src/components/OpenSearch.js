import React from "react";

const OpenSearch = ({ onClick }) => (
  <div className="open-search">
    <a onClick={() => onClick()}>Add a book</a>
  </div>
);

export default OpenSearch;
