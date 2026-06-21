import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex">
      <div>
        <button>
          <NavLink
            to="/"
            className={`${({ isActive }) => (isActive ? "active" : "")}  nav-link`}
          >
            Home
          </NavLink>
        </button>
      </div>
      <div>
        <button>
          <NavLink
            to="/enroll"
            className={`${({ isActive }) => (isActive ? "active" : "")} nav-link`}
          >
            Enroll
          </NavLink>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
