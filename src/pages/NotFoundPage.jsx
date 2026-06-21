import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="container">
      <h3>Page Not Found</h3>
      <Link to="/">&larr; Back</Link>
    </div>
  );
};

export default NotFoundPage;
