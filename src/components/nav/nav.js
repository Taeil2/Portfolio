import React from 'react';
import { NavLink } from "react-router-dom";
import './nav.scss';

function Nav() {
  return (
    <nav>
      <div className="nav1">
        <NavLink to='/' exact>
          <i className="fas fa-home"></i>
          <div>Home</div>
        </NavLink>
        <NavLink to="/work" >
          <i className="fas fa-desktop"></i>
          <div>Work</div>
        </NavLink>
        <NavLink to="/skills" >
          <i className="fas fa-code"></i>
          <div>Skills</div>
        </NavLink>

        <NavLink to="about" >
          <i className="fas fa-user-circle"></i>
          <div>About</div>
        </NavLink>
      </div>
      <div className="nav2">
        <NavLink to="/contact" >
          <i className="fas fa-envelope"></i>
          <div>Contact</div>
        </NavLink>
        <a href="https://www.linkedin.com/in/taeil2" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
          <div>LinkedIn</div>
          <i className="fas fa-external-link-alt"></i>
        </a>
        <a href="https://www.github.com/taeil2" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
          <div>Github</div>
          <i className="fas fa-external-link-alt"></i>
        </a>
      </div>
    </nav>
  );
}

export default Nav;
