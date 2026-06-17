import React from "react";

const StudentCard = ({ student }) => {
  const { firstName, lastName, avatar, track, email, score, isActive } =
    student;

  const getGrade = (score) => {
    return score >= 90 && score <= 100
      ? "A"
      : score >= 80
        ? "B"
        : score >= 70
          ? "C"
          : score >= 60
            ? "D"
            : score >= 0
              ? "F"
              : "Invalid Score";
  };
  return (
    <div>
      <div>
        <img src={avatar} alt="student profile" />
        <h3>{`${firstName} ${lastName}`}</h3>
      </div>
      <div>
        <h3>{`${track} - ${email}`}</h3>
      </div>
      <div>
        <h3>{`Score: ${score} (Grade: ${getGrade(score)}) ${isActive ? "Active" : "InActive"}`}</h3>
      </div>
    </div>
  );
};

export default StudentCard;
