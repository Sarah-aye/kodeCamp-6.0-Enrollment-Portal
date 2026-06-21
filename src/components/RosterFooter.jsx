import React from "react";
import ClassButton from "./ClassButton";

const RosterFooter = ({ students, onclick }) => {
  return (
    <>
      <br />
      <div>
        <footer>{`End of Roster - ${students.length} total`}</footer>
        <br />
        <ClassButton title="Refresh" onclick={onclick} />
      </div>
    </>
  );
};

export default RosterFooter;
