import React from "react";
import styles from "./Navbar.module.css"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-100 sticky-top">
      <div id={styles.navClass} className="d-flex justify-content-center p-2 shadow border">
        <div className="me-auto text-dark fs-3 my-auto ms-3 font-monospace">Renato Galizzi</div>
        <div className="d-flex justify-content-center mt-3">
            <ul className="d-flex gap-3 list-unstyled me-5">
                <Link to="/">
                <li className=""><a href="#AboutMe" className="text-dark link-danger">AboutMe</a></li>
                </Link>
                <Link to="/skills">
                <li><a href="#Skills" className="text-dark link-danger">Skills</a></li>
                </Link>
                <Link to="/projects">
                <li><a href="#Proyects" className="text-dark link-danger">Projects</a></li>
                </Link>
                <Link to="/contact">
                <li><a href="#Contact" className="text-dark link-danger">Contact</a></li>
                </Link>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
