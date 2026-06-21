import React from "react";
import "../App.css";
import Header from "../components/Header";

import axios from "axios";
import StatusMessage from "../components/StatusMessage";
import EnrollForm from "../components/EnrollForm";
import StudentList from "../components/StudentList";
import ClassButton from "../components/ClassButton";
import RosterFooter from "../components/RosterFooter";

const HomePage = ({
  students,
  title,
  tracks,
  onEnroll,
  type,
  onclick,
  loading,
  error,
}) => {
  return (
    <div>
      {/* <Header students={students} averageScore={averageScore} />
      <br /> */}
      <EnrollForm
        tracks={tracks}
        onEnroll={onEnroll}
        title="Enroll New Student"
      />
      <br />
      {loading && <StatusMessage type="loading" />}
      {error && <StatusMessage type="error" />}

      <StudentList students={students} title="Student Roster">
        <RosterFooter onclick={onclick} />
      </StudentList>

      <br />
    </div>
  );
};

export default HomePage;
