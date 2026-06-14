import React from "react";

const Header = (props) => {
  return (
    <div>
      <header>
        <h1 className="header">KodeCamp 6.0 - Enrollment Portal</h1>
        <div>
          {`${props.students.length} Students enrolled | Class Average: ${props.averageScore}%`}{" "}
        </div>
      </header>
    </div>
  );
};

export default Header;
