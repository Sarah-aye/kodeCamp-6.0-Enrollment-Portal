import React, { Children } from "react";
import StudentCard from "./StudentCard";
import { useSearchParams } from "react-router-dom";

const StudentList = ({ students, title = "All Students", children }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const trackFilter = searchParams.get("track");

  const filteredStudents = trackFilter
    ? students.filter((stu) => stu.track === trackFilter)
    : students;
  return (
    <div className="form container">
      <div className="flex">
        <div>
          <h3>{title}</h3>
        </div>
        <div className="flex">
          <button onClick={() => setSearchParams({ track: "Frontend" })}>
            Frontend
          </button>

          <button onClick={() => setSearchParams({})}>All</button>
        </div>
      </div>
      {filteredStudents.length > 0 ? (
        <div className="student-list">
          {filteredStudents.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      ) : (
        "No Students to display yet"
      )}
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, {
              students: filteredStudents,
            })
          : child,
      )}
    </div>
  );
};

export default StudentList;
