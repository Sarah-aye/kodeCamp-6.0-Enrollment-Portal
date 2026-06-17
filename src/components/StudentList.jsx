import React, { Children } from "react";
import StudentCard from "./StudentCard";

const StudentList = ({ students, title = "All Students", children }) => {
  return (
    <div className="">
      <h3>{title}</h3>
      {students.length > 0
        ? students.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))
        : "No Students to display yet"}
      {children}
    </div>
  );
};

export default StudentList;
