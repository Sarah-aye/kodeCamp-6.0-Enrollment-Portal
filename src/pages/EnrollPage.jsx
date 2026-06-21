import React from "react";
import EnrollForm from "../components/EnrollForm";

const EnrollPage = ({ tracks, onEnroll, title = "" }) => {
  return (
    <div>
      <EnrollForm
        tracks={tracks}
        onEnroll={onEnroll}
        title="Enroll New Student"
      />
    </div>
  );
};

export default EnrollPage;
