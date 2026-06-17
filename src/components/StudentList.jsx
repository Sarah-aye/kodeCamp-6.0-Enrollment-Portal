import React, { Children } from "react";
import StudentCard from "./StudentCard";

const StudentList = ({ students, title = "All Students", children }) => {
  return (
    <div className="form container">
      <h3>{title}</h3>
      {students.length > 0 ? (
        <div className="student-list">
          {students.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      ) : (
        "No Students to display yet"
      )}
      {children}
    </div>
  );
};

export default StudentList;
