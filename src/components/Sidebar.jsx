import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faCog,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sideBar text-center">
      <div className="logo-container text-center mb-4">
        <img src="/blacklogo.svg" alt="Logo" className="sidebar-logo" />
      </div>
      <ul className="sidebar-list">
        <li className="sidebar-item">
          <FontAwesomeIcon icon={faHome} className="sidebar-icon" />
          <span className="sidebar-text">Home</span>
        </li>
        <li className="sidebar-item">
          <FontAwesomeIcon icon={faUser} className="sidebar-icon" />
          <span className="sidebar-text">Profile</span>
        </li>
        <li className="sidebar-item">
          <FontAwesomeIcon icon={faCog} className="sidebar-icon" />
          <span className="sidebar-text">Settings</span>
        </li>
        <li className="sidebar-item">
          <FontAwesomeIcon icon={faSignOutAlt} className="sidebar-icon" />
          <span className="sidebar-text">Logout</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
