import { Link } from "react-router-dom";
import { useState } from "react";
import "../style/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
      </div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <Link className="link" to="/courses/all">
            All
          </Link>
        </li>
        <li>
          <Link className="link" to="/courses/fsd">
            Full Stack Development
          </Link>
        </li>
        <li>
          <Link className="link" to="/courses/data-science">
            Data Science
          </Link>
        </li>
        <li>
          <Link className="link" to="/courses/cyber-security">
            Cyber Security
          </Link>
        </li>
        <li>
          <Link className="link" to="/courses/careers">
            Career
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;