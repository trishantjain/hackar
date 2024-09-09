import React from 'react';
import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import './Navbar.css'

const Navbar = ({ userData }) => { 

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          {/* Add a logo image if needed */}
          {/* <img src={mg} alt="Logo" /> */}
        </Link>
        <Link to="/" className="logo-text">
          EvaluTeach
        </Link>
      </div> {/* Close navbar-logo div properly */}

      <div className="navbar-actions">
        {userData?.accountType === "Student" ? (
          <></>  // If the user is a student, no action is taken here
        ) : userData?.accountType === "Admin" ? (
          <Link to="/admin" className="navbar-link">
            <CgProfile className="icon-Img" /> Admin Dashboard
          </Link>
        ) : (
          <>
            <Link to="/login" className="login-signup-button">
              Login
            </Link>
            <Link to="/signup" className="signup-link">
              Signup
            </Link>
          </>
        )}
      </div> {/* Ensure navbar-actions div is inside the nav */}
    </nav>
  );
};

export default Navbar;
