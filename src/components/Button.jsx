import React from "react";

const Button = ({ title, onClick, className = "" }) => {
  return (
    <div>
      <button className={className} onClick={onClick}>
        {title}
      </button>
    </div>
  );
};

export default Button;
