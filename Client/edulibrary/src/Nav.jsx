import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBookOpen } from "react-icons/fa";

const Nav = ({ name }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/", { replace: true });
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <div className="navbar-logo-icon">
          <FaBookOpen />
        </div>
        Edu Library
      </div>
      <div className="navbar-right">
        {name && <span className="navbar-name">{name}</span>}
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Nav;