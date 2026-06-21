import React from "react";
import Navbar from "./Navbar";

const Header = (props) => {
  return (
    <div className="container flex">
      <div>
        <header>
          <h1>KodeCamp 6.0 - Enrollment Portal</h1>
          <div>
            {`${props.students.length} Students enrolled | Class Average: ${props.averageScore}%`}{" "}
          </div>
        </header>
      </div>
      <div className="flex">
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
