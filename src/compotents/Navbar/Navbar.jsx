import React from "react";
import cl from "./Navbar.module.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className={cl.Navbar}>
      <div className={cl.Links}>
        <Link to="/" className={cl.Link}>
          Home
        </Link>
        <Link to="/resume" className={cl.Link}>
        Resume
        </Link>
        <Link to="/portfolio" className={cl.Link}>
          Portfolio
        </Link>
      </div>
    </nav>
  );
}
