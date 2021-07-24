import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import logo from '../../assets/logo.png';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-light">
      <Link className="navbar-brand" to="/">
        <img src={logo} alt="Logo"></img>

      </Link>
      <div>
        
        <ul className="navbar-nav">
          
          <li className="nav-item">
            <Link
              to="/"
              className={window.location.pathname === "/" || window.location.pathname === "/home"
                  ? "nav-link active"
                  : "nav-link"}>Home</Link>
          </li>


          <li className="nav-item">
            <Link
              to="/mealplan"
              className={window.location.pathname === "/mealplan" 
              ? "nav-link active" 
              : "nav-link"}>Meal Plan</Link>
          </li>

          <li className="nav-item">
            <Link
              to="/signup"
              className={window.location.pathname === "/signup" ? "nav-link active" : "nav-link"}
            >Sign Up</Link>
          </li>


        </ul>
      </div>
    </nav >
  );
}

export default Navbar;
