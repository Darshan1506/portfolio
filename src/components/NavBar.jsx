import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaYoutube } from "react-icons/fa";
import myLogo from "../assets/darshan.jpg";
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeSidebar = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link exact to="/" className="nav-logo">
            <img src={myLogo} alt="My Logo" className="myImage" />
            <i className="fas fa-code"></i>
          </Link>

          <div className="nav-icon" onClick={handleClick}>
            {click ? <FaTimes onClick={closeSidebar} /> : <FaBars />}
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                exact
                to="https://www.linkedin.com/in/darshan-rajpurohit-b9a0b01b7/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                <FaLinkedin />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="https://github.com/Darshan1506"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                <FaGithub />
              </Link>
            </li>
            <li className="nav-item">
              <a
                href="mailto:darshanrajpurohit47@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-links"
                onClick={handleClick}
              >
                <FaEnvelope />
              </a>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="https://twitter.com/daarrsshhaannnn"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                <FaTwitter />
              </Link>
            </li>
            
            <li className="nav-item">
              <a
                href="https://www.youtube.com/channel/UC_zJvd1TVZnO1xTXODd8b4w"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-links"
                onClick={handleClick}
              >
                <FaYoutube />
              </a>
            </li>
            {/* Add the download button here */}
            <li className="nav-item">
              <a
                href="https://drive.google.com/file/d/1w060TBjaaJdSc5ZUONbdpMbHXIJtMIsQ/view?usp=sharing" // Replace with the actual path to your resume file
                download
                className="nav-links nav-resume-button"
                onClick={handleClick}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
