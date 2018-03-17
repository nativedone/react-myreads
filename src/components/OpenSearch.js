import React from "react";
import { Link } from "react-router-dom";

const OpenSearch = ({ onClick }) => (
  <Link to="/search">
    <div className="open-search">Add a book</div>
  </Link>
);

export default OpenSearch;
