import React from "react";
import { useNavigate } from "react-router-dom";

const StudentCard = ({ student }) => {
  const navigate = useNavigate();
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
    <div className="card" onClick={() => navigate(`/students/${student.id}`)}>
      <div>
        <img src={avatar} alt="student profile" className="avatar" />
        <p>{`${firstName} ${lastName}`}</p>
      </div>
      <div>
        <p>{`${track} - ${email}`}</p>
      </div>
      <div>
        <p>{`Score: ${score} (Grade: ${getGrade(score)}) - ${isActive ? "Active" : "InActive"}`}</p>
      </div>
    </div>
  );
};

export default StudentCard;
