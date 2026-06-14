import React from "react";

const Button = ({ title, onclick, className = "" }) => {
  return (
    <div>
      <button className={className} onClick={onclick}>
        {title}
      </button>
    </div>
  );
};

export default Button;
