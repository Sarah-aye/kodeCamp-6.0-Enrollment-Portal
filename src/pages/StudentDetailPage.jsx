import React from "react";
import { Link, useParams } from "react-router-dom";
import StudentCard from "../components/StudentCard";
// import { Link } from "react-router-dom";

const StudentDetailPage = ({ students }) => {
  const { id } = useParams();

  const student = students.find((student) => student.id === id);

  if (!student) {
    return (
      <div className="container">
        <Link to="*" className="link">
          <h3>Student Not Found</h3>
        </Link>
        <Link to="/">&larr; Back</Link>
      </div>
    );
  }
  return (
    <div className="container">
      <StudentCard student={student} />
      <Link to="/">&larr; Back</Link>
    </div>
  );
};

export default StudentDetailPage;
