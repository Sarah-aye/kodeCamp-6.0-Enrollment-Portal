import React from "react";

const StatusMessage = ({ type = "loading" | "error" }) => {
  return (
    <div>
      {
        (type = "loading" ? (
          <h2>Loading students...</h2>
        ) : (
          <h2>Error loading students</h2>
        ))
      }
    </div>
  );
};

export default StatusMessage;
